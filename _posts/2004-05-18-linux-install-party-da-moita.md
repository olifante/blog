---
layout: post
title: "Linux Install Party da Moita"
published: true
category:
  - Web/Tech
---

![logo\_mini]

Estive este Sábado à tarde na [Linux Install Party da Moita], que
decorreu nas instalações da [Universidade Independente]. Este evento,
que foi patrocinado pela [ANSOL - Associação Nacional para o Software
Livre] e pela [Nixius], serviu para divulgar o sistema operativo
[GNU]/[Linux]. No local estavam vários voluntários que ajudaram muitos
dos participantes a instalar uma das muitas [distribuições] de Linux nos
seus computadores. No evento estiveram também presentes membros do grupo
[OpenBSD-pt] em representação da comunidade portuguesa de utilizadores
de BSD, que tiveram a simpatia de pôr mais de [200 fotos do evento]
online.\

\
Para chegar lá foi complicado: Andei mais de uma hora às voltas na outra
banda até dar com a Moita, que vá-se lá saber porquê imaginava que fosse
perto de Almada. Para agravar a coisa, na Moita ninguém sabia o que era
a Universidade Independente. Quando finalmente cheguei, por volta das
16h30, a coisa já estava bastante animada, com as mesas repletas de
computadores a correr diversos sistemas operativos. A maioria das
pessoas que estavam a instalar alguma coisa pareciam estar a instalar
[Mandrake] 9.2 e 10.0, mas vi por lá outras máquinas a demonstrar o
funcionamento do [SUSE] 9.1 e do [Debian].\

\
No evento estavam pelo menos três máquinas (incluindo dois portáteis) a
correr [OpenBSD], a variante de BSD hiper-segura e ultra-compacta. Nunca
tinha visto o OpenBSD em funcionamento, e para minha surpresa a
interface gráfica pareceu-me bastante elegante. Tinha a ideia de que os
ambientes gráficos no universo BSD andavam um pouco atrasados em relação
ao Linux, mas pelos vistos tal não é necessariamente verdade.\

\
Fiquei completamente embasbacado com o [Xebian], uma variante do Linux
Debian que corre em XBox. O João Fernandes, um dos voluntários do
LIP-Moita, tinha a sua XBox ligada a uma grande televisão que trouxe de
casa, na qual tinha instalado o Xebian. Por aquilo que o João me
explicou, é possível instalar o Xebian numa Xbox sem necessidade de
"chipar" a máquina e assim violar a garantia. O Xebian é instalado
usando um Live-CD com opção de instalação, ao estilo do [Knoppix]. Os
cabos dos gamepads da XBox são cabos USB vulgar de Lineu com conectores
proprietários, mas é possível modificar o cabo para ligar outros
dispositivos USB standard. O João tinha modificado o cabo de um dos
gamepads de forma a poder ligar um teclado e um rato sem fios da
Creative, e tinha ainda recompilado o kernel do Xebian de forma a poder
utilizar a resolução 800x600. A resolução pré-definida de 640x480 está
mais próxima da resolução nativa do formato PAL, mas a esta resolução
não cabe muita coisa no écran, enquanto a resolução de 800x600 permite
estar mais à vontade. Quando é que será que a Microsoft se decide a
actualizar o preço da XBox para os \$150 dos EUA?\

Não foi apenas por curiosidade que fui à LIP-Moita. Há cerca de um mês
instalei o Debian no meu antigo PC, e embora a instalação não tenha sido
muito complicada, não consegui pôr nem a rede nem o ambiente gráfico a
funcionar. O João Fernandes, que também é fanático de Debian,
ofereceu-se para me ajudar a resolver o problema, mas ao fim de pouco
tempo decidimos fazer uma re-instalação de raiz. Infelizmente tive que
me vir embora antes de conseguirmos pôr o ambiente gráfico a funcionar,
mas pelo menos ficou a funcionar a rede.

Quando cheguei a casa usei o [BitchX] para me ligar ao canal [\#debian],
onde me deram umas dicas, e acabei por conseguir pôr o [XFce4] a
funcionar, embora o rato não seja reconhecido. Apesar dos problemas,
fiquei absolutamente fascinado com a forma como é possível começar com
uma instalação minimalista de de 117MB e usar o apt-get para instalar
apenas e só o software que se deseja.

  [logo\_mini]: http://olifante.blogs.com/covil/images/logo_mini.png{width="150"
  height="144"}
  [Linux Install Party da Moita]: http://moita.nocentro.com/abertura.html
  [Universidade Independente]: http://www.uni.pt/servicos/site_ol/historico/noticia0.asp?id=100
  [ANSOL - Associação Nacional para o Software Livre]: http://www.ansol.org/ansol.pt.html
  [Nixius]: http://www.sitaar.com/nixius/
  [GNU]: http://www.gnu.org/gnu/linux-and-gnu.html
  [Linux]: http://www.linux.org/
  [distribuições]: http://www.distrowatch.com/
  [OpenBSD-pt]: http://www.openbsd-pt.org/
  [200 fotos do evento]: http://www.openbsd-pt.org/fotos-moita/
  [Mandrake]: http://www.mandrakesoft.com/
  [SUSE]: http://www.suse.com/us/index.html
  [Debian]: http://www.debian.org/
  [OpenBSD]: http://www.openbsd.org/
  [Xebian]: http://www.xbox-linux.org/docs/debian.html
  [Knoppix]: http://www.knopper.net/knoppix/index-en.html
  [BitchX]: http://packages.debian.org/unstable/net/bitchx
  [\#debian]: http://www.debian.org/support#irc
  [XFce4]: http://www.xfce.org/index.php
