---
layout: post
title: "Poor Man's Mirror"
published: true
category:
  - Web/Tech
---
<p>Last week I taught another <a href="http://www.sun.com/software/javaenterprisesystem/">Sun Java Enterprise System</a> course: This time it was the 5-day <a href="http://www.sun.com/training/catalog/courses/DIR-3317.xml">Access Manager: Configuration and Management (DIR-3317)</a>, arguably the most important SJES course after the <a href="http://www.sun.com/software/products/directory_srvr/home_directory.xml">Directory Server</a> ones (<a href="http://ca.sun.com/training/catalog/courses/DIR-2217.xml">DIR-2217</a> and <a href="http://www.sun.com/training/catalog/courses/DIR-2337.xml">DIR-2337</a>). Access Manager, formerly known as Identity Server, formerly known as Access Manager (Sun marketing, what can I say?) is the key to implementing <a href="http://en.wikipedia.org/wiki/Single_sign-on">Single Sign-On</a> solutions using SJES components. It works as a kind of wrapper around the Directory Server LDAP&nbsp; database, providing AAA services (Authentication, Authorization and Auditing).</p>

<p>We used <a href="http://www.sun.com/desktop/workstation/sunblade150/">Sun Blade 150</a> systems with two internal disks for both teacher and student machines, with Solaris 10 installed (Solaris 9, stay away from poor unsuspecting desktop machines, you relic!). Once I finished configuring each system, I did what I always do before starting a new course: I made a copy of the full OS from c0t0 (the boot disk) to c0t2 (the inert mirror). The recipe I've been using since Solaris 2.6 is pretty simple, AS LONG AS BOTH DISKS HAVE NO DEFECTS AND HAVE EXACTLY THE SAME GEOMETRY (i.e. total size, numbe of cylinders and blocks per cilinder):</p>

<ol><li>
(Harmless) Print the primary disk's partition table to a file<p><code># prtvtoc /dev/rdsk/c0t0d0s2 &gt; /var/tmp/vtoc</code>

</p></li>

<li>(Caution!) Overwrite the secondary disk's partition table. By itself, this doesn't change the data in the partitions themselves, so you can reverse this operation if you have the original VTOC for c0t2 lying around.<p><code># fmthard -s /var/tmp/vtoc /dev/rdsk/c0t2d0s2</code></p></li>

<li><p>(Extreme caution!) Write the full contents of c0t0 to c0t2 (s2 is a special partition that represents the full extent of the disk). All data on c0t2 will be irretrievably lost.</p><p><code># dd if=/dev/rdsk/c0t0d0s2 of=/dev/rdsk/c0t2d0s2 bs=512k</code></p>

<p>Using a block size of 512KB, it took around 20 minutes to copy a 36GB disk to another.</p></li>

<li><p>Check and mount each copied filesystem:</p><p><code># fsck /dev/dsk/c0t2d0s0</code></p>

<p><code># mount /dev/dsk/c0t2d0s0 /mnt</code></p>

<p><code># ls /mnt</code></p>

<p><code># umount /mnt</code></p>

<p>Repeat for each additional partition allocated in the partition table, replacing s0 with the correct partition.</p></li>

<li>
<p>(Caution!) Mount the secondary disk's boot partition and edit its vfstab file. Don't leave out the leading /mnt, or you'll wreck the primary disk's vfstab:</p><p><code># mount /dev/dsk/c0t2d0s0 /mnt</code></p>

<p><code># cp -pr /mnt/etc/vfstab /mnt/etc/vfstab.old</code></p>

<p><code># sed 's/c0t0/c0t2/g' /mnt/etc/vfstab &gt; /tmp/passwd.new</code></p>

<p><code># mv -i /tmp/vfstab.new /mnt/etc/vfstab</code></p>


<p>This will allow you to correctly boot the secondary disk from the Open Boot PROM by simply typing the following from the ok prompt:</p>

<p><code>ok boot disk2</code></p>
</li>
</ol>
<p>At the end of this 5-step process, you will have a fully functional copy of the primary disk. If by accident the student wrecks his machine while performing one of the labs, you simply restore the primary disk from the secondary disk. To do this you just have to boot from the secondary disk and perform the previous 5 steps, swapping c0t0 with c0t2, but instead of step 5, just do the following:</p>

<p><code># mount /dev/dsk/c0t0d0s0 /mnt</code></p>
<p><code># mv -i /mnt/etc/vfstab.old /mnt/etc/vfstab</code></p>

<p>After this, you can boot your restored primary disk.</p>
