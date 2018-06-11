import React from 'react';

const target = process.env.GATSBY_DATA_TARGET;
if (['esc', 'statrem'].indexOf(target) === -1) {
  throw new Error(`Invalid GATSBY_DATA_TARGET - ${JSON.stringify(target)}`);
}

const data = {
  esc: {
    $key: 'esc',
    url: 'http://esconstruction.eu',
    urlName: 'esconstruction.eu',
    startYear: 2017,
    companyName: 'Eco Scandinavian Construction AB',
    email: 'info@esconstruction.eu',
    metaTitle: 'Eco Scandinavian Construction AB',
    metaDescription:
      'Eco Scandinavian Construction is a construction company. We specialize in services such as Design/Build, Renovations and Construction Management.',
    metaSocialElement: [
      <meta key="1" property="og:image" content="/og-image.jpg" />,
      <meta key="2" property="og:image:width" content="279" />,
      <meta key="3" property="og:image:height" content="279" />,
      <meta
        key="4"
        property="og:title"
        content="Eco Scandinavian Construction AB"
      />,
      <meta
        key="5"
        property="og:description"
        content="Eco Scandinavian Construction is a construction company. We specialize in services such as Design/Build, Renovations and Construction Management."
      />,
      <meta key="6" property="og:url" content="https://esconstruction.eu/" />,
    ],
  },
  statrem: {
    $key: 'statrem',
    url: 'http://statrem.eu',
    urlName: 'statrem.eu',
    startYear: 2016,
    companyName: 'Statrem',
  },
};

export default data[target];
