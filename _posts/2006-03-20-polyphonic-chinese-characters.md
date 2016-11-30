---
layout: post
title: "Polyphonic Chinese Characters"
published: true
category:
  - Web/Tech
---
<p>I started learning spoken Mandarin Chinese in December 2004, using the wonderful but expensive <a href="http://www.simonsays.com/content/browse.cfm?sid=128&amp;pid=516362,369950">Pimsleur Mandarin Chinese</a> audio courses. Not wanting to dedicate several years of my life to the task, I originally intended to stick with the spoken language and steer clear of learning to read Chinese characters. Things didn't quite go as planned, as my deepening love of Mandarin Chinese has compelled me to start learning my first 100 characters -- a small first step on the road to the 5000+ characters needed for general literacy.</p>

<p>Chinese characters constitute a morphemic writing system, where each individual character represents a morpheme, i.e. a minimal unit of meaning. Morphemes in Mandarin Chinese almost always correspond to whole syllables, so another way of looking at Chinese characters is to see them as a huge syllabary, where each character represents a single syllable but the same syllable can be represented by several characters, corresponding to the various homophonic morphemes associated with that syllable.</p>

<p>Standard Mandarin has less than 1500 distinct syllables in its repertoire, but the Unicode Basic Multinligual Plane alone contains 25,000+ characters. The redundancy is not as useless as it may seem at first. Since Mandarin contains an astounding number of homophones, using different characters to represent the same syllable allows the reader to disambiguate between homophones.</p>

<p>Things are further complicated by the fact that quite a few characters are &quot;polyphonic&quot;, i.e. can be read as different syllables with distinct meanings, depending on the context. Quite often the different readings differ only in tone (cf. 个 ge4/ge/ge3, 几 ji3/ji1) but sometimes they can have different initials (cf. 裨 bi4/pi2, 奇 qi2/ji1), different finals (cf. 都 dou1/du1, 朴 pu3/po4/piao2/po1) or even have no phonetic similarity whatsoever (cf. 喏 nuo4/re3, 石 shi2/dan4).</p>

<p>I decided to investigate the degree of polyphony by using the information in the <a href="http://www.unicode.org/charts/unihan.html">Unihan Database</a>. I used a Python script to extract the Pinyin readings for each character (stored in the <a href="http://www.unicode.org/Public/UNIDATA/Unihan.html#kMandarin">kMandarin</a> property) and massage the info into a simple two column table to be read into <a href="http://www.r-project.org/">GNU R</a>.</p>

<p>Here's a histogram I produced from that data, showing how many characters in the Unihan database have a single reading, how many have two readings, etc.</p>

<p><a href="http://olifante.blogs.com/photos/uncategorized/polyphony_histogram.png"><img border="0" class="image-full" alt="Polyphony_histogram" title="Polyphony_histogram" src="http://olifante.blogs.com/photos/uncategorized/polyphony_histogram.png" /></a>
</p>

<p>75% of the 25,331 characters I analyzed are &quot;monophonic&quot;: they represent a single syllable. 18% are &quot;diphonic&quot;, 5% are &quot;triphonic&quot;, and the remaining 1% percent of characters has at most 8 different readings. The two most pathological characters are 那 and 誒, with 8 readings, followed by a &quot;gang of four&quot; with 7 readings: 苴, 番, 䫖 and 㱯 .</p>

<p> I left out of this analysis all Chinese characters outside the BMP, since Python's
&quot;unichr()&quot; doesn't know how to deal with Unicode codepoints above
0xFFFF. The first few lines of the &quot;syllables_per_character&quot; file I used to produce that histogram look like this:

</p>

<p><code>character syllables<br />那 8<br />誒 8<br />苴 7<br />番 7<br />䫖 7<br />㱯 7<br />齐 6<br />齊 6<br />阿 6<br />邪 6</code></p>

