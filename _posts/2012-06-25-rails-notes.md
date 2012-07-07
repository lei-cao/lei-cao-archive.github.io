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



Chapter 8 Catalog Display
=========================
8.1 Creating the Catalog Listing
--------------------------------
- rails generate controller Store index
  
- editing `config/routes.rb` add `root to: 'store#index', as: 'store'`
- delete `public/index.html`
  
- in `app/controllers/store-controller.rb` `@products = Product.order(:title)`
  
- in `app/views/store/index.html.erb`  
{% highlight ruby %}
<% if notice %>
  <p id="notice"><%= notice %></p>
<% end %>
<h1> Your pragamtic Catalog</h1>
<% @products.each do |product| %>
  <div class="entry">
    <%= image_tag(product.image_url) %>
    <h3><%= product.title %></h3>
    <%= sanitize(product.description) %>
    <div class="price_line">
      <span class="price"><%=
        product.price %></span>
    </div>
  </div>
<% end %>
{% endhighlight %}
- `sanitize` add style but perhaps have security problems

8.3 Using a Helper to Format the Price 
--------------------------------------
- in view: `<span class="price"><%= sprintf("$%0.02f", product.price) %></span>`
- `<span class="price"><%= number_to_currency(product.price) %></span>`

8.4 Functional Testing of Controllers
-------------------------------------

Chapter 9 Cart Creation
=======================
9.1 Finding a Cart
------------------
- rails generate scaffold cart
- in `app/controllers/application_controller.rb`
{% highlight ruby %}

  private

    def current_cart
      Cart.find(session[:cart_id])

    rescue
      ActiveRecord::RecordNotFound
        card = Cart.create
        session[:cart_id] = cart.id
        cart
    end
{% endhighlight %}

9.2 Connecting Products to Carts
--------------------------------
- `rails generate scaffold line_item product_id:integer cart_id:integer`
- `rake db:migrate`
  
- Specify the interrelationships `has_many :line_items, dependent: :destroy` in `app/models/cart.rb`
- `dependent: :destroy` indicates that the existence of line items is dependent on the existence of the cart, if we destroy a cart, we'll want Rails also to destroy any line items that are associated with that cart.
- Specify links in the opposite direction: 
  `attr_accessible :cart_id, :product_id, :quantity` # this should be added, otherwise will fail
  `belongs_to :product`
  `belongs_to :cart`
  if a table has foreign keys, the corresponding model should have a belongs_to for each

{% highlight ruby %}
# in app/models/product.rb
# a hook method

  has_many :line_items

  before_destroy
    :ensure_not_referenced_by_any_line_item

  private
    # ensure not referenced by any line item
    def ensure_not_referenced_by_any_line_item
      if line-items.empty?
        return true
      else
        errors.add(:base, 'Line Items present') # direct access to the errors object
        return false
      end
    end

{% endhighlight %}
  
9.3 Adding a Button
-------------------
- in `app/views/store/index.html.erb` add the button: `<%= button_to 'Add to Cart', line_items_path(product_id: product) %>`
- then modify create method in line items controller to expect a product id as form parameter.
- in `app/controllers/line_items_controller.erb`:
{% highlight ruby %}
  def create
    @cart = current_cart
    product = Product.find(params[:product_id])
    #@line_item = LineItem.new(params[:line_item])

    #@line_item = @cart.line_items.build(product:product)
    # below should work, cuz The newest releases of Rails have made
    #mass-assign protection the default.  Without it you have a security 
    #risk.  

    @line_item = @cart.line_items.build
    @line_item.product = product



    respond_to do |format|
      if @line_item.save
        format.html { redirect_to @line_item.cart, notice: 'Line item was successfully created.' }
        format.json { render json: @line_item, status: :created, location: @line_item }
      else
        format.html { render action: "new" }
        format.json { render json: @line_item.errors, status: :unprocessable_entity }
      end
    end
  end
{% endhighlight %}

  
- updating test in `test/functional/line_items_controller.test.rb`
{% highlight ruby %}
  test "should create line_item" do
    assert_difference('LineItem.count') do
      post :create, product_id: products(:ruby).id
      #post :create, line_item: { cart_id: @line_item.cart_id, product_id: @line_item.product_id }
    end

    assert_redirected_to cart_path(assigns(:line_item).cart) # assigns gives us access to the instance variables that have been assigned by controller actions for use in views
  end
{% endhighlight %}

- Add view in `app/views/carts/show.html.erb`
{% highlight ruby %}
<% if notice %>
<p id="notice"><%= notice %></p>
<% end %>>

<h2>Your cart</h2>
<ul>
  <% @cart.line_items.each do |item| %>
    <li><%= item.product.title  %></li>

  <% end %>

</ul>


<%= link_to 'Edit', edit_cart_path(@cart) %> |
<%= link_to 'Back', carts_path %>
{% endhighlight %}

