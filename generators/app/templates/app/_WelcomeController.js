define(["App", "underscore", "marionette", "modules/welcome/view"], function(App, _, Marionette, view){
  return Marionette.Controller.extend({
    initialize: function(){
      App.App.ApplicationView.body.show(new view());
    }
  });
});
