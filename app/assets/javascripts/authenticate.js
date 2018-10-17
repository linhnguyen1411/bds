//= require jquery
//= require jquery_ujs
//= require plugin/bootstrap.min.js
//= require plugin/toastr.min.js
//= require plugin/ajax_errors.js
//= require turbolinks
//= require sweetalert
//= require constant
//= require_tree ./authenticate
//= require homes/app.js

jQuery(document).ready(function() {
  App.init();
  $.backstretch([
    "/assets/bg/19.jpg",
    "/assets/bg/18.jpg",
    ], {
      fade: 1000,
      duration: 7000
  });
});
