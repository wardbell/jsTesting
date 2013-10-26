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



        /** sinon SPIES **/

        describe('log (spy)', function () {
            var logSpy;

            beforeEach(function () {
                logSpy = sinon.spy(calc, 'log');
            });

            it('should be called on "add"', function () {
                calc.add(1, 2);
                expect(logSpy.called).toBe(true);
            });

            it('should be called with args 1 & 2 and returned 3', function () {
                calc.add(1, 2);

                expect(logSpy.calledOnce).toBe(true);

                var spyCall = logSpy.getCall(0); // get the first (and only) call

                expect(spyCall.args[2]).toEqual(1);
                expect(spyCall.args[3]).toEqual(2);
                expect(spyCall.returnValue).toEqual(3);

                expect(spyCall.calledWith('add', 3, 1, 2)).toBe(true); // alternatively
            });
        });

        // typical spying with a callback
        // also contrasts sinon asserts with jasmine asserts

        describe('onError callback (spy)', function () {
            var onErrorSpy;

            beforeEach(function () {
                calc.onError = onErrorSpy = sinon.spy();
            });

            it("should not be called when denominator is ok", function () {
                calc.divide(1, 1);

                // sinon assert for better error message
                sinon.assert.notCalled(onErrorSpy);
                //expect(onErrorSpy.called).toBe(false);
            });

            it("should be called when divide by 0", function () {
                calc.divide(1, 0);

                // sinon assert for better error message
                sinon.assert.called(onErrorSpy);
                //expect(onErrorSpy.called).toBe(true);
            });

            it("should say what's wrong when divide by 0", function () {
                calc.divide(1, 0);

                // sinon assert for better error message
                sinon.assert.calledWithMatch(onErrorSpy, /'0' is out-of-bounds/);
                //expect(onErrorSpy.calledWithMatch(/'0' is out-of-bounds/)).toBe(true);
            });

        });



        /** sinon STUBS **/

        describe('"add" when stubbed', function () {
            var stub;
            var logSpy;

            beforeEach(function () {
                stub = sinon.stub(calc, 'add').returns(42);
                logSpy = sinon.spy(calc, 'log');
            });


            it("should still be called", function () {
                calc.add(1, 2);
                expect(stub.called).toBe(true);
            });

            it("should always return 42", function () {
                calc.add(1, 2);
                calc.add(10, 3.124);

                // a stub is also a spy
                expect(stub.alwaysReturned(42)).toBe(true);
            });

            it("should not log", function () {
                calc.add(1, 2);
                calc.add(10, 3.124);

                expect(logSpy.called).toBe(false);
                expect(logSpy.callCount).toEqual(0); // alternatively
            });

            it("can be restored", function () {
                stub.restore();
                calc.add(1, 2);
                expect(logSpy.calledOnce).toBe(true);
            });
        });

    });

})(this.code);