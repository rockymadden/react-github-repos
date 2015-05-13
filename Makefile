bin = node_modules/.bin
src = $(shell find src/*.js)
test = $(shell find __tests__/*.js)

browserify: node_modules $(src)
	@$(bin)/browserify -t babelify -r jquery -r react -r ./src/GitHubRepos.js:GitHubRepos > dist/GitHubRepos.js
.PHONY: browserify

clean:
	@-rm -rf dist
.PHONY: clean

dist: | clean stub browserify uglify
.PHONY: dist

flow: node_modules $(src) $(test)
	flow check
.PHONY: flow

fresh: | clean
	@-rm -rf node_modules
.PHONY: fresh

jest: node_modules $(src) $(test)
	@$(bin)/jest
.PHONY: jest

node_modules: package.json
	@npm install

stub:
	@-mkdir dist
.PHONY: stub

test: | jest
.PHONY: test

typecheck: | flow
.PHONY: typecheck

uglify: node_modules dist/GitHubRepos.js
	@$(bin)/uglifyjs dist/GitHubRepos.js -mc > dist/GitHubRepos.min.js 2>/dev/null
.PHONY: uglify
