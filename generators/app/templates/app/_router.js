define(["backbone", "modules/core/ApplicationController"], function(Backbone, ApplicationController) {

  var Router = Backbone.Router.extend({
    routes: {
      "": "welcome",
      "welcome": "welcome",
      "*action": "wrongUrl"
    },

    welcome: function(){
      new ApplicationController().welcome();
    },

    wrongUrl: function(){
      alert("Your url does not exist.");
    }

  });

  return Router;

});

