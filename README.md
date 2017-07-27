# Middleman + VueJS: Bootstap your prototyping process.
*This project is very personalized to my workflow but can serve as a useful tool to get your prototypes up and running quickly.*

### The project includes:
* [Middleman](http://middlemanapp.com) - Ruby static site generator
* [VueJS 2](https://vuejs.org/) - The Progressive JavaScript Framework
* [NPM](https://www.npmjs.com/) - NPM is the package manager for JavaScript and the world’s largest software registry
* [Webpack](https://webpack.github.io/) - Module bundler and pain in the ass

### Running the project
Follow the instructions on how to install the libs mentioned above. Once you have those locked down, this is what you'll do:

`git clone <this project> && cd <this project>`

Once you have successfully cloned and are in the project directory, run `npm install` to install the javascript packages. Then run `bundle install` to install the gems needed for Middleman.

Ok, almost there. After all the libs for both NPM and Middleman have been added to the project, run `bundle exec middleman server`. This will start the project and you can start prototyping!

### What's in this starter project?
Not much but check it...

- __myproject__
  - [Gemfile](myproject/Gemfile)
  - [Gemfile.lock](myproject/Gemfile.lock)
  - [Rakefile](myproject/Rakefile)
  - __build__
    - [README.md](myproject/build/README.md)
    - [index.html](myproject/build/index.html)
    - __images__
    - __javascripts__
      - [site.bundle.js](myproject/build/javascripts/site.bundle.js)
    - __stylesheets__
      - [site.css](myproject/build/stylesheets/site.css)
  - [config.rb](myproject/config.rb)
  - [list.md](myproject/list.md)
  - [node_modules](myproject/node_modules)
  - [out.txt](myproject/out.txt)
  - [package-lock.json](myproject/package-lock.json)
  - [package.json](myproject/package.json)
  - __source__
    - __images__
    - [index.html.erb](myproject/source/index.html.erb)
    - __javascripts__
      - __components__
        - [App.vue](myproject/source/javascripts/components/App.vue)
        - [Brick.vue](myproject/source/javascripts/components/Brick.vue)
      - [site.js](myproject/source/javascripts/site.js)
    - __layouts__
      - [layout.erb](myproject/source/layouts/layout.erb)
    - __stylesheets__
      - [site.css.scss](myproject/source/stylesheets/site.css.scss)
  - [webpack.config.js](myproject/webpack.config.js)

