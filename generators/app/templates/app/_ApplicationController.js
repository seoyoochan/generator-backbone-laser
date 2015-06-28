/**
 * ApplicationController.js
 * What:
 * Role: Each route invokes its own controller
 */

define([
    "App", "backbone", "marionette",
    // load a controller of your module
    "modules/welcome/controller"
  ],
  function(App, Backbone, Marionette, welcome){

    return Marionette.Controller.extend({

      initialize: function(){
        // Render default layout
        App.App.bodyRegion.show(App.App.ApplicationView);
      },

      welcome: function(){
        new welcome();
      }

    });

  });
