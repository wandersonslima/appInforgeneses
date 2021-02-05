(function (angular) {
    "use strict";

    angular.module("mainModule").service("descService",
            ['$http', '$location',
                function ($http, $location) {

                    var url = 'index.php/Api_Rest/';

                    //Busca dados da tabela pelo ID
                    this.getById = function(id){
                        return $http.get(url + "byId/id/" + id + "/format/json");
                    };
                }
            ]);
})(angular);