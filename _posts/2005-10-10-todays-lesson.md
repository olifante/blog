---
layout: post
title: "Today's Lesson"
published: true
category:
  - Web/Tech
---

Today I learned a new trick. I was trying to find out which of a bunch
of .jar files contained a given file.  To get a list of the archived
files for all archives in zsh is pretty simple:

`# for file in *.jar; do echo $file; jar tvf $file; done`

But how do you go around looking for the specific file? If I place " |
grep filename " at the end of the compound command I get a single line
with no context telling me which archive it belongs to. If I place the
pipe after the jar command, the whole thing blows. I tried back-quoting
the pipe character to defer execution (" \\| grep filename"), but it
still didn't work. Fortunately, the solution in zsh is quite simple:
enclose the pipe chain inside curly braces:

`# for file in *.jar; do echo $file; {jar tvf $file | fgrep AboutPanel.class}; done  icalendar.jar imdesktop.jar imjni.jar imnet.jar imwebex.jar messenger.jar extracted: com/iplanet/im/client/swing/config/AboutPanel.class msgrinstall.jar`
