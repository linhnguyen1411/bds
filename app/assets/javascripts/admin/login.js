$(function() {
  Login.init();
});

var Login = function() {
  var switchView = function(viewHide, viewShow, viewHash){
    viewHide.slideUp(250);
    viewShow.slideDown(250, function(){
      $('input').placeholder();
    });

    if ( viewHash ) {
      window.location = '#' + viewHash;
    } else {
      window.location = '#';
    }
  };

  return {
    init: function() {
      var formLogin     = $('#form-login'),
        formReminder  = $('#form-reminder');

      $('#link-reminder-login').click(function(){
        switchView(formLogin, formReminder, 'reminder');
      });

      $('#link-reminder').click(function(){
        switchView(formReminder, formLogin, '');
      });

      if (window.location.hash === '#reminder') {
        formLogin.hide();
        formReminder.show();
      }
    }
  };
}();
