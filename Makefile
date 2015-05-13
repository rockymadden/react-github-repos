bin = node_modules/.bin
src = $(shell find src/*.js)
test = $(shell find __tests__/*.js)

.PHONY: dist test typecheck browserify clean flow jest stub uglify

# Targets.
dist: | clean stub browserify uglify

test: | jest

typecheck: | flow

# Tasks.
browserify: node_modules $(src)
	@$(bin)/browserify -t babelify -r jquery -r react -r ./src/GitHubRepos.js:GitHubRepos > dist/GitHubRepos.js

clean:
	@rm -rf dist

flow: node_modules $(src) $(test)
	flow check

jest: node_modules $(src) $(test)
	@$(bin)/jest

node_modules: package.json
	@npm install

stub:
	@mkdir -p dist

uglify: node_modules dist/GitHubRepos.js
	@$(bin)/uglifyjs dist/GitHubRepos.js -mc > dist/GitHubRepos.min.js 2>/dev/null
