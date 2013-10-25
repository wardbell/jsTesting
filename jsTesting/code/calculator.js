(function (code) {
    "use strict";

    /* Application code here */

    // Joe Eames: "Testing Clientside JavaScript: async tests"

    code.Calculator = Calculator;

    function Calculator(displayElement) {
        this.$el = $(displayElement); // wrap as jQuery element
    }

    // Fadeout effect on the result
    Calculator.prototype.hideResult = function (callback) {
        this.$el.fadeOut(500, callback);
    };


})(this.code = this.code || {});