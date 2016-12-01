---
layout: post
title: "Using Automator to move all Opera tabs to Firefox"
published: true
category:
  - Web/Tech
---

Although I was interested when Automator.app was announced as one of the
new features in Tiger, for some reason I never got around to trying it
out. I guess I feared it would be more complicated than it actually is.
You just need to learn a couple of new words: Action and Workflow.

An Action is an indivisible task, such as "New Folder", "Play DVD", "Get
Current Webpage from Safari", "Set iTunes Volume". Automator comes
loaded out of the box with hundreds of actions for most of the
applications bundled with Mac OS X, such as Finder, iTunes or Safari.
Actions may accept input and produce output: For instance, "Text to
Audio Files" expects a text string and returns a file. Many Actions do
not expect input or produce any output.

A Workflow is just a sequence of Actions, where the output of one Action
is passed as input to the next action.

Having grasped these profound concepts, I then tried to figure out how
to automate a repetitive task that I perform regularly. I often want to
transfer all open tabs from Safari and Opera to Firefox, which is were I
like to consolidate my tabs and save them for later reference with
"Bookmark All Tabs".

Unfortunately, none of Automator's bundled Safari Actions let you handle
tabs, and there aren't any Actions for 3rd party apps such as Firefox or
Opera.

Luckily, there's a very handy Action called "Watch Me Do", which lets
you record a sequence of Events (i.e. mouse clicks and keyboard presses)
and thus replay your interactions with any application, regardless of
whether it is supported by an Automator Action. This is what the
resulting Workflow looks like:

<div class="thumbnail">

[![Move tabs from Opera to Firefox]]\
<span
style="font-family: Lucida Grande, Trebuchet, sans-serif, Helvetica, Arial; font-size: 10px; color: #808080">Uploaded
with [plasq]'s [Skitch]!</span>

</div>

Only the shortcuts might require some explaining, although they're
pretty basic:

-   ⌘L focuses the location bar and selects the current URL (works in
    most browsers)
-   ⌘C copies the selected text
-   ⌘W closes the current tab
-   ⌘T opens a new tab
-   ⌘V pastes text from the clipboard

The penultimate Event is recorded as "Type ' " for some reason, but
actually stands for pressing Return on the keyboard, which opens the URL
in the newly created tab. The rest is pretty self-explanatory.

The last Event is needed to return focus to Automator, allowing me to
interact with the dialog box which is opened by the next Action in my
Workflow, "Loop", which allows you to repeat the first Action of a
Workflow any number of times. I don't want it to go on forever, so after
moving one tab from Opera to Firefox it asks me if I want to continue.
Fortunately, since focus has returned to Automator, this is as simple as
pressing Return on the keyboard.

This is just skimming the surface of Automator. Actions are actually
small programs written in AppleScript, so you can create your own
Actions to automate your applications. Some non-Apple applications are
very AppleScriptable, while others are not (Opera and especially
Firefox, I'm looking at you). To investigate the AppleScript Dictionary
of an application, just fire up "/Applications/AppleScript/Script
Editor.app" and open that application with "Open Dictionary".

You can also download new Actions from several sites, such as [Apple
Automator Actions], [Automator World], [automator.us] and [Automator
Actions].

If you're not a big fan of AppleScript or are just plain lazy (a.k.a.
healthy), fear not. Unix mavens can use the "Run Shell Script" to do all
kinds of unix hackery to their heart's content, while Python fans such
as myself can download the "[Run Python Script]" from Apple itself.

  [Move tabs from Opera to Firefox]: http://img.skitch.com/20080820-tg3im8cfk5skdtc6ax4xef9jb2.preview.jpg
  [![Move tabs from Opera to Firefox]]: http://skitch.com/olifante/u55e/move-tabs-from-opera-to-firefox
  [plasq]: http://plasq.com/
  [Skitch]: http://skitch.com
  [Apple Automator Actions]: http://www.apple.com/downloads/macosx/automator/index_abc.html
  [Automator World]: http://automatorworld.com/
  [automator.us]: http://www.automator.us/downloads.html
  [Automator Actions]: http://automatoractions.com/
  [Run Python Script]: http://www.apple.com/downloads/macosx/automator/runpythonscript.html
