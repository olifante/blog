---
layout: post
title: "Polyphonic Chinese Characters"
published: true
category:
  - Web/Tech
---

I started learning spoken Mandarin Chinese in December 2004, using the
wonderful but expensive [Pimsleur Mandarin Chinese] audio courses. Not
wanting to dedicate several years of my life to the task, I originally
intended to stick with the spoken language and steer clear of learning
to read Chinese characters. Things didn't quite go as planned, as my
deepening love of Mandarin Chinese has compelled me to start learning my
first 100 characters -- a small first step on the road to the 5000+
characters needed for general literacy.

Chinese characters constitute a morphemic writing system, where each
individual character represents a morpheme, i.e. a minimal unit of
meaning. Morphemes in Mandarin Chinese almost always correspond to whole
syllables, so another way of looking at Chinese characters is to see
them as a huge syllabary, where each character represents a single
syllable but the same syllable can be represented by several characters,
corresponding to the various homophonic morphemes associated with that
syllable.

Standard Mandarin has less than 1500 distinct syllables in its
repertoire, but the Unicode Basic Multinligual Plane alone contains
25,000+ characters. The redundancy is not as useless as it may seem at
first. Since Mandarin contains an astounding number of homophones, using
different characters to represent the same syllable allows the reader to
disambiguate between homophones.

Things are further complicated by the fact that quite a few characters
are "polyphonic", i.e. can be read as different syllables with distinct
meanings, depending on the context. Quite often the different readings
differ only in tone (cf. 个 ge4/ge/ge3, 几 ji3/ji1) but sometimes they
can have different initials (cf. 裨 bi4/pi2, 奇 qi2/ji1), different
finals (cf. 都 dou1/du1, 朴 pu3/po4/piao2/po1) or even have no phonetic
similarity whatsoever (cf. 喏 nuo4/re3, 石 shi2/dan4).

I decided to investigate the degree of polyphony by using the
information in the [Unihan Database]. I used a Python script to extract
the Pinyin readings for each character (stored in the [kMandarin]
property) and massage the info into a simple two column table to be read
into [GNU R].

Here's a histogram I produced from that data, showing how many
characters in the Unihan database have a single reading, how many have
two readings, etc.

[![Polyphony\_histogram]]

75% of the 25,331 characters I analyzed are "monophonic": they represent
a single syllable. 18% are "diphonic", 5% are "triphonic", and the
remaining 1% percent of characters has at most 8 different readings. The
two most pathological characters are 那 and 誒, with 8 readings,
followed by a "gang of four" with 7 readings: 苴, 番, 䫖 and 㱯 .

I left out of this analysis all Chinese characters outside the BMP,
since Python's "unichr()" doesn't know how to deal with Unicode
codepoints above 0xFFFF. The first few lines of the
"syllables\_per\_character" file I used to produce that histogram look
like this:

`character syllables那 8誒 8苴 7番 7䫖 7㱯 7齐 6齊 6阿 6邪 6`

The first line is the header line containing the names of the two
columns, "character" and "syllables" (no. of different Pinyin readings
for that character).

I had never used GNU R prior to this exercise, but I found it quite
accessible and elegant. Producing simple graphics is extremely easy if
you use the high-level graphics functions such as "hist", "plot",
"pairs", etc... Things got a little trickier when I decided to change
several details of the graphics, but the detailed documentation was
quite helpful and I eventually figured out how to do most of what I
wanted.

O'Reilly's [Analyzing Statistics with GNU R] is a great intro that
quickly helped me get my feet wet with R, but as I grew curiouser and
curiouser I found it best to go straight to the source and use the
excellent [An Introduction to R] from the official site. Its 98 pages
are surprisingly readable, although I did skip most of chapters 8 and 11
("Probability Distributions" and "Statistical Models in R").

Here's the set of GNU R commands I used to produce this histogram.

`# Load the file into GNU R:> spc <- read.table(file('syllables_per_character', encoding='utf-8'), header=TRUE) # Switch output to png file (make sure X11.app is running before you do this):> png('polyphony_histogram.png', width=400, height=400)# Plot histogram and store it in variable "h":> h <- hist(spc$syllables, breaks=0:8, col='red', labels=TRUE, freq=TRUE, main='Polyphonic Chinese Characters', xlab='Number of different Pinyin readings', ylab='Number of Chinese characters', ylim=range(0:20000), axes=FALSE)# I had a little problem with the default X-axis, so I added the axes manually. First add the Y-axis:> axis(2)# Configure X-axis to run from 0 to 8 with 8 tickmarks:> par(xaxp = c(0,8,8))# Add X-axis:> axis(1)# Finalize PNG graphic:> dev.off()# Print the histogram to see its structure:> h$breaks[1] 0 1 2 3 4 5 6 7 8$counts[1] 19058  4659  1190   307    86    25     4     2$intensities[1] 7.523586e-01 1.839248e-01 4.697801e-02 1.211954e-02 3.395050e-03[6] 9.869330e-04 1.579093e-04 7.895464e-05$density[1] 7.523586e-01 1.839248e-01 4.697801e-02 1.211954e-02 3.395050e-03[6] 9.869330e-04 1.579093e-04 7.895464e-05$mids[1] 0.5 1.5 2.5 3.5 4.5 5.5 6.5 7.5$xname[1] "spc$syllables"$equidist[1] TRUEattr(,"class")[1] "histogram"> summary(spc$syllables)    Min. 1st Qu.  Median    Mean 3rd Qu.    Max.    1.000   1.000   1.000   1.334   1.000   8.000`

Thus we see that the median Chinese character is monophonic, while the
average character has 1.334 readings.

  [Pimsleur Mandarin Chinese]: http://www.simonsays.com/content/browse.cfm?sid=128&pid=516362,369950
  [Unihan Database]: http://www.unicode.org/charts/unihan.html
  [kMandarin]: http://www.unicode.org/Public/UNIDATA/Unihan.html#kMandarin
  [GNU R]: http://www.r-project.org/
  [Polyphony\_histogram]: http://olifante.blogs.com/photos/uncategorized/polyphony_histogram.png
    "Polyphony_histogram"{.image-full}
  [![Polyphony\_histogram]]: http://olifante.blogs.com/photos/uncategorized/polyphony_histogram.png
  [Analyzing Statistics with GNU R]: http://www.onlamp.com/lpt/a/6323
  [An Introduction to R]: http://cran.r-project.org/doc/manuals/R-intro.pdf
