---
layout: post
title: "Top 25 Lusitano"
published: true
categories:
  - Portugal
  - Python
  - Web/Tech
---
<p>De acordo com o Alexa, os sítios portugueses mais populares do <a href="http://www.alexa.com/site/ds/top_sites?ts_mode=lang&lang=pt">Top 100 Lusófono</a> são os seguintes:</p>
<p>nº 06: <a href="http://www.sapo.pt">www.sapo.pt</a></p>
<p>nº 12: <a href="http://www.iol.pt">www.iol.pt</a></p>
<p>nº 13: <a href="http://www.google.pt">www.google.pt</a></p>
<p>nº 16: <a href="http://www.clix.pt">www.clix.pt</a></p>
<p>nº 24: <a href="http://www.abola.pt">www.abola.pt</a></p>
<p>nº 28: <a href="http://www.terravista.pt">www.terravista.pt</a></p>
<p>nº 32: <a href="http://www.record.pt">www.record.pt</a></p>
<p>nº 34: <a href="http://www.publico.pt">www.publico.pt</a></p>
<p>nº 40: <a href="http://www.ojogo.pt">www.ojogo.pt</a></p>
<p>nº 48: <a href="http://www.e-financas.gov.pt">www.e-financas.gov.pt</a></p>
<p>nº 49: <a href="http://www.millenniumbcp.pt">www.millenniumbcp.pt</a></p>
<p>nº 50: <a href="http://www.telepac.pt">www.telepac.pt</a></p>
<p>nº 53: <a href="http://www.aeiou.pt">www.aeiou.pt</a></p>
<p>nº 64: <a href="http://www.mytmn.pt">www.mytmn.pt</a></p>
<p>nº 70: <a href="http://www.correiomanha.pt">www.correiomanha.pt</a></p>
<p>nº 78: <a href="http://www.xl.pt">www.xl.pt</a></p>
<p>nº 79: <a href="http://www.paginasamarelas.pt">www.paginasamarelas.pt</a></p>
<p>nº 81: <a href="http://www.min-edu.pt">www.min-edu.pt</a></p>
<p>nº 84: <a href="http://www.rtp.pt">www.rtp.pt</a></p>
<p>nº 85: <a href="http://www.co.pt">www.co.pt</a></p>
<p>nº 87: <a href="http://www.oninet.pt">www.oninet.pt</a></p>
<p>nº 88: <a href="http://www.portugalmail.pt">www.portugalmail.pt</a></p>
<p>nº 91: <a href="http://www.mediacapital.pt">www.mediacapital.pt</a></p>
<p>nº 94: <a href="http://www.mail.pt">www.mail.pt</a></p>
<p>nº 95: <a href="http://www.tvcabo.pt">www.tvcabo.pt</a></p>
<p>Uma em cada quatro páginas do top 100 tem a extensão .pt, o que é surpreendente se pensarmos que para cada português existem cerca de 18 brasileiros.</p>
<p>
Para extrair esta informação da páginas do Top 100 Lusófono, usei umas poucas linhas de Python. Primeiro usei o módulo <code>urllib2</code> para ler a página para dentro da <em>string</em> <code>page</code>:</p>
<blockquote><pre>import urllib2
url="http://www.alexa.com/site/ds/top_sites?" \
     + "ts_mode=lang&amp;lang=pt"
page=urllib2.urlopen(url).read()
</pre></blockquote>
Em seguida usei o módulo <a href="http://www.crummy.com/software/BeautifulSoup/">BeautifulSoup</a>  do Leonard Richardson para procurar no código HTML da página todas as <em>tags</em> do tipo <code>span</code> e com o atributo <code>class</code> igual a <code>smallG</code>:
<blockquote><pre>
from BeautifulSoup import BeautifulSoup as BS
bs=BS()
bs.feed(page)
tags=bs('span', {'class': 'smallG'})
links=[tag.contents[0].string for tag in tags]
pt_links={}
for i in range(len(links)):
    link=links[i]
    if link.endswith('.pt'):
        pt_links[i]=link
import pprint
pprint.pprint(pt_links)</pre></blockquote>
O resultado é este <a href="http://docs.python.org/tut/node7.html#SECTION007400000000000000000">dicionário</a> de 25 domínios .pt:
<blockquote><pre>{6: 'www.sapo.pt',
 12: 'www.iol.pt',
 13: 'www.google.pt',
 16: 'www.clix.pt',
 24: 'www.abola.pt',
 28: 'www.terravista.pt',
 32: 'www.record.pt',
 34: 'www.publico.pt',
 40: 'www.ojogo.pt',
 48: 'www.e-financas.gov.pt',
 49: 'www.millenniumbcp.pt',
 50: 'www.telepac.pt',
 53: 'www.aeiou.pt',
 64: 'www.mytmn.pt',
 70: 'www.correiomanha.pt',
 78: 'www.xl.pt',
 79: 'www.paginasamarelas.pt',
 81: 'www.min-edu.pt',
 84: 'www.rtp.pt',
 85: 'www.co.pt',
 87: 'www.oninet.pt',
 88: 'www.portugalmail.pt',
 91: 'www.mediacapital.pt',
 94: 'www.mail.pt',
 95: 'www.tvcabo.pt'}</pre></blockquote>

