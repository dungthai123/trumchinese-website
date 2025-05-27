import { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getCategories, getPostsByCategory, getFeaturedImageUrl } from '@/lib/wordpress';
import BlogHero from '@/components/Blog/BlogHero';
import BlogCard from '@/components/Blog/BlogCard';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Pagination from '@/components/Blog/Pagination';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import CategoryFilter from '@/components/Blog/CategoryFilter';

interface CategoryPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categories = await getCategories();
  const category = categories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    return {
      title: 'Danh mục không tồn tại - Trùm Chinese',
      description: 'Danh mục bạn tìm kiếm không tồn tại.',
    };
  }

  return {
    title: `${category.name} - Blog Trùm Chinese`,
    description: category.description || `Khám phá các bài viết về ${category.name} từ Trùm Chinese. Học tiếng Trung hiệu quả với các bài viết chuyên sâu.`,
    keywords: `${category.name}, blog tiếng Trung, học tiếng Trung, HSK, Trùm Chinese`,
    openGraph: {
      title: `${category.name} - Blog Trùm Chinese`,
      description: category.description || `Khám phá các bài viết về ${category.name} từ Trùm Chinese`,
      url: `https://trumchinese.com/blog/category/${category.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://trumchinese.com/blog/category/${category.slug}`,
    },
  };
}

async function CategoryContent({ params, searchParams }: CategoryPageProps) {
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1;
  const validPage = page > 0 ? page : 1;

  // Fetch categories and find the current category
  const categories = await getCategories();
  const category = categories.find(cat => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  // Fetch posts for this category
  const blogData = await getPostsByCategory(category.id, validPage, 9);

  // Get featured images for posts
  const postsWithImages = await Promise.all(
    blogData.posts.map(async (post) => {
      let featuredImage = post.featuredImageUrl;
      
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category Filter */}
          <CategoryFilter 
            categories={categories} 
            selectedCategoryId={category.id}
            selectedCategoryName={category.name}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
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
                    basePath={`/blog/category/${category.slug}`}
                  />
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="text-gray-400 text-6xl mb-4">📝</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Không có bài viết nào trong danh mục này
                  </h2>
                  <p className="text-gray-600">
                    Danh mục "{category.name}" hiện chưa có bài viết nào. Hãy thử chọn danh mục khác hoặc quay lại trang chủ blog.
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

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    }>
      <CategoryContent params={params} searchParams={searchParams} />
    </Suspense>
  );
} 