define(["jquery","underscore","marionette", "text!/templates/welcome.html"], function($, _, Marionette, template){
  "use strict";

  return Marionette.LayoutView.extend({
    template: _.template(template),
    className: "welcome",
  });

});
