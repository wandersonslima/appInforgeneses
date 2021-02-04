


(function (angular) {

    "use strict";

    angular.module("mainModule", ['ngRoute', 'ngAnimate', 'mm.foundation'])
            .config(function ($routeProvider) {

                $routeProvider
                        .when("/home", 
                        {
                            templateUrl: 'app/home/home.html',
                            controller: 'HomeController'
                        })
                        .when("/lista", 
                        {
                            templateUrl: 'app/listaCursos/lista.html',
                            controller: 'listaController'
                        })
                        .when("/descCursos/:id",
                        {
                            templateUrl: 'app/descCursos/descCursos.html',
                            controller: 'descController'
                        })
                        .otherwise({redirectTo: '/lista'});



            });
})(angular);