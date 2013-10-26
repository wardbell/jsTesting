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


        describe('divide', function () {
            it('should correctly divide 6 and 2', function () {
                expect(calc.divide(6, 2)).toEqual(3);
            });
        });




        describe('divide when result is irrational', function () {
            beforeEach(function () {
                this.addMatchers({
                    toBeBetween: toBeBetween
                });
            });

            // 10 divided by 3 is not rational. How do we verify?
            it('should correctly divide 10 and 3', function () {

                // can't get there this way. JavaScript hates decimal math
                expect(calc.divide(10, 3)).not.toEqual(3.3333333);

                // gotta surround it
                expect(calc.divide(10, 3)).toBeBetween(3.3, 3.4);
            });

        });


        /* custom matchers */
        function toBeBetween(a, b) {
            var actual = this.actual;     /* jshint ignore:line */
                                                             
            var isBetween = actual > a && actual < b; 
            this.message = function () {  /* jshint ignore:line */
                var template = "actual value '{0}' should be between {1} and {2}.";
                return template.format(actual, a, b);
            };
            return isBetween;
        }
    });

})(this.code);