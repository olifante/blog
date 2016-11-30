---
layout: post
title: "Firefox 3 beta 5: the SunSpider verdict"
published: true
category:
  - Web/Tech
---

I just installed the newly released [Firefox 3 beta 5], replacing beta 4
in my Macbook Pro's XP partition (a budding addiction to [Oblivion] has
been making me boot into Windows more than I should). The main highlight
of this released compared to the previous beta 4 is the enhanced
Javascript performance.

To see how much of a boost Javascript got, I ran the [SunSpider
Javascript Benchmark] with several current browsers. Here are the
results I got on my machine, with a Core 2 Duo CPU @ 2.40 GHz and 2 GB
RAM:

-   Firefox 3 beta 5: [5000.6ms +/- 2.8%]
-   Firefox 3 beta 4: [5593.8ms +/- 1.7%] - FF3b5 is 12% faster
-   Safari 3.1 (525.13): [6111.4ms +/- 2.5%] - FF3b5 is 22% faster
-   Opera 9.50 beta: [10252.4ms +/- 18.8%] - FF3b5 is 105% faster
-   Internet Explorer 7.0.5730.13: [29836.0ms +/- 15.0%] - FF3b5 is a
    whopping 497% faster (I had no idea IE had fallen so far behind in
    the Javascript race).

