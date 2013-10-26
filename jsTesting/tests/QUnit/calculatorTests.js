/* QUnit tests of application code */

(function (code) {
    "use strict";


    // Test application code
    var calc;

    module('Calculator', {
        setup: function () {
            calc = new code.Calculator();
        }
    });  


    test('should sum two integers', 1, function () {
        var actual = calc.add(2, 2);
        equal(actual, 4, "2 + 2 should be 4; was " + actual);
    });

    test('should be NaN when args are undefined', function () {
        var actual = calc.add(2);
        ok(isNaN(actual), actual + " should be NaN");
    });


    test('should correctly divide 6 and 2', function () {
        var actual = calc.divide(6, 2);
        equal(actual, 3, "6 divided by 2 should be 3; was " + actual);
    });





    /* divide when result is irrational */

    // 10 divided by 3 is not rational. How do we verify?
    test('should correctly divide 10 and 3', function () {

        var actual = calc.divide(10, 3);


        // can't get there this way. JavaScript hates decimal math
        var expected = 3.3333333; // err... not so good.
        notEqual(actual, expected,
          "actual {0} is not equal to expected {1}"
          .format(actual, expected));

        // gotta surround it
        isBetween(actual, 3.3, 3.4);
    });


    /* custom matchers (not just for Jasmine :-) */

    function isBetween(actual, a, b, messageTemplate) {
        var isOk = actual > a && actual < b;
        var template = messageTemplate ||
                       "actual value '{0}' should be between {1} and {2}.";
        var message = template.format(actual, a, b);
        ok(isOk, message);
    }

})(this.code);