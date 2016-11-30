---
layout: post
title: "Minimal Django"
published: true
categories:
  - Python
  - Web/Tech
---
<p><a href="http://flask.pocoo.org/docs/quickstart/">Flask</a> is a new microframework for web development. Created by Armin Ronacher, it grew from an April Fools&#8217; prank into an elegant, usable tool in a very short time, mostly thanks to its clever leveraging of Armin&#8217;s two other babies, the <a href="http://werkzeug.pocoo.org/documentation/">Werkzeug</a> webserver and the <a href="http://jinja.pocoo.org/2/documentation/">Jinja2</a> templating language.</p>

<p>I work daily with <a href="http://www.djangoproject.com/">Django</a> and love it, but after reading about Flask I got a small case of microframework envy. Why can&#8217;t Django development scale down as well as it scales up, and let a beginner have fun with single-file web development without becoming swamped in the full complexity of modern web development? It turns out Django <em>can</em> easily scale down.</p>

<h2 id="single_file_django">Single-file Django</h2>

<pre><code>import os
from django.conf.urls.defaults import patterns
from django.http import HttpResponse
filepath, extension = os.path.splitext(__file__)
ROOT_URLCONF = os.path.basename(filepath)

def yoohoo(request):
    return HttpResponse('Yoohoo!')

urlpatterns = patterns('', (r'^hello/$', yoohoo))
</code></pre>

<p>If you&#8217;re not familiar with Django, this code simply defines a 2-line function (<code>yoohoo</code>) that accepts an HTTP Request and returns a webpage to the browser. In Django this is called a view. After we create the view, we have to associate it with a URL. The last line of code simply means <em>&#8220;when someone asks for the page <code>http://your.server.com/hello/</code>, run the <code>yoohoo</code> view and display the result&#8221;</em>.</p>

<p>To try this code out in Mac OSX or Linux, all you need to do is <a href="http://docs.djangoproject.com/en/dev/intro/install/">install Django</a>, copy the above code into <code>/some/path/to/somefile.py</code> and type the following incantation into a terminal: <code>PYTHONPATH=/some/path/to DJANGO_SETTINGS_MODULE=somefile django-admin.py runserver</code></p>

<p>This will run a local webserver in your machine, which you can access by opening <code>http://localhost:8000/yoohoo/</code> in your browser. Not too bad for a single file with 10 lines of code.</p>

<h2 id="look_ma_no_project">Look Ma, no project!</h2>

<p>If you&#8217;re familiar with Django, you might have noticed what&#8217;s missing: we didn&#8217;t have to run the usual <code>django-admin.py startproject someproject</code> to create the initial Django project skeleton. This means there is no <code>manage.py</code> file, no <code>settings.py</code>, no <code>urls.py</code>, no <code>views.py</code>, and no Django app in sight. Projects are really a superfluous convenience, as James Bennett argues in <a href="http://apress.com/book/view/1430219386">Practical Django Projects</a>. The file <code>manage.py</code> is simply a shallow wrapper around <code>django-admin.py</code> that adds its directory to <code>PYTHONPATH</code> and points the <code>DJANGO_SETTINGS_MODULE</code> to the <code>settings.py</code> in its directory. By explicitly passing these two parameters to <code>django-admin.py</code> as we did in the above incantation, we eliminate the need for <code>manage.py</code>.</p>

<p>Actually <code>settings.py</code> hasn&#8217;t disappeared, we&#8217;re just calling it <code>somefile.py</code> or whatever you prefer. The thing is, it probably doesn&#8217;t look like a <code>settings.py</code> to you if you&#8217;re used to Django. What happened?</p>

<p>It turns out that Django has sensible defaults for much of the stuff that usually goes into <code>settings.py</code>. The absolute minimal <code>settings.py</code> only has to define the <code>ROOT_URLCONF</code> variable and point it to the <code>urls.py</code> module that usually contains the URLs for you Django project. In our single-file Django example, we&#8217;re actually pointing the <code>ROOT_URLCONF</code> to the <code>somefile.py</code> file itself.</p>

<p>As for the <code>urls.py</code> file, it hasn&#8217;t so much disappeared as merged with <code>settings.py</code> into <code>somefile.py</code>. The same goes for what would usually be the <code>views.py</code> file. We have a single view merged into the <code>somefile.py</code> file. The only restriction is that we must make sure our views are defined before we refer to them in our <code>urlpatterns</code>.</p>

