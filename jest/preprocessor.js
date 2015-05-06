var ReactTools = require('react-tools');
var BabelJest = require('babel-jest');

module.exports = {
  process: function(src, filename) {
    return ReactTools.transform(BabelJest.process(src, filename));
  }
};
