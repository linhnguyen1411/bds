'use strict';

angular.module('adminApp').controller('StagesController', StagesController);
StagesController.$inject = ['$location', '$scope', 'stageService'];

function StagesController($location, $scope, stageService) {
  var vm = this;
  vm.$scope = $scope;

  vm.init = function() {
  }
}
