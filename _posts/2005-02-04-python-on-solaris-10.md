---
layout: post
title: "Python on Solaris 10"
published: true
category:
  - Web/Tech
---

Another step in the long path towards Python world domination: Solaris
10 is now available, and comes bundled with Python.

I taught a Java Directory Server class this week, and one of my students
pointed out that Solaris 10 now offers Python in a standard SUNW package
format (thanks, Rui!). The [Solaris 10 package list] shows the following
Python packages:

-   SUNWPython-devel\
    The Python interpreter, libraries and utilities - developer files -
    platform dependent, /usr filesystem
-   SUNWPython-share\
    The Python interpreter, libraries and utilities - platform
    independent files, /usr/sfw/share
-   SUNWPython\
    The Python interpreter, libraries and utilities

I was unable to determine which version of Python was used, but I
suppose it will be one of the 2.3.x releases. Unfortunately, of the 6
installation types, only "Developer" and above include Python. The
standard "End-User" install does not include Python, nor do the reduced
"Core" and "Reduced Network" installs, which means that you cannot take
Python for granted when developing for Solaris. Contrast this with Perl,
which has been available across all installation types since [Solaris
8]. I guess we're stuck with Bourne Shell and Perl for standard
scripting for the time being.

Since virtually all Linux/\*BSD variants come with some version of
Python and MacOSX has shipped with Python (and Ruby) since version 10.2
(Jaguar), Windows is now the only major operating system that does not
offer some kind of official integration with Python. Maybe that's a job
for IronPython...

  [Solaris 10 package list]: http://docs.sun.com/app/docs/doc/817-0545/6mgbberia?a=view
  [Solaris 8]: http://www.sun.com/bigadmin/content/packagelist/s8PkgList/p2.html
