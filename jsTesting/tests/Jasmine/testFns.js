/* Test helper functions for Jasmine */

(function (definition) {

    // CommonJS
    if (typeof exports === "object") {
        module.exports = definition();
        // RequireJS
    } else if (typeof define === "function") {
        define(definition);
        // <script>
    } else {
        testFns = definition();
        testing = true;
    }

})(function () {
    'use strict';

    extendString();
    extendAsyncSpec();

    var fns = {
        /* helper fns go here */
        xasync: {it: xit, xit: xit}
    };

    return fns;

    /*******************************************************
     * String extensions
     * Monkey punching JavaScript native String class
     * w/ format, startsWith, endsWith
     * go ahead and shoot me but it's convenient
     ********************************************************/
    function extendString() {
        var stringFn = String.prototype;

        // Ex: "{0} returned {1} item(s)".format(queryName, count));
        stringFn.format = stringFn.format || function () {
            var s = this;
            for (var i = 0, len = arguments.length; i < len; i++) {
                var reg = new RegExp("\\{" + i + "\\}", "gm");
                s = s.replace(reg, arguments[i]);
            }

            return s;
        };

        stringFn.endsWith = stringFn.endsWith || function (suffix) {
            return (this.substr(this.length - suffix.length) === suffix);
        };

        stringFn.startsWith = stringFn.startsWith || function (prefix) {
            return (this.substr(0, prefix.length) === prefix);
        };

        stringFn.contains = stringFn.contains || function (value) {
            return (this.indexOf(value) !== -1);
        };
    }

    /*********************************************************
    * Extend AsyncSpec with ability to disable its 'it'
    *********************************************************/
    function extendAsyncSpec() {
        var fn = AsyncSpec.prototype;
        if (!fn.xit) { fn.xit = xit; }
    }

});