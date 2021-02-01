(function (angular) {
    "use strict";

    angular.module("mainModule").controller("buscaController", [
        '$scope', '$location', 'buscaService',
        function ($scope, $location, buscaService) {

            // <editor-fold defaultstate="collapsed" desc="View models, scope items">

            $scope.title = "Resultado da busca";
            $scope.searchString = "";
            $scope.searchTable;
            // </editor-fold>

            // <editor-fold defaultstate="collapsed" desc="View model functions">
            /*
             * Get all data from tables
             */
            $scope.search = function () {

                if ($scope.searchString == "" || $scope.searchString == null) {
                    
                    buscaService.getAll($scope.searchString ).success(function (data) {
                        if(data.length > 0)
                            $scope.buscaCurso = data;
                        $location.path('buscaCursos');
                    }).error(function (data) {
                        throw Error(data);
                    });
                    console.info("if busca");
                }
                else{
                    
                    buscaService.getWhere($scope.searchString).success(function (data) {
                        $scope.buscaCurso = data;
                        $location.path('buscaCursos');
                    }).error(function (data) {
                        throw Error(data);
                    });
                    console.info("else busca");
                }
                    
            };
           /*
            * Redireciona para a pagina de descrição
            */
            $scope.selectType = function(data){
             
               $location.path('' + data.id);
            };
            
            // </editor-fold>
        }
    ]);
})(angular);
