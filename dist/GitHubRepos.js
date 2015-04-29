(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GitHubRepos = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
        var desc = r.description ? React.createElement("p", null, r.description) : null;

        return (
          React.createElement("li", {key: r.id}, 
            React.createElement("h2", null, React.createElement("a", {href: r.homepage || r.html_url}, r.name)), 
            desc
          )
        );
      }
    };
  },

  getInitialState: function() {
    return {repos: []};
  },

  render: function() {
    return (
      React.createElement("ul", {className: "githubrepos"}, 
        this.state.repos.map(function(r) {return this.props.map(r);}.bind(this))
      )
    );
  }
});


},{}]},{},[1])(1)
});