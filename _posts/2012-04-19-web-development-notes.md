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



