"use strict";

angular.module("adminApp")
  .factory("productService", ["common", productService]);

function productService(common) {
  var service = {
    loadData: loadData,
    createData: createData
  }

  return service;

  function loadData() {
    return common.ajaxCall("GET", "");
  }

  function createData(params){
    return common.ajaxCall("POST", "", params);
  }
}
