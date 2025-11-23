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
{% asset_img mercater.png 蒙卡托投影 %}
脚本如下：
```
#!/bin/bash
gmt begin mercater png
gmt coast -R90/140/10/50 -JM6i -Bxa10f5 -Bya10f5 -Dl -W0p -A5000 -Ggray
gmt end
```

- 米勒投影
  米勒投影把整个地球搞的挺方，比其他的扁的好看一点儿。

{% asset_img miller.png 米勒投影 %}
```
#!/bin/bash
gmt begin miller png
gmt coast -R-180/180/-90/90 -JJ6i -Ggray -Swhite -Dl -Bxa90 -Bya45 -A30000 -W0p 
gmt end
```
- 圆柱等积投影
  可以画矩形扁扁的地球
{% asset_img cyl1.png %}
```
#!/bin/bash
gmt begin cyl1 png
gmt coast -R-180/180/-90/90 -JY0/0/6i -Ggray -Swhite -Dl -Bxa90 -Bya45 -A30000 -W0p 
gmt end
```

- 圆柱等距投影
  也是扁扁的地球
{% asset_img cyl2.png %}
```
#!/bin/bash
gmt begin cyl2 png
gmt coast -R-180/180/-90/90 -JQ6i -Ggray -Swhite -Dl -Bxa90 -Bya45 -A30000 -W0p 
gmt end
```

- 方位等距投影
  一般以某个点为中心的画法，例如接收函数台站和事件分布。
{% asset_img azi1.png %}
```
#!/bin/bash
gmt begin azi1 png
gmt coast -Rg -JE0/0/6i -Ggray -Swhite -Dl -Bxa90 -Bya45 -A30000 -W0p 
gmt end
```
