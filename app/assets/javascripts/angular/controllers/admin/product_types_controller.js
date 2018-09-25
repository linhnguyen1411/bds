'use strict';

angular.module('adminApp').controller('ProductTypesController', ProductTypesController);
ProductTypesController.$inject = ['$location', '$scope', 'productTypeService'];

function ProductTypesController($location, $scope, productTypeService) {
  var vm = this;
  vm.$scope = $scope;

  vm.init = function() {
    productTypeService.getData().then(function mySuccess(response){
      angular.extend(vm, response.data);
    });
  }
}
