---
layout: post
title: "Poor Man's Mirror"
published: true
category:
  - Web/Tech
---

Last week I taught another [Sun Java Enterprise System] course: This
time it was the 5-day [Access Manager: Configuration and Management
(DIR-3317)], arguably the most important SJES course after the
[Directory Server] ones ([DIR-2217] and [DIR-2337]). Access Manager,
formerly known as Identity Server, formerly known as Access Manager (Sun
marketing, what can I say?) is the key to implementing [Single Sign-On]
solutions using SJES components. It works as a kind of wrapper around
the Directory Server LDAP  database, providing AAA services
(Authentication, Authorization and Auditing).

We used [Sun Blade 150] systems with two internal disks for both teacher
and student machines, with Solaris 10 installed (Solaris 9, stay away
from poor unsuspecting desktop machines, you relic!). Once I finished
configuring each system, I did what I always do before starting a new
course: I made a copy of the full OS from c0t0 (the boot disk) to c0t2
(the inert mirror). The recipe I've been using since Solaris 2.6 is
pretty simple, AS LONG AS BOTH DISKS HAVE NO DEFECTS AND HAVE EXACTLY
THE SAME GEOMETRY (i.e. total size, numbe of cylinders and blocks per
cilinder):

1.  (Harmless) Print the primary disk's partition table to a file

    `# prtvtoc /dev/rdsk/c0t0d0s2 > /var/tmp/vtoc`

2.  (Caution!) Overwrite the secondary disk's partition table. By
    itself, this doesn't change the data in the partitions themselves,
    so you can reverse this operation if you have the original VTOC for
    c0t2 lying around.

    `# fmthard -s /var/tmp/vtoc /dev/rdsk/c0t2d0s2`

3.  (Extreme caution!) Write the full contents of c0t0 to c0t2 (s2 is a
    special partition that represents the full extent of the disk). All
    data on c0t2 will be irretrievably lost.

    `# dd if=/dev/rdsk/c0t0d0s2 of=/dev/rdsk/c0t2d0s2 bs=512k`

    Using a block size of 512KB, it took around 20 minutes to copy a
    36GB disk to another.

4.  Check and mount each copied filesystem:

    `# fsck /dev/dsk/c0t2d0s0`

    `# mount /dev/dsk/c0t2d0s0 /mnt`

    `# ls /mnt`

    `# umount /mnt`

    Repeat for each additional partition allocated in the partition
    table, replacing s0 with the correct partition.

5.  (Caution!) Mount the secondary disk's boot partition and edit its
    vfstab file. Don't leave out the leading /mnt, or you'll wreck the
    primary disk's vfstab:

    `# mount /dev/dsk/c0t2d0s0 /mnt`

    `# cp -pr /mnt/etc/vfstab /mnt/etc/vfstab.old`

    `# sed 's/c0t0/c0t2/g' /mnt/etc/vfstab > /tmp/passwd.new`

    `# mv -i /tmp/vfstab.new /mnt/etc/vfstab`

    This will allow you to correctly boot the secondary disk from the
    Open Boot PROM by simply typing the following from the ok prompt:

    `ok boot disk2`

At the end of this 5-step process, you will have a fully functional copy
of the primary disk. If by accident the student wrecks his machine while
performing one of the labs, you simply restore the primary disk from the
secondary disk. To do this you just have to boot from the secondary disk
and perform the previous 5 steps, swapping c0t0 with c0t2, but instead
of step 5, just do the following:

`# mount /dev/dsk/c0t0d0s0 /mnt`

`# mv -i /mnt/etc/vfstab.old /mnt/etc/vfstab`

After this, you can boot your restored primary disk.

  [Sun Java Enterprise System]: http://www.sun.com/software/javaenterprisesystem/
  [Access Manager: Configuration and Management (DIR-3317)]: http://www.sun.com/training/catalog/courses/DIR-3317.xml
  [Directory Server]: http://www.sun.com/software/products/directory_srvr/home_directory.xml
  [DIR-2217]: http://ca.sun.com/training/catalog/courses/DIR-2217.xml
  [DIR-2337]: http://www.sun.com/training/catalog/courses/DIR-2337.xml
  [Single Sign-On]: http://en.wikipedia.org/wiki/Single_sign-on
  [Sun Blade 150]: http://www.sun.com/desktop/workstation/sunblade150/
