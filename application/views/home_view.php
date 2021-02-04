<!DOCTYPE html>
<html>   
    <head>
        <title>Cursos</title>
        <link href="assets/bower_components/foundation/css/foundation.min.css" rel="stylesheet" type="text/css"/>
        <link href="assets/bower_components/style.css" rel="stylesheet" type="text/css"/>
    </head>
    <body ng-app="mainModule">
        <div>
            <nav class="top-bar" data-topbar role="navigation">
                <ul class="title-area">
                        <li class="name">
                            <h1><a href="#/home">Home</a></h1>
                        </li>
                </ul>
                <ul class="title-area">
                    <li class="name">
                        <h1><a href="#/lista">Cursos</a></h1>
                    </li>
                </ul>
            </nav>

            <div ng-view>

            </div>

            <footer class="small-offset-1 small-11 columns footer bottom" >
              <h2><p>Inforgeneses</p></h2>
            </footer>
        </div>


    </body>

    <!-- SCRIPTS -->

    <!-- Angular main and dependencies -->
    <script src="assets/bower_components/angular/angular.js" type="text/javascript"></script>
    <script src="assets/bower_components/angular-foundation/mm-foundation-tpls.min.js" type="text/javascript"></script>
    <script src="assets/bower_components/angular-route/angular-route.min.js" type="text/javascript"></script>
    <script src="assets/bower_components/angular-animate/angular-animate.min.js" type="text/javascript"></script>
    <script src="app/mainModule.js" type="text/javascript"></script>

    <!-- home -->
    <script src="app/home/home.controller.js" type="text/javascript"></script>

    <!-- listaCursos -->
    <script src="app/listaCursos/lista.controller.js" type="text/javascript"></script>
    <script src="app/listaCursos/lista.service.js" type="text/javascript"></script>

    <!-- descCursos -->
    <script src="app/descCursos/desc.controller.js" type="text/javascript"></script>
    <script src="app/descCursos/desc.service.js" type="text/javascript"></script>

    <!-- Formatters -->
    <script src="app/formatters/number.formatter.js" type="text/javascript"></script>
    <script src="app/formatters/percentage.formatter.js" type="text/javascript"></script>
    <script src="app/formatters/decnumber.formatter.js" type="text/javascript"></script>
</html>