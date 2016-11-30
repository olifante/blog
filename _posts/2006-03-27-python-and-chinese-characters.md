---
layout: post
title: "Python and Chinese Characters"
published: true
category:
  - Python
---
<p>Someone wrote to me from Beijing asking how to use Python to read Chinese characters, or Hanzi as they're called in Mandarin. It's easy enough if you're on OS X and your files are using the UTF-8 encoding for Unicode. Let's suppose I want to read a &quot;chars&quot; file containing traditional characters sorted by frequency (created by me using information from the <a href="http://libtabe.sourceforge.net/">libtabe</a> project):</p>

<p>的 1715819<br />一 959100<br />中 811685<br />學 762058<br />有 669403<br />國 642527<br />大 568504<br />會 549800<br />是 549730<br />資 533923</p>

<p>Try to see if you can understand what the following code is doing:</p>

<p>
<code>% python<br />Python 2.4.1 (#2, Mar 31 2005, 00:05:10) <br />[GCC 3.3 20030304 (Apple Computer, Inc. build 1666)] on darwin<br />Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.<br />&gt;&gt;&gt; f=file('chars')<br />&gt;&gt;&gt; contents=f.read()<br />&gt;&gt;&gt; unicontents=contents.decode('utf8')<br />
&gt;&gt;&gt; lines=contents.split('\n')<br />&gt;&gt;&gt; unilines=unicontents.split('\n')<br />&gt;&gt;&gt; contents[:100]<br />
'\xe7\x9a\x84 1715819\n\xe4\xb8\x80 959100\n\xe4\xb8\xad
811685\n\xe5\xad\xb8 762058\n\xe6\x9c\x89 669403\n\xe5\x9c\x8b
642527\n\xe5\xa4\xa7 568504\n\xe6\x9c\x83 549800\n\xe6\x98\xaf 549730\n'<br />
&gt;&gt;&gt; unicontents[:100]<br />

u'\u7684 1715819\n\u4e00 959100\n\u4e2d 811685\n\u5b78 762058\n\u6709
669403\n\u570b 642527\n\u5927 568504\n\u6703 549800\n\u662f
549730\n\u8cc7 533923\n\u4eba 529755\n'<br />

&gt;&gt;&gt; lines[:10]<br />

['\xe7\x9a\x84 1715819', '\xe4\xb8\x80 959100', '\xe4\xb8\xad 811685',
'\xe5\xad\xb8 762058', '\xe6\x9c\x89 669403', '\xe5\x9c\x8b 642527',
'\xe5\xa4\xa7 568504', '\xe6\x9c\x83 549800', '\xe6\x98\xaf 549730',
'\xe8\xb3\x87 533923']<br />

&gt;&gt;&gt; unilines[:10]<br />
[u'\u7684 1715819', u'\u4e00 959100', u'\u4e2d 811685', u'\u5b78
762058', u'\u6709 669403', u'\u570b 642527', u'\u5927 568504', u'\u6703
549800', u'\u662f 549730', u'\u8cc7 533923']<br />
&gt;&gt;&gt; len(contents)<br />

99455<br />

&gt;&gt;&gt; len(unicontents)<br />
73261<br />
&gt;&gt;&gt; len(lines)<br />


13098<br />


&gt;&gt;&gt; len(unilines)<br />13098
<br />
&gt;&gt;&gt; topchars=[]<br />&gt;&gt;&gt; for line in unilines:<br />...&nbsp; &nbsp;if line:<br />...&nbsp; &nbsp;&nbsp; char, freq = line.strip().split()<br />...&nbsp; &nbsp;&nbsp; topchars += [char]<br />... <br />&gt;&gt;&gt; len(topchars)<br />13097<br />&gt;&gt;&gt; topchars[:10]<br />[u'\u7684', u'\u4e00', u'\u4e2d', u'\u5b78', u'\u6709', u'\u570b', u'\u5927', u'\u6703', u'\u662f', u'\u8cc7']<br />&gt;&gt;&gt; for char in topchars[:100]:<br />...&nbsp; &nbsp;print char.encode('utf8'),<br />... <br />的 一 中 學 有 國 大 會 是 資 人 不 在 業 台 公 之 網 新 上 回 我 以 用 年 文 電 及 行 為 生 科 工 心 本 訊 時 日 市 與 可 要 家 路 地 期 體 個 所 理 院 教 下 頁 發 司 來 作 政 計 出 全 第 十 成 立 員 到 技 主 了 於 前 名 小 商 料 系 關 這 機 務 分 民 動 法 月 研 者 經 二 術 能 區 三 灣 高 內 子 天</code></p>

<p>This code doesn't do anything very sofisticated, it just extracts the first 100 characters from my &quot;chars&quot; file and prints them, so the result is a list of the 100 most frequently used traditional Chinese characters.</p>

<p><strong>Note:</strong> for this to work, make sure your Terminal.app is configured to use UTF-8:</p>

<p><img border="0" src="http://olifante.blogs.com/photos/uncategorized/utf8_terminal.png" title="Utf8_terminal" alt="Utf8_terminal" />
</p>

