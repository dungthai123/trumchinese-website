# Blog Feature Documentation - Trùm Chinese

## Overview

This blog feature provides a complete SEO-optimized blog system for the Trùm Chinese website, powered by WordPress headless CMS. The implementation includes blog listing, individual post pages, search functionality, and comprehensive SEO optimization.

## Features

### ✅ Core Functionality

- **Blog Listing Page** (`/blog`) - Paginated list of blog posts
- **Blog Post Detail Page** (`/blog/[slug]`) - Individual post pages with full content
- **Search Functionality** (`/blog/search`) - Search through blog posts
- **Category Support** - Blog posts organized by categories
- **Responsive Design** - Mobile-first responsive layout

### ✅ SEO Optimization

- **Dynamic Meta Tags** - Title, description, keywords for each post
- **Open Graph Tags** - Social media sharing optimization
- **Twitter Cards** - Twitter sharing optimization
- **Structured Data** - JSON-LD schema markup for search engines
- **Canonical URLs** - Proper canonical URL handling
- **Sitemap Integration** - Automatic sitemap generation for blog posts
- **Breadcrumb Navigation** - SEO-friendly breadcrumbs

### ✅ Performance Features

- **Static Generation** - Pre-generated static pages for better performance
- **Image Optimization** - Next.js Image component with proper sizing
- **Caching** - ISR (Incremental Static Regeneration) with 1-hour revalidation
- **Lazy Loading** - Optimized loading for better performance

## File Structure

```
src/
├── app/
│   └── blog/
│       ├── page.tsx                 # Blog listing page
│       ├── [slug]/
│       │   └── page.tsx            # Individual blog post page
│       └── search/
│           └── page.tsx            # Search results page
├── components/
│   └── Blog/
│       ├── BlogCard.tsx            # Blog post card component
│       ├── BlogHero.tsx            # Blog page hero section
│       ├── BlogSidebar.tsx         # Sidebar with categories and recent posts
│       ├── Pagination.tsx          # Pagination component
│       └── StructuredData.tsx      # SEO structured data component
├── lib/
│   └── wordpress.ts                # WordPress API integration
└── types/
    └── blog.ts                     # TypeScript type definitions
```

## API Integration

### WordPress REST API

- **Base URL**: `https://trumchinese-g7a6edfmb6fqcmea.southeastasia-01.azurewebsites.net/wp-json/wp/v2`
- **Endpoints Used**:
  - `/posts` - Fetch blog posts
  - `/categories` - Fetch post categories
  - `/tags` - Fetch post tags
  - `/users` - Fetch author information
  - `/media` - Fetch featured images

### Data Transformation

The WordPress API responses are transformed into clean TypeScript interfaces:

- `WordPressBlogPost` → `BlogPost`
- Handles featured images, SEO data (Yoast), and content formatting

## SEO Implementation

### 1. Dynamic Metadata

Each blog post generates dynamic metadata including:

```typescript
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  return {
    title: `${post.title} - Trùm Chinese Blog`,
    description: post.excerpt,
    openGraph: { /* ... */ },
    twitter: { /* ... */ },
    alternates: { canonical: /* ... */ }
  };
}
```

### 2. Structured Data

JSON-LD structured data for each blog post:

- BlogPosting schema
- Organization information
- Article metadata
- Image information

### 3. Sitemap Generation

Automatic sitemap generation including:

- Blog listing page
- All individual blog posts
- Proper lastmod dates
- Priority and changefreq settings

## Usage

### Navigation

The blog is accessible through:

- Main navigation: "Blog" link
- Direct URL: `/blog`
- Search: `/blog/search?q=query`

### Content Management

Content is managed through the WordPress admin panel:

1. Create/edit posts in WordPress
2. Set featured images
3. Configure SEO settings (if Yoast is installed)
4. Organize with categories and tags

### Search Functionality

Users can search blog posts through:

- Sidebar search form
- URL parameters: `/blog/search?q=search-term`
- Pagination support for search results

