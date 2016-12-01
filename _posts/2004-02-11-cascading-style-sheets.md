---
layout: post
title: "Cascading Style Sheets"
published: true
category:
  - Web/Tech
---

O [CSS] é uma tecnologia desenvolvida pelo [World Wide Web Consortium]
para definir o estilo de um documento. Por estilo entende-se coisas como
tipo de letra, cor e tamanho dos diversos componentes do documento, bem
como propriedades mais associadas com o layout visual, tal como o
posicionamento dos elementos.

O grande objectivo por trás da criação do CSS foi o de permitir a
separação do conteúdo informativo ou semântico e do conteúdo de
formatação de um documento. As páginas HTML tradicionais misturam ambos
os tipos de conteúdo num só documento. Esta abordagem tem várias
desvantagens:

1.  Sempre que queremos fazer uma alteração global do estilo do
    documento, como p.ex. substituir o tipo de letra dos cabeçalhos de
    nível 1, precisamos de localizar cada uma das ocorrências
    e modificá-la. Se tivermos que fazer não apenas uma modificação, mas
    sim uma série de modificações, corremos o sério risco de alterar
    acidentalmente não só o estilo de partes do documento como o seu
    conteúdo informativo.
2.  O facto de a formatação estar embutida no documento significa que
    este fica preso a uma formatação específica. Se mais tarde
    descobrirmos que o documento que tinhamos formatado para publicação
    na Web precisa de outra formatação para manter uma estrutura
    elegante quando impresso, somos obrigados a mudar todo o documento.
    O problema é que ao adaptar o documento para impressão, este deixa
    de ficar adequado para a publicação na Web.
3.  É muito difícil reutilizar num novo documento a formatação
    utilizada noutro. Se quisermos manter um conjunto de documentos com
    uma formatação comum, somos obrigados a definir um conjuntos de
    regras, e esperar que os nossos criadores de documentos as sigam
    correctamente e de forma consistente.

A solução para estes problemas consiste em separar claramente os dois
tipos de informação, e usar os documentos em HTML para representar
estritamente a estrutura semântica dos nossos dados, passando a
informação sobre formatação para uma Folha de Estilo no formato CSS.

Esta abordagem exige alguma disciplina da parte do criador de
documentos, já que a utilização dos elementos HTML que estão
directamente associados com formatação deve ser evitada. A ideia é
abandonar o HTML a médio prazo, e passar a usar o XHTML, um dialecto de
XML desenhado para, em conjunto com o CSS, permitir fazer tudo que o
HTML permite hoje em dia, mas impondo desde o início a separação de
conteúdo semântico e de formatação. Estamos no entanto ainda longe de
ver isso acontecer, devido à enorme quantidade de informação disponível
na Web em formato HTML.

As seguintes páginas mostram bem como um mesmo documento pode ser
apresentado de formas radicalmente diferentes, tudo usando CSS:\
[Strange Banana] - carregar novamente a página para ver novo design.\
[Zen Garden] - clicar nos links para ver outros designs.\
[CSS Edge] - clicar nos links para ver outros designs.

Para quem quiser aprender mais, aconselho as seguintes introduções:\
[Zvon CSS 1 Tutorial]\
[Zvon CSS 2 Tutorial]\
[Lie & Bos - Chapter 2]\
[Adding a Touch of Style]

  [CSS]: http://www.w3.org/Style/CSS/
  [World Wide Web Consortium]: http://www.w3.org/
  [Strange Banana]: http://www.strangebanana.com/generator.aspx
  [Zen Garden]: http://www.csszengarden.com/
  [CSS Edge]: http://www.meyerweb.com/eric/css/edge/
  [Zvon CSS 1 Tutorial]: http://www.zvon.org/xxl/CSSTutorial/Output/
  [Zvon CSS 2 Tutorial]: http://www.zvon.org/xxl/CSS2Tutorial/General/htmlIntro.html
  [Lie & Bos - Chapter 2]: http://www.w3.org/Style/LieBos2e/enter/
  [Adding a Touch of Style]: http://www.w3.org/MarkUp/Guide/Style
