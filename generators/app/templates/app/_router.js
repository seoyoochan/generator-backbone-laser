define(["App", "backbone", "modules/core/ApplicationController"], function(App, Backbone, ApplicationController) {

  var Router = Backbone.Router.extend({
    routes: {
      "": "welcome",
      "welcome": "welcome",
      "user/registration": "registration",
      "*action": "wrongUrl"
    },

    welcome: function(){
      new ApplicationController().welcome();
    },

    registration: function(){
      new ApplicationController().registration();
    },

    wrongUrl: function(){
      App.App.Router.navigate("/", { trigger: true });
    }

  });

  return Router;

});

