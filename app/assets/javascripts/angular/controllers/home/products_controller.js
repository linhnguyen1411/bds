'use strict';

angular.module('homeApp').controller('ProductsController', ProductsController);
ProductsController.$inject = ['$location', '$scope', 'productService'];

function ProductsController($location, $scope, productService) {
  var vm = this;
  vm.I18nProductDetailOptions = I18n.t("product_detail.types");
  vm.I18nProductExtentionOptions = I18n.t("product_extention.types");
  vm.I18nProductSocialOptions = I18n.t("product_social.types");

  vm.init = function() {
    productService.loadData().then(function mySuccess(response){
      angular.extend(vm, response.data);
    });
  }


  // js

  $('.select-provinces').select2({
    width: '100%',
    ajax: {
      url: '/provinces',
      dataType: 'json',
      data: function(params) {
        return {search_content: params.term}
      },
      processResults: function(data) {
        return {results: data.provinces};
      }
    },
    templateResult: formatResult,
    templateSelection: formatSelection,
  }).trigger('change');
  function formatResult(province) {
    return province.name;
  }
  function formatSelection(province) {
    return province.name;
  }
}
