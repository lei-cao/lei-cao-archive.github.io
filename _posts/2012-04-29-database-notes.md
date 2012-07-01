---
layout: post
title: "database notes"
description: ""
category: notes
tags: ["notes", "database"]
---
{% include JB/setup %}
  
Redis
=====
[Start to use redis](http://antirez.com/post/take-advantage-of-redis-adding-it-to-your-stack.html)    
[Redis to the rescur](http://www.wooga.com/2011/04/redis-to-the-rescue-why-wooga-replaced-mysql-with-redis/)    
[Redis 数据库设计](http://blog.codingnow.com/2011/11/dev_note_2.html)    
[Redis only](http://kashif.razzaqui.com/redis-only-please-replacing-your-sql-store-wi)    
[Who's using](http://www.quora.com/Who-is-using-Redis-in-a-production-environment)    
[Design noSql database](https://code.google.com/p/servicestack/wiki/DesigningNoSqlDatabase)    
[Redis, from the ground up](http://blog.mjrusso.com/2010/10/17/redis-from-the-ground-up.html#heading_toc_j_45)  
[Redis, nosql world](http://degizmo.com/2010/03/23/redis-relations-in-a-nosql-world/)  
[Redis tutorial](http://simonwillison.net/static/2010/redis-tutorial/)  
[Redis slide](http://www.slideshare.net/tag/redis/2)  
[Redis cookbook](http://rediscookbook.org/index.html)    
[Youporn High scalability](http://highscalability.com/blog/2012/4/2/youporn-targeting-200-million-views-a-day-and-beyond.html)  
[Auto complete with Redis](http://antirez.com/post/autocomplete-with-redis.html)  
[Auto complete](http://charlesleifer.com/blog/autocompletion-for-django-models-using-solr-redis-or-sql/)
[Autocomplete in python](http://jedp.posterous.com/auto-complete-with-redis-and-python)
[Redis memory usage analatics](http://dev.lethain.com/notes-on-redis-memory-usage/)  
[Redis memory use tirck](http://nosql.mypopescu.com/post/1010844204/redis-memory-usage)  
[Autocomplete](http://patshaughnessy.net/2011/11/29/two-ways-of-using-redis-to-build-a-nosql-autocomplete-search-index)  
[A case study](http://www.tobez.org/presentations/2011-NPW-redis.html#%2837%29)  

- Google appengine datastore  
- Dynamo (a paper worth to read)  
- NoSQL: Mongo, couch  
  
JOINS
=====
Not use very offen in web development
  
Indexes
=======
In postgresql:
--------------
- h =# explain analyze select name from hotels where id = 5152353;
- create index idx on table(id)
- drop index idx
- hash table for speed
- tree for sort
- **index on score Unit 3 - 22**

  
Scaling Databases
=================
- Too much load: 
-- replicate it. Master ----> slaves. Master write, Slave read
--- downsides: dosen't increase write speed. replication lag
- Too much data:
-- shard (Google Datastore)
--- downsides: complex queries. (range query)
--- joins become difficult

ACID
====
- Atomicity - All parts of a transaction succeed or fail together
- Consistency - The database will always be consistent 
- Isolation - No transaction can interfere with another's
- Durability - Once the transaction is comitted, it won't be lost 
