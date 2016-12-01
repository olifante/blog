---
layout: post
title: "Subir de nível"
published: true
category:
  - Web/Tech
---

O Aristarco volta à carga, com mais um comentário ao post [FísicosLX:
Linguagens]:

> (...)
>
> Nota 1: O David Luz, do [Linha dos Nodos], [escreveu] sobre um [artigo
> da Nature] relativo a uma falha no programa responsável pelas
> operações da sonda Cassini. Não sei se o programa foi escrito em Java,
> Fortran ou Phyton, mas desconfio que era de mais baixo nível. Diz o
> director científico, da ESA: "*I'm extremely anxious to learn lessons
> from this.*" Diz o David: "*Na ESA alguém transmitiu um comando que
> significava ligue-se um receptor em vez de liguem-se os dois
> receptores. Imagino que a diferença entre estes dois comandos na
> linguagem em que estavam escritos não era era mais que um parêntesis,
> ou uma vírgula, ou umas aspas. (...) faltou verificar uma linha de
> código. Este género de problemas é recorrente nas missões espaciais. E
> os cientistas envolvidos sabem que o risco é enorme.*" Gostava de
> saber a tua opinião sobre como se pode melhorar isto. É que tenho a
> impressão de que perdi um qualquer seminário sobre gestão de
> programação...

Em primeiro lugar um pequeno comentário ao post do David Luz que
referencias: não achas um pouco condescente chamar "Correio dos
Leitores" ao espaço reservado aos comentários? Aquilo que talvez faça
sentido na relação intrinsecamente assimétrica dos jornais com os seus
leitores parece-me desadequado no ambiente igualitário dos blogues, em
que muitos dos leitores que deixam comentários também têm os seus
blogues.

Voltando ao tema da programação, a tua questão original sobre linguagens
de programação veio na sequência de uma diatribe minha contra a
utilização de linguagens de programação pouco flexíveis, que no meu
entender limitam a creatividade do programador, reduzem a sua
produtividade e alteram a sua percepção do que é possível ou não. Por
coincidência, o Blaine Buxton [cita hoje] no seu blog um fragmento de
texto extraído do livro open-source [Thinking Forth]:

> <span id="mainClm">Let's start off things with a quote:\
> </span>
>
> <span id="mainClm">Do I have your interest? This is the best quote
> I've read to describe the productivity gain that we Smalltalkers,
> Lisps, Rubyers, Perlers, Pythoners, and Javascripters enjoy. I just
> love this quote! Anyway...</span>

"Tools for thought", literalmente... Também adoro esta citação. Não é
por acaso que o Blaine menciona as linguagens de programação Smalltalk,
Lisp, Ruby, Perl, Python e Javascript. Estas linguagens têm em comum uma
série de características:

-   [**Dynamic Typing**] - Todas utilizam tipagem dinâmica. Na prática
    isto significa que as variáveis não têm tipos associados,
    funcionando como meras etiquetas que apontam para valores com tipos
    arbitrários, o que permite evitar a declaração de variáveis;
-   **[Type Safe]** - Todas utilizam tipagem forte, com a excepção
    do Perl. Isto significa que os valores referenciados pelas variáveis
    têm sempre um tipo bem definido, não sendo possível tratar esses
    tipos como se fossem outros tipos sem fazer uma conversão explícita;
-   [**Garbage Collection**] - Todas evitam a gestão manual da memória,
    utilizando mecanismos de "garbage collection" automática que
    libertam o programador desta tarefa repetitiva e propensa a erros
    calamitosos;
-   [<span style="font-weight: bold;">Collections</span>] - Todas
    fornecem uma sintaxe simples para a criação e manipulação  de
    [Arrays] e [Associative Arrays], duas [estruturas de dados]
    recursivas (excepto em Perl!) extremamente versáteis;
-   [**Interpreted**] - Todas são linguagens interpretadas, o que
    permite acelerar o ciclo de desenvolvimento.

Haverá outros elementos em comum, mas penso que estas são as principais
razões que levam os praticantes destas e de outras linguagens de
programação "ágeis" a descrever ganhos elevados de produtividade e de
expressividade em relação a linguagens compiladas com tipagem estática e
gestão manual da memória.

Tendo dito isto, há que salientar que embora a expressividade e
produtividade sejam hoje alguns dos critérios mais importantes na
escolha de uma linguagem, há áreas em que as linguagens ditas "ágeis"
não são por enquanto a melhor escolha, como é o caso de aplicações para
centrais nucleares ou aviões, em que a falha não é aceitável (conhecidas
como [safety-critical]), ou de aplicações em que o custo associado à
falha é demasiado alto, como é o caso da missão espacial da sonda
Cassini.

Não há uma linguagem que sirva de panaceia milagrosa para estas
situações, sendo normalmente necessário utilizar uma combinação de
linguagens especializadas e de técnicas e metodologias oriundas de
diversas sub-disciplinas da Informática:

-   À Teoria Formal da Computação vamos buscar mecanismos para provar de
    forma rigorosa que os nossos programas funcionam correctamente.
    Infelizmente as provas formais completas são geralmente
    impraticáveis para sistemas de complexidade moderada;
