---
layout: post
title: "python notes"
description: ""
category: notes
tags: [python]
---
{% include JB/setup %}
  
[Google python style guide](http://google-styleguide.googlecode.com/svn/trunk/pyguide.html)  
[pypress](http://laoqiu.com)

- some regular expressions:
{% highlight python %}
(?<=\s@[a-z]+) \| #'|'s  in "sfdsf343fdsfdef @name | sfs sfs @brand | sfs 1 2 3 "
(?<=url\(").*(?="\)) # url("sfsfsfsf") in ""
{% endhighlight %}

{% highlight python %}
topics = [
        (11, 'A', 'foo'),
        (22, 'A', 'bar'),
        (33, 'A', 'foobar'),
        
        ('sss', 'B', 'lol'),
        ('mmm', 'B', 'cat'),
        
        ('nice', 'C', 'dog')]

# to 
# output = [
#       [(11,'A','foo'),(22,'A', 'bar'), (33, 'A', 'foobar')],
#       [('sss', 'B', 'lol'), ('mmm', 'B', 'cat')],
#       [('nice', 'C', 'dog')]
#       ]
#
#
#
#

import itertools
import operator

category_topics_list = []
categories_list = []
for key, group in itertools.groupby(topics, operator.itemgetter(3)):
    category_topics_list.append(list(group))
    categories_list.append(key)


{% endhighlight %}

- `dir(class)` List object's attributes
- `x = 'hello'`
- `y = 'hello'`
- `id(x)`
- `id(y)`
  
- `bool(8)`
  
- `apple = Fruit()`
- `print apple.__dict__`
- `print apple.__class__.__dict__`
- `apple is Fruit` False
- `apple.__class__ is Fruit` True
- `isinstance(apple, Fruit)` True
  
- `def aFunc(arg1, arg2, *args, **kwargs):`
- `tupleArgs = ('1', '2', '3')`
- `dicArgs = {'1': 'one', '2': 'two'}`
- `aFunc(1,2, *tupleArgs, **dicArgs)`
  
- NamedTuple = namedtuple('NamedTUple', ['id', 'title', 'type'])
- list.sort(key = lambda x: x.submitted_time)
- Use `mydict.get()`

- `'1'.isdigit()` True
  
- Hash:
-- `import hashlib`
-- `x = hashlib.md5("foo!")`
-- `x.hexdigest()`
-- `import hmac`
-- `hmac.new("secret", "udacity").hexdigest()`


pdb
===
`python -m pdb buggy.py`

{% highlight python %}
python
import buggy
import pdb
pdb.set_trace()

buggy.crash()
pdb.pm()
{% endhighlight %}

- l(ist)
- n(ext)
- c(ontinue)
- s(tep)
- r(eturn)
- b(reak)



