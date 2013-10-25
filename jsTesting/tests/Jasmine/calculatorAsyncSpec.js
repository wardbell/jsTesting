(function(testFns, code) {
    "use strict";

    describe("Calculator", function () {
        var calc;

        describe("FX tests", function () {
            var el;

            beforeEach(function () {

                el = $("<div>the results</div>");
                $('body').append(el);
                calc = new code.Calculator(el); 

            });

            afterEach(function () {
                el.remove(); // remove element from DOM after each test
            });


            /*** TESTS ***/

            /*---- oops .. no async awareness -----*/

            xit("should hide result <doesn't work>", function () {

                calc.hideResult(callback);

                function callback() {
                    // not actually called within this tests timeframe!
                    // it will infect a later-running test!
                    expect(el.css("display")).toBe("none");
                }

                // won't work called here because it hasn't happened in the DOM yet
                expect(el.css("display")).toBe("none");
            });

            /*---- runs/waitsFor -----*/

            // native jasmine style

            it("should hide result <with runs/waitsFor>", function () {

                var flag; // waitsFor

                runs(function () {
                    calc.hideResult(callback);
                });
                
                waitsFor(function () {
                    return flag;
                },
                "hide result flag to be true", /* timeout error msg */
                600 /*Timeout value ... 100ms longer than the fadeout. Fails at 100.*/                );

                runs(function () {
                    expect(el.css("display")).toBe("none");
                });

                function callback() {
                    flag = true;
                }

            });


            /*---- Derick's async.it ----*/

            // Mocha.js style

            // These belong at the top of first describe
            var async = new AsyncSpec(this); 
            var xasync = testFns.xasync;     // to disable async tests with 'x' prefix

            async.it("should hide result <with async.it>", function (done) {
                calc.hideResult(callback);

                function callback() {
                    expect(el.css("display")).toBe("none");
                    done();
                }
            });
        });



    });





})(this.testFns, this.code);