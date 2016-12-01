---
layout: post
title: "Minimal Django"
published: true
categories:
  - Python
  - Web/Tech
---

[Flask] is a new microframework for web development. Created by Armin
Ronacher, it grew from an April Fools’ prank into an elegant, usable
tool in a very short time, mostly thanks to its clever leveraging of
Armin’s two other babies, the [Werkzeug] webserver and the [Jinja2]
templating language.

I work daily with [Django] and love it, but after reading about Flask I
got a small case of microframework envy. Why can’t Django development
scale down as well as it scales up, and let a beginner have fun with
single-file web development without becoming swamped in the full
complexity of modern web development? It turns out Django *can* easily
scale down.

Single-file Django {#single_file_django}
------------------

    import os
    from django.conf.urls.defaults import patterns
    from django.http import HttpResponse
    filepath, extension = os.path.splitext(__file__)
    ROOT_URLCONF = os.path.basename(filepath)

    def yoohoo(request):
        return HttpResponse('Yoohoo!')

    urlpatterns = patterns('', (r'^hello/$', yoohoo))

If you’re not familiar with Django, this code simply defines a 2-line
function (`yoohoo`) that accepts an HTTP Request and returns a webpage
to the browser. In Django this is called a view. After we create the
view, we have to associate it with a URL. The last line of code simply
means *“when someone asks for the page `http://your.server.com/hello/`,
run the `yoohoo` view and display the result”*.

To try this code out in Mac OSX or Linux, all you need to do is [install
Django], copy the above code into `/some/path/to/somefile.py` and type
the following incantation into a terminal:
`PYTHONPATH=/some/path/to DJANGO_SETTINGS_MODULE=somefile django-admin.py runserver`

This will run a local webserver in your machine, which you can access by
opening `http://localhost:8000/yoohoo/` in your browser. Not too bad for
a single file with 10 lines of code.

Look Ma, no project! {#look_ma_no_project}
--------------------

If you’re familiar with Django, you might have noticed what’s missing:
we didn’t have to run the usual
`django-admin.py startproject someproject` to create the initial Django
project skeleton. This means there is no `manage.py` file, no
`settings.py`, no `urls.py`, no `views.py`, and no Django app in sight.
Projects are really a superfluous convenience, as James Bennett argues
in [Practical Django Projects]. The file `manage.py` is simply a shallow
wrapper around `django-admin.py` that adds its directory to `PYTHONPATH`
and points the `DJANGO_SETTINGS_MODULE` to the `settings.py` in its
directory. By explicitly passing these two parameters to
`django-admin.py` as we did in the above incantation, we eliminate the
need for `manage.py`.

Actually `settings.py` hasn’t disappeared, we’re just calling it
`somefile.py` or whatever you prefer. The thing is, it probably doesn’t
look like a `settings.py` to you if you’re used to Django. What
happened?

It turns out that Django has sensible defaults for much of the stuff
that usually goes into `settings.py`. The absolute minimal `settings.py`
only has to define the `ROOT_URLCONF` variable and point it to the
`urls.py` module that usually contains the URLs for you Django project.
In our single-file Django example, we’re actually pointing the
`ROOT_URLCONF` to the `somefile.py` file itself.

As for the `urls.py` file, it hasn’t so much disappeared as merged with
`settings.py` into `somefile.py`. The same goes for what would usually
be the `views.py` file. We have a single view merged into the
`somefile.py` file. The only restriction is that we must make sure our
views are defined before we refer to them in our `urlpatterns`.

Look Ma, no django-admin.py! {#look_ma_no_django_adminpy}
----------------------------

The problem is, typing
`PYTHONPATH=/some/path/to DJANGO_SETTINGS_MODULE=somefile django-admin.py runserver`
seems too much of a mouthful to be typing all the time. It almost makes
you want to create a project just so you can type
`python manage.py runserver`. Repent, O ye of shallow faith! Copy this
code into a file named `django` and give it execution permissions with
`chmod +x django`:

    #! /usr/bin/env sh
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

Using this, you can now simply type `./django ./somefile.py runserver`
and run your projectless Django code as easily as within a project.

Django Templates {#django_templates}
----------------

As so often happens with this kind of minimalistic example of
microframework usage, our 12-line example looks enticingly simple but is
not very realistic. In real life, the `HttpResponse` returned by the
`yoohoo` view expects to be fed not a simple string such as `"Yoohoo!"`
but a long and complex string containing your HTML code. Now, we could
build that string incrementally inside the view function as people did
in the good old ASP times, but by now we all should know that this leads
to very brittle code and should never be taught to beginners, lest they
stray from the righteous path. Instead of embedding HTML into our Python
code, we’re going to embed a simplified kind of code into our HTML,
using [Django Templates]. Fortunately, adding templates to our minimal
django example is easy:

    import os
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

In this extended example, we’ve added the URL `your.server.com/howdy/`
to our `urlpatterns` variable, but instead of pointing it to a
previously defined view such as `yoohoo`, we’re pointing it to a
built-in Django view called `direct_to_template`. This view accepts a
few additional parameters such as the template file used to render the
HTML page and a dictionary of variables that should be available inside
the template, in our case `name`.

We’ve also activated debugging, which makes Django display more
user-friendly messages in the browser when an error occurrs.

The template could be something as simple as this or as complex as your
wildest Dreamweaver fantasies:

<div class="highlight">

``` {lang=""}

    
        
            Hi, {% raw  %}{{ name }}!{% endraw %}
        
    
    
        
            Hi, {% raw  %}{{ name }}!{% endraw %}
        
        
            My time is {% raw  %}{% now "H:i:s" %}{% endraw %}
        
    
```

</div>

This now looks less like a toy and more like something you could
actually use to build something useful. We could add decorators à la
Bottle or Flask to decorate views with their URLs instead of writing
them separately at the bottom, and we could define a nicer syntax to
point URLs to templates, but the basics are there and can do much of
what Flask does. The difference is, the whole remaining paraphernalia of
Django is hidden behind the curtains, ready for you to use it if or when
you decide that you need to use an ORM to talk to a database, use Form
helpers, build an administrative back-end, internationalize your webapp,
etc.

  [Flask]: http://flask.pocoo.org/docs/quickstart/
  [Werkzeug]: http://werkzeug.pocoo.org/documentation/
  [Jinja2]: http://jinja.pocoo.org/2/documentation/
  [Django]: http://www.djangoproject.com/
  [install Django]: http://docs.djangoproject.com/en/dev/intro/install/
  [Practical Django Projects]: http://apress.com/book/view/1430219386
  [Django Templates]: http://docs.djangoproject.com/en/dev/ref/templates/api/
