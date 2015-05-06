jest.dontMock('../src/GitHubRepos.js');

const GitHubRepos = require('../src/GitHubRepos');
const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

// TODO: Expansion of tests.
describe('GitHubRepos', () => {
  it('initial render should work', () => {
    const repos = TestUtils.renderIntoDocument(<GitHubRepos username="rockymadden"/>);
    const ul = TestUtils.findRenderedDOMComponentWithTag(repos, 'ul').getDOMNode();

    expect(ul.getAttribute('class')).toEqual('githubrepos');
  });
});
