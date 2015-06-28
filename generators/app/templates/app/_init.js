/**
 * init.js
 * What: App Initializer
 * Initialize app and execute main script
 */
require(["App", "main"], function(App, main){

  App.start();

  main();

});
