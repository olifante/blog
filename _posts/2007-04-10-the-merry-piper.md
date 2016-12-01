---
layout: post
title: "The Merry Piper"
published: true
category:
  - Web/Tech
---

After hearing the news about the launch [Yahoo! Pipes] and reading Tim
O'Reilly's [enthusiastic endorsement], my curiosity was definitely
piqued, but it wasn't until I saw [Pasha Sadri's Google TechTalk] that I
finally went and gave it a try.

My initial experiments were not very successful. I put the cart before
the ox and tried to build much too complex stuff before I understood the
basics. Only after using and modifying some of the published Pipes did I
start to grok it. I now agree that this is a breakthrough that will
probably destroy a few existing (not terribly differentiated) businesses
and enable some truly amazing mashups. Only time will tell whether this
will allow new businesses to flourish or just be another way of
funnelling eyeballs to Yahoo.\

****

Oh My God, It's Full of Feeds!

Pipes is a browser-based IDE for slicing and splicing news feeds. For
those not in the know, news feeds are sort of like web pages for
computers, stripped of visual decorations (computers are blind) and
containing some additional bits of information. News feeds are usually
represented in webpages by an orange icon with letters RSS or XML. If
you've used a news reader such as Bloglines or Google Reader, you've
used news feeds.

Yahoo Pipes lets you manipulate news feeds in various ways, such as
aggregating two feeds into one, or removing items from a feed that match
a certain keyword. Resulting feeds can in turn be reused in other pipes
or made public so that everybody can use them.

Yahoo Pipes puts the [Canvas element] to great effect, using it to draw
the widgets for the various modules and the beautiful pipes that tie
them together. The user interface is quite responsive for a browser
based application, and could usher in a new breed of [Rich Internet
Applications]. Perhaps Pipes will become a showcase for the power of
Canvas-based RIAs, as Gmail and Google Maps for [XMLHttpRequest] and
[Mozilla Amazon Browser] for [XUL].\

As Tim says, Yahoo Pipes is still a bit rough around the edges. I had
problems getting the Location Extractor module to work, the Content
Analysis module didn't produce very useful results and I still haven't
been able to filter feeds by date. If you know how to program, you will
probably be annoyed by all the things you cannot currently  do with it.
Error messages pop up once in a while when debugging a component, and
sometimes the only way to get rid of errors seems to be to go back to
your pipes and re-open the pipe you were editing.

Nevertheless, it enables users with no previous programming experience
to create what can only be described as programs, using a simple visual
programming language. Of course, only users who invest a little time
into exploring the IDE will learn how to produce non-trivial pipes, but
mastering Pipes is a far cry from mastering any standard programming
language.

****

Stick That in your Pipe and Smoke it

In the process of learning pipes, I created more than a dozen. My pipes
are relatively simple, and currently use only the following modules:

-   Fetch Feed
-   Text Input
-   URL Input
-   Filter
-   Join
-   Sort
-   Unique
-   Regex

I googled the Portuguese web for news media feeds and created five
aggregated feeds grouped according to media type:

-   [Portuguese Daily Newspapers]\
    Currently Público, Correio da Manhã (CM), 24 Horas (24H) and Diário
    Económico (DE)\
-   [Portuguese Weekly Newspapers]\
    Currently Expresso and Sol
-   [Portuguese Sports Newspapers]\
    Currently Record and O Jogo
-   [Portuguese Radio News]\
    Currently TSF and Rádio Renascença (RR)
-   [Portuguese TV News]\
    Currently RTP and SIC

For each pipe, I used [Michele Campeotto's regex recipe] for prefixing
the titles of each feed items with the source, e.g. "Público: Cão Morde
Homem" instead of "Cão Morde Homem".

I then aggregated the five previous pipes into a big meta-pipe that
shows all the Portuguese news that's fit to feed: [Portuguese News
Media].

[![Portuguesenewsmedia\_2]][Portuguese News Media]

The same pipe is available with a Portuguese name, description and tags:
[Meios de Comunicação Portugueses].

****Vanitas Vanitatum, Omnia Vanitas\
****

Last but not least (and first in order of creation), here's a pipe that
aggregates into one single feed [my blog], my [del.icio.us bookmarks],
my [last.fm] recently played tracks and my [Flickr photos]:

[Olifante's Unified Feed]

[![Olifanteunifiedfeed]][Olifante's Unified Feed]

  [Yahoo! Pipes]: http://pipes.yahoo.com/pipes/
  [enthusiastic endorsement]: http://radar.oreilly.com/archives/2007/02/pipes_and_filte.html
  [Pasha Sadri's Google TechTalk]: http://video.google.com/videoplay?docid=8569811679113799879
  [Canvas element]: http://en.wikipedia.org/wiki/Canvas_%28HTML_element%29
  [Rich Internet Applications]: http://en.wikipedia.org/wiki/Rich_Internet_application#Other_techniques
  [XMLHttpRequest]: http://en.wikipedia.org/wiki/XMLHTTPRequest
  [Mozilla Amazon Browser]: http://www.faser.net/mab/
  [XUL]: http://en.wikipedia.org/wiki/Xul
  [Portuguese Daily Newspapers]: http://pipes.yahoo.com/pipes/pipe.info?_id=YPxbXcbm2xGmx3_V1fC6Jw
  [Portuguese Weekly Newspapers]: http://pipes.yahoo.com/pipes/pipe.info?_id=6l1HHsXm2xGiz_rV1fC6Jw
  [Portuguese Sports Newspapers]: http://pipes.yahoo.com/pipes/pipe.info?_id=mhKMGMfm2xGi8jIRJhOy0Q
  [Portuguese Radio News]: http://pipes.yahoo.com/pipes/pipe.info?_id=dOjPKsvm2xG8gAEQEpPZnA
  [Portuguese TV News]: http://pipes.yahoo.com/pipes/pipe.info?_id=zkZJpsjm2xG7weuBJZhxuA
  [Michele Campeotto's regex recipe]: http://blog.micampe.it/articles/2007/02/28/splicing-your-feeds-with-yahoo-pipes
  [Portuguese News Media]: http://pipes.yahoo.com/pipes/pipe.info?_id=XpYi_srm2xGFZfZPouNLYQ
  [Portuguesenewsmedia\_2]: http://olifante.blogs.com/photos/uncategorized/2007/04/09/portuguesenewsmedia_2.png
    "Portuguesenewsmedia_2"
  [Meios de Comunicação Portugueses]: http://pipes.yahoo.com/pipes/pipe.info?_id=NCh4iM_m2xGpsFdVy6ky6g
  [my blog]: http://olifante.blogs.com/covil
  [del.icio.us bookmarks]: http://del.icio.us/olifante
  [last.fm]: http://www.last.fm/user/olifante
  [Flickr photos]: http://www.flickr.com/people/olifante/
  [Olifante's Unified Feed]: http://pipes.yahoo.com/pipes/pipe.info?_id=aktvZd_l2xGFiNYX1vC6Jw
  [Olifanteunifiedfeed]: http://olifante.blogs.com/photos/uncategorized/2007/04/09/olifanteunifiedfeed.png
    "Olifanteunifiedfeed"
