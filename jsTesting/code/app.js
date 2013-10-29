(function () {
    "use strict";

    // create a module w/ no dependent modules
    var app = angular.module("app", []); 

    app.directive("mySimple", function () {
        // directive returns a function
        // with injected scope and element
        return function (scope, element) {
            element.addClass('plain');

            element.bind('click', function () {
                scope.clicked = true;
            });
        };
    });

})();