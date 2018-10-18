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
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require ckeditor/init
//= require owl.carousel
//= require plugin/ajax_errors
//= require plugin/lodash.min
//= require sweetalert
//= require homes/jquery.cubeportfolio.min
//= require homes/jquery.masonry.min
//= require homes/ladda.min
//= require homes/imagesloaded.min
//= require constant
//= require_tree ./homes
//= require homes/datepicker.js
//= require select2-full

var ready = function(){
  App.init();
  App.initParallaxBg();
  OwlCarousel.initOwlCarousel();
  $('#search-city').select2({
    placeholder: "Chọn thành phố"
  });
  App.initCounter();
  App.initScrollBar();
  RegForm.initRegForm();
};
$(document).on('turbolinks:load', ready);
