(function () {
  'use strict';

  angular.module('commonLib', []);

  angular.module('commonLib')
    .factory('common', ['$http', '$q', function($http, $q) {
      return {
        ajaxCall: function(method, url, params, cache) {
          var def = $q.defer();
          $http({method: method, url: url, params: params, cache: cache})
            .success(function(res) {
              def.resolve(res);
            })
            .error(function(err) {
              def.reject(err);
            })
          return def.promise;
        }
      }}
    ])
})();
