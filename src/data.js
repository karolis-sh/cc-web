import React from 'react';

const data = {
  esc: {
    $key: 'esc',
    url: 'https://esconstruction.eu',
    urlName: 'esconstruction.eu',
    startYear: 2017,
    companyName: 'Eco Scandinavian Construction AB',
    email: 'info@esconstruction.eu',
    metaTitle: 'Eco Scandinavian Construction AB',
    metaDescription:
      'Eco Scandinavian Construction is a construction company. We specialize in services such as Design/Build, Renovations and Construction Management.',
    metaSocialElement: [
      { property: 'title', content: 'Eco Scandinavian Construction AB' },
      {
        property: 'description',
        content:
          'Eco Scandinavian Construction is a construction company. We specialize in services such as Design/Build, Renovations and Construction Management.',
      },
      { property: 'url', content: 'https://esconstruction.eu/' },
      { property: 'type', content: 'website' },
      { property: 'image', content: '/og-image.jpg' },
      { property: 'image:width', content: '279' },
      { property: 'image:height', content: '279' },
    ].map(({ property, ...props }) => (
      <meta key={property} property={`og:${property}`} {...props} />
    )),
    certificates: [
      'v1529267260/Eco%20Scandinavian%20Construction/cert_20180129_00002_002.jpg',
      'v1529267260/Eco%20Scandinavian%20Construction/cert_20180129_00003_001.jpg',
    ],
  },
  statrem: {
    $key: 'statrem',
    url: 'https://statrem.eu',
    urlName: 'statrem.eu',
    startYear: 2016,
    companyName: 'Statrem',
    metaTitle: 'Statrem',
    metaDescription:
      'Statrem is a construction company. We specialize in services such as Design/Build, Renovations and Construction Management.',
  },
};

// eslint-disable-next-line no-undef
export default data[process.env.GATSBY_DATA_TARGET];
