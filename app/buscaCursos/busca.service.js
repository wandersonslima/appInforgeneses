(function (angular) {
    "use strict";

    angular.module("mainModule").service("buscaService",
            ['$http', '$location',
                function ($http, $location) {

                    var url = 'index.php/Api_Rest/';
                    /*
                     * Gets all table names
                     */
                    this.getAll = function () {
                        return $http.get(url + "all/format/json");
                    };

                    /*
                     * Gets table with name like search
                     * @param string search - search string
                     */
                    this.getWhere = function (search) {
                        return $http.get(url + "where/name/" + search + "/format/json");
                    };

                }


            ]);


})(angular);