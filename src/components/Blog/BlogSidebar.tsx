'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { BlogCategory, BlogPost } from '@/types/blog';

interface BlogSidebarProps {
  categories: BlogCategory[];
  recentPosts: BlogPost[];
  onSearch?: (query: string) => void;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ categories, recentPosts, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Tìm kiếm</h3>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Categories */}
      {categories.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Danh mục</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/blog/category/${category.slug}`}
                  className="flex items-center justify-between px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                >
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Bài viết mới nhất</h3>
          <div className="space-y-4">
            {recentPosts.slice(0, 5).map((post) => (
              <article key={post.id} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                <Link href={`/blog/${post.slug}`}>
                  <h4 className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h4>
                </Link>
                <time className="text-xs text-gray-500">
                  {formatDate(post.date)}
                </time>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg p-6 text-white">
        <h3 className="text-lg font-bold mb-2">Đăng ký nhận tin</h3>
        <p className="text-blue-100 text-sm mb-4">
          Nhận thông báo về các bài viết mới và tips học tiếng Trung hiệu quả
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Email của bạn"
            className="w-full px-4 py-2 rounded bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-blue-100 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-white text-blue-600 rounded font-medium hover:bg-opacity-90 transition-colors"
          >
            Đăng ký
          </button>
        </form>
      </div>

      {/* Learning Resources */}
      {/* <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Tài liệu học tập</h3>
        <div className="space-y-3">
          <Link
            href="/hsk-levels"
            className="flex items-center px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
          >
            <span className="mr-3">📚</span>
            Bài thi HSK
          </Link>
          <Link
            href="/chinese-grammar"
            className="flex items-center px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
          >
            <span className="mr-3">📝</span>
            Ngữ pháp tiếng Trung
          </Link>
          <Link
            href="/pronunciation-guide"
            className="flex items-center px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
          >
            <span className="mr-3">🔊</span>
            Hướng dẫn phát âm
          </Link>
          <Link
            href="/cultural-insights"
            className="flex items-center px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
          >
            <span className="mr-3">🏮</span>
            Văn hóa Trung Quốc
          </Link>
        </div>
      </div> */}
    </aside>
  );
};

export default BlogSidebar; 