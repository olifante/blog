---
layout: post
title: "Bloglines meme"
published: true
category:
  - Weblogs
---
<p>For what it's worth, here's my take on the <a href="http://www.kryogenix.org/days/2005/01/28/bloglinesMeme" title="Bloglines meme">Bloglines meme</a> for my blog. These are the top related feeds mentioned by Bloglines:</p>

<ol><li><a href="http://magonia.blogspot.com">Magonia</a></li>
<li><a href="http://www.mezzoblue.com/">Dave Shea's mezzoblue</a></li>
<li><a href="http://www.7nights.com/asterisk/">Asterisk -- Summaries</a></li>
<li><a href="http://nick.typepad.com/blog/">Nick Bradbury</a></li>
<li><a href="http://www.kottke.org/remainder/">kottke.org remaindered links</a></li>
<li><a href="http://www.sken.be/externals/">sken | externals</a></li>
<li><a href="http://www.neilturner.me.uk/">Neil's World</a></li>
<li><a href="http://veerle.duoh.com/">Veerle</a></li>
<li><a href="http://cssvault.com/">CSS Vault Gallery</a></li>
<li><a href="http://www.simplebits.com/">SimpleBits</a></li>
<li><a href="http://daringfireball.net/">Daring Fireball</a></li>
<li><a href="http://www.gizmodo.com/">Gizmodo</a></li>
<li><a href="http://www.boingboing.net/">Boing Boing</a></li>
<li><a href="http://www.talesfromthecrib.be/tftc/">Tales from the crib</a></li>
<li><a href="http://sken.be/life/">little things of life (sken.be)</a></li>
<li><a href="http://www.7seconden.be">7 seconden</a></li>
<li><a href="http://reddeyez.com/">reddeyez</a></li>
<li><a href="http://www.dimi15.be/test/">Het Pakket</a></li>
<li><a href="http://www.sepi.be/">Sepi</a></li>
<li><a href="http://www.rigoureus.be/">Rigoureus</a></li>
<li><a href="http://percept.be">Percept</a></li>
<li><a href="http://www.kapingamarangi.be/">kapingamarangi mainblog</a></li>
<li><a href="http://branchleft.co.uk/">Branchleft</a></li></ol>

<p>Unfortunately, the only ones I usually read are nos. 2, 5, 11 and 13, and for some reason several Dutch blogs are mentioned - go figure.</p>

<p>Incidentally, I recently removed BoingBoing from my Bloglines subscriptions - too much fluff and fun stuff for me, I guess.</p>

<p>The Python snippet was very handy, but please remember to save the source code for the &quot;related links&quot; html frame, instead of simply copy-pasting the text into a Python prompt. Python newbies should perhaps try this recipe:</p>

<ol><li>Save the &quot;related links&quot; page into a file as &quot;/some/directory/a.html&quot; or &quot;C:\some\directory\a.html&quot;</li>

<li>(Install Python from http://python.org)</li>

<li>Type &quot;python&quot; at the command prompt</li>

<li>Type &quot;s = open('/some/directory/a.html').read()&quot; or equivalent</li>

<li>Type &quot;import re&quot;</li>

<li>Type the following:<br />print '&lt;ol&gt;&lt;li&gt;'+'&lt;/li&gt;\n&lt;li&gt;'.join(re.findall(r'&lt;h2.*&gt;(&lt;a href=&quot;.*?&quot;&gt;.*&lt;/a&gt;)&lt;/h2&gt;',s))+'&lt;/li&gt;&lt;/ol&gt;'</li>

<li>Copy-paste the resulting output into your new post</li>

<li>Millions rejoice!</li>

<li>?</li>

<li>Profit!</li></ol>
