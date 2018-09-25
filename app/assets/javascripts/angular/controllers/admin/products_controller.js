'use strict';

angular.module('adminApp').controller('ProductsController', ProductsController);
ProductsController.$inject = ['$location', '$scope', 'productService'];

function ProductsController($location, $scope, productService) {
  var vm = this;
  vm.$scope = $scope;

  vm.init = function() {
  }
}
