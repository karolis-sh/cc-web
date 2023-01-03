const target = process.env.GATSBY_DATA_TARGET;
if (['esc', 'statrem'].indexOf(target) === -1) {
  throw new Error(`Invalid GATSBY_DATA_TARGET - ${JSON.stringify(target)}`);
}

const config = {
  esc: {
    siteUrl: 'https://esconstruction.eu',
    gaTrackingId: 'G-653R2SZLY6',
    s3bucketName: 'esconstruction.eu',
  },
  statrem: {
    siteUrl: 'https://statrem.eu',
    gaTrackingId: 'G-PY4SBPJPDW',
    s3bucketName: 'statrem.eu',
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
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [config.gaTrackingId],
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
    // 'gatsby-plugin-netlify-cms',
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
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: config.s3bucketName,
      },
    },
  ],
};
