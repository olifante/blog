---
layout: post
title: "Subir de nível"
published: true
category:
  - Web/Tech
---
<p>O Aristarco volta à carga, com mais um comentário ao post <a href="http://fisicoslx.blogspot.com/2005/01/linguagens.html" title="F�sicosLX: Linguagens">FísicosLX: Linguagens</a>:

</p><blockquote cite="http://fisicoslx.blogspot.com/2005/01/linguagens.html"><p>(...)</p>

<p>Nota 1: O David Luz, do <a href="http://www.blogger.com/r?http%3A%2F%2Flinha-dos-nodos.blogspot.com%2F">Linha dos Nodos</a>, <a href="http://www.blogger.com/r?http%3A%2F%2Flinha-dos-nodos.blogspot.com%2F2005%2F01%2Fcorreio-dos-leitores-uma-leitora-pede.html">escreveu</a> sobre um <a href="http://www.blogger.com/r?http%3A%2F%2Fwww.nature.com%2Fnews%2F2005%2F050117%2Ffull%2F050117-12.html">artigo da Nature</a>
relativo a uma falha no programa responsável pelas operações da sonda
Cassini. Não sei se o programa foi escrito em Java, Fortran ou Phyton,
mas desconfio que era de mais baixo nível. Diz o director científico,
da ESA: &quot;<em>I'm extremely anxious to learn lessons from this.</em>&quot; Diz o David: &quot;<em>Na
ESA alguém transmitiu um comando que significava ligue-se um receptor
em vez de liguem-se os dois receptores. Imagino que a diferença entre
estes dois comandos na linguagem em que estavam escritos não era era
mais que um parêntesis, ou uma vírgula, ou umas aspas. (...) faltou
verificar uma linha de código. Este género de problemas é recorrente
nas missões espaciais. E os cientistas envolvidos sabem que o risco é
enorme.</em>&quot; Gostava de saber a tua opinião sobre como se pode melhorar
isto. É que tenho a impressão de que perdi um qualquer seminário sobre
gestão de programação...</p></blockquote><p>Em primeiro lugar um pequeno comentário ao post do David Luz que referencias: não achas um pouco condescente chamar &quot;Correio dos Leitores&quot; ao espaço reservado aos comentários? Aquilo que talvez faça sentido na relação intrinsecamente assimétrica dos jornais com os seus leitores parece-me desadequado no ambiente igualitário dos blogues, em que muitos dos leitores que deixam comentários também têm os seus blogues.</p>

<p>Voltando ao tema da programação, a tua questão original sobre linguagens de programação veio na sequência de uma diatribe minha contra a utilização de linguagens de programação pouco flexíveis, que no meu entender limitam a creatividade do programador, reduzem a sua produtividade e alteram a sua percepção do que é possível ou não. Por coincidência, o Blaine Buxton <a href="http://www.blainebuxton.com/weblog/2005_01_01_archive.html">cita hoje</a> no seu blog um fragmento de texto extraído do livro open-source <a href="http://thinking-forth.sourceforge.net/">Thinking Forth</a>:</p><blockquote><p><span id="mainClm">Let's start off things with a quote:<br /><ul><p>&quot;The
programmer using a batch-compiler language can seldom achieve the
productive state of mind that artists achieve when the creative current
is unhindered.&quot;</p></ul></span></p></blockquote><blockquote><p><span id="mainClm">Do I have your interest? This is the best quote
I've read to describe the productivity gain that we Smalltalkers,
Lisps, Rubyers, Perlers, Pythoners, and Javascripters enjoy. I just
love this quote! Anyway...</span></p></blockquote><p>&quot;Tools for thought&quot;, literalmente... Também adoro esta citação. Não é por acaso que o Blaine menciona as linguagens de programação Smalltalk, Lisp, Ruby, Perl, Python e Javascript. Estas linguagens têm em comum uma série de características:</p>

<ul><li><a href="http://c2.com/cgi/wiki?DynamicTyping"><strong>Dynamic Typing</strong></a> - Todas utilizam tipagem dinâmica. Na prática isto significa que as variáveis não têm tipos associados, funcionando como meras etiquetas que apontam para valores com tipos arbitrários, o que permite evitar a declaração de variáveis;</li>

<li><strong><a href="http://en.wikipedia.org/wiki/Type_safety">Type Safe</a></strong> - Todas utilizam tipagem forte, com a excepção do Perl. Isto significa que os valores referenciados pelas variáveis têm sempre um tipo bem definido, não sendo possível tratar esses tipos como se fossem outros tipos sem fazer uma conversão explícita;</li>

<li><a href="http://en.wikipedia.org/wiki/Garbage_collection_%28computer_science%29"><strong>Garbage Collection</strong></a> - Todas evitam a gestão manual da memória, utilizando mecanismos de &quot;garbage collection&quot; automática que libertam o programador desta tarefa repetitiva e propensa a erros calamitosos;</li>

