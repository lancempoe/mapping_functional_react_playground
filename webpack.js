module.exports = function(type) {
  if (type) { return require(`./webpack/config.${type}.js`); }
  return require('./webpack/config.prod.js');
};
