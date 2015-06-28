define(["jquery"], function($){

  var main = function(){

    var locale = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
    var timezone = jstz.determine().name();

    $.cookie("locale", locale);
    $.cookie("timezone", timezone);


    $(document).ready(function(){

      i18n.init({
        fallbackLng: "en",
        useDataAttrOptions: true,
        debug: false,
        useCookie: false,
        resGetPath: "locales/__lng__/__lng__.json",
        useLocalStorage: false,
        localStorageExpirationTime: 86400000 // in ms, default 1 day,
      }).done(function(){
        $(document).i18n();

        $("#body .welcome .locale").html($.cookie("locale"));
        $("#body .welcome .tz").html($.cookie("timezone"));
      });

    });

  };

  return main;

});
