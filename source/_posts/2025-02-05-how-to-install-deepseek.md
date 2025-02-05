---
title: 如何在自己电脑中部署deepseek
date: 2025-02-05 16:00:13
tags:
  - Linux
tags:
  - Linux
---
&emsp;&emsp;deepseek很火，我也来凑热闹。之前的所谓LLM好像都本地部署都怎么关注，但似乎deepseek好像很方便。
<!--less-->
&emsp;&emsp;首先是在windows下下载[ollama](https://ollama.com/download)并安装。然后在cmd下运行:
```bash
ollama run deepseek-r1:7b
```
其实安装时输入deepseek-r1默认就是7b，大小有4.7G。当然还有其他的版本，自己去搜索并根据自己的GPU大小进行安装。
安装完之后出现了

>>>

就可以对话了。下次要调用就在cmd中重新运行命令:
```
ollama run deepseek-r1
```

&emsp;&emsp;在Linux下面则这样安装ollama，命令:
```
curl -fsSL https://ollama.com/install.sh | sh
```
这个命令是从github下载ollama进行安装。得保证你能连接到github。接下来安装deepseek:
```
ollama run deepseek-r1:7b
```
deepseek可以和zotero结合进行本地的文献阅读。
这个时候就要安装awsome GPT，位置在[zotero中文社区](https://zotero-chinese.com/plugins/)。配置可以参考[这里](https://zhuanlan.zhihu.com/p/20850142386)。我尝试了一下，没有搞定。有机会再整。
