/********************************************
  Pre-test setup and post-test teardown
 ********************************************/

(function () {
    "use strict";

    // "Resources" outside of the tests with which tests could interact
    var testCounter = 0;
    var resource = "foo";


    // A "test" that we'll run repeatedly
    // to show the state of our "resources"
    function moduleTest(name) {
        logTestCounter("Starting '{0}' test, ".format(name));
        logResourceState("Starting '{0}' test, ".format(name));
        resource = name; // dirty the resource
        logResourceState("After dirtying the resource, ".format(name));
    }

    function logTestCounter(prefix) {
        ok(true, prefix + " test counter = " + testCounter);
    }
    function logResourceState(prefix) {
        ok(true, prefix + " resource = '" + resource + "'");
    }






    /****** Module with no LifeCycle **********/

    // Notice that each test "pollutes" the resources
    // Tests shouldn't share state!

    module("02 - Module Tests");

    test("first test without LifeCycle", function () {
        moduleTest("first");
    });

    test("second test without LifeCycle", function () {
        moduleTest("second");
    });










    /****** Module with LifeCycle **********/

    // Use setup/teardown to isolate state and cleanup resources

    module("02 - Module Tests", {
        setup: setup,
        teardown: teardown
    });

    function setup() {
        logTestCounter("At setup, ");
        logResourceState("At setup, ");
        logMoreState("At setup, ", this.moreState);

        testCounter += 1;
        resource = "foo";

        // 'this' is created and shared with each test and with teardown
        this.moreState = 12345;
        logMoreState("After setup, ", this.moreState);
    }

    function teardown() {
        logTestCounter("At teardown, ");
        logResourceState("At teardown, ");
        logMoreState("At teardown, ", this.moreState);

        // can reset "resources" here too
        resource = "bar";
    }

    function logMoreState(prefix, state) {
        ok(true, prefix + " moreState = '" + state + "'");
    }


    // tests with lifecycle

    test("third test with LifeCycle", function () {
        moduleTest("third");
        this.moreState = "dirty this.MoreState";
    });

    test("fourth test with LifeCycle", function () {
        moduleTest("fourth");
        this.moreState = "dirty this.MoreState again";
    });

})();