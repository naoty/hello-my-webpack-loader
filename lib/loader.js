const md = require("markdown-it")();

module.exports = function(source) {
  exports = {
    source,
    html: md.render(source)
  };
  return `module.exports = ${JSON.stringify(exports)}`;
};
