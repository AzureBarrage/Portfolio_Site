import { siteConfig } from '../content/site';

const ensureMetaTag = (selector: string, attributes: Record<string, string>): HTMLMetaElement => {
  const existing = document.querySelector<HTMLMetaElement>(selector);
  if (existing) {
    return existing;
  }

  const created = document.createElement('meta');
  Object.entries(attributes).forEach(([key, value]) => created.setAttribute(key, value));
  document.head.appendChild(created);
  return created;
};

const ensureLinkTag = (selector: string, attributes: Record<string, string>): HTMLLinkElement => {
  const existing = document.querySelector<HTMLLinkElement>(selector);
  if (existing) {
    return existing;
  }

  const created = document.createElement('link');
  Object.entries(attributes).forEach(([key, value]) => created.setAttribute(key, value));
  document.head.appendChild(created);
  return created;
};

export const ensureSeoDefaults = () => {
  const metaDescription = ensureMetaTag('meta[name="description"]', {
    name: 'description',
  });
  metaDescription.content = siteConfig.seo.defaultDescription;

  const ogTitle = ensureMetaTag('meta[property="og:title"]', { property: 'og:title' });
  ogTitle.content = siteConfig.seo.defaultTitle;

  const ogDescription = ensureMetaTag('meta[property="og:description"]', {
    property: 'og:description',
  });
  ogDescription.content = siteConfig.seo.defaultDescription;

  const ogType = ensureMetaTag('meta[property="og:type"]', { property: 'og:type' });
  ogType.content = 'website';

  const ogUrl = ensureMetaTag('meta[property="og:url"]', { property: 'og:url' });
  ogUrl.content = `${siteConfig.seo.siteUrl}${window.location.hash || '/#home'}`;

  const ogImage = ensureMetaTag('meta[property="og:image"]', { property: 'og:image' });
  ogImage.content = `${siteConfig.seo.siteUrl}${siteConfig.seo.ogImage}`;

  const twitterCard = ensureMetaTag('meta[name="twitter:card"]', { name: 'twitter:card' });
  twitterCard.content = 'summary_large_image';

  const twitterTitle = ensureMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' });
  twitterTitle.content = siteConfig.seo.defaultTitle;

  const twitterDescription = ensureMetaTag('meta[name="twitter:description"]', {
    name: 'twitter:description',
  });
  twitterDescription.content = siteConfig.seo.defaultDescription;

  const twitterImage = ensureMetaTag('meta[name="twitter:image"]', { name: 'twitter:image' });
  twitterImage.content = `${siteConfig.seo.siteUrl}${siteConfig.seo.ogImage}`;

  const twitterSite = ensureMetaTag('meta[name="twitter:site"]', { name: 'twitter:site' });
  twitterSite.content = siteConfig.seo.twitterHandle;

  const keywords = ensureMetaTag('meta[name="keywords"]', { name: 'keywords' });
  keywords.content = siteConfig.seo.keywords.join(', ');

  const canonical = ensureLinkTag('link[rel="canonical"]', { rel: 'canonical' });
  canonical.href = siteConfig.seo.siteUrl;
};
