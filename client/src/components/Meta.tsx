import React, { useEffect } from 'react';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

/**
 * Meta component for dynamic SEO meta tags
 * Updates document title and meta tags dynamically
 */
export default function Meta({
  title = 'Aditya Singh - Portfolio',
  description = 'Full Stack Developer | B.Tech Computer Science | MERN Stack Enthusiast',
  keywords = 'portfolio, web developer, full stack, MERN, react, node.js',
  ogImage = '/og-image.jpg',
}: MetaProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('theme-color', '#3b82f6');
  }, [title, description, keywords, ogImage]);

  return null; // This component doesn't render anything
}

