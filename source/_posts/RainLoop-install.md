---
title: RainLoop安装日志(Nginx篇)

author: MrZeFr

tags:
  - 免费
  - 腾讯
  - Nginx
  - 邮箱
  - RainLoop

categories:
  - RainLoop

abbrlink: 5a8afa14

date: 2022-03-10 20:10:00
---

### 起源

有一天，我在腾讯云看到了 RainLoop。

我试用了一下腾讯云上的，发现还不错。

功能挺多的

### 开始安装

首先你要有一台服务器。

然后下载 RainLoop 的 php 文件: [https://www.rainloop.net/repository/webmail/rainloop-community-latest.zip](https://www.rainloop.net/repository/webmail/rainloop-community-latest.zip)

然后添加域名

上传到你的服务器网站目录。

安装完毕了。

### 设置

首先你得先访问: https:// 你的域名 /?admin

默认用户名和密码是：用户名: admin 密码: 12345

之后进入后台管理，我们还需要把这些弹窗变消失。

在 Nginx 的配置文件里找到:

```
location ~ ^/(.user.ini|.htaccess|.git|.svn|.project|LICENSE|README.md) { return 404; }
```

把他全部替换成:

```
location ^~ /data {
deny all;
}
```

之后回到后台管理，在左边点击域名这里已经帮你搞好了。

如果你是自定义域名的话，就点击添加域名。

我这里以腾讯企业邮箱进行示例
点击确定。

再按上面的添加别名：输入你想设置的别名，和选择你刚刚添加的邮箱。

![](/2022/3/26/RainLoop/RainLoop-name.PNG#crop=0&crop=0&crop=1&crop=1&id=Le5bB&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=#alt=)

之后回到主界面进行登录

用户名是你设置的” 别名”

密码是你腾讯企业邮箱的密码

### 最后

最后按照你的思路去弄配置！
