'use strict';

angular.module('BlurAdmin.pages.categories')
  .controller('CategoriesController', CategoriesController);
CategoriesController.$inject = ['categoriesService'];

function CategoriesController(categoriesService) {
  var vm = this;

  categoriesService.getCategoriesList().then(function(res) {
    vm.categories = res.categories;
  });

  vm.addCategory = function(){
    vm.inserted = {
      id: vm.categories.length+1,
      name: '',
    };
    vm.categories.push(vm.inserted);
  };
  vm.removeCategory = function(index) {
    vm.categories.splice(index, 1);
  };
  vm.createCategory = function(){
    debugger;
    var params = {name: vm.inserted.name};
    categoriesService.createCategory(params)
      .then(function(resp){
        vm.categories.push(resp.data);
      })
  }
}
