// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require turbolinks
//= require homes/jquery.min.js
//= require ckeditor/init
//= require wow
//= require owl.carousel
//= require bootstrap-sprockets
//= require icheck
//= require plugin/ajax_errors
//= require plugin/lodash.min
//= require sweetalert
//= require_tree ./homes

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
