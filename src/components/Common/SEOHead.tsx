import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Trùm Chinese - 10X Hiệu suất học tiếng Trung",
  description = "Ứng dụng học tiếng Trung cùng AI hàng đầu. Phương pháp học hiệu quả, luyện thi HSK, từ vựng và ngữ pháp tiếng Trung.",
  keywords = ["học tiếng Trung", "HSK", "Trùm Chinese", "học tiếng Trung AI"],
  ogImage = "https://www.trumchinese.com/images/background_cover.webp",
  ogType = "website",
  canonical,
  noindex = false,
  structuredData,
}) => {
  const fullTitle = title.includes("Trùm Chinese") ? title : `${title} | Trùm Chinese`;
  const keywordsString = keywords.join(", ");

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Trùm Chinese" />
      <meta property="og:locale" content="vi_VN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@trumchinese" />
      <meta name="twitter:site" content="@trumchinese" />
      
      {/* Additional meta tags */}
      <meta name="author" content="Trùm Chinese" />
      <meta name="language" content="Vietnamese" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
};

export default SEOHead; 