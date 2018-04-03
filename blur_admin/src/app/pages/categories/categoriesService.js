'use strict';

angular.module('BlurAdmin.pages.categories')
  .factory('categoriesService', ['common', categoriesService]);

function categoriesService(common) {
  return {
    getCategoriesList: getCategoriesList,
    createCategory: createCategory,
  }
  function getCategoriesList(params) {
    return common.ajaxCall('GET', '/manager/categories', params);
  }
  function createCategory(params){
    return common.ajaxCall('POST','/manager/categories', params);
  }
}
