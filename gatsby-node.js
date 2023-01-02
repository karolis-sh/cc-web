exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNode } = actions;

    const contentKey = node.fileAbsolutePath.replace(
      `${__dirname}/src/content/`,
      '',
    );
    const contentType = contentKey.split('/')[0];
    const frontmatter = { ...node.frontmatter };

    frontmatter.order = Number(frontmatter.order);
    if (frontmatter.images) {
      frontmatter.images = frontmatter.images.map((item) => ({
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
