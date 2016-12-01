---
layout: post
title: "Caminante, no hay Camino... hay Firefox"
published: true
category:
  - Web/Tech
---

I've been in and out of love with Camino ever since I switched to Mac OS
X, but for all of its strong points I invariably I found myself drifting
back to Mozilla, later Safari, now Firefox. Now that Camino has reached
adulthood with version 1.0, I decided to give it another try. Initial
impressions were good: the interface looks sleek and elegant, menus are
uncluttered, the browser feels fast and it comes with preconfigured
plug-ins for Java, Flash, Quicktime et al.

### **It's the Ecosystem, Stupid!**

Nice as it is, after using it for the better part of a week I decided it
didn't cut it as a Firefox replacement, for a few reasons:

1.  Although Camino feels blazingly fast when you have only a few tabs
    open, CPU usage becomes excessive (50-60% on 1GHz PowerPC) when you
    have 2 or 3 of windows with 20-30 tabs each. You might diagnose me
    with ADD, but that's the way I usually work with Firefox, and Camino
    doesn't cut it for this kind of usage. Ever since I set
    [browser.sessionhistory.max\_total\_viewers] to 2 instead of -1,
    Firefox has been quite usable with a large ammount of tabs (I used
    the same tweak with Camino).
2.  Setting aside performance issues, I find it unnecessarily
    constraining that when browsing with a 1024 wide window, Camino only
    shows the first 10 tabs, less than Safari's 12 tabs and much less
    than Firefox's 23 tabs (on OS X).
3.  I bookmark groups of tabs all the time. Besides the fact that Camino
    discards the oh so handy "bookmark all tabs" Cmd-Shift-D shortcut,
    it commits the abominable sin of hiding the individual tabs inside
    an opaque group bookmark. Firefox approaches this problem elegantly
    by creating a bookmark folder with a bookmark for each open tab.
    These bookmarks can later be opened individually, or collectively
    using "Open in tabs".
4.  Last but absolutely not the least, I miss my <span
    style="text-decoration: line-through;">toys</span> extensions. There
    are troubling signs that Firefox is following Emacs into a downward
    spiral that will lead to it becoming a kind of OS-within-the-OS, but
    while some of the extensions I use are not really that
    indispensable, at least half a dozen have become so ingrained that
    it feels unnecessarily crippling to do without them. Camino does
    have some kind of built-in ad-blocker, but it offers no compelling
    additional functionality compared to a plain-vanilla
    Firefox installation. The network effect works for Firefox as it did
    for other technologies in the past: suddenly the value lies as much
    in the extensibility of the technology as in the technology itself.

Camino is not a browser for power-users. It would be a great
"uncomplicated" browser for Mac OS X if Safari didn't already exist. As
it is, it seems like the niche it is aiming for is already taken.

**2006-02-26 Update:**\
I sent an email to <caminofeedback@mozilla.org> detailing these four
criticisms, and got a very swift and detailed response from Chris
Lawson.

Apparently, issue \#1 is due to a few known performance bugs related to
javascript- and flash-heavy pages, where one single page can be enough
to hog the CPU.

As for issue \#2, the project's priority is to have tab titles remain
readable. Chris tells me they already get a LOT of complaints saying
that tab titles aren't readable enough, so it's unlikely this will
change. To each his own, I suppose.

Regarding issue \#3, Chris defends Camino by explaining that their
bookmark groups are actually a superset of Firefox's bookmarks, and any
bookmark group can be made into a regular bookmark folder. This is not a
solution as far as I'm concerned, for two reasons: 1) You have to open
the bookmark manager, right-click on the bookmark group, choose "Get
Info" and deselect the "Tab Group" option, which is a bit cumbersome; 2)
It doesn't seem to accomplish anything, other than change the bookmark's
icon to that of a standard folder -- if you go to the bookmark menu, the
bookmark folder remain's opaque, i.e. it's not a submenu that allows you
to inspect individual bookmarks inside it.

Issue \#4, extensibility, has already been partially addressed. Since
Camino does not use XUL, direct compatibility with Firefox extensions is
off the agenda, but there is already some kind of extension mechanism
for Camino's Preferences panel. A little googling dug up a mozillaZine
thread on [Camino downloads, addons and themes].

  [browser.sessionhistory.max\_total\_viewers]: http://weblogs.mozillazine.org/ben/archives/009749.html
  [Camino downloads, addons and themes]: http://forums.mozillazine.org/viewtopic.php?t=239270
