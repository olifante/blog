---
layout: post
title: "Java 1.5 a caminho"
published: true
category:
  - Web/Tech
---

O Slashdot [noticia hoje] que a versão beta do [Java 1.5] passou de
acesso restrito (Early Access) para acesso público. O
[TheServerSide.com] tem também uma discussão interessante sobre a beta
pública, que pode ser [descarregada no java.sun.com]. Aqui vão alguns
links tirados do slashdot e do theserverside:

www.javasig.com: [Resumo das novas funcionalidades] (apresentação da Sun
em formato pdf)\
www.vankuik.nl: [Resumo das nova funcionalidades] (pequena apresentação
da Oracle em formato Powerpoint)\
www.jcp.org: [J2SETM 1.5 (Tiger) Release Contents] (Java Community
Process)\
java.sun.com: [Exemplos]

As [novas funcionalidades] mais interessantes parecem ser as seguintes:

> 64-Bit AMD Opteron Processors:\
> With J2SE 1.5.0, AMD Opteron processors are supported by the server VM
> on Suse Linux and on Windows 2003.\
> \
> Class Data Sharing:\
> The class data sharing feature is aimed at reducing application
> startup time and footprint. The installation process loads a set of
> classes from the system jar file into a private, internal
> representation, then dumps that representation to a "shared archive"
> file. During subsequent JVM invocations, the shared archive is
> memory-mapped in, saving the cost of loading those classes and
> allowing much of the JVM's metadata for these classes to be shared
> among multiple JVM processes. For more information, click the above
> link.

As seguintes alterações à linguagem implementam funcionalidade já
disponível no C\# desde o início:\

> Autoboxing/Unboxing:\
> This facility eliminates the drudgery of manual conversion between
> primitive types (such as int) and wrapper types (such as Integer).
> Refer to JSR 201 .
>
> Enhanced for Loop:\
> This new language construct eliminates the drudgery and
> error-proneness of iterators and index variables when iterating over
> collections and arrays. Refer to JSR 201.
>
> Typesafe Enums:\
> This flexible object-oriented enumerated type facility allows you to
> create enumerated types with arbitrary methods and fields. It provides
> all the benefits of the Typesafe Enum pattern ("Effective Java," Item
> 21) without the verbosity and the error-proness. Refer to JSR 201.
>
> Metadata:\
> This language feature lets you avoid writing boilerplate code under
> many circumstances by enabling tools to generate it from annotations
> in the source code. This leads to a "declarative" programming style
> where the programmer says what should be done and tools emit the code
> to do it. Also it eliminates the need for maintaining "side files"
> that must be kept up to date with changes in source files. Instead the
> information can be maintained in the source file. Refer to JSR 175.

Esta última funcionalidade corresponde aos Atributos do C\#:\
Sintaxe para atributos em C\# - \[xxx\]\
Sintaxe para metadados em Java - @xxx\

> Generics:\
> This long-awaited enhancement to the type system allows a type or
> method to operate on objects of various types while providing
> compile-time type safety. It adds compile-time type safety to the
> Collections Framework and eliminates the drudgery of casting. Refer to
> JSR 14.
>
> Static Import:\
> This facility lets you avoid qualifying static members with class
> names without the shortcomings of the "Constant Interface
> antipattern." Refer to JSR 201.
>
> varargs:\
> This facility eliminates the need for manually boxing up argument
> lists into an array when invoking methods that accept variable-length
> argument lists. Refer to JSR 201.

Há algumas funcionalidades de C\# que o Java ainda não tem:\
- Properties\
- Arrays rectangulares\
- Structs\
- Sobrecarga de operadores\
- Delegates

Há também funcionalidades do Java ainda não disponíveis em C\#:\
- Generics (prometida para uma próxima versão do C\#)\
- Anonymous Inner Classes\
- Real Inner Classes (diferentes das Nested Classes do C\#)

Para além da simples contabilidade das funcionalidades, é preciso não
esquecer os dois grandes trunfos do Java em relação ao C\#: 1.
portabilidade; 2. biblioteca de classes abrangente, madura e
bem-testada.

Com estas alterações, o Java tornou-se uma linguagem muito mais
expressiva, reduzindo a distância de linguagens mais dinâmicas, como
Python ou Ruby. A grande vantagem dos Generics, Autoboxing, Varargs e
novo loop For consiste em permitir trabalhar de forma muito mais
confortável com Listas e Dicionários, e iteração sobre os mesmos. Se
pensarmos que um dos maiores trunfos do Python reside na simplicidade
com que se manipula estas duas Estruturas de Dados, a perspectiva de
voltar a programar em Java deixa de parecer tão dolorosa...

Foi introduzida apenas uma nova palavra reservada ("enum"), o que
significa que a esmagadora maioria do código pré-existente deverá
continuar a correr em Java 1.5 sem modificações.

Atenção C\#, a concorrência está de volta.

  [noticia hoje]: http://slashdot.org/article.pl?sid=04/02/05/0830242
  [Java 1.5]: http://java.sun.com/j2se/1.5.0/index.jsp
  [TheServerSide.com]: http://www.theserverside.com/news/thread.jsp?thread_id=23755
  [descarregada no java.sun.com]: http://java.sun.com/j2se/1.5.0/download.jsp
  [Resumo das novas funcionalidades]: http://www.javasig.com/Archive/lectures/JavaSIG-Tiger.pdf
  [Resumo das nova funcionalidades]: http://www.vankuik.nl/bart/docs/java-1.5_new_features_en_v2.ppt
  [J2SETM 1.5 (Tiger) Release Contents]: http://jcp.org/en/jsr/detail?id=176
  [Exemplos]: http://java.sun.com/developer/technicalArticles/releases/j2se15/
  [novas funcionalidades]: http://java.sun.com/j2se/1.5.0/docs/relnotes/features.html