<li><a href="http://work.lauralemay.com/samples/kaleida.html"><span style="font-weight: bold;">Collections</span></a> - Todas fornecem uma sintaxe simples para a criação e manipulação&nbsp; de <a href="http://en.wikipedia.org/wiki/Array">Arrays</a> e <a href="http://en.wikipedia.org/wiki/Associative_array">Associative Arrays</a>, duas <a href="http://en.wikipedia.org/wiki/List_of_data_structures">estruturas de dados</a> recursivas (excepto em Perl!) extremamente versáteis;</li>

<li><a href="http://c2.com/cgi/wiki?InterpretedLanguage"><strong>Interpreted</strong></a> - Todas são linguagens interpretadas, o que permite acelerar o ciclo de desenvolvimento.</li></ul>

<p>Haverá outros elementos em comum, mas penso que estas são as principais razões que levam os praticantes destas e de outras linguagens de programação &quot;ágeis&quot; a descrever ganhos elevados de produtividade e de expressividade em relação a linguagens compiladas com tipagem estática e gestão manual da memória.</p>

<p>Tendo dito isto, há que salientar que embora a expressividade e produtividade sejam hoje alguns dos critérios mais importantes na escolha de uma linguagem, há áreas em que as linguagens ditas &quot;ágeis&quot; não são por enquanto a melhor escolha, como é o caso de aplicações para centrais nucleares ou aviões, em que a falha não é aceitável (conhecidas como <a href="http://foldoc.doc.ic.ac.uk/foldoc/foldoc.cgi?safety-critical%20system">safety-critical</a>), ou de aplicações em que o custo associado à falha é demasiado alto, como é o caso da missão espacial da sonda Cassini.</p>

<p>Não há uma linguagem que sirva de panaceia milagrosa para estas situações, sendo normalmente necessário utilizar uma combinação de linguagens especializadas e de técnicas e metodologias oriundas de diversas sub-disciplinas da Informática:</p>

<ul><li>À Teoria Formal da Computação vamos buscar mecanismos para provar de forma rigorosa que os nossos programas funcionam correctamente. Infelizmente as provas formais completas são geralmente impraticáveis para sistemas de complexidade moderada;</li>

<li>À Tolerância a Faltas vamos buscar técnicas que nos permitem construir sistemas <a href="http://en.wikipedia.org/wiki/Fault-tolerance">tolerantes a falhas</a> ou sistemas com alta disponibilidade;</li>

<li>Aos Processos de Desenvolvimento de Software vamos buscar metodologias como o <a href="http://www.npd-solutions.com/cmm.html">Capability Maturity Model</a> ou o <a href="http://www.embedded.com/showArticle.jhtml?articleID=19201765">IEC 61508</a> que nos permitem avaliar e restruturar o processo de desenvolvimento de software, e métodos de controlo de qualidade como <a href="http://en.wikipedia.org/wiki/Black_box_testing">Black Box Testing</a> ou <a href="http://en.wikipedia.org/wiki/White_box_testing">White Box Testing</a> que permitem reduzir os defeitos do produto final;</li></ul>

<p>Nalguns casos pode ser ainda necessário utilizar <a href="http://www.omimo.be/encyc/publications/faq/rtfaq.htm">sistemas operativos</a> de <a href="http://www.dedicated-systems.com/encyc/buyersguide/rtos/rtosmenu.htm">tempo real</a> (como o <a href="http://www.qnx.com/">QNX</a>) que oferecem garantias de tempo de resposta que são impossíveis de obter com sistemas operativos convencionais.

</p>

<p>Estas são algumas das linguagens especializadas utilizadas nestas situações:</p>

<ul><li> A linguagem de programação <a href="http://www.cs.kuleuven.ac.be/%7Edirk/ada-belgium/ada.html">Ada</a> oferece algum suporte para provas formais e é frequentemente utilizada para criar aplicações &quot;safety-critical&quot;. Muito utilizada pelo exército norte-americano;</li>

<li>A linguagem de programação <a href="http://www.erlang.org/">Erlang</a> oferece ferramentas que facilitam o desenvolvimento de sistemas tolerantes a falhas. Criada pelo gigante de telecomunicações Ericsson e usada em muitos dos seus routers;</li>

<li>A linguagem de programação <a href="http://www.engin.umd.umich.edu/CIS/course.des/cis400/eiffel/eiffel.html">Eiffel</a> permite definir pré-condições, pós-condições e invariantes que são sempre respeitados por certos blocos de código e que permitem aumentar a fiabilidade do código.</li></ul>

<p>Se não for possível utilizar linguagens especializadas, é em geral preferível utilizar linguagens de alto nível que sejam <a href="http://en.wikipedia.org/wiki/Type-safety">type-safe</a> e <a href="http://en.wikipedia.org/wiki/Data_type#Strong_and_weak_typing">memory-safe</a> em vez de linguagens de baixo nível como C ou mesmo C++. Se houver funcionalidades que só podem ser implementadas em linguagens de baixo nível, podemos utilizar uma linguagem de alto nível para implementar o grosso da funcionalidade e invocar quando necessário as porções escritas em código de baixo nível. Esta abordagem foi bem descrita no famoso artigo <a href="http://home.pacbell.net/ouster/scripting.html">Scripting: Higher Level Programming for the 21st Century</a>, de John Ousterhout.</p>

<p></p>

<p></p>

