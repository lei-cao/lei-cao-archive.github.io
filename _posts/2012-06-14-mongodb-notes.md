---
layout: post
title: "Mongodb notes"
description: ""
category: notse 
tags: ['Mongo', 'database', 'notes']
---
{% include JB/setup %}

Shortcut
========
- `use mydb` Switch db, won't immediately create the database.
- MongoDB has databases, collections, indexes. `db.systems.collections` `db.system.indexes`

Inserting Data
--------------
- `j = { name: "mongo" };
- `t = { x: 3 };
- `db.things.save(j);`
- `db.things.save(t);`
- `db.things.find();`
** We did not predefind the collection  
** The documents we store can have different fields. In practice, usually the same structure within collections.  
** Upon being inserted, objects are assigned an object ID `_id`  
  
- `for (var i = 1; i <= 20; i++) db.things.save({x: 4, j: i});`
** `has more` use `it` to show more  
** technically, find() returns a cursor object. In the cases above, we haven't assigned that cursor to a variable. So, the shell automatically iterates over the cursor.  

Accessing Data
--------------
- `var cursor = db.things.find();`
- `while (cursor.hasNext()) printjson(cursor.next());`
- `db.things.find().forEach(printjson);`
- `printjson(cursor[4]);` Note: all values up to the highest accessed (cursor[4] above) are loaded into RAM. So cursors should be used as an iterator with any query which returns a large number of elements.
- `var arr = db.things.find().toArray();` (Not offered by all drivers)
** mongoDB cursors are not snapshots - operations performed by you or other users on the collection being queried between the first and last call to next() of your cursor may or may not be returned by the cursor. Use explicit locking to perform a snapshotted query.  

Specifying What the Query Returns
---------------------------------
- `db.things.find({name: "mongo"}).forEach(printjson);`
- `db.things.find({name: "mongo"}, {j: true});` `_id` always returns

findOne() - Syntactic Sugar
---------------------------
