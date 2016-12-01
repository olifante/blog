---
layout: post
title: "Bloglines meme"
published: true
category:
  - Weblogs
---

For what it's worth, here's my take on the [Bloglines meme] for my blog.
These are the top related feeds mentioned by Bloglines:

1.  [Magonia]
2.  [Dave Shea's mezzoblue]
3.  [Asterisk -- Summaries]
4.  [Nick Bradbury]
5.  [kottke.org remaindered links]
6.  [sken | externals]
7.  [Neil's World]
8.  [Veerle]
9.  [CSS Vault Gallery]
10. [SimpleBits]
11. [Daring Fireball]
12. [Gizmodo]
13. [Boing Boing]
14. [Tales from the crib]
15. [little things of life (sken.be)]
16. [7 seconden]
17. [reddeyez]
18. [Het Pakket]
19. [Sepi]
20. [Rigoureus]
21. [Percept]
22. [kapingamarangi mainblog]
23. [Branchleft]

Unfortunately, the only ones I usually read are nos. 2, 5, 11 and 13,
and for some reason several Dutch blogs are mentioned - go figure.

Incidentally, I recently removed BoingBoing from my Bloglines
subscriptions - too much fluff and fun stuff for me, I guess.

The Python snippet was very handy, but please remember to save the
source code for the "related links" html frame, instead of simply
copy-pasting the text into a Python prompt. Python newbies should
perhaps try this recipe:

1.  Save the "related links" page into a file as
    "/some/directory/a.html" or "C:\\some\\directory\\a.html"
2.  (Install Python from <http://python.org>)
3.  Type "python" at the command prompt
4.  Type "s = open('/some/directory/a.html').read()" or equivalent
5.  Type "import re"
6.  Type the following:\
    print
    '&lt;ol&gt;&lt;li&gt;'+'&lt;/li&gt;\\n&lt;li&gt;'.join(re.findall(r'&lt;h2.\*&gt;(&lt;a
    href=".\*?"&gt;.\*&lt;/a&gt;)&lt;/h2&gt;',s))+'&lt;/li&gt;&lt;/ol&gt;'
7.  Copy-paste the resulting output into your new post
8.  Millions rejoice!
9.  ?
10. Profit!

  [Bloglines meme]: http://www.kryogenix.org/days/2005/01/28/bloglinesMeme
    "Bloglines meme"
  [Magonia]: http://magonia.blogspot.com
  [Dave Shea's mezzoblue]: http://www.mezzoblue.com/
  [Asterisk -- Summaries]: http://www.7nights.com/asterisk/
  [Nick Bradbury]: http://nick.typepad.com/blog/
  [kottke.org remaindered links]: http://www.kottke.org/remainder/
  [sken | externals]: http://www.sken.be/externals/
  [Neil's World]: http://www.neilturner.me.uk/
  [Veerle]: http://veerle.duoh.com/
  [CSS Vault Gallery]: http://cssvault.com/
  [SimpleBits]: http://www.simplebits.com/
  [Daring Fireball]: http://daringfireball.net/
  [Gizmodo]: http://www.gizmodo.com/
  [Boing Boing]: http://www.boingboing.net/
  [Tales from the crib]: http://www.talesfromthecrib.be/tftc/
  [little things of life (sken.be)]: http://sken.be/life/
  [7 seconden]: http://www.7seconden.be
  [reddeyez]: http://reddeyez.com/
  [Het Pakket]: http://www.dimi15.be/test/
  [Sepi]: http://www.sepi.be/
  [Rigoureus]: http://www.rigoureus.be/
  [Percept]: http://percept.be
  [kapingamarangi mainblog]: http://www.kapingamarangi.be/
  [Branchleft]: http://branchleft.co.uk/
