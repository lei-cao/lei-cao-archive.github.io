---
layout: post
title: "Sublime notes"
description: ""
category: notse 
tags: ['sublime', 'notes']
---
{% include JB/setup %}

Shortcut
========
- `alt+1,alt2,alt+3` Bind focus group key to
- `Ctrl+Shift+1,2,3` Move to group
- `Super+Alt+1,2,3` Change group 
- `Super+r` Go to symble
- `Super+Shift+t` Reopen closed file
- `Super+/, Super+Alt+/` Toggle comment
- `Super+d` same as Shift+8
- `Ctrl+m == Shift+5`
Plugin installed:
=================
- Alignment `Super+Ctrl+a`
- Zencoding `Tab`
- Coda theme
- Stack Overflow Plugin
- Pretty JSON `Super+Ctrl+j`
- Alternative_autocompletion `Ctrl+p, Ctrl+n`
- ColorPicker `Super+Shift+c`
- Sublimelint Syntax checking `Ctrl+Super+e, Shift+Ctrl+Super+e`
- `git clone git://github.com/netpro2k/SublimeBlockCursor`

Install Package control
=======================
- `Ctrl-` to call on the python shell  

`import urllib2,os; pf='Package Control.sublime-package'; ipp=sublime.installed_packages_path(); os.makedirs(ipp) if not os.path.exists(ipp) else None; urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler())); open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read()); print 'Please restart Sublime Text to finish installation'`

`Super+Shift+p` to call out the command line to install plugin

Enable vintage
==============
- `"ignored_packages": [],`
- `"vintage_start_in_command_mode": true,`
- `"vintage_ctrl_keys": true`
