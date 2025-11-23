---
title: gmt的投影方式
tags:
  - gmt
categories:
  - gmt
abbrlink: '1247724'
date: 2025-11-23 15:24:13
---
&emsp;&emsp;每次画图都东找西找，多麻烦。别找了看这里就好了。
<!--less-->
&emsp;&emsp;其实参见[GMT文档](https://docs.generic-mapping-tools.org/6.0/cookbook/map_projections.html)就可以了。不过，一般我们画图不需要每个参数都知道吧。下面就列出几个典型的投影方式和例子，免得以后到处找。
- 蒙卡托投影
  首先是Mercator投影，最开始学的时候就是用这个。GMT主页说它可能是最著名的。它是等角圆柱形投影。
![](mercater.png)
脚本如下：
```
#!/bin/bash
gmt begin mercater png
gmt coast -R90/140/10/50 -JM6i -Bxa10f5 -Bya10f5 -Dl -W0p -A5000 -Ggray
gmt end
```
```
