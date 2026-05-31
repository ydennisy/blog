import type { Metadata } from 'next';

export const siteUrl = new URL('https://dennisy.me');

export const defaultSocialImage = {
  url: '/avatar.webp',
  width: 1024,
  height: 1024,
  alt: 'Dennis Yurkevich',
};

type SocialMetadataInput = {
  title: string;
  description: string;
};

export function createSocialMetadata({
  title,
  description,
}: SocialMetadataInput): Pick<Metadata, 'openGraph' | 'twitter'> {
  return {
    openGraph: {
      title,
      description,
      images: [defaultSocialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultSocialImage.url],
    },
  };
}
