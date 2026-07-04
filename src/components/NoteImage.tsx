import type { ComponentProps } from 'react';

type NoteImageProps = ComponentProps<'img'> & { node?: unknown };

export function NoteImage({ src, alt, node, ...rest }: NoteImageProps) {
  if (!src || typeof src !== 'string') {
    return null;
  }

  if (!src.includes('-light.')) {
    return <img src={src} alt={alt ?? ''} {...rest} />;
  }

  const darkSrc = src.replace('-light.', '-dark.');

  return (
    <>
      <img src={src} alt={alt ?? ''} {...rest} className="dark:hidden" />
      <img src={darkSrc} alt={alt ?? ''} {...rest} className="hidden dark:block" />
    </>
  );
}
