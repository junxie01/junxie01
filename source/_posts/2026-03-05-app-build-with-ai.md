---
title: 用AI做app
categories:
  - ai
tags:
  - app
abbrlink: e8cc4678
date: 2026-03-05 22:09:50
---
&emsp;&emsp;一直都想做app来着，但恐于学习成本，一直没有做。现在AI太厉害了，终于可以低成本做app了。
<!--less-->
&emsp;&emsp;这是我的第一个app，命名为[seisamuse](https://github.com/junxie01/seismic-app)，也就是和我的网站同名的app。
&emsp;&emsp;我用的是字节跳动发布的AI原生编程工具[TRAE](https://trae.zhike.in/)。下载安装好后，如下图：
![trae](./1.png)
界面左边可以看到文件目录内容，右下角是AI对话框，你可以在这里和AI对话，请他构建你想要的程序。
我的app有三个界面:
![地震分布](2.png)
![期刊论文](3.png)
![学者信息](4.png)
用命令
```
npx expo run:android --variant release
```
就可以生成apk文件，位置在seismic-app/andriod/app/build/outputs/apk/app-release.apk 
下载到安卓手机就可以安装了。
图中的地震分布是用npx expo start, 在expo go中展示的，我安装到安卓手机上始终无法显示地图。怎么整都不行，有空再整了。
