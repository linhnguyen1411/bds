"use strict";

angular.module("homeApp")
  .factory("hompageService", ["common", hompageService]);

function hompageService(common) {
  var service = {
    getData: getData,
    updateData: updateData
  }

  return service;

  function getData() {
    return common.ajaxCall("GET", "/");
  }

  function updateData() {
    return common.ajaxCall("GET", "");
  }
}
