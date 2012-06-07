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

- `dir(class)` List object's attributes
  
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














