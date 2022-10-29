---
title: 蝴蝶主题添加侧边栏随机笑话
date: 2022/9/14
tags:
  - 蝴蝶主题
  - 笑话
  - 随机
categories:
  - 随机笑话
abbrlink: c6afe9f0
---
此文章讲述如何给你的蝴蝶主题添加一个侧边栏的随机笑话,昨天差点没给我笑死,该项目模仿于土味情话!

## 开始添加

### 添加JS

[BlogRoot]/themes/butterfly/source/js

添加一个card_joke.js,并在里面添加:

```js
function joke() {
    let html = "";
    for (let i = 0; i < 2; i++) {
        fetch("https://api.vvhan.com/api/joke").then((data) = >data.text()).then((data) = >{
            html += "<li>" + data + "</li>";
            document.querySelector("#joke-container").innerHTML = html;
        }).
        catch(function(error) {
            console.log(error);
        });
    }
}
joke();
```
### 添加CSS
在[BlogRoot]/themes/butterfly/source/css/
新建: card_joke.css 并写入:
```css
/* 随机笑话 */
#joke-container li {
  list-style-type: none;
  position: relative;
  padding-left: 26px;
}
#joke-container li:before {
  top: 8px;
  left: 2px;
  padding: 5px;
  border: 3px solid var(--mr-theme);
  border-radius: 10px;
  content: "";
  position: absolute;
}
```
引入:
```yml
inject:
  head:
  - <link rel="stylesheet" href="/css/card_joke.css"  media="defer" onload="this.media='all'">
  bottom:
  - ...
```
### 添加PUG
在[BlogRoot]/themes/butterfly/includes/widget 新建card_joke.pug

写入:

```PUG
.card-widget.card-joke
  .card-content
    .item-headline
      i.fa-solid.fa-face-smile-wink
      span= _p('随机笑话')
    #joke-container
script(data-pjax src=("/js/card_joke.js"))
```

并且在index.pug引入:

```PUG
#aside-content.aside-content
  //- post
  if is_post()
    - const tocStyle = page.toc_style_simple
    - const tocStyleVal = tocStyle === true || tocStyle === false ? tocStyle : theme.toc.style_simple
    if showToc && tocStyleVal
      .sticky_layout
        include ./card_post_toc.pug
    else
      !=partial('includes/widget/card_author', {}, {cache: true})
      !=partial('includes/widget/card_announcement', {}, {cache: true})
      !=partial('includes/widget/card_top_self', {}, {cache: true})
      .sticky_layout
        if showToc
          include ./card_post_toc.pug
        !=partial('includes/widget/card_recent_post', {}, {cache: true})
        !=partial('includes/widget/card_ad', {}, {cache: true})
  else
    //- page
    !=partial('includes/widget/card_author', {}, {cache: true})
    !=partial('includes/widget/card_announcement', {}, {cache: true})
    !=partial('includes/widget/card_top_self', {}, {cache: true})

    .sticky_layout
      if showToc
        include ./card_post_toc.pug
      !=partial('includes/widget/card_recent_post', {}, {cache: true})
      !=partial('includes/widget/card_ad', {}, {cache: true})
      !=partial('includes/widget/card_newest_comment', {}, {cache: true})
   +  !=partial('includes/widget/card_joke', {}, {cache: true})
      !=partial('includes/widget/card_weibo', {}, {cache: true})
      !=partial('includes/widget/card_categories', {}, {cache: true})
      !=partial('includes/widget/card_tags', {}, {cache: true})
      !=partial('includes/widget/card_archives', {}, {cache: true})
      !=partial('includes/widget/card_webinfo', {}, {cache: true})
      !=partial('includes/widget/card_weather', {}, {cache: true})
      !=partial('includes/widget/card_bottom_self', {}, {cache: true})
```
## 实时更换笑话
把PUG变成这样:
```PUG
.card-widget.card-joke
  .card-content
    .item-headline
      i.fa-solid.fa-face-smile-wink
      span= _p('随机笑话')
    #joke-container
    <a href="javascript:;" rel="noopener external nofollow" style="text-align:center" onclick="joke()">刷新随机笑话</a>
script(data-pjax src=("/js/card_joke.js"))
```

就恭喜你拥有了无敌好玩的笑话了,<del title="你知道的太多了" data-toggle="tooltip">可别把自己笑死</del>


## TODO

<div class="checkbox checked"><input type="checkbox" checked="checked">
            <p>支持随机笑话</p>
            </div>

<div class="checkbox checked"><input type="checkbox" checked="checked">
            <p>支持实时更换笑话</p>
            </div>
