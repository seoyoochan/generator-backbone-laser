// to setup RequireJs. (not mandatory, but config method helps simplification of code)
require.config({
  deps: [
    "jquery",
    "i18next",
    "modernizr",
    "jstzdetect",
    "jquery.cookie",
    "init"
  ],
  enforceDefine: false,
  paths: {
    underscore: "libs/underscore/underscore",
    backbone: "libs/backbone/backbone",
    jquery: "libs/jquery/dist/jquery",
    "backbone.babysitter": "libs/backbone.babysitter/lib/backbone.babysitter",
    "backbone.wreqr": "libs/backbone.wreqr/lib/backbone.wreqr",
    modernizr: "libs/modernizr/modernizr",
    marionette: "libs/backbone.marionette/lib/backbone.marionette",
    "backbone.marionette": "libs/backbone.marionette/lib/core/backbone.marionette",
    text: "libs/requirejs-text/text",
    requirejs: "libs/requirejs/require",
    "requirejs-text": "libs/requirejs-text/text",
    "font-awesome": "libs/font-awesome/fonts/*",
    i18next: "libs/i18next/i18next",
    jstzdetect: "libs/jstzdetect/jstz.min",
    knockout: "libs/knockout/dist/knockout",
    "jquery.cookie": "libs/jquery.cookie/jquery.cookie"
  },
  shim: {
    jquery: {
      exports: "$"
    },
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: [
        "underscore",
        "jquery"
      ],
      exports: "Backbone"
    },
    babysitter: {
      deps: [
        "backbone"
      ],
      exports: "Babysitter"
    },
    wreqr: {
      deps: [
        "backbone"
      ],
      exports: "Wreqr"
    },
    marionette: {
      deps: [
        "backbone.wreqr",
        "backbone.babysitter"
      ],
      exports: "Marionette"
    },
    modernizr: {
      exports: "Modernizr"
    },
    i18next: {
      deps: [
        "jquery"
      ],
      exports: "$"
    },
    jstzdetect: {
      exports: "jstz"
    },
    "jquery.cookie": {
      deps: [
        "jquery"
      ],
      exports: "$"
    }
  },
  packages: [

  ]
});

