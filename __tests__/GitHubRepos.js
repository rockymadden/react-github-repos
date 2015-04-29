jest.dontMock('../src/GitHubRepos.js');

var GitHubRepos = require('../src/GitHubRepos');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

// TODO: Expansion of tests and handling for browser globals over requires.
describe('GitHubRepos', function() {
  it('initial render should work', function() {
    var repos = TestUtils.renderIntoDocument(<GitHubRepos username="rockymadden" />);
    var ul = TestUtils.findRenderedDOMComponentWithTag(repos, 'ul').getDOMNode();

    expect(ul.getAttribute('class')).toEqual('githubrepos');
  });
});
