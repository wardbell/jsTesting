﻿(function () {
    "use strict";

    describe("Some Jasmine tests", function () {

        it('should fail', function () {
            console.log('first');
            var myObj = { method: function () { return 4; } };
            // Force fail
            //expect(myObj.method()).toBe(1);
            expect(2).toBe(2);
            //expect().toFail('You failed deliberately!');
        });

        it('should succeed', function () {
            console.log('howdy');
            expect(2).toBe(2);
        });

    });



})();