module.exports = {
    siteUrl: "https://trumchinese.com",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: ["/admin", "/dashboard"],
    additionalPaths: async (config) => {
        const result = []
        
        try {
            // Add blog listing page
            result.push({
                loc: '/blog',
                changefreq: 'daily',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            });

            // Note: Blog posts will be automatically included by Next.js
            // since they are generated as static pages
            
        } catch (error) {
            console.error('Error generating blog sitemap:', error);
        }
        
        return result;
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/dashboard"],
            },
        ],
        additionalSitemaps: [
            "https://trumchinese.com/sitemap.xml",
        ],
    },
};
