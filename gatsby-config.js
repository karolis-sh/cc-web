require('dotenv').config();

const keys = {
  contentful: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
};

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: keys.contentful.spaceId,
        accessToken: keys.contentful.accessToken,
      },
    },
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`asap`],
      },
    },
  ],
};
