---
layout: post
title: "Using Automator to move all Opera tabs to Firefox"
published: true
category:
  - Web/Tech
---
<p>Although I was interested when Automator.app was announced as one of the new features in Tiger, for some reason I never got around to trying it out. I guess I feared it would be more complicated than it actually is. You just need to learn a couple of new words: Action and Workflow.</p>

<p>An Action is an indivisible task, such as &quot;New Folder&quot;, &quot;Play DVD&quot;, &quot;Get Current Webpage from Safari&quot;, &quot;Set iTunes Volume&quot;. Automator comes loaded out of the box with hundreds of actions for most of the applications bundled with Mac OS X, such as Finder, iTunes or Safari. Actions may accept input and produce output: For instance, &quot;Text to Audio Files&quot; expects a text string and returns a file. Many Actions do not expect input or produce any output.</p>

<p>A Workflow is just a sequence of Actions, where the output of one Action is passed as input to the next action.</p>

<p>Having grasped these profound concepts, I then tried to figure out how to automate a repetitive task that I perform regularly. I often want to transfer all open tabs from Safari and Opera to Firefox, which is were I like to consolidate my tabs and save them for later reference with &quot;Bookmark All Tabs&quot;.</p>

<p>Unfortunately, none of Automator&#39;s bundled Safari Actions let you handle tabs, and there aren&#39;t any Actions for 3rd party apps such as Firefox or Opera.</p>

<p>Luckily, there&#39;s a very handy Action called &quot;Watch Me Do&quot;, which lets you record a sequence of Events (i.e. mouse clicks and keyboard presses) and thus replay your interactions with any application, regardless of whether it is supported by an Automator Action. This is what the resulting Workflow looks like:</p>

<div class="thumbnail"><a href="http://skitch.com/olifante/u55e/move-tabs-from-opera-to-firefox"><img alt="Move tabs from Opera to Firefox" src="http://img.skitch.com/20080820-tg3im8cfk5skdtc6ax4xef9jb2.preview.jpg" /></a><br /><span style="font-family: Lucida Grande, Trebuchet, sans-serif, Helvetica, Arial; font-size: 10px; color: #808080">Uploaded with <a href="http://plasq.com/">plasq</a>&#39;s <a href="http://skitch.com">Skitch</a>!</span></div>

<p>Only the shortcuts might require some explaining, although they&#39;re pretty basic:</p>

<ul>
<li>⌘L focuses the location bar and selects the current URL (works in most browsers)</li>
<li>⌘C copies the selected text</li>
<li>⌘W closes the current tab</li>
<li>⌘T opens a new tab</li>
<li>⌘V pastes text from the clipboard</li>
</ul>

<p>The penultimate Event is recorded as &quot;Type &#39; &quot; for some reason, but actually stands for pressing Return on the keyboard, which opens the URL in the newly created tab. The rest is pretty self-explanatory.</p>

<p>The last Event is needed to return focus to Automator, allowing me to interact with the dialog box which is opened by the next Action in my Workflow, &quot;Loop&quot;, which allows you to repeat the first Action of a Workflow any number of times. I don&#39;t want it to go on forever, so after moving one tab from Opera to Firefox it asks me if I want to continue. Fortunately, since focus has returned to Automator, this is as simple as pressing Return on the keyboard.</p>

<p>This is just skimming the surface of Automator. Actions are actually small programs written in AppleScript, so you can create your own Actions to automate your applications. Some non-Apple applications are very AppleScriptable, while others are not (Opera and especially Firefox, I&#39;m looking at you). To investigate the AppleScript Dictionary of an application, just fire up &quot;/Applications/AppleScript/Script Editor.app&quot; and open that application with &quot;Open Dictionary&quot;.</p>

<p>You can also download new Actions from several sites, such as <a href="http://www.apple.com/downloads/macosx/automator/index_abc.html">Apple Automator Actions</a>, <a href="http://automatorworld.com/">Automator World</a>, <a href="http://www.automator.us/downloads.html">automator.us</a> and <a href="http://automatoractions.com/">Automator Actions</a>.</p>

<p>If you&#39;re not a big fan of AppleScript or are just plain lazy (a.k.a. healthy), fear not. Unix mavens can use the &quot;Run Shell Script&quot; to do all kinds of unix hackery to their heart&#39;s content, while Python fans such as myself can download the &quot;<a href="http://www.apple.com/downloads/macosx/automator/runpythonscript.html">Run Python Script</a>&quot; from Apple itself.</p>

