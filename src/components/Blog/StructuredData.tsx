import { BlogPost } from '@/types/blog';

interface StructuredDataProps {
  post: BlogPost;
  featuredImage?: string | null;
}

const StructuredData: React.FC<StructuredDataProps> = ({ post, featuredImage }) => {
  const structuredData: any = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt.replace(/<[^>]*>/g, '').substring(0, 160),
    "author": {
      "@type": "Organization",
      "name": "Trùm Chinese",
      "url": "https://trumchinese.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Trùm Chinese",
      "url": "https://trumchinese.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trumchinese.com/images/logo.webp",
        "width": 200,
        "height": 200
      }
    },
    "datePublished": post.date,
    "dateModified": post.modifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://trumchinese.com/blog/${post.slug}`
    },
    "url": `https://trumchinese.com/blog/${post.slug}`,
    ...(featuredImage && {
      "image": {
        "@type": "ImageObject",
        "url": featuredImage,
        "width": 1200,
        "height": 630
      }
    }),
    "inLanguage": "vi-VN",
    "about": [
      {
        "@type": "Thing",
        "name": "Học tiếng Trung",
        "description": "Học tiếng Trung Quốc hiệu quả"
      },
      {
        "@type": "Thing", 
        "name": "HSK",
        "description": "Luyện thi HSK - chứng chỉ tiếng Trung"
      }
    ],
    "keywords": "học tiếng Trung, HSK, tiếng Trung Quốc, Trùm Chinese, blog tiếng Trung"
  };

  // Add article body if available
  if (post.content) {
    structuredData["articleBody"] = post.content.replace(/<[^>]*>/g, '').substring(0, 500);
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
};

export default StructuredData; 