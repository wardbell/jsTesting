/* The most basic jasmine tests */

// See matchers https://github.com/pivotal/jasmine/wiki/Matchers

(function () {
    "use strict";

    describe("Some Jasmine tests", function () {

        it('should handle truthyness and falsyness', function () {
            expect(true).toBeTruthy();
            expect(1).toBeTruthy();
            expect('0').toBeTruthy();
            expect(' ').toBeTruthy();
            expect({}).toBeTruthy();

            expect(false).toBeFalsy();
            expect(0).toBeFalsy();
            expect('').toBeFalsy();
            expect(null).toBeFalsy();
            expect(undefined).toBeFalsy();
            expect().toBeFalsy();
        });

        it('should handle true ... period', function () {
            expect(true).toBe(true);

            expect(1).not.toBe(true);
            expect({}).not.toBe(true);
        });

        it('should be a specifed value', function () {

            expect(2).toBe(2);

            expect(2).not.toBe(3);
        });




        it('should compare object identity', function () {

            var myObj = { foo: 'foo' };

            expect(myObj).toBe(myObj);

            expect(myObj).not.toBe({ foo: 'foo' });

        });



        it('should compare object equivalence', function () {

            var myObj = { foo: 'foo' };

            expect(2).toEqual(2);

            expect(myObj).toEqual({ foo: 'foo' });

        });



        it("should catch exceptions", function () {

            expect(function () {
                throw new Error();
            }).toThrow(); // expect to throw some kind of error

            // a custom error type
            var CustomError = function (msg) { 
                this.message = msg || "custom error message";
            };

            expect(function () {
                throw new CustomError();
            }).toThrow(); // expect to throw some kind of error


            expect(function () {
                throw new CustomError('Oh no!');
            }).toThrow(new CustomError('Oh no!'));// expect to throw specific error


        });

        it('can write to console', function () {
            console.log('Hi there! I\'m writing to the console');
        });



        // Custom Matchers 
        it('should succeed with custom cool matcher', function () {

            // usually add matchers in a beforeEach
            this.addMatchers({
                toBeCool: function () {
                                                                        /* jshint ignore:start */
                    var isCool = this.actual === (arguments[0] || 'Ward');
                    var message = this.actual + (isCool ? ' is cool.' : ' is not cool.');
                    this.message = function () { return message; };
                                                                        /* jshint ignore:end */
                    console.log(message);
                    return isCool;
                }
            });

            expect('Ward').toBeCool();

            expect('Sam').not.toBeCool(); // not cool

            expect('You').toBeCool('You');
        });



        // defined in customMatchers.js
        it('should succeed with custom regex matcher', function () {

            expect('Spider-man Menaces City')
            .toMatch(/spider[- ]?man/i);

            // zip code
            expect('90201').toMatch(/^\d{5}([\-]\d{4})?$/);
        });


        // defined in customMatchers.js
        it('should succeed with custom toFail matcher', function () {
            expect().not.toFail('fail deliberately!');
        });

    });



})();