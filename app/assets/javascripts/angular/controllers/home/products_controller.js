'use strict';

angular.module('homeApp').controller('ProductsController', ProductsController);
ProductsController.$inject = ['$location', '$scope', 'hompageService'];

function ProductsController($location, $scope, hompageService) {
  var vm = this;

  vm.init = function() {
    hompageService.getData().then(function mySuccess(response){
      angular.extend(vm, response.data);
    });
  }
}
