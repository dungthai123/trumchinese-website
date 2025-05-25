import { Metadata } from 'next';
import { Suspense } from 'react';
import { searchPosts, getCategories } from '@/lib/wordpress';
import BlogCard from '@/components/Blog/BlogCard';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Pagination from '@/components/Blog/Pagination';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import Link from 'next/link';

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const query = typeof searchParams.q === 'string' ? searchParams.q : '';
  
  return {
    title: `Tìm kiếm: "${query}" - Blog Trùm Chinese`,
    description: `Kết quả tìm kiếm cho "${query}" trên blog Trùm Chinese. Khám phá các bài viết về học tiếng Trung.`,
    robots: 'noindex, follow', // Don't index search results
  };
}

async function SearchContent({ searchParams }: SearchPageProps) {
  const query = typeof searchParams.q === 'string' ? searchParams.q : '';
  const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1;
  const validPage = page > 0 ? page : 1;

  if (!query.trim()) {
    return (
      <>
        <div className="bg-white">
          <Navbar />
        </div>

        <div className="bg-gray-50 min-h-screen py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Tìm kiếm bài viết
              </h1>
              <p className="text-gray-600 mb-8">
                Vui lòng nhập từ khóa để tìm kiếm bài viết.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Quay lại Blog
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  // Fetch search results and categories
  const [searchResults, categories] = await Promise.all([
    searchPosts(query, validPage, 9),
    getCategories(),
  ]);

  return (
    <>
      <div className="bg-white">
        <Navbar />
      </div>

      <div className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Header */}
          <div className="mb-8">
            <nav className="mb-4">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-blue-600">
                    Trang chủ
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <Link href="/blog" className="hover:text-blue-600">
                    Blog
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Tìm kiếm</span>
                </li>
              </ol>
            </nav>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Kết quả tìm kiếm cho "{query}"
            </h1>
            <p className="text-gray-600">
              Tìm thấy {searchResults.totalPosts} bài viết
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {searchResults.posts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {searchResults.posts.map((post) => (
                      <BlogCard 
                        key={post.id} 
                        post={post} 
                        featuredImage={null} // We'll skip featured images for search results to improve performance
                      />
                    ))}
                  </div>

                  <Pagination
                    currentPage={searchResults.currentPage}
                    totalPages={searchResults.totalPages}
                    basePath={`/blog/search?q=${encodeURIComponent(query)}`}
                  />
                </>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Không tìm thấy kết quả
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Không có bài viết nào khớp với từ khóa "{query}". <br />
                    Hãy thử tìm kiếm với từ khóa khác.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Gợi ý:</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <Link href="/blog/search?q=học tiếng Trung" className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200">
                          học tiếng Trung
                        </Link>
                        <Link href="/blog/search?q=HSK" className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200">
                          HSK
                        </Link>
                        <Link href="/blog/search?q=phát âm" className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200">
                          phát âm
                        </Link>
                        <Link href="/blog/search?q=văn hóa Trung Quốc" className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200">
                          văn hóa Trung Quốc
                        </Link>
                      </div>
                    </div>
                    <Link
                      href="/blog"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Quay lại Blog
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar 
                categories={categories}
                recentPosts={[]} // Empty for search results
                onSearch={(newQuery) => {
                  window.location.href = `/blog/search?q=${encodeURIComponent(newQuery)}`;
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    }>
      <SearchContent searchParams={searchParams} />
    </Suspense>
  );
} 