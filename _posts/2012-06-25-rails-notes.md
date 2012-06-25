---
layout: post
title: "rails notes"
description: "Learning Rails"
category: 
tags: [railes, notes]
---
{% include JB/setup %}

Agile Web Development with Rails
================================

Chapter 6. Creating the Application.
-----------------------------------
*** Iteration A1:
- `rails new depot`
- `cd depot`

** Generating the Scaffold
- `rails generate scaffold Product title:string description:text image_url:string price:decimal`
- `t.decimal :price, precision: 8, scale: 2` Modify the migrate file
- `rake db:migrate` Apply the migrations to our development database
- `rails server` then visit localhost:3000/products
- Add some products, then shutdown the server to test the test
- `rake test`

*** Iteration A2: making prettier Listings
- modify the file in the db directory named seeds.rb, add some seed data
- `rake db:seed` populate the data into database
- Styling it a little bit more in app/assets/stylesheets/products.css.scss
- `<body class='<%= controller.controller_name %>'>` <Then add style link to app/views/layouts/application.html.erb file, cuz rails load all styles all at once
- Editing app/views/products replacing the scaffold-generated view
- `list_line_even`, `list_line_odd`, `truncate`, `strip_tags`, `link_to`, `confirm`

{% highlight ruby %}
<table>
<% @products.each do |product| %>
  <tr class="<%= cycle('list_line_odd', 'list_line_even') %>">
    <td><%= image_tag(product.image_url, class: 'list_image') %></td>
    <td class="list_description">
      <dl>
        <dt><%= product.title %></dt>
        <dd><%= 
          truncate(strip_tags(product.description), length: 80) %></dd>
      </dl>
    </td>
    <td class="list_actions">
      <%= link_to 'Show', product %><br/>
      <%= link_to 'Edit', edit_product_path(product) %><br/>
      <%= link_to 'Destroy', product, confirm: 'Are you sure?', method: :delete %>
    </td>
  </tr>
<% end %>
</table>
{% endhightlight %}

** Playtime
- `rake db:rollback` After rollbacking and then migrating again, every data lost
- `rake db:migrate`