<p>The first line is the header line containing the names of the two
columns, &quot;character&quot; and &quot;syllables&quot; (no. of different Pinyin readings
for that character).</p>

<p>I had never used GNU R prior to this exercise, but I found it quite accessible and elegant. Producing simple graphics is extremely easy if you use the high-level graphics functions such as &quot;hist&quot;, &quot;plot&quot;, &quot;pairs&quot;, etc... Things got a little trickier when I decided to change several details of the graphics, but the detailed documentation was quite helpful and I eventually figured out how to do most of what I wanted.</p>

<p>O'Reilly's <a href="http://www.onlamp.com/lpt/a/6323">Analyzing Statistics with GNU R</a> is a great intro that quickly helped me get my feet wet with R, but as I grew curiouser and curiouser I found it best to go straight to the source and use the excellent <a href="http://cran.r-project.org/doc/manuals/R-intro.pdf">An Introduction to R</a> from the official site. Its 98 pages are surprisingly readable, although I did skip most of chapters 8 and 11 (&quot;Probability Distributions&quot; and &quot;Statistical Models in R&quot;).</p>

<p>Here's the set of GNU R commands I used to produce this histogram.</p>
<p><code># Load the file into GNU R:<br />&gt; spc &lt;- read.table(file('syllables_per_character', encoding='utf-8'), header=TRUE)<br />
# Switch output to png file (make sure X11.app is running before you do this):<br />&gt; png('polyphony_histogram.png', width=400, height=400)<br /># Plot histogram and store it in variable &quot;h&quot;:<br />&gt; h &lt;- hist(spc$syllables, breaks=0:8, col='red', labels=TRUE, freq=TRUE, main='Polyphonic Chinese Characters', xlab='Number of different Pinyin readings', ylab='Number of Chinese characters', ylim=range(0:20000), axes=FALSE)<br /># I had a little problem with the default X-axis, so I added the axes manually. First add the Y-axis:<br />&gt; axis(2)<br /># Configure X-axis to run from 0 to 8 with 8 tickmarks:<br />&gt; par(xaxp = c(0,8,8))<br /># Add X-axis:<br />&gt; axis(1)<br /># Finalize PNG graphic:<br />&gt; dev.off()<br /># Print the histogram to see its structure:<br />&gt; h<br />$breaks<br />[1] 0 1 2 3 4 5 6 7 8<br /><br />$counts<br />[1] 19058&nbsp; 4659&nbsp; 1190&nbsp; &nbsp;307&nbsp; &nbsp; 86&nbsp; &nbsp; 25&nbsp; &nbsp;&nbsp; 4&nbsp; &nbsp;&nbsp; 2<br /><br />$intensities<br />[1] 7.523586e-01 1.839248e-01 4.697801e-02 1.211954e-02 3.395050e-03<br />[6] 9.869330e-04 1.579093e-04 7.895464e-05<br /><br />$density<br />[1] 7.523586e-01 1.839248e-01 4.697801e-02 1.211954e-02 3.395050e-03<br />[6] 9.869330e-04 1.579093e-04 7.895464e-05<br /><br />$mids<br />[1] 0.5 1.5 2.5 3.5 4.5 5.5 6.5 7.5<br /><br />$xname<br />[1] &quot;spc$syllables&quot;<br /><br />$equidist<br />[1] TRUE<br /><br />attr(,&quot;class&quot;)<br />[1] &quot;histogram&quot;<br />&gt; summary(spc$syllables)<br />
&nbsp; &nbsp;Min. 1st Qu.&nbsp; Median&nbsp; &nbsp; Mean 3rd Qu.&nbsp; &nbsp; Max.<br /> 
&nbsp; 1.000&nbsp; &nbsp;1.000&nbsp; &nbsp;1.000&nbsp; &nbsp;1.334&nbsp; &nbsp;1.000&nbsp; &nbsp;8.000
</code></p>
<p>Thus we see that the median Chinese character is monophonic, while the average character has 1.334 readings.</p>
