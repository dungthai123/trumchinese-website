import React from 'react';

const BlogHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blog Trùm Chinese
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Khám phá những bài viết hữu ích về học tiếng Trung, văn hóa Trung Quốc, 
            và các mẹo học tập hiệu quả để nâng cao trình độ tiếng Trung của bạn.
          </p>
          <div className="flex justify-center">
            <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-full text-white backdrop-blur-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Cập nhật mỗi tuần
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero; 