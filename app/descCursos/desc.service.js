(function (angular) {
    "use strict";

    angular.module("mainModule").service("descService",
            ['$http', '$location',
                function ($http, $location) {

                    var url = 'index.php/Api_Rest/';

                    // Get table data by id
                    this.getById = function(id){
                        return $http.get(url + "byId/id/" + id + "/format/json");
                    };
                }
            ]);
})(angular);