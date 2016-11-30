---
layout: post
title: "Today's Lesson"
published: true
category:
  - Web/Tech
---
<p>Today I learned a new trick. I was trying to find out which of a bunch of .jar files contained a given file.&nbsp; To get a list of the archived files for all archives in zsh is pretty simple:</p>

<p><code># for file in *.jar; do echo $file; jar tvf $file; done</code></p>

<p>But how do you go around looking for the specific file? If I place &quot; | grep filename &quot; at the end of the compound command I get a single line with no context telling me which archive it belongs to. If I place the pipe after the jar command, the whole thing blows. I tried back-quoting the pipe character to defer execution (&quot; \| grep filename&quot;), but it still didn't work. Fortunately, the solution in zsh is quite simple: enclose the pipe chain inside curly braces:</p>

<p><code># for file in *.jar; do echo $file; {jar tvf $file | fgrep AboutPanel.class}; done<br />
<br />
icalendar.jar<br />
imdesktop.jar<br />
imjni.jar<br />
imnet.jar<br />
imwebex.jar<br />
messenger.jar<br />
extracted: com/iplanet/im/client/swing/config/AboutPanel.class<br />
msgrinstall.jar</code></p>

