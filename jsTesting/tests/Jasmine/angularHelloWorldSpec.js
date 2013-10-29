//
// Courtesy http://egghead.io/lessons/angularjs-unit-testing-hello-world
(function () {
    "use strict";

    var element;

    describe("Angular Hello World", function () {

        // This doesn't work because we don't have Angular services we need

        //beforeEach(function () {
        //    element = angular.element("<div>{{2 + 2}}</div>")
        //});

        //it("should equal 4", function () {
        //    expect(element.html()).toBe("4");
        //});

        /* ----------- */
        // Inject two services: $compile and $rootScope

        var $scope;

        beforeEach(inject(function ($compile, $rootScope) {
            element = angular.element("<div>{{2 + 2}}</div>")

            $scope = $rootScope.$new();
            element = $compile(element)($scope);// compile a link fn and invoke
        }));

        it("should equal 4", function () {
            $scope.$digest(); // make angular evaluate the binding expression
            expect(element.html()).toBe("4");
        });
    })

})();