import fs from 'node:fs';
import path from 'node:path';

const localNotesDirectory = path.join(process.cwd(), 'content', 'notes');
const sharedNotesDirectory = path.resolve(process.cwd(), '..', 'content', 'notes');
const notesDirectory = fs.existsSync(sharedNotesDirectory)
  ? sharedNotesDirectory
  : localNotesDirectory;

export type Note = {
  slug: string;
  path: string;
  title: string;
  description: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  content: string;
};

function noteSlug(fileName: string) {
  return fileName.replace(/\.md$/, '').replace(/^\d+\./, '');
}

function parseScalar(value: string) {
  return value.trim().replace(/^['"]|['"]$/g, '');
}

function parseTags(value: string) {
  return value
    .replace(/^\[/, '')
    .replace(/\]$/, '')
    .split(',')
    .map((tag) => parseScalar(tag))
    .filter(Boolean);
}

function parseFrontmatter(fileContents: string) {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(fileContents);

  if (!match) {
    return { data: new Map<string, string | string[]>(), content: fileContents };
  }

  const data = new Map<string, string | string[]>();
  const lines = match[1].split('\n');

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const keyMatch = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);

    if (!keyMatch) {
      continue;
    }

    const [, key, rawValue] = keyMatch;

    if (rawValue) {
      data.set(key, key === 'tags' ? parseTags(rawValue) : parseScalar(rawValue));
      continue;
    }

    const wrappedValue: string[] = [];
    while (lines[index + 1]?.startsWith('  ')) {
      index += 1;
      wrappedValue.push(lines[index].trim());
    }
    data.set(key, wrappedValue.join(' '));
  }

  return { data, content: match[2] };
}

function dateString(value: unknown) {
  return new Date(value as string | Date).toISOString();
}

function readNote(fileName: string): Note {
  const fullPath = path.join(notesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = parseFrontmatter(fileContents);
  const slug = noteSlug(fileName);
  const tags = data.get('tags');

  return {
    slug,
    path: `/notes/${slug}`,
    title: String(data.get('title') ?? ''),
    description: String(data.get('description') ?? ''),
    tags: Array.isArray(tags) ? tags.map(String) : [],
    publishedAt: dateString(data.get('publishedAt')),
    updatedAt: dateString(data.get('updatedAt')),
    content,
  };
}

export function getAllNotes() {
  return fs
    .readdirSync(notesDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map(readNote)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getRecentNotes(limit = 5) {
  return getAllNotes().slice(0, limit);
}

export function getNoteBySlug(slug: string) {
  return getAllNotes().find((note) => note.slug === slug);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderInline(markdown: string) {
  return escapeHtml(markdown)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])_([^_]+)_/g, '$1<em>$2</em>');
}

export function markdownToHtml(markdown: string) {
  const html: string[] = [];
  const paragraph: string[] = [];
  let inList = false;
  let inFence = false;
  let fenceLanguage = '';
  let codeLines: string[] = [];

  function flushParagraph() {
    if (!paragraph.length) {
      return;
    }
    html.push(`<p>${renderInline(paragraph.join(' '))}</p>`);
    paragraph.length = 0;
  }

  function closeList() {
    if (inList) {
      html.push('</ul>');
      inList = false;
    }
  }

  for (const line of markdown.split('\n')) {
    const fenceMatch = /^```([A-Za-z0-9_-]*)\s*$/.exec(line);
    if (fenceMatch) {
      if (inFence) {
        html.push(
          `<pre><code class="language-${escapeHtml(fenceLanguage)}">${escapeHtml(
            codeLines.join('\n'),
          )}</code></pre>`,
        );
        codeLines = [];
        inFence = false;
        fenceLanguage = '';
      } else {
        flushParagraph();
        closeList();
        inFence = true;
        fenceLanguage = fenceMatch[1] ?? '';
      }
      continue;
    }

    if (inFence) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      closeList();
      continue;
    }

    const headingMatch = /^(#{2,4})\s+(.+)$/.exec(line);
    if (headingMatch) {
      flushParagraph();
      closeList();
      const level = headingMatch[1].length;
      html.push(`<h${level}>${renderInline(headingMatch[2])}</h${level}>`);
      continue;
    }

    const listMatch = /^-\s+(.+)$/.exec(line);
    if (listMatch) {
      flushParagraph();
      if (!inList) {
        html.push('<ul>');
        inList = true;
      }
      html.push(`<li>${renderInline(listMatch[1])}</li>`);
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  closeList();

  return html.join('\n');
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}
