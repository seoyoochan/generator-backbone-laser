'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

  },


  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('BackboneLaser') + ' generator!'
    ));


    var prompts = [{
      name: 'appname',
      message: 'What is the name of your app?',
      default: this.appname,
      store: true
    }];

    this.prompt(prompts, function (props) {

      this.appname = props.appname;

      done();
    }.bind(this));


  },

  writing: {
    app: function () {

      mkdirp('test/spec');

      mkdirp('build');

      mkdirp('app/scripts');
      mkdirp('app/images');
      mkdirp('app/styles');
      mkdirp('app/styles/fonts');
      mkdirp('app/styles/utils');
      mkdirp('app/styles/libs');
      mkdirp('app/templates');
      mkdirp('app/templates/user');
      mkdirp('app/templates/layouts');
      mkdirp('app/locales');
      mkdirp('app/locales/en');
      mkdirp('app/locales/ko');
      mkdirp('app/scripts/modules');
      mkdirp('app/scripts/modules/core');
      mkdirp('app/scripts/modules/welcome');
      mkdirp('app/scripts/modules/user');
      mkdirp('app/scripts/modules/user/recovery');
      mkdirp('app/scripts/modules/user/registration');
      mkdirp('app/scripts/modules/user/login');
      mkdirp('app/scripts/modules/user/lock');
      mkdirp('app/scripts/modules/user/profile');
      mkdirp('command');


      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );

      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );

      this.fs.copy(
        this.templatePath('_build.sh'),
        this.destinationPath('command/build.sh')
      );

    },

    projectfiles: function () {

      this.fs.copy(
        this.templatePath('app/_config.js'),
        this.destinationPath('app/scripts/config.js')
      );

      this.fs.copy(
        this.templatePath('app/_init.js'),
        this.destinationPath('app/scripts/init.js')
      );

      this.fs.copy(
        this.templatePath('app/_router.js'),
        this.destinationPath('app/scripts/modules/core/router.js')
      );

      this.fs.copy(
        this.templatePath('app/_main.js'),
        this.destinationPath('app/scripts/main.js')
      );

      this.fs.copy(
        this.templatePath('app/_app.js'),
        this.destinationPath('app/scripts/app.js')
      );

      this.fs.copy(
        this.templatePath('app/_ApplicationView.js'),
        this.destinationPath('app/scripts/modules/core/ApplicationView.js')
      );

      this.fs.copy(
        this.templatePath('app/_ApplicationController.js'),
        this.destinationPath('app/scripts/modules/core/ApplicationController.js')
      );

      this.fs.copy(
        this.templatePath('app/_WelcomeController.js'),
        this.destinationPath('app/scripts/modules/welcome/controller.js')
      );

      this.fs.copy(
        this.templatePath('app/_WelcomeView.js'),
        this.destinationPath('app/scripts/modules/welcome/view.js')
      );

      this.fs.copy(
        this.templatePath('app/_registrationView.js'),
        this.destinationPath('app/scripts/modules/user/registration/view.js')
      );

      this.fs.copy(
        this.templatePath('app/_registrationModel.js'),
        this.destinationPath('app/scripts/modules/user/registration/model.js')
      );

      this.fs.copy(
        this.templatePath('app/_registrationViewModel.js'),
        this.destinationPath('app/scripts/modules/user/registration/viewModel.js')
      );

      this.fs.copy(
        this.templatePath('app/_registrationController.js'),
        this.destinationPath('app/scripts/modules/user/registration/controller.js')
      );

       this.fs.copy(
        this.templatePath('app/_registration.html'),
        this.destinationPath('app/templates/user/registration.html')
      );

      this.fs.copy(
        this.templatePath('app/_reset.scss'),
        this.destinationPath('app/styles/libs/_reset.scss')
      );

      this.fs.copy(
        this.templatePath('app/_variables.scss'),
        this.destinationPath('app/styles/utils/_variables.scss')
      );

      this.fs.copy(
        this.templatePath('app/_main.scss'),
        this.destinationPath('app/styles/main.scss')
      );

      this.fs.copy(
        this.templatePath('app/_index.html'),
        this.destinationPath('build/index.html')
      );

      this.fs.copy(
        this.templatePath('app/_default.html'),
        this.destinationPath('app/templates/layouts/default.html')
      );

      this.fs.copy(
        this.templatePath('app/_welcome.html'),
        this.destinationPath('app/templates/welcome.html')
      );

      this.fs.copyTpl(
        this.templatePath('app/_index.html'),
        this.destinationPath('build/index.html'),
        { title: this.appname }
      );

      this.fs.copy(
        this.templatePath('app/_en.json'),
        this.destinationPath('app/locales/en/en.json')
      );

      this.fs.copy(
        this.templatePath('app/_ko.json'),
        this.destinationPath('app/locales/ko/ko.json')
      );

      this.fs.copy(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc')
      );

      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );

      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );

      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );

      this.fs.copy(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );

      this.fs.copy(
        this.templatePath('app/_favicon.ico'),
        this.destinationPath('app/favicon.ico')
      );

      this.fs.copy(
        this.templatePath('app/_robots.txt'),
        this.destinationPath('app/robots.txt')
      );
    }
  },

  install: function () {
    this.bowerInstall('', function(){
      console.log('\n  Done installing bower Packages\n');
    });

    this.installDependencies({
      skipMessage: this.options['skip-install-message'],
      skipInstall: this.options['skip-install']
    });

  }
});
