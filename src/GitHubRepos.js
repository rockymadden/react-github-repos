/* @flow */
'use strict';

const $ = require('jquery');
const React = require('react');

type Repo = {[key: string]: any};
type Styles = {[key: string]: {[key: string]: any}};
type HofFilter = (r: Repo) => boolean;
type HofMap = (r: Repo, s: Styles) => Repo;

module.exports = React.createClass({
  displayName: 'GitHubRepos',

  propTypes: {
    filter: React.PropTypes.func.isRequired,
    map: React.PropTypes.func.isRequired,
    styles: React.PropTypes.object.isRequired,
    username: React.PropTypes.string.isRequired
  },

  componentDidMount: function(): void {
    $.get('https://api.github.com/users/' + this.props.username + '/repos', function(r) {
      if(this.isMounted()) {
        this.setState({repos: r.filter(this.props.filter)});
      }
    }.bind(this));
  },

  getDefaultProps: function(): {filter: HofFilter, map: HofMap, styles: Styles} {
    const s: Styles = {repos: {}, repo: {}, repoHeading: {}, repoDescription: {}};
    const f: HofFilter = (r) => true;
    const m: HofMap = (r, s) => {
      const desc = r.description ? <p style={s.repoDescription}>{r.description}</p> : null;

      return (
        <li key={r.id} style={s.repo}>
          <h3 style={{padding: '0', margin: '0'}}>
            <a href={r.homepage || r.html_url} style={s.repoHeading}>{r.name}</a>
          </h3>
          {desc}
        </li>
      );
    }

    return {filter: f, map: m, styles: s};
  },

  getInitialState: function(): {repos: Array<Repo>} {
    return {repos: []};
  },

  render: function(): any {
    const m: (r: Repo) => Repo = (r) => this.props.map(r, this.props.styles);

    return (
      <ul className="githubrepos" style={this.props.styles.repos}>
        {this.state.repos.map(m)}
      </ul>
    );
  }
});
