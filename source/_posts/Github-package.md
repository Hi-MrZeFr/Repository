---
title: Github上的Hexo源码添加插件的方法

author: MrZeFr

tags:
  - github
  - 方法
  - 部署

categories:
  - 部署

abbrlink: github-package

date: 2022/6/8 19:40
---

本文章通过语雀进行编写!

小伙伴们是不是都有一种烦恼,将源码部署上 github 不知道怎么添加插件,相信这篇文章会帮助你!

## 第一种方法

部署上 GitHub 你自然要自动部署的啦,所以我们可以往配置文件里添加!

进入你的博客源码找到/.github/**workflows/"**文件夹下的一个.yml 文件就是配置文件!

**点击进入配置文件**

![捕获.PNG](https://cdn.nlark.com/yuque/0/2022/png/22899852/1654688638665-ee3bc654-598a-46cb-9a41-a7a88e800fe1.png#clientId=u06327078-6ddf-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=ude89e98d&margin=%5Bobject%20Object%5D&name=%E6%8D%95%E8%8E%B7.PNG&originHeight=945&originWidth=1118&originalType=binary&ratio=1&rotation=0&showTitle=false&size=39645&status=done&style=none&taskId=ud9f57833-ed25-47fd-b4d9-111aa31ca7d&title=#alt=%E6%8D%95%E8%8E%B7.PNG)

随便找一个地方添加上那个插件的安装 npm 代码即可

## 第二种方法

在 github 上找到 package.json 打开他

在 dependencies 在他的下面添加

"插件名字": "^插件版本",

肯定有人会好奇版本呢？

其实在 github 的搜索仓库中搜索那个插件的名字搜索到那个插件

![捕获.PNG](https://cdn.nlark.com/yuque/0/2022/png/22899852/1654691743111-d6879a6b-8c81-4373-8304-04d56335ccd3.png#clientId=u06327078-6ddf-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=uf08c905a&margin=%5Bobject%20Object%5D&name=%E6%8D%95%E8%8E%B7.PNG&originHeight=964&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=40250&status=done&style=none&taskId=u5aeaed2f-0d33-476b-a431-12b8ad31a52&title=#alt=%E6%8D%95%E8%8E%B7.PNG)

点击开

![捕获.PNG](https://cdn.nlark.com/yuque/0/2022/png/22899852/1654691817430-59578f24-c714-4bbd-b64c-fed8678f887c.png#clientId=u06327078-6ddf-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=ua86d3e12&margin=%5Bobject%20Object%5D&name=%E6%8D%95%E8%8E%B7.PNG&originHeight=963&originWidth=1911&originalType=binary&ratio=1&rotation=0&showTitle=false&size=91521&status=done&style=none&taskId=ua6e3c7e9-8780-40f5-8d8a-a3aa6a1a2a1&title=#alt=%E6%8D%95%E8%8E%B7.PNG)

点击插件的 package.json

找到这个

![捕获.PNG](https://cdn.nlark.com/yuque/0/2022/png/22899852/1654691892889-f94f9f89-9043-4d1a-89b8-63be3ce72ace.png#clientId=u06327078-6ddf-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=uca5fa4b4&margin=%5Bobject%20Object%5D&name=%E6%8D%95%E8%8E%B7.PNG&originHeight=967&originWidth=1920&originalType=binary&ratio=1&rotation=0&showTitle=false&size=67373&status=done&style=none&taskId=u001d8bb3-2e4e-4d7a-9404-31dfa3a3d12&title=#alt=%E6%8D%95%E8%8E%B7.PNG)

把那个我圈画的比如 1.0.6 直接填上去就可以了!

---

你可以去试试成不成功两种方法!
