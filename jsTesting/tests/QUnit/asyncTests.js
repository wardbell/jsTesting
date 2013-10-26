/*** Async Testing ***/
(function (code) {
    "use strict";

    // None of our async tests should take longer than 2 seconds.
    QUnit.config.testTimeout = 3000;

    module("Async Tests");

    /*-- setTimeout async test --*/

    asyncTest("setTimeout async test", 1, function () {

        var msg;
        someComplicatedSetupThatCouldFail();

        setTimeout(function () {
            msg = "Giants won the 2012 World Series";
            assertGotMsg();
        }, 1000);    // wait a second

        function assertGotMsg() {
            ok(msg, "Got the message: " + msg);
            start(); // resume testrunner
        }

        function someComplicatedSetupThatCouldFail() { }
    });





    /*-- DOM async test --*/

    asyncTest("DOM manipulation async test", 1, function () {

        // ARRANGE
        var el = $("<div>the results</div>");
        $('#qunit-fixture').append(el);        // QUnit testrunner resets this div each test
        var calc = new code.Calculator(el);

        // ACT
        calc.hideResult(callback);

        // ASSERT
        function callback() {
            var displayStyle = el.css("display");
            equal(displayStyle, "none",
                "calculator results should be hidden; display style is '{0}'."
                 .format(displayStyle));
            start(); // resume testrunner
        }

    });


})(this.code);