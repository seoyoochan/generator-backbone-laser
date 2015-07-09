define(["backbone", "underscore", "marionette", "knockout", "text!/templates/user/registration.html", "./model", "./viewModel"],
  function(Backbone, _, Marionette, ko ,template, model, viewModel){
  "use strict";

  var viewModel = new viewModel();

  var view = Marionette.LayoutView.extend({
    template: _.template(template),
    className: "registration",
    events: {
      "click .button": "clickSubmit"
    },
    initialize: function(){
    },
    onShow: function(){

      $(document).ready(function($){
        ko.applyBindings(viewModel,$(".registration .form")[0]);
      });
    },
    clickSubmit: function(e){
      e.preventDefault();

      // Validate and Update all inputs values to model
      var inputs = $(".form").find("input");

      inputs.trigger("blur");

      var serialized = viewModel.model.toJSON();

      $.ajax({
        dataType: "json",
        url: viewModel.model.url(),
        method: "POST",
        data: serialized
      }).done(function(response){

        localStorage.setItem("uid", response.data.uid);
        localStorage.setItem("confirmation_sent", true);

        Backbone.history.navigate("user/unconfirmed", { trigger: true });

      }).fail(function(xhr){
        console.log(xhr.responseJSON);
        //$.each(xhr.responseJSON.errors.full_messages, function(index, value){
        //  console.log(value);
        //});
      });

      return false;
    }
  });

  return view;

});
