(function () {
"use strict";

module("01-Beginning");

test("always passes", function () {
    ok(true, "it passed");
});





test("always fails", function () {
    ok(true, "it fails deliberately.");
});



test("type coercion", function () {
    // JavaScript coerces a string "1" to an integer
    ok(1 == '1', "should coerce '1' to 1");
});





test("assert with equals", function () {
    equal(1, 1, "1 should be 1");
});



test("assert with deep equals", 2, function () {
    var sut = { foo: "bar" };
    notEqual(sut, { foo: "bar" },
        "should not be equal because not same object");

    deepEqual(sut, { foo: "bar" },
        "objects should have value equality at every level");
});




test("qunit exception handling", function () {

    var CustomError = function () { };// custom error type
    CustomError.message = "custom error message";

    raises(function () {
        throw new CustomError();
    }, CustomError, "must throw CustomError");


});


})();