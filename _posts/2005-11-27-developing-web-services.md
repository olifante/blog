---
layout: post
title: "Developing Web Services"
published: true
category:
  - Web/Tech
---

I recently taught for the first time a 5-day Web Services course (Sun's
[Developing Java Web Services - DWS-385]), and as usual I complemented
the standard courseware with a few articles and diagrams scavenged from
the web.

The labs for the current version of DWS-385 will only work with very
specific software, namely [Sun Java Application Server Platform Edition
8.0 Update 1] and [Java Web Services Developer Pack 1.5]. It **won't**
work (I tried) with SJAS 8.1 and/or JWSDP 1.6, currently the most recent
versions. The JWSDP 1.5 download in particular was a bit difficult to
find, since Sun's pages all point to JWSDP 1.6. As usual, Google was
more helpful in locating Sun's own content than Sun's search engine.

Although DWS-385 does mention some of the differences between the
SOAP-style and the REST-style of web services, it is heavily biased
towards the former. Comparing both styles is a bit like comparing apples
to oranges, since REST is just a loosely defined architectural style,
while SOAP is a standardized and highly detailed implementation of an
alternative architectural style. To understand the "RESTful" approach to
web services, start with Roger Costello's short [Building Web Services
the REST Way] and then proceed to the excellent xFront [REST Tutorial]
([Powerpoint version]). Paul Prescod has a couple of nice articles over
at O'Reilly's XML.com: [Second Generation Web Services] and [REST and
the Real World]. Last but not the least, John Cowan has a wonderful and
detailed REST presentation called [RESTful Web Services] (pdf, 148
slides).

I found Rahul Srivastava's series of articles on XML Schema for [Oracle
Technology Network] to be very helpful when clarifying some finer
aspects of XML Schema:

-   [XML Schema: Understanding Structures]
-   [XML Schema: Understanding Datatypes]
-   [XML Schema: Understanding Namespaces]

The last article in particular has a wonderful explanation of the rules
governing the qualification of elements and attributes in the Target
Namespace.

One the things you can do after attending or studying DWS-385 is to
become certified by Sun, by taking exam CX-310-220 (Sun Certified
Developer for Java Web Services). Java.boot.by has a series of study
guides for the four major Java certifications, including a [SCDJWS Study
Guide] with lots of information. I used some of the info from the [JAXB]
and [SAAJ] sections.

  [Developing Java Web Services - DWS-385]: http://www.sun.com/training/catalog/courses/DWS-385.xml?printFriendly=true
  [Sun Java Application Server Platform Edition 8.0 Update 1]: http://javashoplm.sun.com/ECom/docs/Welcome.jsp?StoreId=22&PartDetailId=sjsas_pe-8.0_01-oth-JPR&SiteId=JSC&TransactionId=noreg
  [Java Web Services Developer Pack 1.5]: http://java.sun.com/webservices/downloads/1.5/
  [Building Web Services the REST Way]: http://www.xfront.com/REST-Web-Services.html
  [REST Tutorial]: http://www.xfront.com/REST.html
  [Powerpoint version]: http://www.xfront.com/REST.ppt
  [Second Generation Web Services]: http://webservices.xml.com/lpt/a/ws/2002/02/06/rest.html
  [REST and the Real World]: http://webservices.xml.com/lpt/a/ws/2002/02/20/rest.html
  [RESTful Web Services]: http://mercury.ccil.org/~cowan/restws.pdf
  [Oracle Technology Network]: http://www.oracle.com/technology/index.html
  [XML Schema: Understanding Structures]: http://www.oracle.com/technology/pub/articles/srivastava_structures.html
  [XML Schema: Understanding Datatypes]: http://www.oracle.com/technology/pub/articles/srivastava_datatypes.html
  [XML Schema: Understanding Namespaces]: http://www.oracle.com/technology/pub/articles/srivastava_namespaces.html
  [SCDJWS Study Guide]: http://java.boot.by/wsd-guide/
  [JAXB]: http://java.boot.by/wsd-guide/ch05s03.html
  [SAAJ]: http://java.boot.by/wsd-guide/ch05s04.html
