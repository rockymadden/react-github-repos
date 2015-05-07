/* @flow */
'use strict';

const $ = require('jquery');
const React = require('react');

type Element = ReactElement<any, any, any>;
type Repo = {[key: string]: any};
type Styles = {
  repos: {[key: string]: string},
  repo: {[key: string]: string},
  repoHeading: {[key: string]: string},
  repoDescription: {[key: string]: string},
};
type HofFilter = (r: Repo) => boolean;
type HofMap = (r: Repo, s: Styles) => Element;

module.exports = React.createClass({
  displayName: 'GitHubRepos',

  componentDidMount: function(): void {
    $.get('https://api.github.com/users/' + this.props.username + '/repos', (r) => {
      if(this.isMounted()) this.setState({repos: r.filter(this.props.filter)});
    });
  },

  getDefaultProps: function(): {filter: HofFilter, map: HofMap, styles: Styles} {
    const s = {repos: {}, repo: {}, repoHeading: {}, repoDescription: {}};
    const f = (r) => true;
    const m = (r, s) => {
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

  render: function(): Element {
    const m: (r: Repo) => Repo = (r) => this.props.map(r, this.props.styles);

    return (
      <ul className="githubrepos" style={this.props.styles.repos}>
        {this.state.repos.map(m)}
      </ul>
    );
  }
});
