# react-github-repos [![Travis](http://img.shields.io/travis-ci/rockymadden/react-github-repos.svg?branch=master)](http://travis-ci.org/rockymadden/react-github-repos) [![Gitter](http://img.shields.io/badge/gitter-join%20chatroom-brightgreen.svg)](https://gitter.im/rockymadden/react-github-repos)
React GitHub repos component with a high degree of customizability.

## Using
In addition to these quick usage examples, also check out the
[example directory](https://github.com/rockymadden/react-github-repos/tree/master/exam) which includes full HTML,
JavaScript, and CSS.

__Basic:__
```javascript
React.render(
  <GitHubRepos username="username"/>,
  document.getElementById('githubrepos')
);
```

---

__With filter (i.e. restricting repos shown):__
```javascript
// Only show repos with a description which are also not forks.
var filter = function(repo) {
  return repo.description && !repo.fork;
};

React.render(
  <GitHubRepos filter={filter} username="username"/>,
  document.getElementById('githubrepos')
);
```
> <sub><sup>
> Check out the [GitHub API documentation for the repo schema](https://developer.github.com/v3/repos/#response).
> </sup></sub>

---

__With map (i.e. customizing how repos are shown):__
```javascript
// Add second paragraph with stargazer count information.
var map = function(repo) { return (
  <li key={repo.id}>
    <h3><a href={repo.homepage || repo.html_url}>{repo.name}</a></h3>
    <p>{repos.description}</p>
    <p>Stars: {repo.stargazers_count}</p>
  </li>
); };

React.render(
  <GitHubRepos map={map} username="username"/>,
  document.getElementById('githubrepos')
);
```
> <sub><sup>
> Check out the [GitHub API documentation for the repo schema](https://developer.github.com/v3/repos/#response).
> </sup></sub>

## Styling
__Via inline React styles:__
```javascript
var styles = {
  // ul
  repos: {
    border: '1px solid #ccc',
    borderTop: 'none',
    borderRadius: '0 0 4px 4px',
    listStyleType: 'none',
    margin: '0',
    padding: '0'
  },

  // ul > li
  repo: {
    borderTop: '1px solid #ccc',
    padding: '14px 20px'
  },

  // ul > li > h3
  repoHeading: {
    color: '#4183c4',
    fontSize: '16px',
    lineHeight: '1',
    margin: '0',
    padding: '0',
    textDecoration: 'none'
  },

  // ul > li > p
  repoDescription: {
    color: '#777',
    fontSize: '13px',
    lineHeight: '1',
    margin: '6px 0 0 0',
    padding: '0'
  }
}

React.render(
  <GitHubRepos styles={styles} username="username"/>,
  document.getElementById('githubrepos')
);
```

__Via traditional CSS:__
```css
ul.githubrepos {
  border: 1px solid #ccc;
  border-radius: 0 0 4px 4px;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

  ul.githubrepos > li {
    padding: 14px 20px;
  }

  ul.githubrepos > li > h3 {
    font-size: 16px;
    line-height: 1;
    margin: 0;
    padding: 0;
  }

    ul.githubrepos > li > h3 > a {
      color: #4183c4;
      text-decoration: none;
    }

  ul.githubrepos > li > p {
    color: #777;
    font-size: 13px;
    margin: 0;
    padding: 0;
  }

  ul.githubrepos > li > h3 + p {
    margin: 6px 0 0 0;
  }

  ul.githubrepos > li + li {
    border-top: 1px solid #ccc;
  }
```


## Visualizing
__Via the example directory:__
![example](http://share.rockymadden.com/image/1i2o2p0V3x1n/example.png)

---

__Via a personal website:__
![example](http://share.rockymadden.com/image/2G0O2K1s3G2A/rockymadden.com.png)

## License
```
The MIT License (MIT)

Copyright (c) 2015 Rocky Madden (https://rockymadden.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
