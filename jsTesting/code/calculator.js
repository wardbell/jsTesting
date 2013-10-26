﻿(function (code) {
    "use strict";

    /* Application code here */

    // Joe Eames: "Testing Clientside JavaScript: async tests"
    // http://pluralsight.com/training/Player?author=joe-eames&name=testing-javascript-m7-utilities&mode=live&clip=0&course=testing-javascript

    code.Calculator = Calculator;

    function Calculator(displayElement) {
        this.$el = $(displayElement); // wrap as jQuery element
    }

    Calculator.HIDE_RESULT_MS = 500;
    Calculator.PAUSE_MS = 1000;

    // Fadeout effect on the result
    Calculator.prototype.hideResult = function (callback) {
        this.$el.fadeOut(Calculator.HIDE_RESULT_MS, callback);
    };

    // pause before hiding
    Calculator.prototype.pause = function (callback) {
        setTimeout(callback, Calculator.PAUSE_MS);
    };


})(this.code = this.code || {});