import { WordPressBlogPost, BlogPost, BlogListResponse, BlogCategory, BlogTag, BlogAuthor } from '@/types/blog';

const WORDPRESS_API_URL = 'https://trumchinese-g7a6edfmb6fqcmea.southeastasia-01.azurewebsites.net/wp-json/wp/v2';
const WORDPRESS_BASE_URL = 'https://trumchinese-g7a6edfmb6fqcmea.southeastasia-01.azurewebsites.net';

// Transform WordPress post to our BlogPost interface
function transformWordPressPost(wpPost: WordPressBlogPost): BlogPost {
  // Try to get featured image URL from embedded media first
  let featuredImageUrl: string | undefined;
  
  // Check if _embedded data contains featured media
  if (wpPost._links && (wpPost as any)._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    featuredImageUrl = (wpPost as any)._embedded['wp:featuredmedia'][0].source_url;
  } else if (wpPost.featured_media) {
    // Featured media ID exists but no embedded data - will be fetched separately
  } else {
    // Try to extract first image from content as fallback
    const processedContent = processWordPressContent(wpPost.content.rendered);
    featuredImageUrl = extractFirstImageFromContent(processedContent);
  }

  return {
    id: wpPost.id,
    title: wpPost.title.rendered,
    slug: wpPost.slug,
    content: processWordPressContent(wpPost.content.rendered), // Process content to fix image URLs
    excerpt: processWordPressContent(wpPost.excerpt.rendered), // Process excerpt to fix image URLs
    date: wpPost.date,
    modifiedDate: wpPost.modified,
    author: wpPost.author,
    featuredImage: wpPost.featured_media ? wpPost.featured_media.toString() : undefined,
    featuredImageUrl: featuredImageUrl, // Add direct URL if available or from content
    categories: wpPost.categories,
    tags: wpPost.tags,
    seo: wpPost.yoast_head_json ? {
      title: wpPost.yoast_head_json.title,
      description: wpPost.yoast_head_json.description,
      canonical: wpPost.yoast_head_json.canonical,
      ogImage: wpPost.yoast_head_json.og_image?.[0]?.url,
    } : undefined,
  };
}

// Extract first image from content as fallback featured image
function extractFirstImageFromContent(content: string): string | undefined {
  const imgRegex = /<img[^>]+src="([^">]+)"/i;
  const match = content.match(imgRegex);
  return match ? match[1] : undefined;
}

// Process WordPress content to fix relative image URLs
function processWordPressContent(content: string): string {
  // Convert relative image URLs to absolute URLs
  return content.replace(
    /src="\/wp-content\//g,
    `src="${WORDPRESS_BASE_URL}/wp-content/`
  ).replace(
    /srcset="([^"]*)/g,
    (match, srcset) => {
      // Fix srcset URLs as well
      const fixedSrcset = srcset.replace(
        /\/wp-content\//g,
        `${WORDPRESS_BASE_URL}/wp-content/`
      );
      return `srcset="${fixedSrcset}`;
    }
  );
}

// Fetch all blog posts with pagination
export async function getBlogPosts(page: number = 1, perPage: number = 10): Promise<BlogListResponse> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?page=${page}&per_page=${perPage}&_embed=wp:featuredmedia&_fields=id,date,modified,slug,title,content,excerpt,author,featured_media,categories,tags,yoast_head_json`,
      {
        next: { revalidate: 60 }, // Revalidate every 1 minute for faster updates
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const posts: WordPressBlogPost[] = await response.json();
    const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0');
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0');

    return {
      posts: posts.map(transformWordPressPost),
      totalPosts,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      posts: [],
      totalPosts: 0,
      totalPages: 0,
      currentPage: page,
    };
  }
}

// Fetch a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=wp:featuredmedia&_fields=id,date,modified,slug,title,content,excerpt,author,featured_media,categories,tags,yoast_head_json`,
      {
        next: { revalidate: 60 }, // Revalidate every 1 minute for faster updates
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.statusText}`);
    }

    const posts: WordPressBlogPost[] = await response.json();
    
    if (posts.length === 0) {
      return null;
    }

    return transformWordPressPost(posts[0]);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Fetch featured image URL
export async function getFeaturedImageUrl(mediaId: number): Promise<string | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/media/${mediaId}?_fields=source_url`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour instead of daily
      }
    );

    if (!response.ok) {
      return null;
    }

    const media = await response.json();
    return media.source_url || null;
  } catch (error) {
    console.error('Error fetching featured image:', error);
    return null;
  }
}

// Fetch categories
export async function getCategories(): Promise<BlogCategory[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/categories?_fields=id,name,slug,description,count`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour instead of daily
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Fetch tags
export async function getTags(): Promise<BlogTag[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/tags?_fields=id,name,slug,description,count`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour instead of daily
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch tags: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

// Fetch author information
export async function getAuthor(authorId: number): Promise<BlogAuthor | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/users/${authorId}?_fields=id,name,slug,description,avatar_urls`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour instead of daily
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching author:', error);
    return null;
  }
}

// Get posts by category
export async function getPostsByCategory(categoryId: number, page: number = 1, perPage: number = 10): Promise<BlogListResponse> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?categories=${categoryId}&page=${page}&per_page=${perPage}&_embed=wp:featuredmedia&_fields=id,date,modified,slug,title,content,excerpt,author,featured_media,categories,tags,yoast_head_json`,
      {
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts by category: ${response.statusText}`);
    }

    const posts: WordPressBlogPost[] = await response.json();
    const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0');
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0');

    return {
      posts: posts.map(transformWordPressPost),
      totalPosts,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return {
      posts: [],
      totalPosts: 0,
      totalPages: 0,
      currentPage: page,
    };
  }
}

// Search posts
export async function searchPosts(query: string, page: number = 1, perPage: number = 10): Promise<BlogListResponse> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?search=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}&_embed=wp:featuredmedia&_fields=id,date,modified,slug,title,content,excerpt,author,featured_media,categories,tags,yoast_head_json`,
      {
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to search posts: ${response.statusText}`);
    }

    const posts: WordPressBlogPost[] = await response.json();
    const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0');
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0');

    return {
      posts: posts.map(transformWordPressPost),
      totalPosts,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error('Error searching posts:', error);
    return {
      posts: [],
      totalPosts: 0,
      totalPages: 0,
      currentPage: page,
    };
  }
} 