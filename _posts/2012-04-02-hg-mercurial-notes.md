---
layout: post
title: "hg Mercurial notes"
description: ""
category: [notes]
tags: [hg]
---
{% include JB/setup %}
- `hg init`
- `hg add`
- `hg commit` `hg com -m "commit"`
- `hg log` 
  *`hg log -l 3`
  `hg log -P`
- `hg revert -all` Revert your directory back to the last commit
- `hg status` = `hg st`
  *`M` means "Modified"
  `!` means "missing/disappeared"
  `?` means "unknown, know anything about it yet"
  `R` means "Removed"
- `hg diff` What's changed with a file since the last commit.
  *`hg diff -r 0:1 a.txt`
- `hg cat` To print any old version of a file. 
  *`hg cat -r 0 a.txt`
- `hg update` Go backwards or forwards
  *`hg update -r 0` `hg up`

- `hg push` From my repository into the central repository
- `push -f` **NEVER USE THIS**
- `hg outgoing` Print the changes that are waiting for push `hg out`?
- `hg incoming` Print the changes that are waiting for pull
- `hg pull`
- `hg merge` Take two heads and combine them together

- `hg rollback` Undoes one commit
- `hg clone name anotherName
- `hg paths`
- `hg parent`
- `hg heads`
