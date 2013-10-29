(function () {
    "use strict";

    var ctrl, ctrlFactory, datacontext, dc, $provide, $scope;

    describe('MyController', function () {

        beforeEach(module('app'));

        beforeEach(function () {
            module(['$provide', function (injected$provide) {
                $provide = injected$provide; // use to replace objects in injector
            }]);
        });

        // Purpose: get the controllerFactory service and set up the scope instance
        beforeEach(inject(function ($controller, $rootScope) {

            $scope = $rootScope.$new(); // Create new child scope

            ctrlFactory = $controller; // that's what $controller really is
        }));


        describe('when faking the datacontext', function () {

            // Purpose: prepare fake datacontext for injection
            beforeEach(function () {
                var fakeDc = {
                    getData: function () {
                        return [
                        { name: "fake joe" },
                        { name: "fake sally" },
                        { name: "fake bob" }]
                    }
                };

                // replace the current definition of 'datacontext' with the fake
                $provide.value('datacontext', fakeDc);
            });

            // Purpose: Setup the controller under test
            beforeEach(function () {

                inject(function (datacontext) {
                    dc = datacontext;
                });

                var ctorArgs = {
                    $scope: $scope
                };

                ctrl = ctrlFactory('MyController', ctorArgs);

            });
  
            /*** TESTS ***/

            it('controller should exist', function () {
                expect(ctrl).toBeTruthy();
            });

            it('controller should have data', function () {
                expect(ctrl.data).toBeTruthy();
            });

            it('controller should have fake data', function () {
                var data = ctrl.data;
                var first = data[0];

                expect(/fake/.test(first.name)).toBe(true);
            });
        });


        describe('when using the real datacontext', function () {

            // Purpose: Setup the controller under test
            beforeEach(function () {

                inject(function (datacontext) {
                    dc = datacontext;
                });

                var ctorArgs = {
                    $scope: $scope
                };

                ctrl = ctrlFactory('MyController', ctorArgs);

            });

            /*** TESTS ***/

            it('controller should have real data', function () {
                var data = ctrl.data;
                var first = data[0];

                expect(/real/.test(first.name)).toBe(true);
            });
        });

    });

})();