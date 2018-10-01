'use strict';

angular.module('homeApp').controller('UsersController', UsersController);
UsersController.$inject = ['$location', '$scope', 'userService'];

function UsersController($location, $scope, userService) {
  var vm = this;

  vm.init = function(user) {
    vm.user = user;
  }
}
