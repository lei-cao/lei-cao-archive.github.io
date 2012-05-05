---
layout: post
title: "Web development Notes"
description: "Some notes about web development"
category: notes
tags: ['web develop', 'notes']
---
{% include JB/setup %}

To connect to a web server
==========================
- `telnet sixpoint.me 80`
- `GET / HTTP/1.1`
- `Host: sixpoint.me`
  
- `200 ok`
- `300 forward`
- `400 Not found` Caused by User-Agent GET the bad URL
- `500 Server error` Caused by the server
  
Response
========
- `HTTP/1.1 200 OK`
- `Date: Thu. 19 Apr 2012 12:38:51 GMT`
- `Server: Apache`
- `X-Pingback: http://sixpoint.me/xmlrpc.php`
- `X-Powered-By: W3 Total Cache/0.9.2.4`
- `Vary: User-Agent.Accept-Encoding`
- `Transfer-Encoding: chunked`
- `Content-Type: text/html: charset=UTF-8`
  
  
- `#fragment` don't send to server

Request
=======
Difference between GET and POST  

GET:
----
- Parameters in URL
- Used for fetching documents
- maximum URL length
- **OK to cache**
- **Shouldn't change the server**

POST:
-----
- Parameters in the body
- Userd for updating data
- No max length
- **Not OK to cache**
- **OK to change the server**

After posting Limitation
------------------------
- Can't store Success link
- Can't reload the page without annoying message
So use redirect  

Form
====
checkbox
--------
- checked:on, SO check it is 'on' otherwise if off
- unchecked: Doesn't appear on the URL
radio
-----
- checked:on if 'value' is None
- Use as a group: same 'name' with the different 'value'
select
------
- if option no 'value' setted: the text will be submit


python
======
`import cgi`
`cgi.escape(s, quote = True)`
