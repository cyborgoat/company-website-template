// Centralized content types for blogs, news, demos, etc.

export interface ContentItem {
  slug: string;
  title: string;
  date?: string;
  excerpt?: string;
  image?: string;
  markdownContent?: string;
  [key: string]: any;
}

export interface BlogPostData extends ContentItem {
  readTime?: string;
}

export interface NewsArticleData extends ContentItem {}

export interface DemoData extends ContentItem {
  thumbnail?: string;
  videoUrl?: string;
  order?: number;
}
