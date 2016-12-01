---
layout: post
title: "Unix em Windows"
published: true
category:
  - Web/Tech
---

Boas notícias: segundo o [Slashdot], a Microsoft vai tornar o [Services
for Unix] num produto gratuito a partir da versão 3.5.

O SFU, que actualmente custa \$99, é um conjunto de ferramentas que
entre outras coisas permite aos utilizadores de Windows correr muitos
dos programas que os utilizadores das diversas variantes de Unix e Linux
costumam utilizar quando trabalham a partir da linha de comando, isto é,
quando trabalham com aplicações que funcionam em modo texto e não com as
aplicações gráficas sofisticadas, que são para a maioria do utilizadores
o único tipo de aplicação que conhecem.

A principal alternativa ao SFU é o excelente [Cygwin], um projecto [open
source] da Cygnus, uma companhia que foi entretanto absorvida pela
RedHat. O Cygwin é gratuito e distribuido sob uma licença [GPL], e
inclui uma enorme quantidade de ferramentas associadas ao projecto
[GNU]. Dadas as enormes deficiências da linha de comando dos diversos
sistemas operativos da família Windows, a instalação do Cygwin tornou-se
para mim nos últimos anos uma tarefa obrigatória sempre que faço uma
nova instalação de Windows. No entanto, pode ser que existam [motivos
para preferir o SFU ao Cygwin] - o facto de ser um produto com o carimbo
da Microsoft significa que a integração com o sistema operativo será
provavelmente superior à do Cygwin, que não é brilhante. Uma outra
alternativa é o [U/WIN], uma ferramenta comercial.

Para quem nunca trabalhou com Unix, é legítimo perguntar qual a razão
que leva adultos vacinados a suspirar por aplicações que apenas correm
em modo texto, voltando as costas ao admirável mundo novo das aplicações
gráficas vulgarizadas pela Apple e pela Microsoft? Para alguns a
resposta reside simplesmente no legítimo desejo de continuar a usar
ferramentas com que se sentem produtivos. Uma parte importante da
resposta reside porém na [filosofia Unix] ([1], [2]), sumarizada por
Doug McIlroy como\

-   Escrever programas que fazem uma só coisa e que a fazem bem.
-   Escrever programas para trabalharem juntos.
-   Escrever programas que processam texto, pois o texto constitui uma
    interface universal.

Esta filosofia justifica plenamente a existência de muitos programas
aparentemente triviais, como o "head", que mostra as primeiras linhas de
um ficheiro, ou o "wc", que conta o número de linhas de um ficheiro. O
poder do Unix reside no facto de que um utilizador intermédio pode
utilizar canos ("pipes") para transferir texto entre programas. É
possível usar canos para alimentar um programa com o resultado de outro,
o que possibilita uma espécie de programação combinatória instantânea,
em que programas relativamente ricos são criados através da composição
de vários componentes que transformam o seu input de formas diferentes.
Esta funcionalidade oferece uma sensação extraordinária de produtividade
quando usada pelo utilizador experiente para manipular componentes
pré-existentes, permitindo por vezes fazer com um único comando composto
aquilo que nalgumas linguagens de programação exigiria muitas linhas de
código. Por exemplo, o ficheiro /etc/password:

\#\#\
\# User Database\
\#\#\
nobody:\*:-2:-2:Unprivileged User:/:/usr/bin/false\
root:\*:0:0:System Administrator:/var/root:/bin/sh\
daemon:\*:1:1:System Services:/var/root:/usr/bin/false\
smmsp:\*:25:25:Sendmail User:/private/etc/mail:/usr/bin/false\
lp:\*:26:26:Printing Services:/var/spool/cups:/usr/bin/false\
postfix:\*:27:27:Postfix User:/var/spool/postfix:/usr/bin/false\
www:\*:70:70:World Wide Web Server:/Library/WebServer:/usr/bin/false\
eppc:\*:71:71:Apple Events User:/var/empty:/usr/bin/false\
mysql:\*:74:74:MySQL Server:/var/empty:/usr/bin/false\
sshd:\*:75:75:sshd Privilege separation:/var/empty:/usr/bin/false\
qtss:\*:76:76:QuickTime Streaming Server:/var/empty:/usr/bin/false\
cyrus:\*:77:6:Cyrus User:/var/imap:/usr/bin/false\
mailman:\*:78:78:Mailman user:/var/empty:/usr/bin/false\
appserver:\*:79:79:Application Server:/var/empty:/usr/bin/false\
unknown:\*:99:99:Unknown User:/var/empty:/usr/bin/false

pode ser transformado em:

appserver = Application Server\
cyrus = Cyrus User\
daemon = System Services\
eppc = Apple Events User\
lp = Printing Services\
mailman = Mailman user\
mysql = MySQL Server\
nobody = Unprivileged User\
postfix = Postfix User\
qtss = QuickTime Streaming Server\
root = System Administrator\
smmsp = Sendmail User\
sshd = sshd Privilege separation\
unknown = Unknown User\
www = World Wide Web Server

usando apenas 4 comandos ligados por canos (representados por "|"):

cat /etc/passwd | grep -v "\#" | awk -F: '{print \$1, "=", \$5}'| sort

Apesar da incontestável superioridade das aplicações gráficas em muitos
domínios, este paradigma combinatório tem sido difícil de transferir
para o mundo das aplicações modernas, que em geral fazem bastante mais
do receber um pedaço de texto, processá-lo e produzir outro pedaço de
texto. Isto significa que regra geral a maior parte das aplicações
gráficas vive no seu mundo, comunicando com dificuldade com outras
aplicações. Talvez a adopção galopante do [XML] como meio de comunicacão
entre programas torne em breve possível combinar aplicações gráficas com
a mesma facilidade com que se combinam aplicações de modo texto em Unix,
mas esse dia ainda não chegou.

  [Slashdot]: http://slashdot.org/article.pl?sid=04/01/14/1738230&mode=nested&tid=109&tid=130&tid=185&tid=187&tid=190
  [Services for Unix]: http://www.microsoft.com/windows/sfu/default.asp
  [Cygwin]: http://www.cygwin.com/
  [open source]: http://www.opensource.org/
  [GPL]: http://www.gnu.org/copyleft/gpl.html
  [GNU]: http://www.gnu.org/
  [motivos para preferir o SFU ao Cygwin]: http://slashdot.org/comments.pl?sid=92838&cid=7976423
  [U/WIN]: http://www.research.att.com/sw/tools/uwin/
  [filosofia Unix]: http://www.faqs.org/docs/artu/ch01s06.html
  [1]: http://hebb.cis.uoguelph.ca/~dave/27320/new/unixphil.html
  [2]: http://cbbrowne.com/info/unix.html
  [XML]: http://www.w3schools.com/xml/xml_whatis.asp
