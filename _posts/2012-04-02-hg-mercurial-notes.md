---
layout: post
title: "hg Mercurial notes"
description: " "
category: notes
tags: [hg]
---
{% include JB/setup %}  

[25-tips-for-intermediate-mercurial-users.html](http://antonym.org/2010/04/25-tips-for-intermediate-mercurial-users.html)   

{% highlight bash %}
[ui]  
username = charles <lexo.charles@gmail.com>  
[auth]  
bb1.prefix = http://192.168.1.107/hg/repos/  
bb1.username = charles  
bb1.password = charles

[paths]
goog = http://code.google.com/p/golang/
exp = https://bitbucket.org/gavinb/golang-exp/

# hg incoming http://code.google.com/p/golang/
# hg incoming goog

# hg outgoing https://bitbucket.org/gavinb/golang-exp/
# hg outgoing exp

[extensions]
hgext.extdiff =
graphlog=
pager=
color=
fetch=
record=
bookmarks=

[extdiff]
cmd.diffmerge = /usr/bin/diffmerge

[pager]
pager = LESS='FSRX' less
ignore = version, help, update, serve, record


[merge-tools]
diffmerge.executable = /Applications/DiffMerge.app/Contents/MacOS/DiffMerge
diffmerge.args = -merge -result=$output -t1="Local Version" -t2=$output -t3="Other Version" -caption=$output $local $base $other
diffmerge.binary = False
diffmerge.symlinks = False
diffmerge.gui = True


{% endhighlight %}  

- `hg init`
- `hg add`
- `hg addremove` Add all new files and remove all locally missing fiels
- `hg remove --after` `hg remove -A`  `hg rm 'glob:**.DS_S*'`
- `hg commit` `hg com -m "commit"`
- `hg log`  
  *`hg log -l 3`  
  `hg log -P`  
- `hg identify -n`
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
- `hg clone name anotherName`
- `hg paths`
- `hg parent`
- `hg heads`


Intermediate
============
- `hg resolve -m main.c` To mark a conflicted file as resolved
- `hg resolve -l` To check the status of files involved in the merge
To close a branch
-----------------
- `hg up -C badbranch`
- `hg commit --close-branch -m 'close badbranch, this approach never worked'`
- `hg up -C default` # switch back to "good" branch
- `hg branches`
- `hg branches --active`

Tagging
-------
- `hg tags`
- `hg tag version_1_3` To add a regular tag to the current revision
- `hg tag -r 4a93 version_1_2_1` To associate a tag with a specific revision, you use the -r option:
- `hg tag -l experimental` Local tag
- `hg merge -P gui_changes_experimental` merge preview
- `hg diff gui_changes_experimental` diff branches
- `hg push -r gui_changes_experimental` push a single branch (default is push all commits)
  
- If you are in the middle of a set of changes, and you need to perform an operation on the repository without first committing all of your local changes, you can "stash" them away and set them aside using the shelve extension. This puts your current set of changes into a temporary storage area, from which you can restore them later.  
- `hg shelve` To save your changes
- `hg unshelve` 
  
- `hg record`
- `hg glog`
