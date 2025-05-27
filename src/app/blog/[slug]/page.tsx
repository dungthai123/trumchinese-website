import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPost, getBlogPosts, getCategories, getFeaturedImageUrl, getAuthor, getRelatedPosts } from '@/lib/wordpress';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import StructuredData from '@/components/Blog/StructuredData';
import ShareButtons from '@/components/Blog/ShareButtons';
import RelatedPosts from '@/components/Blog/RelatedPosts';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

interface BlogPostPageProps {
  params: { slug: string };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Bài viết không tìm thấy - Trùm Chinese',
      description: 'Bài viết bạn tìm kiếm không tồn tại.',
    };
  }

  const title = post.seo?.title || post.title;
  const description = post.seo?.description || post.excerpt.replace(/<[^>]*>/g, '').substring(0, 160);
  const canonical = post.seo?.canonical || `https://trumchinese.com/blog/${post.slug}`;
  const ogImage = post.seo?.ogImage || 'https://www.trumchinese.com/images/blog-default.webp';

  return {
    title: `${title} - Trùm Chinese Blog`,
    description,
    keywords: 'học tiếng Trung, blog tiếng Trung, HSK, Trùm Chinese',
    authors: [{ name: 'Trùm Chinese' }],
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modifiedDate,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical,
    },
  };
}

// Generate static params for popular posts (optional)
export async function generateStaticParams() {
  try {
    const { posts } = await getBlogPosts(1, 20); // Generate for first 20 posts
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    return [];
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  // Fetch additional data
  const [categories, { posts: recentPosts }, author, featuredImage, relatedPosts] = await Promise.all([
    getCategories(),
    getBlogPosts(1, 5),
    getAuthor(post.author),
    post.featuredImageUrl ? Promise.resolve(post.featuredImageUrl) : 
      (post.featuredImage ? getFeaturedImageUrl(parseInt(post.featuredImage)) : Promise.resolve(null)),
    getRelatedPosts(post.id, post.categories, post.tags, 4),
  ]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const readingTime = Math.ceil(post.content.split(' ').length / 200); // Estimate reading time
  const postUrl = `https://trumchinese.com/blog/${post.slug}`;

  return (
    <>
      <StructuredData post={post} featuredImage={featuredImage} />
      
      <div className="bg-white">
        <Navbar />
      </div>

      {/* Breadcrumb Section */}
      <div className="bg-gray-100 border-b border-gray-200 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link 
                  href="/" 
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Trang chủ
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link 
                  href="/blog" 
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-700 font-medium truncate max-w-xs md:max-w-md lg:max-w-lg" title={post.title}>
                  {post.title}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="bg-white">
        {/* Content */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                  {/* Content */}
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} phút đọc
              </div>
              {author && (
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {author.name}
                </div>
              )}
            </div>

            {/* Excerpt */}


                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-blockquote:border-blue-500 blog-content [&>img:first-of-type]:rounded-xl [&>img:first-of-type]:shadow-lg [&>img:first-of-type]:my-6 [&>img:first-of-type]:transition-transform [&>img:first-of-type]:duration-200 [&>img:first-of-type]:hover:-translate-y-1 [&>img:first-of-type]:hover:shadow-xl"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Share Buttons */}
                  <ShareButtons url={postUrl} title={post.title} />

                  {/* Related Posts */}
                  <RelatedPosts posts={relatedPosts} />

                  {/* Back to Blog */}
                  <div className="mt-8">
                    <Link
                      href="/blog"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Quay lại Blog
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <BlogSidebar 
                  categories={categories}
                  recentPosts={recentPosts.filter(p => p.id !== post.id)}
                />
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
} 