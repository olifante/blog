---
layout: post
title: "Python on Solaris 10"
published: true
category:
  - Web/Tech
---
<p>Another step in the long path towards Python world domination: Solaris 10 is now available, and comes bundled with Python.</p>

<p>I taught a Java Directory Server class this week, and one of my students pointed out that Solaris 10 now offers Python in a standard SUNW package format (thanks, Rui!). The <a href="http://docs.sun.com/app/docs/doc/817-0545/6mgbberia?a=view">Solaris 10 package list</a> shows the following Python packages:</p>

<ul><li>SUNWPython-devel<br />The Python interpreter, libraries and utilities - developer files - platform dependent, /usr filesystem</li>

<li>SUNWPython-share<br />The Python interpreter, libraries and utilities - platform independent files, /usr/sfw/share</li>

<li>SUNWPython<br />The Python interpreter, libraries and utilities</li></ul>

<p>I was unable to determine which version of Python was used, but I suppose it will be one of the 2.3.x releases. Unfortunately, of the 6 installation types, only &quot;Developer&quot; and above include Python. The standard &quot;End-User&quot; install does not include Python, nor do the reduced &quot;Core&quot; and &quot;Reduced Network&quot; installs, which means that you cannot take Python for granted when developing for Solaris. Contrast this with Perl, which has been available across all installation types since <a href="http://www.sun.com/bigadmin/content/packagelist/s8PkgList/p2.html">Solaris 8</a>. I guess we're stuck with Bourne Shell and Perl for standard scripting for the time being.</p>

<p>Since virtually all Linux/*BSD variants come with some version of Python and MacOSX has shipped with Python (and Ruby) since version 10.2 (Jaguar), Windows is now the only major operating system that does not offer some kind of official integration with Python. Maybe that's a job for IronPython...</p>

