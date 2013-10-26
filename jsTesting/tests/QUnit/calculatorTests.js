/* QUnit tests of application code */

(function (code) {
    "use strict";


    // Test application code
    var calc;

    module('Calculator', { setup: setup }) ;

    function setup() {
        calc = new code.Calculator();
    }


    test('should sum two integers', 1, function () {
        var actual = calc.add(2, 2);
        equal(actual, 4, "2 + 2 should be 4; was " + actual);
    });

    test('should be NaN when args are undefined', function () {
        var actual = calc.add(2);
        ok(isNaN(actual), actual + " should be NaN");
    });

})(this.code);