---
layout: post
title: "Rock Jekyll with Bootstrap on github"
description: "Star playing with Jekyll on Github or Heroku!"
category: [guide]
tags: [intor, jekyll, tutorial, ruby]
---
{% include JB/setup %}

Jekyll + Bootstrap + Github/Heroku 的免费 Blog 环境

##资源列表
- [Jekyll-Bootstrap](http://jekyllbootstrap.com/): 整合 Bootstrap 和 Jekyll
- [Jekyll-with-Heroku](http://www.theleagueofpaul.com/jekyll-windows): 使用 Heroku 做 Jekyll 的免费主机
- [downmarker](https://bitbucket.org/wcoenen/downmarker/downloads): Windows 下 WYSIWYG 的免费 Markdown 编辑工具
- [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html) Jekyll 入门
- [从 Wordpress 迁移到 Jekyll 系列](http://vitobotta.com/migrating-from-wordpress-to-jekyll-part-one-why-I-gave-up-on-wordpress/) 从 Wordpress 迁移到 Jekyll
- [Jekll on windoes](http://chxt6896.github.com/blog/2012/03/15/jekyll-in-windows.html)
- [Jekll 本地调试之若干问题](http://chxt6896.github.com/blog/2012/02/13/blog-jekyll-native.html)  
  *Problem1 "When a Liquid exception is thrown by a post, the error-handling cannot call self.name"  
  Problem2 "Liquid error: incompatible character encodings: UTF-8 and IBM437"   
  Problem3 卡在"Running the classifier…this could take a while"，无法即时调试  
  Problem4 "Liquid error: undefined method 'join' for ……"    
  Problem5 "Liquid error: No such file or directory – pygmentize"
  
##基本命令
- `$ rake theme:switch name="the-program"`
- `$ rake post title="Hello World"`
- `$ rake page name="about.md"`
- `$ rake page name="pages/about.md"` Create a nested page
- `$ rake page name="pages/about"` Create a nice url page with index.html