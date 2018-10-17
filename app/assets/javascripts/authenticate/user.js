$(document).ready(function() {
  $("#form-user-register, #form-forgot-pass, #form-edit-pass").on("submit", function(e) {
    e.preventDefault();

    $(this).find(".btn-lock").attr("disabled", true);
    var actionURL = $(this).attr("action");
    var method = $(this).attr("method");
    var data = new FormData(this);

    ajaxJsCall(actionURL, method, data, this);
  });

  $("#form-user-session").on("submit", function(e) {
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
        location.reload();
      },
      error: function() {
        resetFormError();
        $(".form-group").addClass("has-error");
        $("<span class='help-block'>Tên đăng nhập hoặc mật khẩu không đúng</span>").insertAfter($(".form-group:eq(0), .form-group:eq(1)").find(".input-group-addon").parent());
        setTimeOutSubmit("#form-user-session");
      }
    });
  });
});
