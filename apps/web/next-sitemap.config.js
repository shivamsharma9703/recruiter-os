/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://recruiteros.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
};