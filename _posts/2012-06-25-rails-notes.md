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
** Iteration A1:
- `rails new depot`
- `cd depot`

** Generating the Scaffold
- `rails generate scaffold Product title:string description:text image_url:string price:decimal`
- `t.decimal :price, precision: 8, scale: 2` Modify the migrate file
- `rake db:migrate` Apply the migrations to our development database
- `rails server` then visit localhost:3000/products
- Add some products, then shutdown the server to test the test
- `rake test`

** Iteration A2: making prettier Listings
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
{% endhighlight %}  

* Playtime
- `rake db:rollback` After rollbacking and then migrating again, every data lost
- `rake db:migrate`


Chapter 7
=========
- `validates :title, :description, :image_url, presence: true`
- `validates :price, numericality: {greater_than_or_equal_to: 0.01}`
- `validates :title, uniqueness: true`
- `rake test` then 2 failures

Iteration B2: Unit Testing of Models
------------------------------------
{% highlight ruby %}
  test "product attributes must not be empty" do
    product = Product.new
    assert product.invalid?
    assert product.errors[:title].any?
    assert product.errors[:description].any?
    assert product.errors[:price].any?
    assert product.errors[:image_url].any?
  end


  test "product price must be positive" do
    product = Product.new(title: "My Book Title",
                         description: "yyy",
                         image_url: "zzz.jpg")
    product.price = -1
    assert product.invalid?
    assert_equal "must be greater than or equal to 0.01",
      product.errors[:price].join('; ')
    product.price = 0
    assert product.invalid?
    assert_equal "must be greater than or equal to 0.01",
      product.errors[:price].join('; ')
    product.price = 1
    assert product.valid?
  end


  def new_product(image_url)
    Product.new(title: "My Book Title",
                         description: "yyy",
                         price: 1,
                         image_url: image_url)
  end

  test "image url" do
    ok = %w{ fred.gif fred.jpg fred.png FRED.JPG FRED.Jpg http://a.b.c/x/y/z/fred.gif}
    bad = %w{ fred.doc fred.gif/more fred.gif.more }
    ok.each do |name|
      assert new_product(name).valid?,
        "#{name} shouldn't be valid"
    end
    bad.each do |name|
      assert new_product(name).invalid?,
        "#{name} shouldn't be valid"
    end
  end

  test "product is not valid without a unique title" do
    product = Product.new(title: products(:ruby).title,
                         description: "yyy",
                         price: 1,
                         image_url: "fred.gif")
    assert !product.save
    assert_equal "has already been taken",
      product.errors[:title].join(';')
  end

  test "product is not valid without a unique title - i18n" do
    product = Product.new(title: products(:ruby).title,
                         description: "yyy",
                         price: 1,
                         image_url: "fred.gif")
    assert !product.save
    assert_equal I18n.translate('activerecord.errors.messages.taken'),
      product.errors[:title].join(';')
  end

{% endhighlight %}
- `rake test:units`

Test Fixtures
-------------
- `rake db:test:prepare`
