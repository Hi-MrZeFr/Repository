---
title: 哔哔
date: 2022-08-12 15:53:46
aside: false
---
<style>
  #shuoshuo-tip {
  padding: 6px 20px;
  position: relative;
  color: #fff;
  background: #20a0ff;
  background: -webkit-gradient(linear, left top, right top, from(#20a0ff), to(#20b8ff));
  background: -webkit-linear-gradient(left, #20a0ff, #20b8ff);
  background: linear-gradient(90deg, #20a0ff, #20b8ff);
  padding: 6px 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0 3px 5px rgba(32,160,255,0.5);
  box-shadow: 0 3px 5px rgba(32,160,255,0.5);
  margin-bottom: 20px;
}
#shuoshuo-tip:before {
  background: var(--mr-theme);
  background: -webkit-gradient(linear, left bottom, left top, from(#0092ff), to(#20b8ff));
  background: -webkit-linear-gradient(bottom, #0092ff, #20b8ff);
  background: linear-gradient(0deg, #0092ff, #20b8ff);
  border-radius: 50%;
  color: #fff;
  content: "\f129";
  font-size: 12px;
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 24.5px;
  left: -12px;
  top: -12px;
  -webkit-box-shadow: 0 0 0 2.5px #f7f8f9;
  box-shadow: 0 0 0 2.5px #f7f8f9;
  font-weight: 600;
  font-family: "Font Awesome 6 Free";
  text-align: center;
}
</style> 
<script>
  fetch("https://bberapi.mrzefr.cn/api/ispeak?author=62f5fff6e7ba4737eb1b591f")
.then(res => res.json()).then(json => {
    var tongji = json.data.total;
    if (document.querySelector('#shuoshuo-tip')){
        document.getElementById("shuoshuo-tip").innerText='说说统计: '+tongji;
    }
  })
</script>
{% btn 'https://biubiu.mrzefr.cn',发送短文,fa-solid fa-message,outline blue larger %}
{% btn 'https://bber.mrzefr.cn',管理短文,fa-solid fa-user-pen,outline blue larger %}
<div id="shuoshuo-tip">哔哔统计加载中...</div>
<div id="tip" style="text-align:center;">哔哔加载中</div>
<div id="bber"></div>
<link
  rel="stylesheet"
  href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdn1.tianli0.top/npm/ispeak@4.4.0/style.css"
/>
<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script src="https://cdn.staticfile.org/marked/2.0.0/marked.min.js"></script>
<script data-pjax src="https://cdn1.tianli0.top/npm/ispeak@4.4.0/ispeak.umd.js"></script>
<script>
  if (ispeak) {
    ispeak
      .init({
        el: '#bber',
        api: 'https://bberapi.mrzefr.cn/',
        author: '62f5fff6e7ba4737eb1b591f',
        pageSize: 10,
        loading_img: 'https://cdn.mrzefr.cn/image/GIF/loading-bber.gif',
        hideComment: true
      })
      .then(function () {
        document.getElementById('tip').style.display = 'none'
      })
  } else {
    document.getElementById('tip').innerHTML = '哔哔依赖加载失败！'
  }
</script>
