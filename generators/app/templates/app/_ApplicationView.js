/**
 * ApplicationView.js
 * What: Default Layout View
 * Role: Responsible for rendering layout .app, #header, #body, #footer divs
 */
define(["jquery","underscore","marionette", "text!/templates/layouts/default.html"], function($, _, Marionette, defaultLayout){
  "use strict";

  return Marionette.LayoutView.extend({
    template: _.template(defaultLayout),
    className: "app",
    regions: {
      header: "#header",
      body: "#body",
      footer: "#footer"
    }
  });

});
