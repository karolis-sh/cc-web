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
      resolve: 'gatsby-source-filesystem',
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
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: { families: ['Asap'] },
      },
    },
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-robots-txt',
  ],
};
