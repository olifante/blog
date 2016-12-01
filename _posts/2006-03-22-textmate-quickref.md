---
layout: post
title: "TextMate QuickRef"
published: true
category:
  - Web/Tech
---

Nowadays, weeks go by without ever needing to print anything. Gone are
the days of wasteful printing of bulky reference documents I never
actually got to use. Nevertheless, having recently bought TextMate I
felt the need to print a compact reference of the many keyboard
shortcuts for all the handy macros, snippets and commands.

The TextMate help wasn't exactly forthcoming with the info I needed, but
after some googling I discovered that Ctrl-Opt-Cmd-K brings up a window
with a full reference of all the keyboard shortcut and tab triggers.
It's not very compact, however.

[Chris McGrath] to the rescue: his [TextMate QuickRef Generator] takes
the output of Ctrl-Opt-Cmd-K, lets you select the modules you want to
print and mails you a pdf file with the corresponding shortcuts
compactly formatted.

[![Textmate\_reference\_card]]

One limitation is that you can only select 8 modules. Some choices of
modules overflow to a second page, while if you choose 8 small modules
you will be left with a half-empty page. A better solution would perhaps
be to let the user choose all the modules he wants, re-order them,
insert optional column breaks and get a pdf with all of the resulting
pages.

Anyway, if anyone's interested here are the TextMate 1.5 cheatsheets
that I generated using Chris McGrath's tool.

[textmate\_reference\_card.1.pdf]: Ruby, Rails, Python, Javascript, SQL,
Unix Shell, Diff and Property Lists

[textmate\_reference\_card.2.pdf]: CSS and HTML

[textmate\_reference\_card.3.pdf]: TextMate, Text, Source, TODO,
Markdown, Textile, XML and YAML

**Update:** I sent an email to Chris with my suggestion -- he promptly
replied with the following explanation for the 8 module limit:

> The limit is there because the library I'm using for PDF generation
> can use a lot of memory, and the site is running on a 128Mb VPS. I've
> had thoughts similar to your regarding column breakers and laying out
> the PDF, but this is a side project and I'm busy with paying work at
> the moment. I'll keep your thoughts for when I next have time to work
> on keyref though.

  [Chris McGrath]: http://outside-thoughts.octopod.info/articles/2006/02/23/textmate-and-keyref-the-textmate-shortcut-reference-pdf-generator
  [TextMate QuickRef Generator]: http://keyref.octopod.info/
  [Textmate\_reference\_card]: http://olifante.blogs.com/covil/images/textmate_reference_card.png
    "Textmate_reference_card"{width="400" height="282"}
  [![Textmate\_reference\_card]]: http://olifante.blogs.com/.shared/image.html?/photos/uncategorized/textmate_reference_card.png
  [textmate\_reference\_card.1.pdf]: http://olifante.blogs.com/covil/files/textmate_reference_card.1.pdf
  [textmate\_reference\_card.2.pdf]: http://olifante.blogs.com/covil/files/textmate_reference_card.2.pdf
  [textmate\_reference\_card.3.pdf]: http://olifante.blogs.com/covil/files/textmate_reference_card.3.pdf
