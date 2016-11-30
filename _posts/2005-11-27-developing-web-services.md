---
layout: post
title: "Developing Web Services"
published: true
category:
  - Web/Tech
---
<p>I recently taught for the first time a 5-day Web Services course (Sun's <a href="http://www.sun.com/training/catalog/courses/DWS-385.xml?printFriendly=true">Developing Java Web Services - DWS-385</a>), and as usual I complemented the standard courseware with a few articles and diagrams scavenged from the web.</p>

<p>The labs for the current version of DWS-385 will only work with very specific software, namely <a href="http://javashoplm.sun.com/ECom/docs/Welcome.jsp?StoreId=22&amp;PartDetailId=sjsas_pe-8.0_01-oth-JPR&amp;SiteId=JSC&amp;TransactionId=noreg">Sun Java Application Server Platform Edition 8.0 Update 1</a> and <a href="http://java.sun.com/webservices/downloads/1.5/">Java Web Services Developer Pack 1.5</a>. It <strong>won't</strong> work (I tried) with SJAS 8.1 and/or JWSDP 1.6, currently the most recent versions. The JWSDP 1.5 download in particular was a bit difficult to find, since Sun's pages all point to JWSDP 1.6. As usual, Google was more helpful in locating Sun's own content than Sun's search engine.</p>

<p>Although DWS-385 does mention some of the differences between the SOAP-style and the REST-style of web services, it is heavily biased towards the former. Comparing both styles is a bit like comparing apples to oranges, since REST is just a loosely defined architectural style, while SOAP is a standardized and highly detailed implementation of an alternative architectural style. To understand the &quot;RESTful&quot; approach to web services, start with Roger Costello's short <a href="http://www.xfront.com/REST-Web-Services.html">Building Web Services the REST Way</a> and then proceed to the excellent xFront <a href="http://www.xfront.com/REST.html">REST Tutorial</a> (<a href="http://www.xfront.com/REST.ppt">Powerpoint version</a>). Paul Prescod has a couple of nice articles over at O'Reilly's XML.com: <a href="http://webservices.xml.com/lpt/a/ws/2002/02/06/rest.html">Second Generation Web Services</a> and <a href="http://webservices.xml.com/lpt/a/ws/2002/02/20/rest.html">REST and the Real World</a>. Last but not the least, John Cowan has a wonderful and detailed REST presentation called <a href="http://mercury.ccil.org/~cowan/restws.pdf">RESTful Web Services</a> (pdf, 148 slides).</p>

<p>I found Rahul Srivastava's series of articles on XML Schema for <a href="http://www.oracle.com/technology/index.html">Oracle Technology Network</a> to be very helpful when clarifying some finer aspects of XML Schema:</p>

<ul><li><a href="http://www.oracle.com/technology/pub/articles/srivastava_structures.html">XML Schema: Understanding Structures</a></li>

<li><a href="http://www.oracle.com/technology/pub/articles/srivastava_datatypes.html">XML Schema: Understanding Datatypes</a> </li>

<li><a href="http://www.oracle.com/technology/pub/articles/srivastava_namespaces.html">XML Schema: Understanding Namespaces</a> </li></ul>

<p>The last article in particular has a wonderful explanation of the rules governing the qualification of elements and attributes in the Target Namespace.</p>

<p>One the things you can do after attending or studying DWS-385 is to become certified by Sun, by taking exam CX-310-220 (Sun Certified Developer for Java Web Services). Java.boot.by has a series of study guides for the four major Java certifications, including a <a href="http://java.boot.by/wsd-guide/">SCDJWS Study Guide</a> with lots of information. I used some of the info from the <a href="http://java.boot.by/wsd-guide/ch05s03.html">JAXB</a> and <a href="http://java.boot.by/wsd-guide/ch05s04.html">SAAJ</a> sections.</p>
