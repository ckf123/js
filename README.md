---
title:vscode使用;
tags:vscode README;
notebook:js
---
# 比较运算符的特性
## 1.== 和===两者区别:

-  ==:会有隐式转换  会把"123" ==123会把左边的字符串转换成数字返回true 
-  ===:判断数据类型  "123"===123  不会做数据类型转换  返回false

## 2.null 和undefined比较
       null === undefined  false
       null == undefined true  仅仅等于对方而不等于其他任何的值(非严格相等)
    null 在 > <>= <=  比较中null会转换为0
       null>0
       null<=0
       null==0        在相等判断中 只会与null相等
    underfined > <>= <=  不会与任何值相等
        underfined >0  false  在进行> <>= <=转换为NAN NaN 不与任何值相等
        underfined<=0  false  
        underfined==0  false  在相等判断中 只会与null相等
