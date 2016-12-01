---
layout: post
title: "RAM=HDD++; HDD=Tape++"
published: true
category:
  - Web/Tech
---

O [Tim Bray], guru de XML, deu a sua [primeira entrevista] desde que
entrou para a Sun, que contém uma citação interessante de [Jim Gray]:

> Memory is the new disk. Disks are the new tape.

Presume-se que o seu corolário seja "Tape is the new dinossaur". Será
que o crescimento recente das caches de nível 2 dos processadores (já há
processadores com 16MB de cache ou mais) permite dizer também que "L2
Cache is the new memory"? Resumindo:\
Cache = RAM++;\
RAM = HDD++;\
HDD = Tape++;\
Tape.Dispose();

Talvez seja altura de vender aquelas velhas acções da Exabyte... ;-)

Esta citação levou-me a reler uma fascinante [entrevista de Jim Gray]
que foi publicada na ACM em Junho do ano passado, na qual se discutem
algumas consequências da evolução da tecnologia de memória e disco. As
frases memoráveis são tantas, que por pouco não citava o artigo todo ;-)

> Capacities continue to double each year, while access times are
> improving at 10 percent per year. So, we have a vastly larger storage
> pool, with a relatively narrow pipeline into it.\
> \[...\]\
> Today disk-capacity growth continues at this blistering rate, maybe a
> little slower. But disk access, which is to say, "Move the disk arm to
> the right cylinder and rotate the disk to the right block," has
> improved about tenfold. The rotation speed has gone up from 3,000 to
> 15,000 RPM, and the access times have gone from 50 milliseconds down
> to 5 milliseconds. That's a factor of 10. Bandwidth has improved about
> 40-fold, from 1 megabyte per second to 40 megabytes per second. Access
> times are improving about 7 to 10 percent per year. Meanwhile,
> densities have been improving at 100 percent per year.\
> \[...\]\
> What do you do with a 200-gig disk drive? You treat a lot of it as
> tape. You use it for snapshots, write-anywhere file systems,
> log-structured file systems, or you just zone frequent stuff in one
> area and try to waste the other 190 GB in useful ways.\
> \[...\]\
> These disks offer many opportunities. You can have a file where all
> the old versions are saved. The unused part of the disk can be used as
> tape or as archive. That's already happening with people making
> snapshots of the disk every night and offering a version of the file
> system as of yesterday or as of a certain point in time. They can do
> that by exploiting the disk's huge capacity.\
> \[...\]\
> We are at a stage now where disk media and tape media have approximate
> price parity, which is to say it's about \$1 a gigabyte per disk and
> per tape cartridge. So, you can think about writing to disk and then
> pulling the disk out and treating it as a tape cartridge. The disk has
> properties that the tape doesn't have. Disk has higher bandwidth and
> is more convenient to access. You can just plug in the disk. You don't
> need a tape drive and you don't need a bunch of software that knows
> how to read tapes. You're actually mounting a file system. You've got
> no extra software, no extra concepts. You don't have to find the part
> of the tape that has your file, and you do not need those funny tape
> management systems.\
> \[...\]\
> One thing is a no-brainer. Disks will replace tapes, and disks will
> have infinite capacity. Period. This will dramatically change the way
> we architect our file systems. There are many more questions opened by
> this than resolved. Will we start using an empty part of the disk for
> our tape storage, our archive storage, or versions? Just exactly how
> does that work? And how do I get things back?\
> \[...\]\
> Something that I'm convinced of is that the processors are going to
> migrate to where the transducers are. Thus, every display will be
> intelligent; every NIC will be intelligent; and, of course, every disk
> will be intelligent. I got the "smart disk" religion from you, Dave.
> You argued that each disk will become intelligent. Today each disk has
> a 200-megahertz processor and a few megabytes of RAM storage. That's
> enough to boot most operating systems. Soon they will have an IP
> interface and will be running Web servers and databases and file
> systems. Gradually, all the processors will migrate to the
> transducers: displays, network interfaces, cameras, disks, and other
> devices. This will happen over the next decade. It is a radically
> different architecture. What I mean by that is it's going to have a
> gigahertz or better processor in it. And it will have a lot of RAM.
> And they will be able to run almost any piece of software that you can
> think of today. It could run Oracle or Exchange or any other app you
> can think of. In that world, all the stuff about interfaces of SCSI
> and IDE and so on disappears. It's IP. The interface is probably
> Simple Object Access Protocol (SOAP) or some derivative of SOAP; you
> send requests to it and get back responses in a pretty high-level
> protocol. The IP sack does security and naming and discovery. So each
> of these "disks" will be an IP version 6 (IPv6) node—or IPv9.\
> \[...\]\
> One final thing that is even more speculative is what my co-workers at
> Microsoft are doing. They are replacing the file system with an object
> store, and using schematized storage to organize information. Gordon
> Bell calls that project MyLifeBits. It is speculative—a shot at
> implementing Vannevar Bush's memex
> \[<http://www.theatlantic.com/unbound/flashbks/computer/bushf.htm>\].
> If they pull it off, it will be a revolution in the way we use
> storage.

A ascensão do [iPod] e de outros discos portáteis mostra bem como muitas
destas ideias são já realidade.

Na entrevista, o Jim Gray fala sobretudo do futuro do disco rígido, mas
algumas das consequências da evolução dos preços e capacidade da memória
já estão à vista:

1.  Com alguns computadores a utilizar [meio terabyte de memória] ou
    mais, muitas bases de dados podem ser totalmente armazenadas
    em memória. Projectos como o [Hibernate] ou o [Prevayler] permitem
    velocidades que chegam a ser 10.000 mais elevadas do que é possível
    com bases de dados tradicionais.
2.  A recente evolução vertiginosa das [memórias flash] veio permitir a
    sua utilização em substituição de discos rígidos em certas situações
    (escritas pouco frequentes). Um amigo meu tem uma instalação de
    Windows 98 numa chave USB de 512MB, que usa para resolver problemas
    em qualquer computador. Igualmente, alguns sistemas Linux são
    vendidos em configurações que dispensam o disco rígido tradicional,
    como a [Mini-box].

  [Tim Bray]: http://www.tbray.org/ongoing/
  [primeira entrevista]: http://www.eweek.com/print_article/0,1761,a=121710,00.asp
  [Jim Gray]: http://research.microsoft.com/~gray/
  [entrevista de Jim Gray]: http://www.acmqueue.org/modules.php?name=Content&pa=printer_friendly&pid=43&page=1
  [iPod]: http://www.apple.com/ipod/
  [meio terabyte de memória]: http://www.sun.com/servers/highend/sunfire_e25k/index.xml
  [Hibernate]: http://www.hibernate.org/
  [Prevayler]: http://www.prevayler.org/wiki.jsp
  [memórias flash]: http://en.wikipedia.org/wiki/Flash_memory
  [Mini-box]: http://store.ituner.com/ituner/miniboxm100.html
