---
layout: post
title: "Design of Computer Programs Notes"
description: ""
category: 
tags: []
---
{% include JB/setup %}

- `max([1,2,3,])` `max([1,2,-3], key=abs)`

Test straight:
--------------
return (max(ranks)-min(ranks)==4) and len(set(ranks)) == 5

Test flush:
-----------
suits = [s for r,s in hand]
    return len(set(suits)) == 1
Test kind:
----------
counts = [ranks.count(r) for r in ranks]

Dimensions Of Programming
-------------------------
Correctness efficiency features elegance  
The best is the enemy of the good  
DRY: Don't repeat yourself  

