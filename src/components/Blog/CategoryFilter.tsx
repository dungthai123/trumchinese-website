'use client'

import React from 'react';
import Link from 'next/link';
import { BlogCategory } from '@/types/blog';

interface CategoryFilterProps {
  categories: BlogCategory[];
  selectedCategoryId?: number;
  selectedCategoryName?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategoryId, 
  selectedCategoryName 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 sm:mb-0">
          {selectedCategoryName ? `Danh mục: ${selectedCategoryName}` : 'Tất cả bài viết'}
        </h2>
        {selectedCategoryId && (
          <Link
            href="/blog"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Xóa bộ lọc
          </Link>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/blog"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !selectedCategoryId
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Tất cả
        </Link>
        
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/blog/category/${category.slug}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategoryId === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
            <span className="ml-2 text-xs opacity-75">({category.count})</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter; 