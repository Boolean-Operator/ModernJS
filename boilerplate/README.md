# Webpack Boilerplate 
  ModernJS complier with Babel  

## Overview
  This is a boilerplate set up for building and converting js applications to webpack with babel.  
  - Edit index.html to run bundle.js script

  - Edit existing js files to import modules to index.js from request.js and function.js files

  - >npm install -- to rebuild node-modules
  - >npm run dev-server -- to run development environment
  - >npm run build -- to build production version of application

  - copy public folder to host site app live


### Sections

- public folder
  - scripts folder
  - index.html
  - edit.html
- src folder
  - index.js
  - edit.js
- package.json
- package-lock.json
- webpack.config.js

- ** multiple html entry files **
  - Ex. index.html & edit.html
  
  - webpack.config.js file
    - module.exports = {
      - entry: {
        - index: ['babel-polyfill', './src/index.js'],
        - edit: ['babel-polyfill', './src/edit.js']
      - },
      - output: {
        - path: path.resolve(__dirname, 'public/scripts'),
        - filename: '[name]-bundle.js'
      - },
    -  ...
    - }

- add script tag to each html files
  - // <index.html>
  - // <script> src="/scripts/index-bundle.js"></script>
  - // <edit.html>
  - // <script> src="/scripts/edit-bundle.js"></script>

#### Process Checklist

- Rename project to project-old
- Clone boilerplate dir
- Rename boilerplate to project(new)
- Copy images folder(old) to public folder(new)
- Copy styles folder(old) to public folder(new)
- Copy index.html(old) to public folder(new)
- Delete all but one script tags 
- Change remaining script tag src to /scripts/bundle.js
- Save and close html files
- Copy script(old) files to src(new) script files
- Close project(old) folder
- Convert script(old) files to src(new) script files using modules 

- BEGIN TESTING 
- install node modules by running 
    - >npm install
- deploy development mode app to browser by running
    - >npm run dev-server

