(function () {
    "use strict";

    beforeEach(function () {
        this.addMatchers({                                        // jshint ignore:line
            toFail: toFail,
            toMatch: toMatch
        });
    });


    /*********************************************************
     * Jasmine matcher that always fails with the message
     * Ex: expected().toFail('what a mess');
     *********************************************************/
    function toFail(message) {  // matcher
        this.message = function () {                             // jshint ignore:line
            return message;
        };
        return false;
    }

    /*********************************************************
     * Jasmine RegExp matcher
     * Ex: expect(error.message).toRegExMatch(/not authorized to save/i);
     *********************************************************/
    function toMatch(regex, template) {

        template = template || 'expected "{0}" to {1}match "{2}"';

                                        /* jshint ignore:start */

        var actual = this.actual; 
        var notText = this.isNot ? "not " : "";
        this.message = formatMessage;

                                        /* jshint ignore:end */

        return regex.test(actual);

        function formatMessage () { 
            return template.format(actual, notText, regex);
        }   
    }

})();