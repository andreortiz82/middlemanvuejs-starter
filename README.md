# Middleman + VueJS: Bootstap your prototyping process.
*This project is very personalized to my workflow but can serve as a useful tool to get your prototypes up and running quickly.*

### The project includes:
* [Middleman](http://middlemanapp.com) - Ruby static site generator
* [VueJS 2](https://vuejs.org/) - The Progressive JavaScript Framework
* [NPM](https://www.npmjs.com/) - NPM is the package manager for JavaScript and the world’s largest software registry
* [Webpack](https://webpack.github.io/) - Module bundler and pain in the ass

### Running the project
Follow the instructions on how to install the libs mentioned above. Once you have those locked down, this is what you'll do:

`git clone git@github.com:andreortiz82/middlemanvuejs-starter.git && cd middlemanvuejs-starter`

Once you have successfully cloned and are in the project directory, run `npm install` to install the javascript packages. Then run `bundle install` to install the gems needed for Middleman.

Ok, almost there. After all the libs for both NPM and Middleman have been added to the project, run `bundle exec middleman server`. This will start the project and you can start prototyping!

### What's in this starter project?
Not much but check it...

- __middlemanvuejs-starter__
  - [Gemfile](/Gemfile)
  - [Gemfile.lock](/Gemfile.lock)
  - [Rakefile](/Rakefile)
  - [config.rb](/config.rb)
  - [package-lock.json](/package-lock.json)
  - [package.json](/package.json)
  - __source__
    - __images__
    - [index.html.erb](/source/index.html.erb)
    - __javascripts__
      - __components__
        - [App.vue](/source/javascripts/components/App.vue)
        - [Brick.vue](/source/javascripts/components/Brick.vue)
      - [site.js](/source/javascripts/site.js)
    - __layouts__
      - [layout.erb](/source/layouts/layout.erb)
    - __stylesheets__
      - [site.css.scss](/source/stylesheets/site.css.scss)
  - [webpack.config.js](/webpack.config.js)

