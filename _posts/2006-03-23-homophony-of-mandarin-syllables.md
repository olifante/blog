---
layout: post
title: "Homophony of Mandarin Syllables"
published: true
category:
  - Web/Tech
---
<p>Following my little investigation regarding the <a href="http://olifante.blogs.com/covil/2006/03/polyphonic_char.html">polyphony of Chinese characters</a>, the obvious next step was to perform the opposite analysis and investigate the <a href="http://en.wikipedia.org/wiki/Homophones">homophony</a> of Mandarin syllables.</p>



<p>Since there are so many more characters than there are syllables (at least in Standard Mandarin), lets use R to see how they're distributed between the 1425 Pinyin syllables used in the Unihan DB: </p>

<p><code>
&gt; cps &lt;- read.table(file('characters_per_syllable', encoding='utf-8'), header=TRUE)<br />&gt; summary(cps$characters)<br />&nbsp; &nbsp;Min. 1st Qu.&nbsp; Median&nbsp; &nbsp; Mean 3rd Qu.&nbsp; &nbsp; Max. <br />&nbsp; &nbsp;1.00&nbsp; &nbsp; 5.00&nbsp; &nbsp;15.00&nbsp; &nbsp;23.83&nbsp; &nbsp;32.00&nbsp; 336.00 <br />&gt; cps$characters[1:10]<br /> [1] 336 227 217 206 198 168 165 164 161 147<br />&gt; cps$syllable[1:10]<br /> [1] yì&nbsp; lì&nbsp; yù&nbsp; bì&nbsp; zhì xī&nbsp; jué jì&nbsp; yú&nbsp; qí <br />1425 Levels: DIA3 ENG1 FE4 N3 NG3 NG4 O1 O2 O4 YAI2 YO1 YO5 a ba bei ... ǒu</code></p>

<p>According to the information extracted from the Unihan database, Pinyin syllables can be associated with just one single character or go all the way up to the 336 different characters that represent the syllable yi4, the one with the greatest number of homophones. The median number of characters per syllable is 15, the average number of characters is 23.83. It certainly sends a chill down the spine of any wannabe Mandarin student...</p>

<p>Incidentally, the syllables with no homophones include some syllables that are not in Pinyin.info's <a href="http://www.pinyin.info/romanization/hanyu/basic.html">list of valid syllables</a>: DIA3, ENG1, FE4, N3, NG3, NG4, O1, O2, O4, YAI2, YO1 and YO5 -- I've left them in upper case to signalize this. I don't know if these are typos or if they represent non-standard syllables used for interjections and such. If someone more knowledgeable has the answer, please do let me know.</p>

<p>What kind of distribution do we find when we rank syllables according to the number of characters that include them as one of their possible readings? The visual answer is a single R command away:
</p>
<p><code>&gt; plot(cps$characters, main='Mandarin Homophonic Syllalbes', xlab='Pinyin syllables ranked by homophony', ylab='Number of characters per syllable', type='h')</code></p>
<p><a href="http://olifante.blogs.com/photos/uncategorized/homophony_plot_1.png"><img border="0" class="image-full" alt="Homophony_plot_1" title="Homophony_plot_1" src="http://olifante.blogs.com/photos/uncategorized/homophony_plot_1.png" /></a>
</p>

<p> Interesting -- the curve is surprisingly smooth and kinda looks like 1/x. Could this be yet <a href="http://www.shirky.com/writings/powerlaw_weblog.html">another instance</a> of a ranked distribution following a <a href="http://en.wikipedia.org/wiki/Power_law">Power Law</a> with negative exponent? Let's switch to a log-log plot and see:

</p>

<p><code>&gt; plot(cps$characters, main='Mandarin Homophonic Syllalbes', xlab='Pinyin syllables ranked by homophony', ylab='Number of characters per syllable', type='h', log='xy')</code></p>

<p><a href="http://olifante.blogs.com/photos/uncategorized/homophony_plot_loglog.png"></a></p>

<p><a href="http://olifante.blogs.com/photos/uncategorized/homophony_plot_loglog_1.png"><img border="0" class="image-full" alt="Homophony_plot_loglog_1" title="Homophony_plot_loglog_1" src="http://olifante.blogs.com/photos/uncategorized/homophony_plot_loglog_1.png" /></a></p>

<p>Hmm, this doesn't look like a straight line at all, although it seems like head and tail are two straight lines merging into each other in the middle region. I guess this rules out a simple <strong>y ~ x^(-A)</strong> curve as in <a href="http://en.wikipedia.org/wiki/Zipf's_law">Zipf's Law</a>, which frequently shows up in Corpus Linguistics. It could still be a more complex Power Law variant, maybe a more generic <strong>y ~ (x + B)^(-A)</strong> as in the <a href="http://en.wikipedia.org/wiki/Zipf-Mandelbrot_law">Zipf-Mandelbrot Law</a>, but I can't tell visually. Let's try a lin-log plot:</p>

<p><code>&gt; plot(cps$characters, main='Mandarin Homophonic Syllalbes', xlab='Pinyin syllables ranked by homophony', ylab='Number of characters per syllable', type='h', log='x')</code></p>

<p><a href="http://olifante.blogs.com/photos/uncategorized/homophony_plot_linlog.png"></a></p>

<p><a href="http://olifante.blogs.com/photos/uncategorized/homophony_plot_linlog_1.png"><img border="0" class="image-full" alt="Homophony_plot_linlog_1" title="Homophony_plot_linlog_1" src="http://olifante.blogs.com/photos/uncategorized/homophony_plot_linlog_1.png" /></a>
</p>

<p></p>



<p>Now that's more like it! This looks tantalizingly like a straight line, although the slope does change a bit towards the head of the curve -- possibly due to the King Effect that often amplifies high-ranking points. Could this be a <strong>y ~ log(x)</strong> kind of curve?

</p>

<p>Well, at this point I knew I had to perform some kind of <a href="http://en.wikipedia.org/wiki/Regression_analysis">Regression Analysis</a>. I dived into the Gnu R documentation, but unfortunately it didn't become immediately clear how to do that in R, although that's supposed to be one of the main points in using it -- not merely drawing graphs but doing actual statistical work with it.</p>

<p>In the end, I did find an easy way to do my regressions, but it wasn't Gnu R. I'll tell you about it tomorrow.</p>

<p><strong>Warning:</strong></p>

<p>In this discussion and the <a href="http://olifante.blogs.com/covil/2006/03/polyphonic_char.html">previous</a> one, I've made the assumption that each
character associated with a Mandarin syllable represents a single
homophone for that syllable, and that further variations of meaning for
a given (character, syllable) pair represent mere <a href="http://en.wikipedia.org/wiki/Polysemy">polysemes</a>
and not homophones. This may or may not be true, but my knowledge of
Chinese writing is too basic to discuss it.</p>

<p>More importantly, this analysis
puts traditional and simplified characters in the same bag. This really doesn't make a lot of sense, since people usually use either traditional or simplified characters. I'll <br />try to revise this analysis to make it more relevant.</p>
