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
    companyName: 'Eco Scandinavian Construction',
    email: 'info@esconstruction.eu',
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
