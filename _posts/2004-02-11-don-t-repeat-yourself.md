---
layout: post
title: "Don't Repeat Yourself"
published: true
category:
  - Web/Tech
---
<p>DRY - Don't Repeat Yourself (PNR - Princípio da Não Repetição): Este é um dos muitos princípios enunciados por Andy Hunt e Dave Thomas, que juntos constituem os <a href="http://www.pragmaticprogrammer.com/">Programadores Pragmáticos</a> (PP), uma dupla de consultores, programadores e <a href="http://pragmaticprogrammer.com/shopsite_sc/store/html/index.html">escritores</a>.</p>

<p>Os PP são sobretudo conhecidos como autores do <a href="http://www.pragmaticprogrammer.com/ppbook/index.html">The Pragmatic Programmer</a>, um livro dedicado à prática da programação que propõe uma série de <a href="http://www.pragmaticprogrammer.com/ppbook/extracts/rule_list.html">princípios essenciais</a> para a criação de programas de qualidade. São também grandes defensores do movimento de <a href="http://www.agilemanifesto.org/">Programação Ágil</a>, e são ainda grandes fãs de <a href="http://www.ruby-lang.org/en/">Ruby</a>, uma linguagem de programação que ocupa um nicho ecológico semelhante ao do Python.</p>

<p>Um dos princípios mais importantes do livro é o PNR, cujo enunciado diz o seguinte:<blockquote><cite>Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.</cite></blockquote>Traduzindo por miúdos, isto significa que um bom programador deve tentar reduzir ao máximo a duplicação de código ou de dados. Este princípio não é novo, sendo conhecido também pelo nome <a href="http://c2.com/cgi/wiki?OnceAndOnlyOnce">Once and Only Once</a> - Uma e Uma Só Vez.</p>

<p>O problema da duplicação de informação, que é um resultado quase inevitável do método <a href="http://en.wikipedia.org/wiki/Cut_and_paste_programming">Copiar e Colar</a> de programação, é que o programa resultante se torna muito mais difícil de modificar. Suponhamos que queremos corrigir um bug ou melhorar o design ou performance de um pedaço de código que ocorre com pequenas variações no nosso programa: isto significa que somos forçados a fazer uma série de modificações repetitivas no nosso código, aumentando o risco de introdução de bugs.</p>

<p>Igualmente, se o nosso programa utilizar um determinado ficheiro de dados, e o nome desse ficheiro for referenciado em vários ficheiros de códigos, sempre que o nome do ficheiro de dados muda, somos obrigados a modificar cada um dos ficheiros de código. Isto pode parecer pouco importante: embora a tarefa seja repetitiva, basta modificar cada ocorrência de informação semelhante. Acontece que nem sempre o modificador do código está consciente destas ocorrências múltiplas da mesma informação, o que aumenta a probabilidade de uma modificação aparentemente insignificante de uma única linha de um ficheiro causar uma série de problemas noutras partes do nosso código, e introduzir bugs que podem não ser imediatamente detectados.</p>

<p>Este problema é amplificado se pensarmos que a fase de desenvolvimento ocupa apenas uma pequena porção da vida útil da maioria dos programas - a fatia de leão é passada na fase de manutenção. A utilização do PNR permite produzir código de melhor qualidade e mais fácil de modificar. Os ganhos são óbvios: quem desenvolve o programa pode modificar e <a href="http://www.refactoring.com/">refactorizar</a> o seu código com maior facilidade; quem mantém o código pode corrigir problemas ou acrescentar funcionalidade com menos riscos; quem utiliza o programa encontrará provavelmente um menor número de bugs.</p>

<p>A Artima tem uma entrevista em duas partes com o Andy Hunt e o Dave Thomas em que estes discutem este princípio em maior detalhe: parte 1 - <a href="http://www.artima.com/intv/fixitP.html">Não Tolerar Janelas Partidas</a>; parte 2 - <a href="">Ortogonalidade e o Princípio da Não Repetição</a>.</p>

<p>A Code Generation Network tem também uma interessante <a href="http://www.codegeneration.net/tiki-print_article.php?articleId=9">entrevista com Dave Thomas</a> sobre Geração Automática de Código (GAC). Nesta entrevista, Dave Thomas explica como a GAC pode ser usada para seguir o PNR, e sublinha que a maior parte dos Assistentes de Programação são maus exemplos de GAC, já que impedem a utilização correcta do PNR.</p>
