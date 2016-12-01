---
layout: post
title: "Top 25 Lusitano"
published: true
categories:
  - Portugal
  - Python
  - Web/Tech
---

De acordo com o Alexa, os sítios portugueses mais populares do [Top 100
Lusófono] são os seguintes:

nº 06: [www.sapo.pt]

nº 12: [www.iol.pt]

nº 13: [www.google.pt]

nº 16: [www.clix.pt]

nº 24: [www.abola.pt]

nº 28: [www.terravista.pt]

nº 32: [www.record.pt]

nº 34: [www.publico.pt]

nº 40: [www.ojogo.pt]

nº 48: [www.e-financas.gov.pt]

nº 49: [www.millenniumbcp.pt]

nº 50: [www.telepac.pt]

nº 53: [www.aeiou.pt]

nº 64: [www.mytmn.pt]

nº 70: [www.correiomanha.pt]

nº 78: [www.xl.pt]

nº 79: [www.paginasamarelas.pt]

nº 81: [www.min-edu.pt]

nº 84: [www.rtp.pt]

nº 85: [www.co.pt]

nº 87: [www.oninet.pt]

nº 88: [www.portugalmail.pt]

nº 91: [www.mediacapital.pt]

nº 94: [www.mail.pt]

nº 95: [www.tvcabo.pt]

Uma em cada quatro páginas do top 100 tem a extensão .pt, o que é
surpreendente se pensarmos que para cada português existem cerca de 18
brasileiros.

Para extrair esta informação da páginas do Top 100 Lusófono, usei umas
poucas linhas de Python. Primeiro usei o módulo `urllib2` para ler a
página para dentro da *string* `page`:

>     import urllib2
>     url="http://www.alexa.com/site/ds/top_sites?" \
>          + "ts_mode=lang&lang=pt"
>     page=urllib2.urlopen(url).read()

Em seguida usei o módulo [BeautifulSoup] do Leonard Richardson para
procurar no código HTML da página todas as *tags* do tipo `span` e com o
atributo `class` igual a `smallG`:

>     from BeautifulSoup import BeautifulSoup as BS
>     bs=BS()
>     bs.feed(page)
>     tags=bs('span', {'class': 'smallG'})
>     links=[tag.contents[0].string for tag in tags]
>     pt_links={}
>     for i in range(len(links)):
>         link=links[i]
>         if link.endswith('.pt'):
>             pt_links[i]=link
>     import pprint
>     pprint.pprint(pt_links)

O resultado é este [dicionário] de 25 domínios .pt:

>     {6: 'www.sapo.pt',
>      12: 'www.iol.pt',
>      13: 'www.google.pt',
>      16: 'www.clix.pt',
>      24: 'www.abola.pt',
>      28: 'www.terravista.pt',
>      32: 'www.record.pt',
>      34: 'www.publico.pt',
>      40: 'www.ojogo.pt',
>      48: 'www.e-financas.gov.pt',
>      49: 'www.millenniumbcp.pt',
>      50: 'www.telepac.pt',
>      53: 'www.aeiou.pt',
>      64: 'www.mytmn.pt',
>      70: 'www.correiomanha.pt',
>      78: 'www.xl.pt',
>      79: 'www.paginasamarelas.pt',
>      81: 'www.min-edu.pt',
>      84: 'www.rtp.pt',
>      85: 'www.co.pt',
>      87: 'www.oninet.pt',
>      88: 'www.portugalmail.pt',
>      91: 'www.mediacapital.pt',
>      94: 'www.mail.pt',
>      95: 'www.tvcabo.pt'}

  [Top 100 Lusófono]: http://www.alexa.com/site/ds/top_sites?ts_mode=lang&lang=pt
  [www.sapo.pt]: http://www.sapo.pt
  [www.iol.pt]: http://www.iol.pt
  [www.google.pt]: http://www.google.pt
  [www.clix.pt]: http://www.clix.pt
  [www.abola.pt]: http://www.abola.pt
  [www.terravista.pt]: http://www.terravista.pt
  [www.record.pt]: http://www.record.pt
  [www.publico.pt]: http://www.publico.pt
  [www.ojogo.pt]: http://www.ojogo.pt
  [www.e-financas.gov.pt]: http://www.e-financas.gov.pt
  [www.millenniumbcp.pt]: http://www.millenniumbcp.pt
  [www.telepac.pt]: http://www.telepac.pt
  [www.aeiou.pt]: http://www.aeiou.pt
  [www.mytmn.pt]: http://www.mytmn.pt
  [www.correiomanha.pt]: http://www.correiomanha.pt
  [www.xl.pt]: http://www.xl.pt
  [www.paginasamarelas.pt]: http://www.paginasamarelas.pt
  [www.min-edu.pt]: http://www.min-edu.pt
  [www.rtp.pt]: http://www.rtp.pt
  [www.co.pt]: http://www.co.pt
  [www.oninet.pt]: http://www.oninet.pt
  [www.portugalmail.pt]: http://www.portugalmail.pt
  [www.mediacapital.pt]: http://www.mediacapital.pt
  [www.mail.pt]: http://www.mail.pt
  [www.tvcabo.pt]: http://www.tvcabo.pt
  [BeautifulSoup]: http://www.crummy.com/software/BeautifulSoup/
  [dicionário]: http://docs.python.org/tut/node7.html#SECTION007400000000000000000
