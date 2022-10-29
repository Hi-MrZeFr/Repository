---
title: Alist美化教程
tags:
  - Alist
  - 美化
categories:
  - Alist
abbrlink: cdd8169f
date: 2022-07-08 22:05:26
---

## 安装教程

请看这篇文章: {% link # 免费部署 Alist 目录列表程序, https://www.zxma.top/posts/438365eb/, https://www.zxma.top/img/favicon.png %}

## 前言

当安装完Alist网盘时,或许还可以简单美化一下哦!
接下来我将分享我对Alist网盘的美化。
简单的水一篇文章🤗
本文只微调,不对源文件进行修改!
当然可能会有一些错误,欢迎评论指正!
示例: https://pan.mrzefr.cn

## 设置背景

在设置中我们找到'自定义body'
在里面填入:

```
<style>
body {
background: url(您的图片地址)
}
</style>
```

即可

## 在主页添加描述

由于Alist无法新建文件,您需要去网盘里手动添加,这里以onedrive为例。
打开: [Microsoft Office](https://www.office.com/)
登录一下你的账号进入onedrive的文件管理,新建一个叫:README.md的文件在这个文件写一些内容,即可!

## 添加live2d

引入:

```
<script async src="https://npm.elemecdn.com/hexo-mrzefr-filebed@1.2.4/Live2d/autoload.js"></script>
```

即可

## 在特殊的日子纪念特殊的人

网站自动变黑代码:

```
<script async src="https://cdn.mrzefr.cn/JS/Blog-JS/grayscale.js"></script>
```

## 未完待续







