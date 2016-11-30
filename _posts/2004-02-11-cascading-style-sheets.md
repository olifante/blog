---
layout: post
title: "Cascading Style Sheets"
published: true
category:
  - Web/Tech
---
<p>O <a href="http://www.w3.org/Style/CSS/">CSS</a> é uma tecnologia desenvolvida pelo <a href="http://www.w3.org/">World Wide Web Consortium</a> para definir o estilo de um documento. Por estilo entende-se coisas como tipo de letra, cor e tamanho dos diversos componentes do documento, bem como propriedades mais associadas com o layout visual, tal como o posicionamento dos elementos.</p>

<p>O grande objectivo por trás da criação do CSS foi o de permitir a separação do conteúdo informativo ou semântico e do conteúdo de formatação de um documento. As páginas HTML tradicionais misturam ambos os tipos de conteúdo num só documento. Esta abordagem tem várias desvantagens:<ol><li>Sempre que queremos fazer uma alteração global do estilo do documento, como p.ex. substituir o tipo de letra dos cabeçalhos de nível 1, precisamos de localizar cada uma das ocorrências e modificá-la. Se tivermos que fazer não apenas uma modificação, mas sim uma série de modificações, corremos o sério risco de alterar acidentalmente não só o estilo de partes do documento como o seu conteúdo informativo.</li><li>O facto de a formatação estar embutida no documento significa que este fica preso a uma formatação específica. Se mais tarde descobrirmos que o documento que tinhamos formatado para publicação na Web precisa de outra formatação para manter uma estrutura elegante quando impresso, somos obrigados a mudar todo o documento. O problema é que ao adaptar o documento para impressão, este deixa de ficar adequado para a publicação na Web.</li><li>É muito difícil reutilizar num novo documento a formatação utilizada noutro. Se quisermos manter um conjunto de documentos com uma formatação comum, somos obrigados a definir um conjuntos de regras, e esperar que os nossos criadores de documentos as sigam correctamente e de forma consistente.</li></ol>A solução para estes problemas consiste em separar claramente os dois tipos de informação, e usar os documentos em HTML para representar estritamente a estrutura semântica dos nossos dados, passando a informação sobre formatação para uma Folha de Estilo no formato CSS.</p>

<p>Esta abordagem exige alguma disciplina da parte do criador de documentos, já que a utilização dos elementos HTML que estão directamente associados com formatação deve ser evitada. A ideia é abandonar o HTML a médio prazo, e passar a usar o XHTML, um dialecto de XML desenhado para, em conjunto com o CSS, permitir fazer tudo que o HTML permite hoje em dia, mas impondo desde o início a separação de conteúdo semântico e de formatação. Estamos no entanto ainda longe de ver isso acontecer, devido à enorme quantidade de informação disponível na Web em formato HTML.</p>

<p>As seguintes páginas mostram bem como um mesmo documento pode ser apresentado de formas radicalmente diferentes, tudo usando CSS:<br />
<a href="http://www.strangebanana.com/generator.aspx">Strange Banana</a> - carregar novamente a página para ver novo design.<br />
<a href="http://www.csszengarden.com/">Zen Garden</a> - clicar nos links para ver outros designs.<br />
<a href="http://www.meyerweb.com/eric/css/edge/">CSS Edge</a> - clicar nos links para ver outros designs.</p>

<p>Para quem quiser aprender mais, aconselho as seguintes introduções:<br />
<a href="http://www.zvon.org/xxl/CSSTutorial/Output/">Zvon CSS 1 Tutorial</a><br />
<a href="http://www.zvon.org/xxl/CSS2Tutorial/General/htmlIntro.html">Zvon CSS 2 Tutorial</a><br />
<a href="http://www.w3.org/Style/LieBos2e/enter/">Lie & Bos - Chapter 2</a><br />
<a href="http://www.w3.org/MarkUp/Guide/Style">Adding a Touch of Style</a></p>

