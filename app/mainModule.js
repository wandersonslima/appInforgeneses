


(function (angular) {

    "use strict";

    angular.module("mainModule", ['ngRoute', 'ngAnimate', 'mm.foundation'])
            .config(function ($routeProvider) {

                $routeProvider
                        .when("/buscaCursos",{
                           templateUrl: 'app/buscaCursos/buscaCursos.html'
                        })
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
                        .otherwise({redirectTo: '/lista'});



            });
})(angular);