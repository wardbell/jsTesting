// 
// Courtesy http://egghead.io/lessons/angularjs-unit-testing-a-directive
(function () {
    "use strict";

    var element;
    var $scope;

    describe('My simple angular directive', function () {

        beforeEach(module('app'));

        beforeEach(inject(function ($compile, $rootScope) {

            element = angular.element("<div my-simple>{{2 + 2}}</div>")
             
            $scope = $rootScope.$new();
            element = $compile(element)($scope);// compile a link fn and invoke

        }));

        it("should add a 'plain' class", function () {
            expect(element.hasClass('plain')).toBe(true);
        });

        it("should respond to click", function () {
            browserTrigger(element, 'click');
            expect($scope.clicked).toBe(true);
        });
    })

})();