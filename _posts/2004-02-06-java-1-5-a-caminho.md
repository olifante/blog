---
layout: post
title: "Java 1.5 a caminho"
published: true
category:
  - Web/Tech
---
<p>O Slashdot <a href="http://slashdot.org/article.pl?sid=04/02/05/0830242">noticia hoje</a> que a versão beta do <a href="http://java.sun.com/j2se/1.5.0/index.jsp">Java 1.5</a> passou de acesso restrito (Early Access) para acesso público. O <a href="http://www.theserverside.com/news/thread.jsp?thread_id=23755">TheServerSide.com</a> tem também uma discussão interessante sobre a beta pública, que pode ser <a href="http://java.sun.com/j2se/1.5.0/download.jsp">descarregada no java.sun.com</a>. Aqui vão alguns links tirados do slashdot e do theserverside:</p>

<p>www.javasig.com: <a href="http://www.javasig.com/Archive/lectures/JavaSIG-Tiger.pdf">Resumo das novas funcionalidades</a> (apresentação da Sun em formato pdf)<br />
www.vankuik.nl: <a href="http://www.vankuik.nl/bart/docs/java-1.5_new_features_en_v2.ppt">Resumo das nova funcionalidades</a> (pequena apresentação da Oracle em formato Powerpoint)<br />
www.jcp.org: <a href="http://jcp.org/en/jsr/detail?id=176">J2SETM 1.5 (Tiger) Release Contents</a> (Java Community Process)<br />
java.sun.com: <a href="http://java.sun.com/developer/technicalArticles/releases/j2se15/">Exemplos</a></p>

<p>As <a href="http://java.sun.com/j2se/1.5.0/docs/relnotes/features.html">novas funcionalidades</a> mais interessantes parecem ser as seguintes:<blockquote><cite>64-Bit AMD Opteron Processors:<br />
With J2SE 1.5.0, AMD Opteron processors are supported by the server VM on Suse Linux and on Windows 2003.</cite><br />
<cite><br />
Class Data Sharing:<br />
The class data sharing feature is aimed at reducing application startup time and footprint. The installation process loads a set of classes from the system jar file into a private, internal representation, then dumps that representation to a "shared archive" file. During subsequent JVM invocations, the shared archive is memory-mapped in, saving the cost of loading those classes and allowing much of the JVM's metadata for these classes to be shared among multiple JVM processes. For more information, click the above link.</cite></blockquote></p>

<p>As seguintes alterações à linguagem implementam funcionalidade já disponível no C# desde o início:<br />
<blockquote><cite>Autoboxing/Unboxing:<br />
This facility eliminates the drudgery of manual conversion between primitive types (such as int) and wrapper types (such as Integer). Refer to JSR 201 .</cite></p>

<p><cite>Enhanced for Loop:<br />
This new language construct eliminates the drudgery and error-proneness of iterators and index variables when iterating over collections and arrays. Refer to JSR 201.</cite></p>

<p><cite>Typesafe Enums:<br />
This flexible object-oriented enumerated type facility allows you to create enumerated types with arbitrary methods and fields. It provides all the benefits of the Typesafe Enum pattern ("Effective Java," Item 21) without the verbosity and the error-proness. Refer to JSR 201.</cite></p>

<p><cite>Metadata:<br />
This language feature lets you avoid writing boilerplate code under many circumstances by enabling tools to generate it from annotations in the source code. This leads to a "declarative" programming style where the programmer says what should be done and tools emit the code to do it. Also it eliminates the need for maintaining "side files" that must be kept up to date with changes in source files. Instead the information can be maintained in the source file. Refer to JSR 175.</cite></blockquote></p>

<p>Esta última funcionalidade corresponde aos Atributos do C#:<br />
Sintaxe para atributos em C# - [xxx]<br />
Sintaxe para metadados em Java - @xxx<br />
<blockquote><cite>Generics:<br />
This long-awaited enhancement to the type system allows a type or method to operate on objects of various types while providing compile-time type safety. It adds compile-time type safety to the Collections Framework and eliminates the drudgery of casting. Refer to JSR 14.</cite></p>

<p><cite>Static Import:<br />
This facility lets you avoid qualifying static members with class names without the shortcomings of the "Constant Interface antipattern." Refer to JSR 201.</cite></p>

<p><cite>varargs:<br />
This facility eliminates the need for manually boxing up argument lists into an array when invoking methods that accept variable-length argument lists. Refer to JSR 201.</cite></blockquote></p>

<p>Há algumas funcionalidades de C# que o Java ainda não tem:<br />
- Properties<br />
- Arrays rectangulares<br />
- Structs<br />
- Sobrecarga de operadores<br />
- Delegates</p>

<p>Há também funcionalidades do Java ainda não disponíveis em C#:<br />
- Generics (prometida para uma próxima versão do C#)<br />
- Anonymous Inner Classes<br />
- Real Inner Classes (diferentes das Nested Classes do C#)</p>

<p>Para além da simples contabilidade das funcionalidades, é preciso não esquecer os dois grandes trunfos do Java em relação ao C#: 1. portabilidade; 2. biblioteca de classes abrangente, madura e bem-testada.</p>

<p>Com estas alterações, o Java tornou-se uma linguagem muito mais expressiva, reduzindo a distância de linguagens mais dinâmicas, como Python ou Ruby. A grande vantagem dos Generics, Autoboxing, Varargs e novo loop For consiste em permitir trabalhar de forma muito mais confortável com Listas e Dicionários, e iteração sobre os mesmos. Se pensarmos que um dos maiores trunfos do Python reside na simplicidade com que se manipula estas duas Estruturas de Dados, a perspectiva de voltar a programar em Java deixa de parecer tão dolorosa...</p>

<p>Foi introduzida apenas uma nova palavra reservada ("enum"), o que significa que a esmagadora maioria do código pré-existente deverá continuar a correr em Java 1.5 sem modificações.</p>

<p>Atenção C#, a concorrência está de volta.</p>
