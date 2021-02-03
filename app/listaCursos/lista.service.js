(function (angular) {
    "use strict";

    angular.module("mainModule").service("listaService",
            ['$http', '$location',
                function ($http, $location) {

                    var url = 'index.php/Api_Rest/';
                    /*
                     * Busca todos os cursos 
                     */
                    this.getAll = function () {
                        return $http.get(url + "all/format/json");
                    };
                }
            ]);
})(angular);