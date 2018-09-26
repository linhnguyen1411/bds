"use strict";

angular.module("adminApp")
  .factory("productTypeService", ["common", productTypeService]);

function productTypeService(common) {
  var service = {
    showData: showData,
    getData: getData,
    createData: createData,
    updateData: updateData,
    destroyData: destroyData
  }

  return service;

  function showData(id) {
    return common.ajaxCall("GET", "/admin/product_types/" + id);
  }

  function getData() {
    return common.ajaxCall("GET", "/admin/product_types");
  }

  function createData(params){
    return common.ajaxCall("POST", "/admin/product_types", params);
  }

  function destroyData(id){
    return common.ajaxCall("DELETE", "/admin/product_types/" + id);
  }

  function updateData(id, params){
   return common.ajaxCall("PUT", "/admin/product_types/" + id, params);
  }
}
