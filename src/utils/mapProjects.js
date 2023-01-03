const mapProjects = (data, locale) => {
  let projects = data.edges.map((item) => ({
    id: item.node.id,
    title: item.node.frontmatter[`title_${locale}`],
    images: (item.node.frontmatter.images || [])
      .filter((imageItem) => imageItem.enabled)
      .map((imageItem) => imageItem.image.transform),
  }));
  projects = projects.filter((item) => item.images.length);
  return projects;
};

export default mapProjects;
