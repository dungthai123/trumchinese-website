module.exports = {
    siteUrl: "https://trumchinese.com",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: ["/admin", "/dashboard"],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/dashboard"],
            },
        ],
    },
};
