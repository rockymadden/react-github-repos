var $ = require('jquery');
var React = require('react');

module.exports = React.createClass({
  displayName: 'GitHubRepos',

  propTypes: {
    filter: React.PropTypes.func,
    map: React.PropTypes.func,
    username: React.PropTypes.string.isRequired
  },

  componentDidMount: function() {
    $.get('https://api.github.com/users/' + this.props.username + '/repos', function(r) {
      if(this.isMounted()) {
        this.setState({repos: r.filter(this.props.filter)});
      }
    }.bind(this));
  },

  getDefaultProps: function() {
    return {
      filter: function() { return true; },
      map: function(r) {
        var desc = r.description ? <p>{r.description}</p> : null;

        return (
          <li key={r.id}>
            <h2><a href={r.homepage || r.html_url}>{r.name}</a></h2>
            {desc}
          </li>
        );
      }
    };
  },

  getInitialState: function() {
    return {repos: []};
  },

  render: function() {
    return (
      <ul className="githubrepos">
        {this.state.repos.map(function(r) {return this.props.map(r);}.bind(this))}
      </ul>
    );
  }
});
