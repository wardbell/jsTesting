/*** Async Testing ***/
(function () {
"use strict";

module("10 - Async Tests");

// None of our tests should take longer than 2 seconds.
QUnit.config.testTimeout = 3000;

asyncTest("async test", 1, function () {

    var msg;
    someComplicatedSetupThatCouldFail();

    setTimeout(function () {
        msg = "Giants won the 2012 World Series";
        assertGotMsg();
    }, 2000);

    function assertGotMsg() {
        ok(msg, "Got the message: " + msg);
        start(); // resume test
    }

    function someComplicatedSetupThatCouldFail() { }
});


})();