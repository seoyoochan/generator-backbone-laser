define(["App", "backbone"], function(App, Backbone){

  var model = Backbone.Model.extend({
    defaults: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirm_success_url: "http://localhost:9000/#/user/confirmed"
    },
    url: function () {
      return App.App.api_url + "/auth";
    }
  });

  return model;
});
