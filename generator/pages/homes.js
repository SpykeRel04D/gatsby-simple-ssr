const path = require('path');

module.exports = async ({ actions, reporter }) => {
  const { createPage } = actions;

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  createPage({
    path: '/',
    component: path.resolve(`./src/templates/home-template.tsx`),
    context: {
      id: 'home'
    }
  });
};
