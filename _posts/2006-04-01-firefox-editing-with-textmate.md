---
layout: post
title: "Firefox editing with TextMate"
published: true
category:
  - Web/Tech
---

I've just configured Firefox to allow me to use TextMate to edit any
TextArea.

At first I tried to follow the somewhat confusing [instructions on the
TextMate Wiki], which require you to combine an unofficial hacked
version of the [Mozex 1.07] extension with [Mozex-helper], a Python+C
hack. Fortunately, with the recent pre-release of Mozex 2.0 the whole
process has become much simpler:

1.  Install the [Mozex 2.0] extension (pre-release version) and restart
    Firefox
2.  Go to "Tools &gt; Extensions", right-click on Mozex and choose
    Preferences
3.  In the "General" tab, put "**/private/tmp**" in the "Directory for
    temporary files" field
4.  In the "Textarea" tab put
    "**/.../TextMate.app/Contents/Resources/mate -w %t**", replacing the
    dots with the actual path to your TextMate application, probably
    "/Applications"
5.  Optionally, you may want to check the "Edit textbox in UTF-8" box.

Now all you have to do to edit any Textarea using Textmate is
right-click on it, choose "Mozex &gt; Edit Textarea", edit the text,
save your file and you're done.

Time to start putting Textmate's Ctrl-Shift-H shortcut to good use.
Hello [Markdown], goodbye HTML blogging.

  [instructions on the TextMate Wiki]: http://macromates.com/wiki/Main/Howtos#Firefox
  [Mozex 1.07]: https://nic-nac-project.de/~kaosmos/mozex107-en.html
  [Mozex-helper]: http://www.noctua.org.uk/paul/software/
  [Mozex 2.0]: http://mozex.mozdev.org/development.html
  [Markdown]: http://daringfireball.net/projects/markdown/
