---
layout: default
---
{% include JB/setup %}



<div class="tabbable tabs-right">
    <div class="row-fluid">
   
        <div class="span8">
            <div class="tab-content">
              {% for post in site.posts %}
                    {% if forloop.index == 1 %}
                    <div class="tab-pane active" id="article{{ forloop.index }}">
                        <p>Posted on: {{ post.date | date_to_string }}</p>
                        {{ post.content }}
                    </div>
                    {% else %}
                        <div class="tab-pane" id="article{{ forloop.index }}">
                        <p>Posted on: {{ post.date | date_to_string }}</p>
                        {{ post.content }}
                    </div>
                    
                    {% endif %}
              {% endfor %}
            </div>
        </div>
        <div class="span4">
            <ul class="nav nav-tabs navbar-fixed-right">
              {% for post in site.posts %}
                  {% if forloop.index == 1 %}
              <li class="active"><a href="#article{{ forloop.index }}" data-toggle="tab">{{ forloop.index }}. {{ post.title }}</a></li>
              {% else %}
                                <li><a href="#article{{ forloop.index }}" data-toggle="tab">{{ forloop.index }}. {{ post.title }}</a></li>
                                {% endif %}

              {% endfor %}
            </ul>
        </div>
    </div>
</div>


  
