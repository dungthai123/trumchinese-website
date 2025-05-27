import Link from 'next/link';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

export default function CategoryNotFound() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
      </div>

      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="text-gray-400 text-8xl mb-6">🔍</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Danh mục không tồn tại
          </h1>
          <p className="text-gray-600 mb-8">
            Danh mục bạn tìm kiếm không tồn tại hoặc đã bị xóa. Hãy thử tìm kiếm danh mục khác hoặc quay lại trang blog.
          </p>
          <div className="space-y-4">
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Quay lại Blog
            </Link>
            <div>
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                Về trang chủ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
} 