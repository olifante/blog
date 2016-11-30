---
layout: post
title: "TextMate QuickRef"
published: true
category:
  - Web/Tech
---
<p>Nowadays, weeks go by without ever needing to print anything. Gone are the days of wasteful printing of bulky reference documents I never actually got to use. Nevertheless, having recently bought TextMate I felt the need to print a compact reference of the many keyboard shortcuts for all the handy macros, snippets and commands.</p>

<p>The TextMate help wasn't exactly forthcoming with the info I needed, but after some googling I discovered that Ctrl-Opt-Cmd-K brings up a window with a full reference of all the keyboard shortcut and tab triggers. It's not very compact, however.</p>

<p><a href="http://outside-thoughts.octopod.info/articles/2006/02/23/textmate-and-keyref-the-textmate-shortcut-reference-pdf-generator">Chris McGrath</a> to the rescue: his <a href="http://keyref.octopod.info/">TextMate QuickRef Generator</a> takes the output of Ctrl-Opt-Cmd-K, lets you select the modules you want to print and mails you a pdf file with the corresponding shortcuts compactly formatted.</p>

<p><a href="http://olifante.blogs.com/.shared/image.html?/photos/uncategorized/textmate_reference_card.png" onclick="window.open(this.href, '_blank', 'width=800,height=565,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=0,top=0'); return false"><img width="400" height="282" border="0" alt="Textmate_reference_card" title="Textmate_reference_card" src="http://olifante.blogs.com/covil/images/textmate_reference_card.png" /></a>
</p>

<p>One limitation is that you can only select 8 modules. Some choices of modules overflow to a second page, while if you choose 8 small modules you will be left with a half-empty page. A better solution would perhaps be to let the user choose all the modules he wants, re-order them, insert optional column breaks and get a pdf with all of the resulting pages.</p>

<p>Anyway, if anyone's interested here are the TextMate 1.5 cheatsheets that I generated using Chris McGrath's tool.</p>

<p><a href="http://olifante.blogs.com/covil/files/textmate_reference_card.1.pdf">textmate_reference_card.1.pdf</a>: Ruby, Rails, Python, Javascript, SQL, Unix Shell, Diff and Property Lists</p>

<p><a href="http://olifante.blogs.com/covil/files/textmate_reference_card.2.pdf">textmate_reference_card.2.pdf</a>: CSS and HTML</p>

<p><a href="http://olifante.blogs.com/covil/files/textmate_reference_card.3.pdf">textmate_reference_card.3.pdf</a>: TextMate, Text, Source, TODO, Markdown, Textile, XML and YAML</p>

<p><strong>Update:</strong> I sent an email to Chris with my suggestion -- he promptly replied with the following explanation for the 8 module limit:</p><blockquote><p>The limit is there because the library I'm using for PDF generation can use a lot of memory, and the site is running on a 128Mb VPS. I've had thoughts similar to your regarding column breakers and laying out the PDF, but this is a side project and I'm busy with paying work at the moment. I'll keep your thoughts for when I next have time to work on keyref though.</p></blockquote>
