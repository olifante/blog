---
layout: post
title: "YAML: XML para mortais?"
published: true
category:
  - Web/Tech
---

A galáxia XML continua a sua conquista imparável do mundo informático, e
por excelentes razões, dado que veio resolver inúmeros problemas com que
programadores de aplicações se deparam diariamente.

Há no entanto uma área em que o XML ficou bastante aquém dos objectivos
iniciais: a legibilidade. Embora em geral os documentos XML sejam
consumidos por outros programas, foi desde o início sido adoptado o
princípio de que o XML deveria ser também legível por humanos. Este
objectivo foi apenas parcialmente atingido, já que a sintaxe standard
para documentos XML é bastante difícil de digerir, a não ser para
documentos triviais. A utilização de ferramentas especializadas que
colorizam o código ou estruturam visualmente porções do documento (como
p.ex. o XMLSpy) permite colmatar parcialmente estas deficiências, mas é
pena que não tenha sido adoptada uma sintaxe mais leve.

Há no entanto uma alternativa: o [YAML] (abreviatura de [YAML Ain't
Markup Language], embora a leitura mais usual para acrónimos começados
com YA sugira a interpretação "Yet Another Markup Language"). O YAML
pretende oferecer uma semântica semelhante à do XML, mas implementada
com uma [sintaxe francamente mais legível], em a indentação deixa de ser
irrelevante e passa sinalizar a estrutura do documento, substituindo em
parte o papel dos caracteres "&lt;" e "&gt;", ubíquos em XML. Dada esta
utilização da indentação, não é de estranhar que esta linguagem de
anotação seja vagamente popular entre utilizadores de Python, uma
linguagem de programação em que a indentação das linhas tem um papel
fundamental, mas a sua utilização parece ter alguma popularidade entre
os utilizadores das restantes linguagens dinâmicas, com Perl, PHP e
Ruby.

O YAML está [definido formalmente], e existe ainda uma proposta para o
[YAXML], um subconjunto do standard XML que permite uma transposição
directa para YAML. Para quem quiser saber mais, aconselho a leitura de
um [artigo do David Mertz] no IBM developerWorks, ou esta [breve
introdução]

  [YAML]: http://www.yaml.org/
  [YAML Ain't Markup Language]: http://www.yaml.org/refcard.html
  [sintaxe francamente mais legível]: http://www.yaml.org/start.html
  [definido formalmente]: http://www.yaml.org/spec/
  [YAXML]: http://www.yaml.org/xml.html
  [artigo do David Mertz]: http://www-106.ibm.com/developerworks/xml/library/x-matters23.html
  [breve introdução]: http://yaml.freepan.org/index.cgi?YamlInFiveMinutes
