---
title: 震源机制解反演
tags:
  - seismology
categories:
  - work
abbrlink: a35fcaa9
date: 2025-11-01 09:53:23
---
&emsp;&emsp;要想反演震源机制解怎么办？
<!--less-->
&emsp;&emsp;以下是一些收集来的方法程序。
- [W phase](https://github.com/GeoscienceAustralia/ga-wphase) (Whole mantle phase/ Whispering phase)是一种长周期(~100–1000 s)、传播路径覆盖整个地球的复合波。它不是单一相位（如P、S、Rayleigh），而是由穿过地幔的模式混合体波构成。利用它可以快速获得地震矩张量以及震源深度。
- [gCAP](https://www.eas.slu.edu/People/LZhu/home.html)/[CAPjoint](https://github.com/bqpseismology/CAPjoint)/[gCAPjoint](https://github.com/bqpseismology/gCAPjoint)/[CAPsf](https://pubs.geoscienceworld.org/ssa/srl/article-abstract/91/3/1820/583391/Inversion-of-Source-Mechanisms-for-Single-Force?redirectedFrom=fulltext). 是Zhulupei老师开发的cut and paste方法以及在其基础上发展的近远震结合等方法。
- [HASH](https://www.usgs.gov/node/279393)利用P波初动来获得DC机制解。为什么叫“HASH”？看看作者就明白了(Hardebeck and Shearer, 2002)，有时学者还是挺自恋的。
- [focimt](https://www.induced.pl/software/focimt)MATLAB脚本的震源矩张量时间域反演程序([Kwiatek et al., 2016](https://pubs.geoscienceworld.org/ssa/srl/article-abstract/87/4/964/314136/HybridMT-A-MATLAB-Shell-Environment-Package-for?redirectedFrom=fulltext))。
- [CPS](https://rbherrmann.github.io/ComputerProgramsSeismology/index.html)，这个程序包很全，包含很多地震学正反演程序([Herrmann, 2013](https://pubs.geoscienceworld.org/ssa/srl/article-abstract/84/6/1081/315307/Computer-Programs-in-Seismology-An-Evolving-Tool?redirectedFrom=fulltext))，震源机制解反演见[说明](https://www.eas.slu.edu/eqc/ComputerProgramsSeismology/CPS/CPS330/cps330s.pdf)。
- [ISOLA](http://seismo.geology.upatras.gr/isola/index.html)矩张量和多点震源模型的Matlab-Fortran 图形用户界面([Zahradník and Sokos, 2018](https://www.semanticscholar.org/paper/ISOLA-Code-for-Multiple-Point-Source-Zahradn%C3%ADk-Sokos/954606454bd9162e52eb6644b90d31f6133f9e0e))。
- [Volpis](http://www.spice-rtn.org/library/software/volpis.html)频率域矩张量和单力源同时反演[Cesca and Dahm, 2008](https://www.sciencedirect.com/science/article/abs/pii/S0098300407001525)。
- [lsforce](https://www.usgs.gov/software/lsforce)单力源时间函数反演([Toney and Allstadt, 2021](https://pubs.geoscienceworld.org/ssa/srl/article-abstract/92/4/2610/596477/lsforce-A-Python-Based-Single-Force-Seismic?redirectedFrom=fulltext))，并估计“滑坡体”移动轨迹。
