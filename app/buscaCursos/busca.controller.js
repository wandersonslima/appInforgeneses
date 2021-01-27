(function (angular) {
    "use strict";

    angular.module("mainModule").controller("buscaController", [
        '$scope', '$location', 'buscaService',
        function ($scope, $location, buscaService) {

            // <editor-fold defaultstate="collapsed" desc="View models, scope items">

            $scope.title = "Cursos";
            $scope.menuItems = buscaService.getMenuItems();
            $scope.searchString = "";
            $scope.searchTable;

            // </editor-fold>

            // <editor-fold defaultstate="collapsed" desc="View model functions">

            /*
             * Menu items logic, sets active class and navigates to new view
             */
            $scope.navigate = function (index) {
                $scope.menuItems = buscaService.setMenuToActive(index);
            };

            /*
             * Get all data from tables
             */
            $scope.search = function () {

                if ($scope.searchString == "" || $scope.searchString == null) {
                    
                    buscaService.getAll($scope.searchString ).success(function (data) {
                        if(data.length > 0)
                            $scope.searchTable = data;
                        $location.path('buscaCursos');
                    }).error(function (data) {
                        throw Error(data);
                    });
                    console.info("if busca");
                }
                else{
                    
                    buscaService.getWhere($scope.searchString).success(function (data) {
                        $scope.searchTable = data;
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