To test the Javascript abilities of you browser, here's a couple of
jewels from the past reimplemented in Javascript: [Manic Miner] and
[Donkey Kong]. Both are surprisingly hard -- where's all my muscle
memory gone?

  [Firefox 3 beta 5]: http://en-us.www.mozilla.com/en-US/firefox/3.0b5/releasenotes/
  [Oblivion]: http://en.wikipedia.org/wiki/The_Elder_Scrolls_IV:_Oblivion
  [SunSpider Javascript Benchmark]: http://webkit.org/perf/sunspider-0.9/sunspider.html
  [5000.6ms +/- 2.8%]: http://webkit.org/perf/sunspider-0.9/sunspider-results.html?%7B%223d-cube%22:%5B195,203,206,210,192%5D,%223d-morph%22:%5B205,180,197,181,176%5D,%223d-raytrace%22:%5B212,244,219,204,270%5D,%22access-binary-trees%22:%5B124,127,134,123,118%5D,%22access-fannkuch%22:%5B296,221,309,214,303%5D,%22access-nbody%22:%5B261,214,232,219,213%5D,%22access-nsieve%22:%5B139,148,139,144,155%5D,%22bitops-3bit-bits-in-byte%22:%5B145,155,155,145,158%5D,%22bitops-bits-in-byte%22:%5B177,173,135,177,183%5D,%22bitops-bitwise-and%22:%5B172,159,167,164,163%5D,%22bitops-nsieve-bits%22:%5B197,179,197,178,178%5D,%22controlflow-recursive%22:%5B112,115,114,113,116%5D,%22crypto-aes%22:%5B159,175,173,164,173%5D,%22crypto-md5%22:%5B146,136,53,133,134%5D,%22crypto-sha1%22:%5B160,157,66,149,151%5D,%22date-format-tofte%22:%5B236,238,148,234,226%5D,%22date-format-xparb%22:%5B172,165,164,166,175%5D,%22math-cordic%22:%5B260,251,242,254,240%5D,%22math-partial-sums%22:%5B196,198,204,200,192%5D,%22math-spectral-norm%22:%5B145,145,147,143,62%5D,%22regexp-dna%22:%5B317,309,360,316,361%5D,%22string-base64%22:%5B168,154,152,170,159%5D,%22string-fasta%22:%5B252,259,245,262,243%5D,%22string-tagcloud%22:%5B215,198,196,203,189%5D,%22string-unpack-code%22:%5B321,313,313,322,319%5D,%22string-validate-input%22:%5B169,175,171,209,177%5D%7D
  [5593.8ms +/- 1.7%]: http://webkit.org/perf/sunspider-0.9/sunspider-results.html?%7B%223d-cube%22:%5B230,321,217,226,250%5D,%223d-morph%22:%5B212,161,203,221,201%5D,%223d-raytrace%22:%5B125,238,218,213,218%5D,%22access-binary-trees%22:%5B124,122,123,120,125%5D,%22access-fannkuch%22:%5B360,349,334,348,342%5D,%22access-nbody%22:%5B222,229,242,231,260%5D,%22access-nsieve%22:%5B156,144,124,159,153%5D,%22bitops-3bit-bits-in-byte%22:%5B153,157,155,180,161%5D,%22bitops-bits-in-byte%22:%5B213,202,213,205,215%5D,%22bitops-bitwise-and%22:%5B276,263,263,280,266%5D,%22bitops-nsieve-bits%22:%5B285,230,224,235,239%5D,%22controlflow-recursive%22:%5B112,115,113,112,111%5D,%22crypto-aes%22:%5B164,197,233,170,167%5D,%22crypto-md5%22:%5B162,172,163,178,161%5D,%22crypto-sha1%22:%5B172,172,171,183,181%5D,%22date-format-tofte%22:%5B241,242,259,254,275%5D,%22date-format-xparb%22:%5B174,183,172,180,177%5D,%22math-cordic%22:%5B281,266,270,272,275%5D,%22math-partial-sums%22:%5B289,274,264,265,284%5D,%22math-spectral-norm%22:%5B169,168,155,166,158%5D,%22regexp-dna%22:%5B299,313,295,318,303%5D,%22string-base64%22:%5B163,167,167,183,164%5D,%22string-fasta%22:%5B258,244,253,247,255%5D,%22string-tagcloud%22:%5B188,202,205,198,232%5D,%22string-unpack-code%22:%5B310,308,293,321,300%5D,%22string-validate-input%22:%5B177,177,180,198,193%5D%7D
  [6111.4ms +/- 2.5%]: http://webkit.org/perf/sunspider-0.9/sunspider-results.html?%7B%223d-cube%22:%5B234,234,234,266,156%5D,%223d-morph%22:%5B234,219,218,219,219%5D,%223d-raytrace%22:%5B235,234,234,250,218%5D,%22access-binary-trees%22:%5B156,203,172,172,203%5D,%22access-fannkuch%22:%5B407,375,343,344,359%5D,%22access-nbody%22:%5B250,234,250,235,266%5D,%22access-nsieve%22:%5B172,188,156,172,156%5D,%22bitops-3bit-bits-in-byte%22:%5B156,156,156,187,188%5D,%22bitops-bits-in-byte%22:%5B281,219,187,203,187%5D,%22bitops-bitwise-and%22:%5B250,266,281,344,250%5D,%22bitops-nsieve-bits%22:%5B188,218,219,203,203%5D,%22controlflow-recursive%22:%5B188,203,188,203,218%5D,%22crypto-aes%22:%5B203,188,172,187,219%5D,%22crypto-md5%22:%5B172,171,156,218,187%5D,%22crypto-sha1%22:%5B187,172,157,156,172%5D,%22date-format-tofte%22:%5B234,234,219,235,250%5D,%22date-format-xparb%22:%5B344,281,312,281,266%5D,%22math-cordic%22:%5B250,266,266,266,250%5D,%22math-partial-sums%22:%5B282,313,281,282,328%5D,%22math-spectral-norm%22:%5B188,187,187,187,218%5D,%22regexp-dna%22:%5B375,359,375,359,375%5D,%22string-base64%22:%5B234,188,203,187,234%5D,%22string-fasta%22:%5B266,250,266,391,266%5D,%22string-tagcloud%22:%5B219,219,234,219,203%5D,%22string-unpack-code%22:%5B234,218,234,218,282%5D,%22string-validate-input%22:%5B265,235,250,266,250%5D%7D
  [10252.4ms +/- 18.8%]: http://webkit.org/perf/sunspider-0.9/sunspider-results.html?%7B%223d-cube%22:%5B234,250,282,266,265%5D,%223d-morph%22:%5B313,328,312,1203,328%5D,%223d-raytrace%22:%5B266,297,359,266,266%5D,%22access-binary-trees%22:%5B141,157,140,172,141%5D,%22access-fannkuch%22:%5B531,469,469,468,578%5D,%22access-nbody%22:%5B266,282,281,328,500%5D,%22access-nsieve%22:%5B250,234,250,282,235%5D,%22bitops-3bit-bits-in-byte%22:%5B156,187,171,171,203%5D,%22bitops-bits-in-byte%22:%5B187,109,234,203,235%5D,%22bitops-bitwise-and%22:%5B547,438,562,687,578%5D,%22bitops-nsieve-bits%22:%5B313,313,344,313,406%5D,%22controlflow-recursive%22:%5B157,156,156,172,141%5D,%22crypto-aes%22:%5B250,235,281,250,250%5D,%22crypto-md5%22:%5B172,187,172,235,188%5D,%22crypto-sha1%22:%5B156,171,187,187,172%5D,%22date-format-tofte%22:%5B328,265,344,375,375%5D,%22date-format-xparb%22:%5B563,578,625,562,563%5D,%22math-cordic%22:%5B281,297,359,281,282%5D,%22math-partial-sums%22:%5B265,171,265,265,265%5D,%22math-spectral-norm%22:%5B187,172,188,281,94%5D,%22regexp-dna%22:%5B750,828,953,860,859%5D,%22string-base64%22:%5B281,235,218,234,218%5D,%22string-fasta%22:%5B484,578,469,484,532%5D,%22string-tagcloud%22:%5B453,516,469,1312,765%5D,%22string-unpack-code%22:%5B1219,1250,1172,1219,2813%5D,%22string-validate-input%22:%5B250,281,266,250,1172%5D%7D
  [29836.0ms +/- 15.0%]: http://webkit.org/perf/sunspider-0.9/sunspider-results.html?%7B%223d-cube%22:%5B454,421,422,421,421%5D,%223d-morph%22:%5B531,500,562,469,515%5D,%223d-raytrace%22:%5B547,546,579,593,625%5D,%22access-binary-trees%22:%5B562,484,515,500,500%5D,%22access-fannkuch%22:%5B766,750,766,750,766%5D,%22access-nbody%22:%5B500,422,546,438,438%5D,%22access-nsieve%22:%5B375,359,360,359,437%5D,%22bitops-3bit-bits-in-byte%22:%5B468,469,515,468,468%5D,%22bitops-bits-in-byte%22:%5B469,484,500,500,515%5D,%22bitops-bitwise-and%22:%5B515,547,531,515,547%5D,%22bitops-nsieve-bits%22:%5B437,438,438,422,516%5D,%22controlflow-recursive%22:%5B531,531,578,531,547%5D,%22crypto-aes%22:%5B453,500,485,422,438%5D,%22crypto-md5%22:%5B375,437,437,390,421%5D,%22crypto-sha1%22:%5B406,375,375,406,375%5D,%22date-format-tofte%22:%5B485,516,484,469,484%5D,%22date-format-xparb%22:%5B484,484,578,469,500%5D,%22math-cordic%22:%5B531,547,532,563,563%5D,%22math-partial-sums%22:%5B375,375,453,391,375%5D,%22math-spectral-norm%22:%5B485,547,437,500,422%5D,%22regexp-dna%22:%5B438,406,500,422,422%5D,%22string-base64%22:%5B9125,9125,9172,17875,9687%5D,%22string-fasta%22:%5B593,547,516,422,625%5D,%22string-tagcloud%22:%5B1797,1672,1688,1672,1812%5D,%22string-unpack-code%22:%5B531,578,578,547,516%5D,%22string-validate-input%22:%5B5625,5656,5734,5688,6188%5D%7D
  [Manic Miner]: http://www.ellosnuncaloharian.com/online/mm/manicminer.html
  [Donkey Kong]: http://www.smashcat.org/arcade/dkong/
