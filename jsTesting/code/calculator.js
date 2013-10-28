(function (code) {
    "use strict";

    /* Application code here */

    // Based on Joe Eames' "Testing Clientside JavaScript: async tests"
    // http://pluralsight.com/training/Player?author=joe-eames&name=testing-javascript-m7-utilities&mode=live&clip=0&course=testing-javascript

    code.Calculator = Calculator;

    // Calculator can display its results in DOM if element provided
    function Calculator(displayElement) {
        this.$el = $(displayElement || "<div></div>"); // wrap as jQuery element
    }

    Calculator.prototype.add = function (a, b) {
        return this.log("add", a + b, a, b);
    };


    Calculator.prototype.divide = function (a, b) {
        if (!b) {
            this.onError("denominator '{0}' is out-of-bounds".format(b));
        }
        return this.log("divide", a / b, a, b);
    };




    // Log the requested operations
    Calculator.prototype.log = function (op, result) {
        var args = [].slice.call(arguments, 2).join(', ');

        var template = "calc.{0} called with args [{1}]; returned '{2}'";
        console.log(template.format(op, args, result));

        return result; 
    };


    Calculator.prototype.onError = function () { }; // no op





    /**** See calculatorAsyncSpecs ****/

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