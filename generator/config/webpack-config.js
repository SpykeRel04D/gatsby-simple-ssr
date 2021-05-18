module.exports = ({ stage, rules, loaders, node, plugins, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false,
        net: false
      }
    }
  });
};
