"use strict";

angular.module("homeApp")
  .factory("productService", ["common", productService]);

function productService(common) {
  var service = {
    loadData: loadData
  }

  return service;

  function loadData() {
    return common.ajaxCall("GET", "/products/load_data");
  }
}
