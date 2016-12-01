---
layout: post
title: "Ponto de partida"
published: true
categories:
  - Web/Tech
  - Weblogs
---

Quem usa o Mozilla para navegar na internet e costuma abrir cada página
num novo separador, sabe como é fácil perder o rasto à página onde o
link original foi encontrado. Felizmente, o [Simon Willison] criou uma
[bookmarklet] que resolve o problema, indicando o endereço da página que
nos remeteu para a página actual.

  [Simon Willison]: http://simon.incutio.com/archive/2004/03/05/attribution
  [bookmarklet]: javascript:void(prompt('Referer:',%20document.referrer));
