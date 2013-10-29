// Demo app controller and datacontext
(function () {
    "use strict";

    angular.module('app').controller('MyController',

        function ($scope, datacontext) {
            var ctl = this;
            $scope.ctl = ctl;

            ctl.data = datacontext.getData();
        }
    );

    angular.module('app').service('datacontext', datacontext);

    function datacontext () {
        // "real" data
        this.getData = function() {
            return [
            { name: "real joe" },
            { name: "real sally" },
            { name: "real bob" }]
        }
    }



})();