---
layout: post
title: "ruby notes"
description: ""
category: notes
tags: [ruby]
---
{% include JB/setup %}
{% highlight ruby%}
rails new demo
cd demo
rake doc:rails  # doc/api/index.html
rake about
gem install sqlite3
gem install mysql2
rails server
rails server webrick

# hello world
rails generate controller Say hello goodbye
# visit http://localhost:3000/say/hello

# controller
@time = Time.now
@files = Dir.glob('*')
# view
<%= link_to "Goodbye",
    say_goodbye_path %>!

#  Railes Model Support
    # Object-Relational Mapping
        #Active Record
# Action Pack: View and Controller
{% endhighlight %}

{% highlight ruby%}
nil is a object represent nothing
<< appends a value to it's receiver
a = ['a', 'b', 'c']
# is the same:
a = %w{a b c}wnumber = 2
alert "hello world" + number.to_s
if number ==2
    alert "Yes!"
else
    alert "No!"
end
{% endhighlight %}

RubyMonk
========
1.0 Introduction to Objects
---------------------------
- `self`
- `2.even?` # true
- `1.next.next` # 3
- `1.methods` # samilar as dir() in python
- `1.methods.sort`
- `2.between?(1,3)` # true `4.+(3)` # 7
- `words = ["foo", "bar", "baz"]`
- `words.[](1)` # bar
2.0 Classes
-----------
- `puts 1.class` # Fixnum `puts "".class` # String `puts [].class` # Array
- `1.class.class` # Class `obj = Object.new`

{% highlight ruby%}
class Rectangle 
  def initialize(length, breadth)
    @length = length
    @breadth = breadth
  end
  def perimeter
    2 * (@length + @breadth)
  end
end
{% endhighlight %}

3.0 Introduction to Strings
---------------------------
- `'str'.length`
{% highlight ruby%}
a = 1 
b = 4
puts "The number #{a} is less than #{b}"
{% endhighlight %}
- `"[Yoda:]".include? "Yoda"` # true
- `"Ruby is a ...".start_with? "Ruby"` # true, end_with? index upcase downcase swapcase
- `"I I I".sub('I', 'We')` # We I I
- `"I I I".gsub('I', 'We')` # We We We
- `"I i I".gsub(/[A-Z]/, 'We') # We i We
- `'RubyMonk Is Pretty Brilliant'.match(/ ./)` # I

UBUNTU
======
mapping keys:
-------------
[Mapping keys](http://askubuntu.com/questions/24916/how-do-i-remap-certain-keys)  
to test keycode: `xev`  
mapping Casp_Lock(66) to Escape(9)  
`xmodmap -e "keycode 66=Escape"`  
`lsb_release -a` #Test version  