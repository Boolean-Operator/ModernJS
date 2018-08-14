# Webpack Boilerplate 
  ModernJS Babel transpiler  

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
  - for multiple html entry files amend webpack.config.js file
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

    - add script tag to html files
    - // <index.html>
    - // <script> src="/scripts/index-bundle.js"></script>
    - // <edit.html>
    - // <script> src="/scripts/edit-bundle.js"></script>