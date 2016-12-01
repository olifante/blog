---
layout: post
title: "NãoMeMacem!"
published: true
category:
  - Web/Tech
---

O [BugMeNot!] é um serviço que permite contornar a obrigação de registo
para consultar páginas em determinados sítios.\
\
\
\
Não é irritante seguir um apontador para uma página que parece
interessante, e uma vez lá chegados descobrir que é preciso criar um
utilizador para aceder à dita página, ou pior ainda, pagar para aceder
ao conteúdo? Isto contraria o espírito da Web, que está informalmente
baseado na ideia de que [a informação quer ser livre].\
\
\
\
Uma resposta possível é passar a ignorar todos os apontadores para
sítios que exigem autenticação do utilizador. Embora esta atitude seja
fácil de defender para os sítios que apenas oferecem conteúdo pago,
existem vários sítios importantes com conteúdos gratuitos que exigem a
criação de um utilizador, entre os quais se destacam os principais
jornais norte-americanos, como o [New York Times], o [Washington Post] e
o [L.A. Times].\
\
\
\
A política que costumo seguir é ignorar os sítios que exigem registo do
utilizador até começar a reparar que é frequente encontrar apontadores
para os mesmos, altura em que finalmente decido gastar uns instantes
para criar um utilizador. Criar um utilizador geralmente não é um
processo muito complicado, mas é o suficiente para interromper o fluxo
de leitura. O mais grave é no entanto a violação de privacidade que o
processo acarreta. Quantos de nós não passaram a receber emails não
solicitados após a criação de um utilizador num destes sítios? E mesmo
que tal não aconteça, nunca sabemos se os nossos dados não irão ser
vendidos para uma base de dados de marketing.\
\
\
\
Para facilitar a tarefa de memorização de logins e passwords, uso sempre
o mesmo utilizador, o mesmo email e a mesma password para me registar
neste tipo de sítios, tendo o cuidado de utilizar uma password diferente
de todas as outras passwords importantes usadas por mim.\
\
\
\
Quanto ao email, uso sempre um único endereço criado especialmente para
este tipo de utilização, que raras vezes consulto pois geralmente começo
a receber grandes quantidades de email não solicitado, vulgo spam. Há
muitos fornecedores de email gratuito por onde escolher:

-   [HotPop] (serviço baseado nos EUA que oferece uma caixa de correio
    de 100MB e acesso por Webmail ou POP3)
-   [POP] (Brasil, 50MB, Web/POP3)
-   [Globo Mail] (Brasil, 20MB, Web/POP3)
-   [FastMail] (Austrália/EUA, 10MB, Web/IMAP)

\
Uma alternativa à utilização de um endereço de email real consiste em
usar o [Mailinator], um serviço que permite inventar instantaneamente um
endereço de email, p.ex. <olifante@mailinator.com>, sem necessidade de
qualquer configuração. Se alguma mensagem for enviada para esse
endereço, ela pode ser consultada no Mailinator, sendo apagada ao fim de
algumas horas. Esta solução é ideal quando se quer um endereço para
receber uma única mensagem e não se tenciona voltar a usar o mesmo.\
\
\
\
Há sítios que para além de um utilizador e/ou de um email pedem alguns
dados pessoais. Regra geral, nunca forneço a minha verdadeira
identidade, a não ser em sítios de comércio electrónico em que é
necessário usar o cartão de crédito. Dependendo da simpatia pela
companhia e do grau de intrusividade do processo de registo, posso
fornecer dados correctos ou inventar completamente toda a informação,
mas tendo a inventar as respostas a perguntas que solicitam dados
pessoais.\
\
\
\
Com o BugMeNot, deixa de ser necessário ter todos estes cuidados para
salvaguardar a privacidade. O BugMeNot mantém uma base de dados de pares
de utilizadores e passwords válidos para uma variedade de sítios que
exigem registo. Para utilizar este serviço, basta ir até ao BugMeNot e
introduzir o endereço do sítio que se deseja consultar, e escolher um
dos pares de utilizador/password apresentados. Se o endereço não constar
da base de dados, podemos ajudar o BugMeNot criando um novo registo no
tal sítio que requer registo e inserindo o utilizador e a password sua
base de dados.\
\
\
\
Em alternativa, podemos gravar uma [bookmarklet] do BugMeNot (no Mozilla
basta clicar nela com o botão direito e escolher "Bookmarklet this
link"), e quando se encontrar um sítio com autenticação, basta
seleccionar a bookmarklet para fazer aparecer uma janela com uma lista
dos utilizadores armazenados na base de dados. Se um dos utilizadores
não funcionar, escolha o mais recente: certos sítios apagam
periodicamente utilizadores que são utilizados a partir de muitos IPs
diferentes.\
\
\
\
Quem quiser publicar apontadores para sítios com registo obrigatório
pode contornar o registo criando um apontador para o BugMeNot em que o
endereço do sítio com registo é passado como parâmetro, p.ex:

    <a href="http://bugmenot.com/view.php?url=www.nytimes.com">NY Times</a>

Para mais informações, consultar a [Lista de Perguntas Frequentes] do
BugMeNot.

  [BugMeNot!]: www.bugmenot
  [a informação quer ser livre]: http://www.wired.com/wired/archive/2.03/economy.ideas_pr.html
  [New York Times]: www.nytimes.com
  [Washington Post]: www.washingtonpost.com
  [L.A. Times]: www.latimes.com
  [HotPop]: http://www.hotpop.com/index.jsp
  [POP]: https://seguro.pop.com.br/servlet/site?event=site_clientecadastro_etapa0
  [Globo Mail]: %3Cbr%20/%3Eo%20%3Ca%20href=
  [FastMail]: http://www.fastmail.fm/
  [Mailinator]: http://www.mailinator.com/mailinator/Welcome.do
  [bookmarklet]: javascript:void(window.open('http://bugmenot.com/view.php?mode=bookmarklet&url='+escape(location),'BugMeNot','location=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=385,height=450'))%3Cbr%20/%3E
  [Lista de Perguntas Frequentes]: http://bugmenot.com/faq.php
