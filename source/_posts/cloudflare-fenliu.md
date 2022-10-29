---
title: 域名在Cloudflare的正确分流方式
author: MrZeFr
tags:
  - 分流
  - cloudflare
categories:
  - 分流
abbrlink: 9a76fedb
date: 2022-08-27 18:16:00
---

小伙伴们域名是否部署在cloudflare,如果部署在的话希望看一下这一篇文章,如果不是的话那就不需要了!
示范: https://cdnvercel.mrzefr.tk
如果您在不同区域,可能会访问的页面不一样!
本人已更换[**天御云cdn**](https://coldcdn.net/),在此感谢~!

## 申请一个免费域名

开始之前我们需要申请一个免费的域名
申请域名请看:
{% link Vercel+Freenom 搭建博客!, /posts/Vercel-Freenom/, https://cdn.mrzefr.cn/Doraemon.ico %}
或者
{% link eu.org免费域名白嫖教程以及避坑, https://yisous.xyz/posts/aedd05c3/, https://cdn1.tianli0.top/gh/LYXOfficial/LYXOfficial.github.io/img/favicon.jpg %}

## 将免费域名接入DNSPOD

域名接入非常简单
首先进入Dnspod官网: https://www.dnspod.cn
![](\images\mrzefr-1.png)
登录,并且到我的域名那里添加你自己申请的免费域名(由于博主还没有申请到免费域名,还需要等几天估计!)
![](\images\mrzefr-0.png)

## 开始分流

如果你的域名已经申请完毕,那么恭喜你可以开始分流域名了!
进入免费域名的解析,添加解析,接下来是vercel的示列:

| 名称          | 解析                                  |
|-------------|-------------------------------------|
| cdn        | 默认: cname.vercel-dns.com                  |
| cdn       | 电信: 104.199.217.228                  |
| cdn        | 联通: 18.178.194.147                 |
| cdn        | 移动: 18.162.37.140                  |

域名解析添加完之后,就只剩百分之90了!

## 向cloudflare添加解析

进入cloudflare官网: https://www.cloudflare.com
登录,进入主域名解析,修改解析比如www: cname-china.vercel-dns.com就可以修改成www: cdn.mrzefr.eu.org了!

## 惊喜(可选)

如果你看不惯vercel的默认错误404,这个惊喜就是这样准备的!
首先fork我的仓库: https://github.com/Hi-MrZeFr/CDN-index
再把仓库里的index.html简单修改修改,之后到vercel部署,并绑定上你的cdn域名,即可!

