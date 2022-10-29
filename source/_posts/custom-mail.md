---
title: 自定义邮箱(腾讯企业邮箱)免费只需一个域名

author: MrZeFr

tags:
  - 免费
  - 腾讯
  - 企业
  - 微信邮箱

categories:
  - 邮箱

abbrlink: f3f0c5b0

date: 2021-12-02 15:11:00
---

### 前言

你平常使用是不是(QQ 邮箱)等等

但是你想拥有一个自定义邮箱

但是只需要一个域名就可以了

下面讲解步骤

### 注册企业微信

官网: [https://work.weixin.qq.com](https://work.weixin.qq.com)

注册地址: [https://work.weixin.qq.com/wework_admin/register_wx?from=myhome](https://work.weixin.qq.com/wework_admin/register_wx?from=myhome)

输入相关信息

![](/2021/12/02/%E8%87%AA%E5%AE%9A%E4%B9%89%E9%82%AE%E7%AE%B1-%E8%85%BE%E8%AE%AF%E4%BC%81%E4%B8%9A%E9%82%AE%E7%AE%B1-%E5%85%8D%E8%B4%B9%E5%8F%AA%E9%9C%80%E4%B8%80%E4%B8%AA%E5%9F%9F/MrZeFr-1.png#crop=0&crop=0&crop=1&crop=1&id=nzBZU&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=#alt=)

进入后台之后

### 配置通讯录(可选,不选的话:你的真实姓名可能会被暴露!)

进入后台

![](/2021/12/02/%E8%87%AA%E5%AE%9A%E4%B9%89%E9%82%AE%E7%AE%B1-%E8%85%BE%E8%AE%AF%E4%BC%81%E4%B8%9A%E9%82%AE%E7%AE%B1-%E5%85%8D%E8%B4%B9%E5%8F%AA%E9%9C%80%E4%B8%80%E4%B8%AA%E5%9F%9F/MrZeFr-2.png#crop=0&crop=0&crop=1&crop=1&id=P49T7&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=#alt=)

之后双击你那个名字

点击上面的编辑

在最顶上那块有你的名字改成你的网名

应该还有你名字的英文同样修改

即可

### 启用腾讯企业邮箱

进入企业微信后台

到应用管理

点击企业邮箱

点击启用企业邮箱

点击下面的"腾讯企业邮管理后台"

![](/2021/12/02/%E8%87%AA%E5%AE%9A%E4%B9%89%E9%82%AE%E7%AE%B1-%E8%85%BE%E8%AE%AF%E4%BC%81%E4%B8%9A%E9%82%AE%E7%AE%B1-%E5%85%8D%E8%B4%B9%E5%8F%AA%E9%9C%80%E4%B8%80%E4%B8%AA%E5%9F%9F/MrZeFr-3.png#crop=0&crop=0&crop=1&crop=1&id=UDDdY&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=#alt=)

然后应该是添加你自己域名

之后给你 MX 解析记录

我们去域名解析去解析这个 MX 记录

比如我的: cloudflare

新建一个 MX 记录

类型选择"MX"

名称(如果不能空,就输入"@")

邮件服务器是

---

mxbiz1.qq.com 优先级=5

mxbiz2.qq.com 优先级=10

---

添加完成后

我么选稍后添加

等解析记录生效后就有通知啦

这时进入"腾讯企业邮官网"

[https://exmail.qq.com](https://exmail.qq.com)

点右上角登录

拿手机微信扫一下

不要进入管理员,进入你那个邮箱

比如我的: [mrzefr ](mailto:mrzefr@mrzefr.cn)[@mrzefr.cn ](/mrzefr.cn)

之后剩下的自己配置啦!

### 后言

此教程可能没有这么完整

有问题请留言!
