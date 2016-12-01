---
layout: post
title: "Homophony of Mandarin Syllables"
published: true
category:
  - Web/Tech
---

Following my little investigation regarding the [polyphony of Chinese
characters], the obvious next step was to perform the opposite analysis
and investigate the [homophony] of Mandarin syllables.

Since there are so many more characters than there are syllables (at
least in Standard Mandarin), lets use R to see how they're distributed
between the 1425 Pinyin syllables used in the Unihan DB:

` > cps <- read.table(file('characters_per_syllable', encoding='utf-8'), header=TRUE)> summary(cps$characters)   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.    1.00    5.00   15.00   23.83   32.00  336.00 > cps$characters[1:10] [1] 336 227 217 206 198 168 165 164 161 147> cps$syllable[1:10] [1] yì  lì  yù  bì  zhì xī  jué jì  yú  qí 1425 Levels: DIA3 ENG1 FE4 N3 NG3 NG4 O1 O2 O4 YAI2 YO1 YO5 a ba bei ... ǒu`

According to the information extracted from the Unihan database, Pinyin
syllables can be associated with just one single character or go all the
way up to the 336 different characters that represent the syllable yi4,
the one with the greatest number of homophones. The median number of
characters per syllable is 15, the average number of characters is
23.83. It certainly sends a chill down the spine of any wannabe Mandarin
student...

Incidentally, the syllables with no homophones include some syllables
that are not in Pinyin.info's [list of valid syllables]: DIA3, ENG1,
FE4, N3, NG3, NG4, O1, O2, O4, YAI2, YO1 and YO5 -- I've left them in
upper case to signalize this. I don't know if these are typos or if they
represent non-standard syllables used for interjections and such. If
someone more knowledgeable has the answer, please do let me know.

What kind of distribution do we find when we rank syllables according to
the number of characters that include them as one of their possible
readings? The visual answer is a single R command away:

`> plot(cps$characters, main='Mandarin Homophonic Syllalbes', xlab='Pinyin syllables ranked by homophony', ylab='Number of characters per syllable', type='h')`

[![Homophony\_plot\_1]]

Interesting -- the curve is surprisingly smooth and kinda looks like
1/x. Could this be yet [another instance] of a ranked distribution
following a [Power Law] with negative exponent? Let's switch to a
log-log plot and see:

`> plot(cps$characters, main='Mandarin Homophonic Syllalbes', xlab='Pinyin syllables ranked by homophony', ylab='Number of characters per syllable', type='h', log='xy')`

[]

[![Homophony\_plot\_loglog\_1]]

Hmm, this doesn't look like a straight line at all, although it seems
like head and tail are two straight lines merging into each other in the
middle region. I guess this rules out a simple **y \~ x\^(-A)** curve as
in [Zipf's Law], which frequently shows up in Corpus Linguistics. It
could still be a more complex Power Law variant, maybe a more generic
**y \~ (x + B)\^(-A)** as in the [Zipf-Mandelbrot Law], but I can't tell
visually. Let's try a lin-log plot:

`> plot(cps$characters, main='Mandarin Homophonic Syllalbes', xlab='Pinyin syllables ranked by homophony', ylab='Number of characters per syllable', type='h', log='x')`

[][1]

[![Homophony\_plot\_linlog\_1]]

Now that's more like it! This looks tantalizingly like a straight line,
although the slope does change a bit towards the head of the curve --
possibly due to the King Effect that often amplifies high-ranking
points. Could this be a **y \~ log(x)** kind of curve?

Well, at this point I knew I had to perform some kind of [Regression
Analysis]. I dived into the Gnu R documentation, but unfortunately it
didn't become immediately clear how to do that in R, although that's
supposed to be one of the main points in using it -- not merely drawing
graphs but doing actual statistical work with it.

In the end, I did find an easy way to do my regressions, but it wasn't
Gnu R. I'll tell you about it tomorrow.

**Warning:**

In this discussion and the [previous][polyphony of Chinese characters]
one, I've made the assumption that each character associated with a
Mandarin syllable represents a single homophone for that syllable, and
that further variations of meaning for a given (character, syllable)
pair represent mere [polysemes] and not homophones. This may or may not
be true, but my knowledge of Chinese writing is too basic to discuss it.

More importantly, this analysis puts traditional and simplified
characters in the same bag. This really doesn't make a lot of sense,
since people usually use either traditional or simplified characters.
I'll\
try to revise this analysis to make it more relevant.

  [polyphony of Chinese characters]: http://olifante.blogs.com/covil/2006/03/polyphonic_char.html
  [homophony]: http://en.wikipedia.org/wiki/Homophones
  [list of valid syllables]: http://www.pinyin.info/romanization/hanyu/basic.html
  [Homophony\_plot\_1]: http://olifante.blogs.com/photos/uncategorized/homophony_plot_1.png
    "Homophony_plot_1"{.image-full}
  [![Homophony\_plot\_1]]: http://olifante.blogs.com/photos/uncategorized/homophony_plot_1.png
  [another instance]: http://www.shirky.com/writings/powerlaw_weblog.html
  [Power Law]: http://en.wikipedia.org/wiki/Power_law
  []: http://olifante.blogs.com/photos/uncategorized/homophony_plot_loglog.png
  [Homophony\_plot\_loglog\_1]: http://olifante.blogs.com/photos/uncategorized/homophony_plot_loglog_1.png
    "Homophony_plot_loglog_1"{.image-full}
  [![Homophony\_plot\_loglog\_1]]: http://olifante.blogs.com/photos/uncategorized/homophony_plot_loglog_1.png
  [Zipf's Law]: http://en.wikipedia.org/wiki/Zipf's_law
  [Zipf-Mandelbrot Law]: http://en.wikipedia.org/wiki/Zipf-Mandelbrot_law
  [1]: http://olifante.blogs.com/photos/uncategorized/homophony_plot_linlog.png
  [Homophony\_plot\_linlog\_1]: http://olifante.blogs.com/photos/uncategorized/homophony_plot_linlog_1.png
    "Homophony_plot_linlog_1"{.image-full}
  [![Homophony\_plot\_linlog\_1]]: http://olifante.blogs.com/photos/uncategorized/homophony_plot_linlog_1.png
  [Regression Analysis]: http://en.wikipedia.org/wiki/Regression_analysis
  [polysemes]: http://en.wikipedia.org/wiki/Polysemy
