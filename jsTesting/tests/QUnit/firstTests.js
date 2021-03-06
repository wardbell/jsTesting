﻿(function () {
"use strict";

    module("First Tests");

    test("always passes", function () {
        ok(true, "it passed");
    });



    test("always fails", function () {
        // make it fail
        ok(true, "it fails deliberately.");
    });




    // Expected a certain number of assertions
    test("expects exactly one assertion", 1, function () {
        ok(true, "first assert passed");
        //ok(true, "2nd assert fails; expected 2 asserts");
    });

    test("expects no assertions",function () {
        expect(0);
        //ok(true, "assert fails; expected 0 asserts");
    });



    test("beware of type coercion", function () {
        // JavaScript coerces a string "1" to an integer
        ok(1 == '1', "should coerce '1' to 1");
    });





    test("equals assert does type coercion", function () {
        equal(1, 1, "1 should be 1");
    });


    test("assert with deep equals does ===", 1, function () {

        notDeepEqual(1, '1',
        "1 should not deepEqual '1'");

    });

    test("assert on object with deep equals", 2, function () {

        var sut = { foo: "bar" };
        notEqual(sut, { foo: "bar" },
            "should not be equal because not same object");

        deepEqual(sut, { foo: "bar" },
            "objects should have value equality at every level");
    });





    test("qunit exception handling", function () {

        raises(function () {
            throw new Error();
        }, "must throw some kind of error");

    });

    // What if you have a custom error type?
    // a custom error type
    var CustomError = function (msg) {
        this.message = msg || "custom error message";
    };

    test("qunit exception handling with custom error: passes when it shouldn't", function () {

        // Doesn't care.
        // Passes ... a false positive
        raises(function () {
            console.log("about to throw unrelated error");
            throw new error('some unrelated error');

            // never gets here
            console.log("about to throw CustomError");
            throw new CustomError();
        },  "Oops. We wanted to see the CustomError. but we got a different exception");
    })

    test("qunit exception handling with custom error: correct", function () {
        raises(function () {
            //console.log("about to throw unrelated error");
            //throw new error('some unrelated error');

            // never gets here
            console.log("about to throw CustomError");
            throw new CustomError();
        }, CustomError, "should throw CustomError");

    });


})();