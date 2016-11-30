---
layout: post
title: "The Merry Piper"
published: true
category:
  - Web/Tech
---
<p>After hearing the news about the launch <a href="http://pipes.yahoo.com/pipes/">Yahoo! Pipes</a> and reading Tim O'Reilly's <a href="http://radar.oreilly.com/archives/2007/02/pipes_and_filte.html">enthusiastic endorsement</a>, my curiosity was definitely piqued, but it wasn't until I saw <a href="http://video.google.com/videoplay?docid=8569811679113799879">Pasha Sadri's Google TechTalk</a> that I finally went and gave it a try. </p>

<embed id="VideoPlayback" type="application/x-shockwave-flash" src="http://video.google.com/googleplayer.swf?docId=8569811679113799879&amp;hl=en" style="width: 400px; height: 326px;"></embed> 

<p>My initial experiments were not very successful. I put the cart before the ox and tried to build much too complex stuff before I understood the basics. Only after using and modifying some of the published Pipes did I start to grok it. I now agree that this is a breakthrough that will probably destroy a few existing (not terribly differentiated) businesses and enable some truly amazing mashups. Only time will tell whether this will allow new businesses to flourish or just be another way of funnelling eyeballs to Yahoo.<br />
</p>

<p><strong><p>Oh My God, It's Full of Feeds!</p></strong></p>
<p>Pipes is a browser-based IDE for slicing and splicing news feeds. For those not in the know, news feeds are sort of like web pages for computers, stripped of visual decorations (computers are blind) and containing some additional bits of information. News feeds are usually represented in webpages by an orange icon with letters RSS or XML. If you've used a news reader such as Bloglines or Google Reader, you've used news feeds.</p>

<p>Yahoo Pipes lets you manipulate news feeds in various ways, such as aggregating two feeds into one, or removing items from a feed that match a certain keyword. Resulting feeds can in turn be reused in other pipes or made public so that everybody can use them.</p>

<p>Yahoo Pipes puts the <a href="http://en.wikipedia.org/wiki/Canvas_%28HTML_element%29">Canvas element</a> to great effect, using it to draw the widgets for the various modules and the beautiful pipes that tie them together. The user interface is quite responsive for a browser based application, and could usher in a new breed of <a href="http://en.wikipedia.org/wiki/Rich_Internet_application#Other_techniques">Rich Internet Applications</a>. Perhaps Pipes will become a showcase for the power of Canvas-based RIAs, as Gmail and Google Maps for <a href="http://en.wikipedia.org/wiki/XMLHTTPRequest">XMLHttpRequest</a> and <a href="http://www.faser.net/mab/">Mozilla Amazon Browser</a> for <a href="http://en.wikipedia.org/wiki/Xul">XUL</a>.<br />
</p>

<p>As Tim says, Yahoo Pipes is still a bit rough around the edges. I had problems getting the Location Extractor module to work, the Content Analysis module didn't produce very useful results and I still haven't been able to filter feeds by date. If you know how to program, you will probably be annoyed by all the things you cannot currently&nbsp; do with it. Error messages pop up once in a while when debugging a component, and sometimes the only way to get rid of errors seems to be to go back to your pipes and re-open the pipe you were editing.</p>

<p>Nevertheless, it enables users with no previous programming experience to create what can only be described as programs, using a simple visual programming language. Of course, only users who invest a little time into exploring the IDE will learn how to produce non-trivial pipes, but mastering Pipes is a far cry from mastering any standard programming language. </p>

<p><strong><p>Stick That in your Pipe and Smoke it</p></strong></p>

<p>In the process of learning pipes, I created more than a dozen. My pipes are relatively simple, and currently use only the following modules:</p>

<ul><li>Fetch Feed</li>

<li>Text Input</li>

<li>URL Input</li>

<li>Filter</li>

<li>Join</li>

<li>Sort</li>

<li>Unique</li>

<li>Regex</li></ul>

<p>I googled the Portuguese web for news media feeds and created five aggregated feeds grouped according to media type:</p>

<ul><li><a href="http://pipes.yahoo.com/pipes/pipe.info?_id=YPxbXcbm2xGmx3_V1fC6Jw">Portuguese Daily Newspapers</a><br />Currently Público, Correio da Manhã (CM), 24 Horas (24H) and Diário Económico (DE)<br />
</li>

<li><a href="http://pipes.yahoo.com/pipes/pipe.info?_id=6l1HHsXm2xGiz_rV1fC6Jw">Portuguese Weekly Newspapers</a><br />Currently Expresso and Sol</li>

<li><a href="http://pipes.yahoo.com/pipes/pipe.info?_id=mhKMGMfm2xGi8jIRJhOy0Q">Portuguese Sports Newspapers</a><br />Currently Record and O Jogo</li>

<li><a href="http://pipes.yahoo.com/pipes/pipe.info?_id=dOjPKsvm2xG8gAEQEpPZnA">Portuguese Radio News</a><br />Currently TSF and Rádio Renascença (RR)</li>

<li><a href="http://pipes.yahoo.com/pipes/pipe.info?_id=zkZJpsjm2xG7weuBJZhxuA">Portuguese TV News</a><br />Currently RTP and SIC</li></ul>

<p>For each pipe, I used <a href="http://blog.micampe.it/articles/2007/02/28/splicing-your-feeds-with-yahoo-pipes">Michele Campeotto's regex recipe</a> for prefixing the titles of each feed items with the source, e.g. &quot;Público: Cão Morde Homem&quot; instead of &quot;Cão Morde Homem&quot;.</p>

<p>I then aggregated the five previous pipes into a big meta-pipe that shows all the Portuguese news that's fit to feed: <a href="http://pipes.yahoo.com/pipes/pipe.info?_id=XpYi_srm2xGFZfZPouNLYQ">Portuguese News Media</a>.
</p>
<p><a href="http://pipes.yahoo.com/pipes/pipe.info?_id=XpYi_srm2xGFZfZPouNLYQ"><img border="0" alt="Portuguesenewsmedia_2" title="Portuguesenewsmedia_2" src="http://olifante.blogs.com/photos/uncategorized/2007/04/09/portuguesenewsmedia_2.png" /></a>
</p>


<p>The same pipe is available with a Portuguese name, description and tags: <a href="http://pipes.yahoo.com/pipes/pipe.info?_id=NCh4iM_m2xGpsFdVy6ky6g">Meios de Comunicação Portugueses</a>.</p>

<p><strong><strong>Vanitas Vanitatum, Omnia Vanitas<br /></strong></strong></p>

<p>Last but not least (and first in order of creation), here's a pipe that aggregates into one single feed <a href="http://olifante.blogs.com/covil">my blog</a>, my <a href="http://del.icio.us/olifante">del.icio.us bookmarks</a>, my <a href="http://www.last.fm/user/olifante">last.fm</a> recently played tracks and my <a href="http://www.flickr.com/people/olifante/">Flickr photos</a>:</p>

<p><a href="http://pipes.yahoo.com/pipes/pipe.info?_id=aktvZd_l2xGFiNYX1vC6Jw">Olifante's Unified Feed</a></p>

<p><a href="http://pipes.yahoo.com/pipes/pipe.info?_id=aktvZd_l2xGFiNYX1vC6Jw"><img border="0" alt="Olifanteunifiedfeed" title="Olifanteunifiedfeed" src="http://olifante.blogs.com/photos/uncategorized/2007/04/09/olifanteunifiedfeed.png" /></a>
</p>



