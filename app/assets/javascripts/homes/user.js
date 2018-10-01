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
        $("<span class='help-block'>Tên đăng nhập hoặc mật khẩu không đúng</span>").insertAfter($(".form-group:eq(0), .form-group:eq(1)").find("input"));
        setTimeOutSubmit("#form-user-session");
      }
    });
  });
  //User update
  $('#user-information').on('submit', function(e) {
    var csrfToken = $("#authenticity_token").val();
    e.preventDefault();
    $.ajax({
      url: 'profile',
      method: "PUT",
      dataType: "json",
      headers: {
        'X-CSRF-Token': csrfToken
      },
      data: new FormData(this),
      processData: false,
      contentType: false,
      success: function(response) {
        if (response.status) {
          swal("Thành công", "Thay đổi thông tin thành công", "success");
        }
      }
    });
  });

  function icheck(){
    if($(".radio-gender").length > 0){
      $(".radio-gender").each(function(){
        var $el = $(this);
        var skin = "_square",
        color = "-yellow";
        var opt = {
          checkboxClass: 'icheckbox' + skin + color,
          radioClass: 'iradio' + skin + color,
        }
        $el.iCheck(opt);
      });
    }
  }

  $(function(){
    icheck();
  })
});
