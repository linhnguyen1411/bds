angular.module("homeApp")
  .directive('select2Search', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      link: function(scope, element, attr, ngModelCtrl) {
        element.on('change', function() {
          var value = $(this).val();
          scope.$apply(function(){
            ngModelCtrl.$modelValue = value;
            scope.ngModel = value;
          });
        });
      }
    }
  });
