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
- `curl -I www.google.com`
  
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
- `Set-cookie: user_id=123` value limited 4k  
- `Set-cookie: last-seen=Dec 25 2012`  
  
- `#fragment` don't send to server

Request
=======
Difference between GET and POST  
`Cookie: user_id:123;last-seen=Dec 25 2012`

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

Cookie
------
- `Domain=www.sixpoint.me; Path=/; Expires= Tue, 1 Jan 2012` Cookie Domins
- If no `Expires`, it's session cookies. Deleted when you close browser
- Can count visit numbers
- How to cheat: `document.cookie="visits=100001"`
- Hashing: H(x) -> y, y is fixed length bit string
-- crc32 - checksums, fast
-- md5 - fast, not secure
-- sha1 - secure-ish
-- sha256 - pretty good
- `Set-cookie: visits=5,[hash]` then `if H(5) == hash`

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

Scaling
=======
- AKAMAI
- Static never hit Haproxy
- Haproxy
- NGINX
- Amazon s3
- If don't do joins, scaling is easier
- Landisle
- Precomputed cache
- Memcache/Memcached
- Cassandre
- Thing DB

