import { Metadata } from 'next';
import { Suspense } from 'react';
import { getBlogPosts, getCategories, getFeaturedImageUrl } from '@/lib/wordpress';
import BlogHero from '@/components/Blog/BlogHero';
import BlogCard from '@/components/Blog/BlogCard';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Pagination from '@/components/Blog/Pagination';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

export const metadata: Metadata = {
  title: 'Blog Trùm Chinese - Học tiếng Trung hiệu quả',
  description: 'Khám phá các bài viết hữu ích về học tiếng Trung, văn hóa Trung Quốc, và mẹo học tập hiệu quả. Cập nhật thường xuyên từ chuyên gia.',
  keywords: 'blog tiếng Trung, học tiếng Trung, HSK, văn hóa Trung Quốc, mẹo học tiếng Trung, Trùm Chinese blog',
  openGraph: {
    title: 'Blog Trùm Chinese - Học tiếng Trung hiệu quả',
    description: 'Khám phá các bài viết hữu ích về học tiếng Trung, văn hóa Trung Quốc, và mẹo học tập hiệu quả',
    url: 'https://trumchinese.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://www.trumchinese.com/images/blog-cover.webp',
        width: 1200,
        height: 630,
        alt: 'Blog Trùm Chinese',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Trùm Chinese - Học tiếng Trung hiệu quả',
    description: 'Khám phá các bài viết hữu ích về học tiếng Trung, văn hóa Trung Quốc, và mẹo học tập hiệu quả',
    images: ['https://www.trumchinese.com/images/blog-cover.webp'],
  },
  alternates: {
    canonical: 'https://trumchinese.com/blog',
  },
};

interface BlogPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

async function BlogContent({ searchParams }: BlogPageProps) {
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1;
  const validPage = page > 0 ? page : 1;

  // Fetch blog data in parallel
  const [blogData, categories] = await Promise.all([
    getBlogPosts(validPage, 9),
    getCategories(),
  ]);

  // Get featured images for posts
  const postsWithImages = await Promise.all(
    blogData.posts.map(async (post) => {
      let featuredImage = post.featuredImageUrl; // Use direct URL if available
      
      // Only fetch by ID if we don't have direct URL
      if (!featuredImage && post.featuredImage) {
        const fetchedImage = await getFeaturedImageUrl(parseInt(post.featuredImage));
        featuredImage = fetchedImage || undefined;
      }
      
      return { post, featuredImage };
    })
  );

  return (
    <>
      <div className="bg-white">
        <Navbar />
        <BlogHero />
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {blogData.posts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {postsWithImages.map(({ post, featuredImage }) => (
                      <BlogCard 
                        key={post.id} 
                        post={post} 
                        featuredImage={featuredImage}
                      />
                    ))}
                  </div>

                  <Pagination
                    currentPage={blogData.currentPage}
                    totalPages={blogData.totalPages}
                    basePath="/blog"
                  />
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="text-gray-400 text-6xl mb-4">📝</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Chưa có bài viết nào
                  </h2>
                  <p className="text-gray-600">
                    Hãy quay lại sau để xem các bài viết mới nhất từ Trùm Chinese!
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar 
                categories={categories}
                recentPosts={blogData.posts.slice(0, 5)}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    }>
      <BlogContent searchParams={searchParams} />
    </Suspense>
  );
} 