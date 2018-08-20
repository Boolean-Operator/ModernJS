# Webpack Boilerplate 
  ModernJS webpack complier with Babel  

## Overview
  This is a boilerplate set up for building and converting js applications to webpack with babel.  
  - Scripts for running production server and build
  
## Sections

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
  - (Ex. index.html & edit.html)
  ```
  webpack.config.js file
    module.exports = {
      entry: {
        index: ['babel-polyfill', './src/index.js'],
        edit: ['babel-polyfill', './src/edit.js']
      },
      output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-bundle.js'
      },
    ...
    }
  ```  

- Add script tag to each html file
  ```
  index.html
  <script src="/scripts/index-bundle.js"></script>

  edit.html 
  <script src="/scripts/edit-bundle.js"></script> 
  ```

#### Process Checklist

- Rename project to project-old
- Clone boilerplate dir
- Rename boilerplate to project(new)
- Copy images folder(old) to public folder(new)
- Copy styles folder(old) to public folder(new)
- Copy index.html(old) to public folder(new)
- Delete all but one script tags 
- Change remaining script tag to "src= /scripts/bundle.js"
- Save and close styles, images and html files
- Copy script(old) files to /public/src(new) script files
- open project folder in terminal
- Close project(old) folder
- install node modules 
    * >npm install
- deploy development mode app to browser
    * >npm run dev-server
- Convert script(old) files to /public/src(new) script files using modules 
- ** Test each script or function independently, if possible. 

- Upon completion run build command to prepare app for live deployment
    * > npm run build
  - load public folder to host for deployment 

