---
layout: post
title: "Porquê Python?"
published: true
categories:
  - Python
  - Web/Tech
---

A minha linguagem de programação de eleição desde 2000 é o [Python], uma
linguagem de programação interpretada e orientada por objectos, com
tipagem forte dinâmica e gestão automática de memória. O Python foi
criado em 1991 por [Guido van Rossum] e está disponível gratuitamente
para todas as plataformas populares sob uma licença [Open Source] muito
liberal.

A grande vantagem do Python em relação a linguagens mais conhecidas e
utilizadas, como o C, C++, C\# e Java, reside na sua expressividade: a
transformação das ideias em código é muito mais imediata e resulta em
código compacto mas legível. Pode dizer-se que o Python é uma linguagem
de programação que tem como prioridade maximizar a [produtividade do
programador], e não a performance do programa.

O factor que mais contribui para a expressividade do Python consiste na
chamada tipagem dinâmica das variáveis. O Python é uma linguagem com
tipagem forte - todo o objecto tem um tipo bem definido e imutável. No
entanto, as variáveis não têm qualquer noção de tipo, funcionando como
meras etiquetas que podem ser pendurados ora num objecto dum tipo, ora
num objecto de outro. Isto significa que em Python não é necessário
declarar o tipo de uma variável antes de a poder usar, o que contribui
para a percepção do Python como uma linguagem menos burocrática do que
linguagens como o Java ou o C\#.

Outro elemento que contribui para esta expressividade é a inclusão no
núcleo da linguagem de duas estruturas de dados extremamente flexíveis:
a lista e o dicionário, conhecidos noutras linguagens como "array" e
"associative array"/"hashmap", respectivamente. Os dicionários, listas e
tuples (uma variante imutável da lista) são utilizados a todos os níveis
da linguagem, e a sintaxe do Python inclui uma notação especial para
estas estruturas que torna a sua utilização particularmente conveniente.

Para além de ser uma linguagem expressiva, o Python é também uma
linguagem bastante legível, o que não é de espantar, dado que [descende]
do [ABC], uma linguagem desenhada expressamente com fins didáticos. O
Python usa o nível de indentação no início de cada linha para definir
blocos de código, dispensando a utilização de chavetas ou de outros
indicadores de início e fim de bloco. A obrigatoriedade da indentação
estabelece um patamar mínimo de legibilidade que noutras linguagens tem
de ser implementado ou através de uma convenção implementada com
disciplina férrea ou através da utilização de editores especializados.
Alguns programadores reagem com veemência à utilização de indentação
para definição de blocos - de gustibus non disputandum est. Para mim e
para muitos outros a adaptação foi praticamente instantânea.

Houve ainda desde a sua concepção a preocupação de não sobrecarregar a
sintaxe do Python com caracteres não alfabéticos, e os poucos que são
usados são relativamente familiares ao olhar: os parenteses normais (),
os parenteses rectos \[\], as chavetas {}, as aspas ", o apóstrofo ', os
dois pontos, a vírgula e o ponto final. Os caracteres [@&\$!] que são a
assinatura visual de algumas outras linguagens de programação não têm
significado especial em Python. Isto significa que o aspecto visual de
uma linha de código Python é menos intimidatório para o leigo ou para o
programador principiante. A sua legibilidade torna um programa escrito
em Python mais num livro aberto do que num código para ser decifrado,
facilitando a sua manutenção ou modificação.

Outra funcionalidade que reflecte a preocupação didática do Python é a
existência de uma linha de comando que permite ao utilizador testar
pedaços de código e até desenvolver interactivamente pequenos programas.
A linha de comando permite inspeccionar os diferentes objectos
manipulados pelos nossos programas, e torna a aprendizagem da linguagem
muito mais acessível, permitindo testar o nosso código de forma
interactiva.

Embora seja predominantemente uma linguagem imperativa, o Python
pretende ser uma linguagem multi-paradigma ([tal como o C++]),
possibilitando mas não forçando a programação orientada por objectos ou
a programação funcional. Isto permite que o programador escolha o
paradigma mais adequado à tarefa concreta, em vez de o forçar a usar
sempre o mesmo paradigma para tudo, quer faça sentido quer não.

O carácter dinâmico e expressivo do Python torna-o numa linguagem
particularmente indicada para a prototipagem rápida, para a exploração
de ideias e o para desenvolvimento de aplicações com requisitos mal
definidos ou mutáveis. Isto não quer dizer que o Python não possa ser
utilizado para [aplicações industriais] - várias companhias, desde a HP
e RedHat até à NASA, usam Python para aplicações críticas para o
negócio, e há companhias como a [Zope Corporation] que baseiam toda a
sua linha de produtos em Python.

Para quem quiser saber mais, recomendo a leitura do [Programação
Instantânea] (tradução para Português do [Instant Hacking]) como
introdução ligeira, ou o excelente [tutório oficial], que juntamente com
o resto da [documentação oficial] contém tudo que é necessário para
começar a programar em Python.

  [Python]: http://www.python.org
  [Guido van Rossum]: http://www.python.org/~guido/
  [Open Source]: http://www.python.org/psf/license.html
  [produtividade do programador]: http://www.artima.com/intv/prodperf.html
  [descende]: http://www.artima.com/intv/python.html
  [ABC]: http://homepages.cwi.nl/~steven/abc/
  [@&\$!]: http://www.python.org/doc/essays/foreword.html
  [tal como o C++]: http://www.artima.com/intv/modern.html
  [aplicações industriais]: http://pbf.strakt.com/success/
  [Zope Corporation]: http://www.zope.com/
  [Programação Instantânea]: http://www.g2ctech.com/artigos/instant-hacking.html
  [Instant Hacking]: http://www.hetland.org/python/instant-hacking.php
  [tutório oficial]: http://www.python.org/doc/current/tut/tut.html
  [documentação oficial]: http://www.python.org/doc/
