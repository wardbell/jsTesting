JavaScript Testing
===============================
Code and slides for talks to .NET developers about JavaScript testing.


## Unit Testing 101 in JavaScript talk ##

There are at least two ways to demo the code: in VS/PageInspector and in Chrome/Sublime. They are described below

## Demo'ing JavaScript4DotNet with Page Inspector ##
At Dev Conn, Ward alternated between slides and the running inside Visual Studio 2012 with PageInspector. The results display in PageInspector window on the left while the corresponding JS file is displayed in a text editor window on the right.

He made changes to the code (e.g., moved the PAUSE comment down to reveal more running code) and hit [Ctrl-Alt-Enter] to both save the file and refresh the PageInspector window.

Think of it as a poor man's jsFiddle. Why? If was all in jsFiddle originally. But wireless failed at the conference - no wireless, no jsFiddle.

Here's what it looks like when in the middle of a change:

![JS4NetDev running in PageInspector](https://raw.github.com/wardbell/js4netdev/master/EditInVSwithPageInspector.png)

## Demo'ing JavaScript4DotNet with Chrome and Sublime ##
Ward later discovered that this works very well, perhaps better than Page Inspector. While it is difficult to make changes from within Chrome, it was easy to position a Chrome browser window on the left and a SublimeText 2 editor window on the right as seen in this screenshot:

![JS4NetDev running in Chrome+Sublime](https://raw.github.com/wardbell/js4netdev/master/EditInSublime.png)

Start by showing "index.html" in Chrome.

Toggle the Sublime folder pane (side bar) on/off with [Ctrl-K,Crtrl-B];

The update sequence: make change in Sublime, save, refresh browser. This turns out to be pretty darned fast.

Best of luck with your presentation.