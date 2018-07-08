const rootDir = 'public';
const config = {
  esc: {
    siteUrl: 'https://esconstruction.eu',
    gaTrackingId: 'UA-82184813-1',
  },
  statrem: {
    siteUrl: 'https://statrem.eu',
    gaTrackingId: 'UA-121319197-1',
  },
}[process.env.GATSBY_DATA_TARGET];

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.gaTrackingId,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images/uploads`,
        name: 'uploads',
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        staticFileGlobs: [
          `${rootDir}/**/*.{woff2}`,
          `${rootDir}/__static-commons-*js`,
          `${rootDir}/__static-app-*js`,
          `${rootDir}/index.html`,
          `${rootDir}/manifest.json`,
          `${rootDir}/manifest.webmanifest`,
          `${rootDir}/offline-plugin-app-shell-fallback/index.html`,
        ],
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
