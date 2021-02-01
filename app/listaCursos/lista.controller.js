(function (angular) {
    "use strict";

    angular.module("mainModule").controller("listaController", [
        '$scope', '$location', 'listaService',
        function ($scope, $location, listaService) {

            // <editor-fold defaultstate="collapsed" desc="View models, scope items">

            $scope.title = "Cursos";

            // </editor-fold>

            // <editor-fold defaultstate="collapsed" desc="View model functions">
            listaService.getAll().success(function (data) {
                $scope.listaCursos = data;
                if(data.length > 0)
                    $scope.listaCursos = data;
                $location.path('lista');
            }).error(function (data) {
                throw Error(data);
                console.info("erro");
            });
            console.info("Lista todos os cursos");
            // </editor-fold>
        }
    ]);

})(angular);