<h2 id="look_ma_no_django_adminpy">Look Ma, no django-admin.py!</h2>

<p>The problem is, typing <code>PYTHONPATH=/some/path/to DJANGO_SETTINGS_MODULE=somefile django-admin.py runserver</code> seems too much of a mouthful to be typing all the time. It almost makes you want to create a project just so you can type <code>python manage.py runserver</code>. Repent, O ye of shallow faith! Copy this code into a file named <code>django</code> and give it execution permissions with <code>chmod +x django</code>:</p>

<pre><code>#! /usr/bin/env sh
USAGE="Usage: `basename $0` path/to/module.py django_command [arg1 arg2 ...]"
if [ "$#" == "0" ]; then
    echo "$USAGE"
    exit 1
fi
module=`basename $1 .py`
dir=`dirname $1`
if [ -n "${PYTHONPATH}" ]; then
    NEWPATH=$PYTHONPATH:$dir
else
    NEWPATH=$dir
fi
shift
echo PYTHONPATH=$NEWPATH DJANGO_SETTINGS_MODULE=$module django-admin.py $@
PYTHONPATH=$NEWPATH DJANGO_SETTINGS_MODULE=$module django-admin.py $@
</code></pre>

<p>Using this, you can now simply type <code>./django ./somefile.py runserver</code> and run your projectless Django code as easily as within a project.</p>

<h2 id="django_templates">Django Templates</h2>

<p>As so often happens with this kind of minimalistic example of microframework usage, our 12-line example looks enticingly simple but is not very realistic. In real life, the <code>HttpResponse</code> returned by the <code>yoohoo</code> view expects to be fed not a simple string such as <code>"Yoohoo!"</code> but a long and complex string containing your HTML code. Now, we could build that string incrementally inside the view function as people did in the good old ASP times, but by now we all should know that this leads to very brittle code and should never be taught to beginners, lest they stray from the righteous path. Instead of embedding HTML into our Python code, we&#8217;re going to embed a simplified kind of code into our HTML, using <a href="http://docs.djangoproject.com/en/dev/ref/templates/api/">Django Templates</a>. Fortunately, adding templates to our minimal django example is easy:</p>

<pre><code>import os
from django.conf.urls.defaults import patterns
from django.http import HttpResponse
filepath, extension = os.path.splitext(__file__)
ROOT_URLCONF = os.path.basename(filepath)
DEBUG=TEMPLATE_DEBUG=True
TEMPLATE_DIRS = (os.path.dirname(filepath),)
from django.views.generic.simple import direct_to_template

def yoohoo(request):
    return HttpResponse('Yoohoo!')

urlpatterns = patterns('',
    (r'^hello/$', yoohoo),
    (r'^howdy/$', direct_to_template, dict(
        template='howdy.html',
        extra_context=dict(
            name='Stranger',
        ),
    )),
)
</code></pre>

<p>In this extended example, we&#8217;ve added the URL <code>your.server.com/howdy/</code> to our <code>urlpatterns</code> variable, but instead of pointing it to a previously defined view such as <code>yoohoo</code>, we&#8217;re pointing it to a built-in Django view called <code>direct_to_template</code>. This view accepts a few additional parameters such as the template file used to render the HTML page and a dictionary of variables that should be available inside the template, in our case <code>name</code>.</p>

<p>We&#8217;ve also activated debugging, which makes Django display more user-friendly messages in the browser when an error occurrs.</p>

<p>The template could be something as simple as this or as complex as your wildest Dreamweaver fantasies:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;
            Hi, {{ name }}!
        &lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;
            Hi, {{ name }}!
        &lt;/h1&gt;
        &lt;p&gt;
            My time is &lt;strong&gt;{% now "H:i:s" %}&lt;/strong&gt;
        &lt;/p&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>This now looks less like a toy and more like something you could actually use to build something useful. We could add decorators à la Bottle or Flask to decorate views with their URLs instead of writing them separately at the bottom, and we could define a nicer syntax to point URLs to templates, but the basics are there and can do much of what Flask does. The difference is, the whole remaining paraphernalia of Django is hidden behind the curtains, ready for you to use it if or when you decide that you need to use an ORM to talk to a database, use Form helpers, build an administrative back-end, internationalize your webapp, etc.</p>


