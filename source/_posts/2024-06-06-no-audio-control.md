---
title: Fedora下没有音量控制了
categories:
  - Linux
tags:
  - linux
abbrlink: d79b32e9
date: 2024-06-06 09:00:12
---
之前安装todesk没有搞定，总是连不上，于是又把它卸载了。卸载的时候把pulseaudio.x86_64也给卸载了。然后发现没有音量控制条了。然后又给安装回来
```
sudo dnf install pulseaudio
```
结果mplayer也出问题了。播放视频的时候卡住，其中一个问题是：
```
do_connect: could not connect to socket
```
于是在~/.mplayer/config中加入：
```
lirc=no
```
然后还是播放不了，出现问题：
```
X11 error: BadMatch (invalid parameter attributes)
Failed to open VDPAU backend libvdpau_nvidia.so: cannot open shared object file: No such file or directory
```
然后目前还没搞定。
