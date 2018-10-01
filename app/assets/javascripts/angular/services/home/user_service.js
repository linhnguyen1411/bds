"use strict";

angular.module("homeApp")
  .factory("userService", ["common", userService]);

function userService(common) {
  var service = {
    updateData: updateData
  }

  return service;

  function updateData() {
    return common.ajaxCall("GET", "");
  }
}
