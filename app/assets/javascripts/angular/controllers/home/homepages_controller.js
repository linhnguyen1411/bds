'use strict';

angular.module('homeApp').controller('HomepagesController', HomepagesController);
HomepagesController.$inject = ['$location', '$scope', 'hompageService'];

function HomepagesController($location, $scope, hompageService) {
  var vm = this;

  vm.init = function() {
    hompageService.getData().then(function mySuccess(response){
      angular.extend(vm, response.data);
    });
  }
}
