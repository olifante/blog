---
layout: post
title: "Erros comuns em Python"
published: true
categories:
  - Python
  - Web/Tech
---
<p>O Mark Lutz, autor do excelente <a href="">Learning Python</a> e professor de Python, publicou um <a href="http://www.onlamp.com/lpt/a/4586">artigo no ONLamp.com</a> sobre os erros mais frequentes dos programadores de Python.</p>

<p>Já cometi pelo menos um dos erros mencionados mais do que uma vez:<blockquote><cite>Imports Only Work the First Time:<br />
You can run a file by importing it at the interactive prompt, but this only works once per session; subsequent imports simply return the already-loaded module. To force Python to reload and rerun a file's code, call the reload(module) function instead. And while you're at it, be sure to use parentheses for reload, but not import.</cite></blockquote>Igualmente importante:<blockquote><cite>reload doesn't impact names copied with from: reload works much better with the import statement. If you use from statements, remember to rerun the from after the reload, or you'll still have old names.</cite></blockquote></p>

