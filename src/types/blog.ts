export interface WordPressBlogPost {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  acf: any[];
  yoast_head?: string;
  yoast_head_json?: {
    title?: string;
    description?: string;
    robots?: any;
    canonical?: string;
    og_locale?: string;
    og_type?: string;
    og_title?: string;
    og_description?: string;
    og_url?: string;
    og_site_name?: string;
    article_published_time?: string;
    article_modified_time?: string;
    og_image?: any[];
    author?: string;
    twitter_card?: string;
    twitter_creator?: string;
    twitter_site?: string;
    twitter_misc?: any;
    schema?: any;
  };
  _links: any;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  modifiedDate: string;
  author: number;
  featuredImage?: string;
  featuredImageUrl?: string;
  categories: number[];
  tags: number[];
  seo?: {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
  };
}

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface BlogTag {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface BlogAuthor {
  id: number;
  name: string;
  slug: string;
  description: string;
  avatar_urls: {
    [key: string]: string;
  };
}

export interface BlogListResponse {
  posts: BlogPost[];
  totalPosts: number;
  totalPages: number;
  currentPage: number;
} 