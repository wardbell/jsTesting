(function(testFns, code) {
    "use strict";

    var Calculator = code.Calculator;

    // jasmine-async..js stuff ... used below
    var async = new AsyncSpec(this); // create an async test class
    var xasync = testFns.xasync;     // to disable async tests with 'x' prefix

    describe("Async calculator", function () {
        var calc;

        describe("FX tests", function () {
            var el;

            beforeEach(function () {

                el = $('<div id="calcResults">the results</div>');
                $('body').append(el);
                calc = new Calculator(el); 

            });

            afterEach(function () {
                el.remove(); // remove element from DOM after each test
            });

            /*** TESTS ***/

            describe("hide result test", function () {
                /*---- oops .. no async awareness -----*/

                xit("should fail w/ non-async test", function () {

                    logDisplayState();
                    calc.hideResult(callback);
                    logDisplayState();

                    function callback() {
                        // not actually called within this tests timeframe!
                        // it will infect a later-running test!
                        logDisplayState();
                        expect(getDisplayState()).toBe("none");
                    }

                    // won't work called here because it hasn't happened in the DOM yet
                    logDisplayState();
                    expect(getDisplayState()).toBe("none");
                });

                /*---- runs/waitsFor -----*/

                // native jasmine style

                it("should work with runs/waitsFor", function () {

                    var flag; // waitsFor

                    runs(function () {
                        calc.hideResult(callback);
                    });

                    waitsFor(function () {
                        return flag;
                    },
                    "hide result flag to be true", /* timeout error msg */
                    600 /*Timeout value ... 100ms longer than the fadeout. Fails at 100.*/);

                    runs(function () {
                        expect(getDisplayState()).toBe("none");
                    });

                    function callback() {
                        flag = true;
                    }

                });


                /*---- Derick's jasmine-async 'async.it' ----*/

                // Mocha.js style

                async.it("should work with async.it", function (done) {

                    calc.hideResult(callback);

                    function callback() {
                        expect(getDisplayState()).toBe("none");
                        done();
                    }
                });
            });





            /*---- setTimeout tests -----*/
            describe("pause before hiding test", function () {

                var pauseTime = Calculator.PAUSE_MS + "ms";
                async.it("should pause for "+pauseTime, function (done) {

                    // No timeout in jasmine-async so always get Jasmine default of 5 sec
                    // Can change that for a given spec with this
                    // jasmine.getEnv().currentSpec.env.defaultTimeoutInterval = time-in-ms

                    // Timeout if significantly exceeds expected time.
                    jasmine.getEnv().currentSpec.env
                           .defaultTimeoutInterval = Calculator.PAUSE_MS + 100;

                    var donePausing = false;
                    calc.pause(callback);

                    function callback() {
                        var donePausing = true;
                        // ... stuff happens
                        done();
                    }
                });
            });

            describe("pause before hiding test with jasmine mock clock", function () {

                beforeEach(function () {
                    jasmine.Clock.useMock();
                });

                it("should mock the pause (sync test)", function () {

                    var donePausing = false;
                    calc.pause(callback);

                    // move time ahead 1ms short
                    jasmine.Clock.tick(Calculator.PAUSE_MS - 1 ); 
                    expect(donePausing).toBeFalsy(); // still not called

                    // move time ahead a few ms.
                    jasmine.Clock.tick(100); 
                    expect(donePausing).toBeTruthy(); // called by now

                    function callback() {
                        donePausing = true;
                    }
                });
            });


        });

        /** HELPERS **/

        function getDisplayState() {
            return $('#calcResults').css("display");
        }
        function logDisplayState() {
            console.log('element\'s display:' + getDisplayState());
        }
    });





})(this.testFns, this.code);