/* @flow */
'use strict';

import $ from 'jquery';
import React from 'react';

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

class Component extends React.Component {
  constructor(props: {[key: string]: any}): void {
    super(props);
    this.state = {repos: []};
  }

  componentDidMount(): void {
    $.get('https://api.github.com/users/' + this.props.username + '/repos', (r) => {
      this.setState({repos: r.filter(this.props.filter)});
    });
  }

  render(): Element {
    var m: (r: Repo) => Repo = (r) => this.props.map(r, this.props.styles);

    return (
      <ul className="githubrepos" style={this.props.styles.repos}>
        {this.state.repos.map(m)}
      </ul>
    );
  }
}

Component.displayName = 'GitHubRepos';
Component.defaultProps = function(): {filter: HofFilter, map: HofMap, styles: Styles} {
  var s = {repos: {}, repo: {}, repoHeading: {}, repoDescription: {}};
  var f = (r) => true;
  var m = (r, s) => {
    var desc = r.description ? <p style={s.repoDescription}>{r.description}</p> : null;

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
}();


export default Component;
