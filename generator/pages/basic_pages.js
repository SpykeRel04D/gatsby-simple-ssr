const path = require('path');

module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            slug
            type
            components {
              content
              type
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const nodes = result.data.allMarkdownRemark.nodes;
  const pages = nodes.map(node => {
    const pagePath = `${node.frontmatter.slug}`.toLowerCase();

    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/basic-template.tsx`),
      context: {
        id: node.id
      }
    });
  });

  await Promise.all([pages]);
};
