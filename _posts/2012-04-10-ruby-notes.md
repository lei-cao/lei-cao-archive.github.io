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

{% highlight ruby%}
require 'gosu'

class MyGame < Gosu::Window
  def initialize
    super(300, 400, false)
    @player1 = Player.new(self)
  end

  def update
  end

  def draw
  end

end
class Player
  def initialize(game_window)
    @game_window = game_window
    @icon = Gosu::Image.new(@game_window, "gosu/player1.png", true)
  end
  def draw
    @icon.draw(50, 50, 1)
  end
  
end

window = MyGame.new
window.show
{% endhighlight %}
