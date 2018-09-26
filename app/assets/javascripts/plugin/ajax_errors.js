function resetFormError() {
  $(".has-error").removeClass("has-error");
  $(".help-block").remove();
}

function addErrors(res) {
  resetFormError();
  var errorMessages = JSON.parse(res.errors);
  $.each(errorMessages, function(key, value) {
    var $inputElement = $("[name$='[" + key + "]']").not("[name*='_attributes']").not("[type='hidden']");
    if (_.isEmpty(value)) return;
      addErrorToInput($inputElement, value[0]);
  });
}

function addErrorToInput($inputElement, errorMessage) {
  $inputElement.closest(".form-group").addClass("has-error");
  $("<span class='help-block'>" + errorMessage + "</span>").insertAfter($inputElement);
}

function ajaxCall(actionURL, method, data, btnLockElm) {
  $.ajax({
    url: actionURL,
    method: method,
    dataType: "json",
    data: data,
    processData: false,
    contentType: false,
    success: function(res) {
      setTimeOutSubmit(btnLockElm);
      if (res.status) {
        location.href = res.redirect_page;
      } else {
        addErrors(res);
      }
    }
  });
}

function setTimeOutSubmit(elm) {
  setTimeout(function(){
    $(elm).find(".btn-lock").attr("disabled", false);
  }, 1000);
}
