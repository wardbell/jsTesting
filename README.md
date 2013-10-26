JavaScript Testing
===============================
Code and slides for talks to .NET developers about JavaScript testing.


## Unit Testing 101 in JavaScript talk ##
Talk given at DevIntersections in Oct 2013

## Demo'ing with Chrome and Visual Studio ##
While it is difficult to make changes from within Chrome, it is easy to position a Chrome browser window on one side and Visual Studio on the other.

The update sequence: make change in VS, save, refresh browser.


## Demo'ing with Chrome and Sublime ##
Take the same approach with Sublime in place of Visual Studio.

![JS4NetDev running in Chrome+Sublime](https://raw.github.com/wardbell/js4netdev/master/EditInSublime.png)

Start by showing "~/test/qunit/tests.html" in Chrome.

Toggle the Sublime folder pane (side bar) on/off with [Ctrl-K,Crtrl-B];

The update sequence: make change in Sublime, save, refresh browser. This turns out to be pretty darned fast.

## Grunt ##
Useful development and testing tasks can be handled by grunt. The app is setup for grunt (see packages.json and Gruntfile.js)

Launch a command window 

Change directory to the jsTesting root directory

If you're here for the first time, let npm install the dependencies.

    npm install


Now execute one of these grunt commands.

Grunt targets:

- `grunt jasmine`: run the jasmine tests
- `grunt qunit`: run the qunit tests
- `grunt jshin`t: lint the JS files
- `grunt`:  this default target runs jshint, jasmine, and qunit.

Best of luck with your presentation.