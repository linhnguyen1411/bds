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

  vm.showData = function(id){
    productTypeService.showData(id).then(function mySuccess(response){
      if (response.data.status) {
        angular.extend(vm, response.data);
        $('#add-new-product-types').modal('show');
        vm.currentEditId = id;
      } else {
        swal("Sai rồi", "Tìm ko ra thằng loại bất động sản này", "error");
      }
    });
  }

  function createData(){
    productTypeService.createData({product_type: vm.product_type}).then(function mySuccess(response){
      $(".form-group-validate").removeClass("has-error");
      $(".form-group-validate").find(".help-block").remove();
      if (response.data.status) {
        angular.extend(vm, response.data);
        swal("Thành công", "Loại bất động sản mới đã được thêm", "success");
        $('#add-new-product-types').modal('hide');
      } else {
        var errors = response.data.errors;
        _.forEach(errors, function(values, key) {
          var $inputElement = $("[name$='[" + key + "]']");
          if (_.isEmpty(values)) return;
          var $parentInput = $inputElement.parents(".form-group-validate");
          $parentInput.addClass("has-error");
          var error = "<span class='help-block'>" + values[0] + "</span>";
          $inputElement.parent().append(error);
        })
      }
    })
  }

  function updateData(id){
    productTypeService.updateData(id, {product_type: vm.product_type}).then(function mySuccess(response){
      $(".form-group-validate").removeClass("has-error");
      $(".form-group-validate").find(".help-block").remove();
      if (response.data.status) {
        angular.extend(vm, response.data);
        swal("Thành công", "Loại bất động sản đó đã được sửa", "success");
        $('#add-new-product-types').modal('hide');
      } else {
        var errors = response.data.errors;
        _.forEach(errors, function(values, key) {
          var $inputElement = $("[name$='[" + key + "]']");
          if (_.isEmpty(values)) return;
          var $parentInput = $inputElement.parents(".form-group-validate");
          $parentInput.addClass("has-error");
          var error = "<span class='help-block'>" + values[0] + "</span>";
          $inputElement.parent().append(error);
        })
      }
    })
  }

  vm.destroyData = function(id){
    swal({
      title: "Chú ý!",
      text: "Mày có muốn xoá cái này thật không?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: "Xoá luôn",
      cancelButtonText: "Thôi đừng",
    },
    function() {
      productTypeService.destroyData(id).then(function mySuccess(response){
        if (response.data.status) {
          angular.extend(vm, response.data);
          swal("Thành công", "Xoá xong rồi đấy", "success");
        } else {
          swal("Thất bại", "Xoá không được, cái gì đó sai rồi.", "error");
        }
      })
    });
  }

  vm.submit = function(){
    if (vm.currentEditId) {
      updateData(vm.currentEditId);
    } else {
      createData();
    }
  }
}
