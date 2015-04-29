# react-github-repos [![Gitter](http://img.shields.io/badge/gitter-join%20chatroom-brightgreen.svg)](https://gitter.im/rockymadden/react-github-repos)
React GitHub repos component with support for map and filter.

## Using
__Basic:__
```javascript
var GHRepos = React.createFactory(GitHubRepos);

React.render(
  GHRepos({username: 'myusername'}),
  document.getElementById('myrepos')
);
```

__Filter (i.e. restricting repos shown):__
```javascript
var GHRepos = React.createFactory(GitHubRepos);

// Only show repos with a description.
var filter = function(repo) {
  return repo.description;
};

React.render(
  GHRepos({username: 'myusername', filter: filter}),
  document.getElementById('myrepos')
);
```

__Map (i.e. customizing repos shown):__
```javascript
var GHRepos = React.createFactory(GitHubRepos);

// Remove description and plug your own site.
var map = function(repo) { return (
  React.createElement("li", {key: repo.id},
    React.createElement("h2", null, React.createElement("a", {href: repo.homepage || repo.html_url}, repo.name)),
    React.createElement("a", {href: "http://example.com"}, "My Customization")
  )
); };

React.render(
  GHRepos({username: 'myusername', map: map}),
  document.getElementById('myrepos')
);
```

> Also check out the example directory which includes full HTML, JavaScript, and CSS examples which you can adapt.

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
