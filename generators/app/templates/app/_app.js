define(["exports", "backbone", "modules/core/router", "modules/core/ApplicationView"], function(exports, Backbone, Router, ApplicationView) {

  // App.bodyRegion indicates the body DOM
  exports.App = new Backbone.Marionette.Application({
    regions: {
      bodyRegion: "body"
    }
  });

  // Link default layout(header, body, footer divs)
  exports.App.ApplicationView = new ApplicationView;

  exports.App.addInitializer(function(){
    Backbone.history.start();
  });

  // Link Router
  exports.App.Router = new Router();

  // Expose your App for reuse
  return exports.App;

});
