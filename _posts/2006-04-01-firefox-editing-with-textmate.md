---
layout: post
title: "Firefox editing with TextMate"
published: true
category:
  - Web/Tech
---
<p>I've just configured Firefox to allow me to use TextMate to edit any TextArea.</p>

<p>At first I tried to follow the somewhat confusing <a href="http://macromates.com/wiki/Main/Howtos#Firefox">instructions on the TextMate Wiki</a>, which require you to combine an unofficial hacked version of the <a href="https://nic-nac-project.de/~kaosmos/mozex107-en.html">Mozex 1.07</a> extension with <a href="http://www.noctua.org.uk/paul/software/">Mozex-helper</a>, a Python+C hack. Fortunately, with the recent pre-release of Mozex 2.0 the whole process has become much simpler: </p>

<ol><li>Install the <a href="http://mozex.mozdev.org/development.html">Mozex 2.0</a> extension (pre-release version) and restart Firefox</li>

<li>Go to &quot;Tools &gt; Extensions&quot;, right-click on Mozex and choose Preferences</li>

<li>In the &quot;General&quot; tab, put &quot;<strong>/private/tmp</strong>&quot; in the &quot;Directory for temporary files&quot; field</li>

<li>In the &quot;Textarea&quot; tab put &quot;<strong>/.../TextMate.app/Contents/Resources/mate -w %t</strong>&quot;, replacing the dots with the actual path to your TextMate application, probably &quot;/Applications&quot;</li>

<li>Optionally, you may want to check the &quot;Edit textbox in UTF-8&quot; box. </li></ol>

<p>Now all you have to do to edit any Textarea using Textmate is right-click on it, choose &quot;Mozex &gt; Edit Textarea&quot;, edit the text, save your file and you're done.</p>

<p>Time to start putting Textmate's Ctrl-Shift-H shortcut to good use. Hello <a href="http://daringfireball.net/projects/markdown/">Markdown</a>, goodbye HTML blogging.</p>
