/* @flow */
'use strict';

const $ = require('jquery');
const React = require('react');

type Repo = {[key: string]: any};
type HofFilter = (r: Repo) => boolean;
type HofMap = (r: Repo) => Repo;

module.exports = React.createClass({
  displayName: 'GitHubRepos',

  propTypes: {
    filter: React.PropTypes.func.isRequired,
    map: React.PropTypes.func.isRequired,
    username: React.PropTypes.string.isRequired
  },

  componentDidMount: function(): void {
    $.get('https://api.github.com/users/' + this.props.username + '/repos', function(r) {
      if(this.isMounted()) {
        this.setState({repos: r.filter(this.props.filter)});
      }
    }.bind(this));
  },

  getDefaultProps: function(): {filter: HofFilter, map: HofMap} {
    const f: HofFilter = (r) => true;
    const m: HofMap = (r) => {
      const desc = r.description ? <p>{r.description}</p> : null;

      return (
        <li key={r.id}>
          <h2><a href={r.homepage || r.html_url}>{r.name}</a></h2>
          {desc}
        </li>
      );
    }

    return {filter: f, map: m};
  },

  getInitialState: function(): {repos: Array<Repo>} {
    return {repos: []};
  },

  render: function(): any {
    return (
      <ul className="githubrepos">
        {this.state.repos.map(function(r: any) { return this.props.map(r); }.bind(this))}
      </ul>
    );
  }
});
