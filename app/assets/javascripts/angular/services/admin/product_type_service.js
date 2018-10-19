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
    return common.ajaxCall("GET", "/admins/product_types/" + id);
  }

  function getData() {
    return common.ajaxCall("GET", "/admins/product_types");
  }

  function createData(params){
    return common.ajaxCall("POST", "/admins/product_types", params);
  }

  function destroyData(id){
    return common.ajaxCall("DELETE", "/admins/product_types/" + id);
  }

  function updateData(id, params){
   return common.ajaxCall("PUT", "/admins/product_types/" + id, params);
  }
}
