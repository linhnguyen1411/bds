$(document).ready(function(){
  toastr.options = {
    "closeButton": true,
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut",
    "newestOnTop": true
  }

  $("#form-reminder, #form-change-password").on("submit", function(e) {
    e.preventDefault();

    $(this).find(".btn-lock").attr("disabled", true);
    var actionURL = $(this).attr("action");
    var method = $(this).attr("method");
    var data = new FormData(this);

    ajaxJsCall(actionURL, method, data, this);
  });

  $("#form-login").on("submit", function(e) {
    e.preventDefault();

    $(this).find(".btn-lock").attr("disabled", true);
    var actionURL = $(this).attr("action");
    var method = $(this).attr("method");
    var data = new FormData(this);

    $.ajax({
      url: actionURL,
      method: method,
      dataType: "json",
      data: data,
      processData: false,
      contentType: false,
      success: function(res) {
        location.href = "/admin/dashboard";
      },
      error: function() {
        resetFormError();
        $(".form-group").addClass("has-error");
        $("<span class='help-block'>Tên đăng nhập hoặc mật khẩu không đúng</span>").insertAfter($(".input-group:eq(0), .input-group:eq(1)").find("input"));
        setTimeOutSubmit("#form-login");
      }
    });
  });
});
