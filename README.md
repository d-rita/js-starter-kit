Setting up a JS development environment:
A good starter kit for all JS projects. Consider it the chores to do before finally starting the project features. They help set a standard to follow throughout the project.

1. Editors: set up a `.editorconfig` file specify coding styles to be enforced in the project despite the kind of editor chosen. Install the editorconfig plugin if your editor requires it. 

2. Package management: NPM is the package management of choice. It's more popular, and coupled with a great bundler makes it a great choice. Install node, and by default npm comes bundled with it, on your local machine. 
Node's package manifest is package.json which stores a list of npm packages in use in the project as well as the npm scripts to run the project.  

3.  Development Webserver: The webserver serves up files stored in the directory. Express is the choice webserver. It is highly configurable, can serve up APIs and static files, can also be used in production.

4. Automation: Automating the development environment and build scripts using `npm scripts`.

5. Transpiling: using `babel` to transpile JS code to ES5. 

6. Bundling: using `webpack` to bundle and create a minified version of our app. Configuration can be separated into development and production specific cases. 

7. Linting: using `eslint` to enforce consistency and avoid mistakes. Configuration done in a separate file, i.e `eslintrc.json`. Add a wrapper module `eslint-watch` to watch files. 

8. Testing and Continuous Integration: 