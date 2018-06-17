exports.onCreateNode = ({ node, boundActionCreators }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const { createNode } = boundActionCreators;

    const contentKey = node.fileAbsolutePath.replace(
      `${__dirname}/src/content/`,
      ''
    );
    const contentType = contentKey.split('/')[0];
    const frontmatter = { ...node.frontmatter };

    frontmatter.order = Number(frontmatter.order);
    if (frontmatter.images) {
      frontmatter.images = frontmatter.images.map(item => ({
        ...item,
        image: `../../../static${item.image}`,
      }));
    }

    createNode({
      id: `${node.id}_v2`,
      parent: node.parent,
      children: node.children,
      internal: {
        type: 'NetlifyContent',
        contentDigest: `${node.internal.contentDigest}_v2`,
      },
      fileAbsolutePath: node.fileAbsolutePath,
      contentKey,
      contentType,
      frontmatter,
    });
  }
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  const timestamp = Date.now();
  const prefix = '__static-';
  switch (stage) {
    case 'build-javascript':
      config.merge({
        output: {
          filename: `${prefix}${timestamp}-[name]-[chunkhash].css`,
          chunkFilename: `${prefix}${timestamp}-[name]-[chunkhash].css`,
        },
      });
      break;
    case 'build-css':
      config.merge({
        output: {
          filename: `${prefix}${timestamp}-[name]-[chunkhash].css`,
          chunkFilename: `${prefix}${timestamp}-[name]-[chunkhash].css`,
        },
      });
      break;
    default:
      break;
  }
  return config;
};