-   À Tolerância a Faltas vamos buscar técnicas que nos permitem
    construir sistemas [tolerantes a falhas] ou sistemas com alta
    disponibilidade;
-   Aos Processos de Desenvolvimento de Software vamos buscar
    metodologias como o [Capability Maturity Model] ou o [IEC 61508] que
    nos permitem avaliar e restruturar o processo de desenvolvimento de
    software, e métodos de controlo de qualidade como [Black Box
    Testing] ou [White Box Testing] que permitem reduzir os defeitos do
    produto final;

Nalguns casos pode ser ainda necessário utilizar [sistemas operativos]
de [tempo real] (como o [QNX]) que oferecem garantias de tempo de
resposta que são impossíveis de obter com sistemas operativos
convencionais.

Estas são algumas das linguagens especializadas utilizadas nestas
situações:

-   A linguagem de programação [Ada] oferece algum suporte para provas
    formais e é frequentemente utilizada para criar
    aplicações "safety-critical". Muito utilizada pelo exército
    norte-americano;
-   A linguagem de programação [Erlang] oferece ferramentas que
    facilitam o desenvolvimento de sistemas tolerantes a falhas. Criada
    pelo gigante de telecomunicações Ericsson e usada em muitos dos seus
    routers;
-   A linguagem de programação [Eiffel] permite definir pré-condições,
    pós-condições e invariantes que são sempre respeitados por certos
    blocos de código e que permitem aumentar a fiabilidade do código.

Se não for possível utilizar linguagens especializadas, é em geral
preferível utilizar linguagens de alto nível que sejam [type-safe] e
[memory-safe] em vez de linguagens de baixo nível como C ou mesmo C++.
Se houver funcionalidades que só podem ser implementadas em linguagens
de baixo nível, podemos utilizar uma linguagem de alto nível para
implementar o grosso da funcionalidade e invocar quando necessário as
porções escritas em código de baixo nível. Esta abordagem foi bem
descrita no famoso artigo [Scripting: Higher Level Programming for the
21st Century], de John Ousterhout.

  [FísicosLX: Linguagens]: http://fisicoslx.blogspot.com/2005/01/linguagens.html
    "F�sicosLX: Linguagens"
  [Linha dos Nodos]: http://www.blogger.com/r?http%3A%2F%2Flinha-dos-nodos.blogspot.com%2F
  [escreveu]: http://www.blogger.com/r?http%3A%2F%2Flinha-dos-nodos.blogspot.com%2F2005%2F01%2Fcorreio-dos-leitores-uma-leitora-pede.html
  [artigo da Nature]: http://www.blogger.com/r?http%3A%2F%2Fwww.nature.com%2Fnews%2F2005%2F050117%2Ffull%2F050117-12.html
  [cita hoje]: http://www.blainebuxton.com/weblog/2005_01_01_archive.html
  [Thinking Forth]: http://thinking-forth.sourceforge.net/
  [**Dynamic Typing**]: http://c2.com/cgi/wiki?DynamicTyping
  [Type Safe]: http://en.wikipedia.org/wiki/Type_safety
  [**Garbage Collection**]: http://en.wikipedia.org/wiki/Garbage_collection_%28computer_science%29
  [<span style="font-weight: bold;">Collections</span>]: http://work.lauralemay.com/samples/kaleida.html
  [Arrays]: http://en.wikipedia.org/wiki/Array
  [Associative Arrays]: http://en.wikipedia.org/wiki/Associative_array
  [estruturas de dados]: http://en.wikipedia.org/wiki/List_of_data_structures
  [**Interpreted**]: http://c2.com/cgi/wiki?InterpretedLanguage
  [safety-critical]: http://foldoc.doc.ic.ac.uk/foldoc/foldoc.cgi?safety-critical%20system
  [tolerantes a falhas]: http://en.wikipedia.org/wiki/Fault-tolerance
  [Capability Maturity Model]: http://www.npd-solutions.com/cmm.html
  [IEC 61508]: http://www.embedded.com/showArticle.jhtml?articleID=19201765
  [Black Box Testing]: http://en.wikipedia.org/wiki/Black_box_testing
  [White Box Testing]: http://en.wikipedia.org/wiki/White_box_testing
  [sistemas operativos]: http://www.omimo.be/encyc/publications/faq/rtfaq.htm
  [tempo real]: http://www.dedicated-systems.com/encyc/buyersguide/rtos/rtosmenu.htm
  [QNX]: http://www.qnx.com/
  [Ada]: http://www.cs.kuleuven.ac.be/%7Edirk/ada-belgium/ada.html
  [Erlang]: http://www.erlang.org/
  [Eiffel]: http://www.engin.umd.umich.edu/CIS/course.des/cis400/eiffel/eiffel.html
  [type-safe]: http://en.wikipedia.org/wiki/Type-safety
  [memory-safe]: http://en.wikipedia.org/wiki/Data_type#Strong_and_weak_typing
  [Scripting: Higher Level Programming for the 21st Century]: http://home.pacbell.net/ouster/scripting.html
