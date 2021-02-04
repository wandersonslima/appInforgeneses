(function (angular) {
    "use strict";

    angular.module("mainModule").controller("listaController", [
        '$scope', '$location', 'listaService',
        function ($scope, $location, listaService) {

            $scope.title = "Cursos";
            
            /*
             * Lista todos os cursos e ordena por data de criação
             */
            if ($scope.searchString == null)
            {
                listaService.getAll().success(function (data) {
                    if(data.length > 0)
                        $scope.listaCursos = data;
                    $location.path('lista');
                }).error(function (data) {
                    throw Error(data);
                    console.info("erro");
                });
                console.info("Lista todos os cursos");

            }
           /**
            * Busca de cursos por nome
            */
            $scope.search = function () {

                if ($scope.searchString == "" || $scope.searchString == null) {
                    
                    listaService.getAll($scope.searchString ).success(function (data) {
                        if(data.length > 0)
                            $scope.listaCursos = data;
                        $location.path('lista');
                    }).error(function (data) {
                        throw Error(data);
                    });
                    console.info("if busca");
                }
                else{
                    
                    listaService.getWhere($scope.searchString).success(function (data) {
                        $scope.listaCursos = data;
                        $location.path('lista');
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
             
            $location.path('descCursos/' + data.id);
            console.info("selecttype");
            };
        }
        
    ]);

})(angular);
