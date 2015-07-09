define(["knockout", "./model"], function(ko, model) {
  "use strict";

  var model = new model();

  ko.bindingHandlers.html = {
    init: function(element, valueAccessor, allBindings){
      $(element).hide();
    },
    update: function(element, valueAccessor, allBindings){

      var valueUnwrapped = ko.unwrap(valueAccessor());

      if (valueUnwrapped) {
        $(element).show();
        $(element).text(valueUnwrapped);
      } else {
        $(element).hide();
      }
    }
  };

  var viewModel = function () {
    var self = this;

    self.model = model;

    self.email = ko.observable("");
    self.firstName = ko.observable("");
    self.lastName = ko.observable("");
    self.password = ko.observable("");
    self.email_message = ko.observable("");
    self.firstName_message = ko.observable("");
    self.lastName_message = ko.observable("");
    self.password_message = ko.observable("");

    self.validate = function(data){
      switch(data){
        case "email":
          var value = self.email();
          if(value.length < 1){

            self.email_message(i18n.t("user.login.email.required"));

          } else {
            var regex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
            var test = regex.test(value);

            if(!test){
              self.email_message(i18n.t("user.login.email.regex"));
            } else {
              self.email_message("");
              self.model.set({email: value});
            }
          }
          break;
        case "firstName":
          var value = self.firstName();
          if(value.length < 1){
            self.firstName_message(i18n.t("user.login.firstName.required"));
          } else {
            self.firstName_message("");
            self.model.set({firstName: value});
          }
          break;
        case "lastName":
          var value = self.lastName();
          if(value.length < 1){
            self.lastName_message(i18n.t("user.login.lastName.required"));
          } else {
            self.lastName_message("");
            self.model.set({lastName: value});
          }
          break;
        case "password":
          var value = self.password();
          if(value.length < 1){
            self.password_message(i18n.t("user.login.password.required"));
          } else {
            self.password_message("");
            self.model.set({password: value});
          }
          break;
      }
    };
  };


  return viewModel;

});
