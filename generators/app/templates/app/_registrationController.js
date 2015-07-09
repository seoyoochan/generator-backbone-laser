define(["App", "marionette", "./view"], function(App, Marionette, view){
  return Marionette.Controller.extend({
    initialize: function(){
      App.App.ApplicationView.body.show(new view());
    }
  });
});
