import { promises as fs } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  
  if (!slug) {
    throw createError({
      statusCode: 400,
      message: 'Slug is required'
    })
  }
  
  const filePath = join(process.cwd(), 'content/blog', `${slug}.md`)
  
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    
    // Convert markdown to HTML
    const htmlContent = await marked(content)
    
    return {
      _id: slug,
      _path: `/blog/${slug}`,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      tags: data.tags,
      body: {
        type: 'root',
        children: [],
        html: htmlContent
      }
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    throw createError({
      statusCode: 404,
      message: 'Blog post not found'
    })
  }
})