Play Time 9
-----------
- Add a session counter: 
  in `app/controllers/store_controller.rb` add `@view_counter = view_counter`
  in `app/views/store/index.html.erb` add: 
  {% highlight ruby %}
    <% if @view_counter > 5 %>
    <%= @view_counter  %>
  <% end %>

{% endhighlight %}
  in `app/controllers/application_controller.rb` add function:
{% highlight ruby %}
  # play time
    def view_counter
      if session[:counter].nil?
        session[:counter] = 0
      else
        session[:counter] += 1
      end
    end
    def clear_view_counter
      session[:counter] = 0
    end

{% endhighlight %}
 in `app/controllers/line_items_controller.rb` add `clear_view_counter` to function  `create`
    
Chapter 10 A Smarter Cart
=========================
10.1 Creating a Smarter Cart
----------------------------
- `rails generate migration add_quantity_to_line_items quantity:integer` add_XXX_to_TABLE and remove_XXX_from_TABLE
- then change the default value: `, default: 1`
- `rake db:migrate`
  
- then in `app/models/cart.rb`

{% highlight ruby %}
  def add_product(product_id)
    # starting find_by and ends with the name of a column, Dynamic Finders
    current_item = line_items.find_by_product_id(product_id)
    
    if current_item
      current_item.quantity += 1
    else
      current_item = line_items.build(product_id: product_id)
    end
    current_item
  end
{% endhighlight %}

- then in `app/controllers/line_items_controller.rb` invoke the method defined above
  ~~@line_item = @cart.line_items.build~~
  ~~@line_item.product = product~~
  `@line_item = @cart.add_product(product.id)`
- then in `app/views/carts/show.html.erb` `<%= item.quantity  %> &times;`
  
### Next we need to migrate the data
- `rails generate migration combine_items_in_cart` modify up and down 
{% highlight ruby %}
  def up
    # replace multiple items for a single product in a crat with a single item
    Cart.all.each do |cart|
      # count the number of each product in the cart
      sums = cart.line_items.group(:product_id).sum(:quantity)
      sums.each do |product_id, quantity|
        if quantity > 1
          # remove individual items
          cart.line_items.where(product_id: product_id).delete_all
          # replace with a single item
          cart.line_items.create(product_id: product_id, quantity: quantity)
        end
      end
    end
  end
{% endhighlight %}
- then `rake db:migrate`
- also implement the down method:
{% highlight ruby %}
  def down
    # split items with quantity > 1 into multiple items 
    LineItem.where("quantity>1").each do |line_item|
      # add individual items
      line_item.quantity.times do
        LineItem.create cart_id: line_item.cart_id,
          product_id: line_item.product_id, quantity: 1
      end
      # remove original item
      line_item.destroy
    end
  end
{% endhighlight %}
- Now we can rollback: `rake db:rollback`

10.2 Handling Errors
----------------------
- in `app/controllers/carts_controller.rb`
{% highlight ruby %}
  def show
    begin
      @cart = Cart.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      logger.error "Attempt to access invalid cart #{params[:id]}"
      redirect_to store_url, notice: 'Invalid cart'
    else
      respond_to do |format|
        format.html # show.html.erb
        format.json { render json: @cart }
      end
    end
  end
{% endhighlight %}
10.3 Finishing the Cart
-----------------------
To empty a cart, need to delete the session  
- in `app/views/carts/show.html.erb` add a button_to. Then modify the destroy method in `app/controllers/carts_controller.rb`

{% highlight ruby %}
  def destroy
    @cart = current_cart
    @cart.destroy
    session[:cart_id] = nil

    #@cart = Cart.find(params[:id])
    #@cart.destroy

    respond_to do |format|
      format.html { redirect_to store_url, notice: 'Your cart is currently empty' }
      format.json { head :no_content }
    end
  end
{% endhighlight %}

Battle of the Routes: product_path vs. product_url
--------------------------------------------------
### When using `product_url`, you'll get the full enchilada with protocol and domain name. That's the thing to use when you're doing `redirect_to`, cuz HTTP requies a fully qualified URL when doing 302 Redirect. Between domains: `product_url(domain: "example2.com", product: product)`
- update the corresponding test in `test/functional/carts_controller_test.rb`

{% highlight ruby %}
  test "should destroy cart" do
    assert_difference('Cart.count', -1) do
      session[:cart_id] = @cart.id
      delete :destroy, id: @cart
    end

    assert_redirected_to store_path
  end
{% endhighlight %}
- remove the flash messages that is automatically generateds in `app/controllers/line_items_controller.rb`
- modify the view: `<%= number_to_currency(@cart.total_price)  %>`, then in `app/models/line_item.rb`
{% highlight ruby %}
  def total_price
    product.price * quantity
  end
{% endhighlight %}
- in `app/models/cart.rb`
{% highlight ruby %}
  def total_price
    line_items.to_a.sum { |item| item.total_price }
  end
{% endhighlight %}
