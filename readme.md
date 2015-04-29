# react-github-repos [![Gitter](http://img.shields.io/badge/gitter-join%20chatroom-brightgreen.svg)](https://gitter.im/rockymadden/react-github-repos)
React GitHub repos component with a high-level of customizability.

## Examples
__From the example directory:__
![example](http://share.rockymadden.com/image/1i2o2p0V3x1n/example.png)

__From a personal website:__
![example](http://share.rockymadden.com/image/2G0O2K1s3G2A/rockymadden.com.png)

## Using
__Basic:__
```javascript
var GHRepos = React.createFactory(GitHubRepos);

React.render(
  GHRepos({username: 'username'}),
  document.getElementById('ghrepos')
);
```

__Filter (i.e. restricting repos shown):__
```javascript
var GHRepos = React.createFactory(GitHubRepos);

// Only show repos with a description that are also not a fork.
var filter = function(repo) {
  return repo.description && !repo.fork;
};

React.render(
  GHRepos({username: 'username', filter: filter}),
  document.getElementById('ghrepos')
);
```

__Map (i.e. customizing how repos are shown):__
```javascript
var GHRepos = React.createFactory(GitHubRepos);

// Remove description and plug website.
var map = function(repo) { return (
  React.createElement("li", {key: repo.id},
    React.createElement("h2", null, React.createElement("a", {href: repo.homepage || repo.html_url}, repo.name)),
    React.createElement("a", {href: "http://example.com"}, "Example.com")
  )
); };

React.render(
  GHRepos({username: 'username', map: map}),
  document.getElementById('ghrepos')
);
```

> Be sure to also check out the [example directory](https://github.com/rockymadden/react-github-repos/tree/master/example)
which includes full HTML, JavaScript, and CSS examples which you can adapt for your own uses.

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