## Performance Considerations

### Caching Strategy

- **ISR**: 1-hour revalidation for blog posts
- **Daily**: Categories, tags, and author data
- **Static Generation**: Popular posts pre-generated

### Image Optimization

- Next.js Image component with proper sizing
- Responsive images with `sizes` attribute
- Lazy loading for better performance

### API Optimization

- Field selection to reduce payload size
- Parallel data fetching where possible
- Error handling and fallbacks

## SEO Best Practices Implemented

1. **Title Optimization**: Dynamic titles with brand suffix
2. **Meta Descriptions**: Extracted from post excerpts
3. **URL Structure**: Clean, SEO-friendly URLs (`/blog/post-slug`)
4. **Internal Linking**: Related posts and category links
5. **Social Sharing**: Facebook, Twitter, and copy link buttons
6. **Mobile Optimization**: Responsive design
7. **Page Speed**: Optimized images and caching
8. **Structured Data**: Rich snippets for search engines

## Future Enhancements

### Potential Improvements

- [ ] Category-specific pages (`/blog/category/[slug]`)
- [ ] Tag-specific pages (`/blog/tag/[slug]`)
- [ ] Related posts suggestions
- [ ] Comment system integration
- [ ] Newsletter signup integration
- [ ] Reading progress indicator
- [ ] Social media auto-posting
- [ ] Advanced search filters

### Analytics Integration

- [ ] Google Analytics 4 events
- [ ] Reading time tracking
- [ ] Popular posts tracking
- [ ] Search query analytics

## Maintenance

### Regular Tasks

1. **Monitor Performance**: Check Core Web Vitals
2. **Update Dependencies**: Keep packages up to date
3. **SEO Monitoring**: Track search rankings
4. **Content Audit**: Review and update old posts

### Troubleshooting

- Check WordPress API connectivity
- Verify image URLs and accessibility
- Monitor error logs for API failures
- Test pagination and search functionality

## Technical Notes

### TypeScript Support

Full TypeScript support with proper type definitions for:

- WordPress API responses
- Component props
- SEO metadata
- Search parameters

### Error Handling

Comprehensive error handling for:

- API failures
- Missing posts (404 pages)
- Image loading errors
- Search query validation

### Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader friendly

## WordPress Headless CMS Integration

This blog system integrates with a WordPress headless CMS to fetch and display blog posts dynamically.

### Instant Updates with Webhooks

To enable instant blog updates when you publish or edit posts in WordPress, you can set up a webhook:

1. **Environment Variable**: Add this to your `.env.local` file:

   ```
   WORDPRESS_WEBHOOK_SECRET=your-strong-secret-key-here
   ```

2. **WordPress Webhook Setup**: In your WordPress admin, install a webhook plugin (like "WP Webhooks" or "WP REST API Webhooks") and configure it to send POST requests to:

   ```
   https://your-domain.com/api/revalidate
   ```

3. **Webhook Configuration**:

   - **URL**: `https://your-domain.com/api/revalidate`
   - **Method**: POST
   - **Headers**:
     - `Authorization: Bearer your-strong-secret-key-here`
     - `Content-Type: application/json`
   - **Triggers**: Post published, Post updated, Post deleted
   - **Payload**: Include `post_id`, `post_slug`, and `action` fields

4. **Test the Webhook**: After setup, publish or edit a post in WordPress. Your Next.js blog should update within seconds.

### Cache Configuration

The blog uses Next.js caching with the following revalidation times:

- **Blog posts**: 5 minutes
- **Categories, tags, authors**: 1 hour
- **Featured images**: 1 hour

You can adjust these times in `src/lib/wordpress.ts` by modifying the `revalidate` values.

### Deployment Options

1. **Server-Side Rendering (Recommended)**: Deploy to Vercel, Netlify, or any Node.js hosting
2. **Static Site Generation**: Use `output: 'export'` in `next.config.js` for static hosting

This blog implementation provides a solid foundation for content marketing and SEO optimization for the Trùm Chinese website.
