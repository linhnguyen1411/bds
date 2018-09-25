"use strict";

angular.module("adminApp")
  .factory("productTypeService", ["common", productTypeService]);

function productTypeService(common) {
  var service = {
    getData: getData,
    createData: createData
  }

  return service;

  function getData() {
    return common.ajaxCall("GET", "/admin/product_types");
  }

  function createData(params){
    return common.ajaxCall("POST", "", params);
  }
}
