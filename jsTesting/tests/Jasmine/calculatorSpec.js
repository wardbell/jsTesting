/* jasmine tests of application code */


(function (code) {
    "use strict";


    // Test application code
    describe('Calculator', function () {
        var calc;

        beforeEach(function () {
            calc = new code.Calculator();
        });


        describe('add', function () {

            it('should correctly sum two integers', function () {
                expect(calc.add(2, 2)).toEqual(4);
            });

            it('should be NaN when args are undefined', function () {
                expect(isNaN(calc.add(2))).toBeTruthy();
            });

        });
    });

})(this.code);