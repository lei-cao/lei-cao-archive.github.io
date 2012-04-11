---
layout: post
title: "ruby notes"
description: ""
category: notes
tags: [ruby]
---
{% include JB/setup %}

{% highlight ruby%}

number = 2
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
