---
layout: post
title: "Windows Server 2003"
published: true
category:
  - Web/Tech
---

Anteontem instalei o [Windows Server 2003 Enterprise Edition] na minha
máquina. Tinha começado por instalar o [Windows XP Professional], mas
como tinha deixado mais de metade do meu disco de 60GB livre decidi que
não perdia nada em experimentar o WS2003. A instalação decorreu sem
problemas e preservou a minha instalação pré-existente do WXP, embora o
computador tenha passado a arrancar por defeito com WS2003.

Seguiu-se a rotina habitual quando faço uma nova instalação do Windows:\

-   instalação de drivers para o modem embutido ([Smart Link 56K MDC]),
    para a placa gráfica ([ATI Mobility Radeon 9000]), placa de rede
    ([Realtek RTL8139]), slot PCMCIA, placa wireless ([Mustek 22Mbps]),
    placa de som ([Realtek AC'97]), touchpad ([ALPS]) e câmera de video
    embutida ([Camtel])
-   configuração do sistema operativo e de acesso à rede
-   actualização do sistema com o Windows Update. Como estou a usar um
    sistema operativo recente, foi apenas necessário instalar 10
    Hotfixes para o WS2003 e um Hotfix para o Windows Media Player
-   instalação de umas poucas aplicações essenciais, como o [Mozilla
    1.5], [Open Office 1.1], [Python 2.3.3], [Java 2 SDK 1.4], [jEdit
    4.2pre8], [NoteTab Light 4.95], [Acrobat Reader 6.0.1], [HTML-Kit
    Build 292], [XEmacs 21.4.14], [Cygwin 1.5.5-1], [iTunes 4.2],
    [WinZip 8.1], [Nero 6], [Palm Desktop 4.1], [Eclipse 3.0M6], [Zope
    2.6.2], [Plone 1.0.5], [Apache HTTP Server 2.0.48], [BitTorrent
    3.3], [Zone Alarm 4.5.538], [AdAware 6], [Spybot Search & Destroy
    1.2], [Putty 0.53b], [AOL Instant Messenger 5.2] e [Microsoft
    Powertoys for Windows XP]\

Até agora estou a gostar do WS2003. A interface gráfica utiliza o mesmo
estilo que o Windows 2000, poupando-me a tarefa de enfrentar nem que
seja por alguns segundos o horror que é a interface standard do XP.
Configurei rapidamente o sistema operativo para utilizar ícones grandes,
mas ao contrário do XP não foi necessário ajustar manualmente a
distância entre ícones nem o tamanho do texto.

O grande trunfo do WS2003 é supostamente o facto de trazer um mínimo de
serviços activados "out-of-the-box", o que deve ajudar a reduzir as
históricas fragilidades dos sistemas operativos da Microsoft em termos
de segurança. O WS2003 introduz o conceito de *papéis* (roles), que
representam um conjunto de serviços associados, p.ex. "Servidor de
ficheiros", "Servidor de páginas web", etc. O interface usado para
activar e gerir os diferentes papéis pareceu-me bastante intuitivo.

Outra vantagem do WS2003 é que supostamente [tira melhor partido] da
funcionalidade de [Hyperthreading] do meu P4 3.06GHz, para além de
trazer já o IIS 6

  [Windows Server 2003 Enterprise Edition]: http://www.microsoft.com/windowsserver2003/evaluation/overview/family.mspx#infamily
  [Windows XP Professional]: http://www.microsoft.com/windowsxp/pro/default.asp
  [Smart Link 56K MDC]: http://www.smlink.com/main/index1.php?ln=en&main_id=16
  [ATI Mobility Radeon 9000]: http://www.ati.com/products/mobilityradeon9000/
  [Realtek RTL8139]: http://www.realtek.com.tw/products/products1-1.aspx?lineid=1
  [Mustek 22Mbps]: http://www.mustek.de/fra_/html/produkte/wlpcmcia22.htm
  [Realtek AC'97]: http://www.realtek.com.tw/products/products1-1.aspx?lineid=5
  [ALPS]: http://www3.alps.co.jp/alpscom/
  [Camtel]: http://www.camtel.com.tw/index.htm
  [Mozilla 1.5]: http://www.mozilla.org/products/mozilla1.x/
  [Open Office 1.1]: http://download.openoffice.org/index.html
  [Python 2.3.3]: http://www.python.org/2.3.3/
  [Java 2 SDK 1.4]: http://java.sun.com/j2se/1.4.2/index.jsp
  [jEdit 4.2pre8]: http://www.jedit.org/index.php?page=download
  [NoteTab Light 4.95]: http://www.notetab.com/ntl.php
  [Acrobat Reader 6.0.1]: http://www.adobe.com/products/acrobat/readstep2.html
  [HTML-Kit Build 292]: http://www.chami.com/html-kit/download/
  [XEmacs 21.4.14]: http://www.xemacs.org/Download/index.html
  [Cygwin 1.5.5-1]: http://www.cygwin.com/
  [iTunes 4.2]: http://www.apple.com/itunes/download/
  [WinZip 8.1]: http://www.winzip.com/
  [Nero 6]: http://www.nero.com/en/index.html
  [Palm Desktop 4.1]: http://www.palmone.com/us/software/desktop/
  [Eclipse 3.0M6]: http://www.eclipse.org/downloads/index.php
  [Zope 2.6.2]: http://www.zope.org/Products/
  [Plone 1.0.5]: http://plone.org/download
  [Apache HTTP Server 2.0.48]: http://httpd.apache.org/download.cgi
  [BitTorrent 3.3]: http://bitconjurer.org/BitTorrent/download.html
  [Zone Alarm 4.5.538]: http://www.zonelabs.com/store/content/company/products/znalm/freeDownload.jsp?lid=zadb_zadown
  [AdAware 6]: http://www.lavasoftusa.com/support/download/
  [Spybot Search & Destroy 1.2]: http://www.safer-networking.org/index.php?page=download
  [Putty 0.53b]: http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html
  [AOL Instant Messenger 5.2]: http://www.aim.com/get_aim/win/latest_win.adp
  [Microsoft Powertoys for Windows XP]: http://www.microsoft.com/windowsxp/pro/downloads/powertoys.asp
  [tira melhor partido]: http://www.microsoft.com/windows2000/server/evaluation/performance/reports/hyperthread.asp
  [Hyperthreading]: http://www.intel.com/technology/hyperthread/
