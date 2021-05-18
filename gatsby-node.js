const fs = require('fs');

const basicPages = require('./generator/pages/basic_pages');
const webpackConfig = require('./generator/config/webpack-config');

exports.onPreBuild = () => {
  try {
    fs.unlinkSync('./public/.htaccess');
  } catch (err) {}
};

exports.createPages = async props => {
  await basicPages(props);
};

exports.onCreateWebpackConfig = webpackConfig;
