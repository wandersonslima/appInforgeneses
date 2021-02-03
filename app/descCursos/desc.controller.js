(function (angular) {
    "use strict";

    angular.module("mainModule").controller("descController", [
        '$scope', '$location', 'descService','$routeParams', 
        function ($scope, $location, descService, $routeParams) {

            $scope.title = "Descrição do Curso";
            var id = $routeParams.id;
            console.info("id pagina descCursos = "+id);

            /** Verficando se veio um Id como parametro
             * Buscar o Curso selecionado pelo cliente para obter a descrição
             */
            if ( id !== null)
            {
                descService.getById(id).success(function (data)
                {
                    $scope.descCurso = data;
                    console.log(data);
                }).error(function(data)
                {
                    throw Error(data);
                });
            }
        }
    ]);
})(angular);
