---
title: 关于
date: 2022-10-29 21:08:27
---
<style>
.author-content {
	display:flex;
	flex-wrap:wrap;
	justify-content:space-between;
	width:100%;
	margin-top:1rem
}
.author-content-item {
	width:49%;
	border-radius:24px;
	background:var(--mr-card-bg);
	border:var(--style-border-always);
	box-shadow:var(--mr-shadow-border);
	position:relative;
	padding:1.5rem 2.5rem;
	overflow:hidden
}
#about-page .myInfoAndSayHello {
	display:flex;
	flex-direction:column;
	justify-content:center;
	color:var(--mr-white);
	background:linear-gradient(130deg,#3134f3cc 0,#00dbebcc 80%);
	background-size:200%;
	animation:gradient 15s ease infinite;
	width:59%
}
#about-page .myInfoAndSayHello .title1 {
	opacity:.8;
	line-height:1.3
}
#about-page .myInfoAndSayHello .title2 {
	font-size:36px;
	font-weight:700;
	line-height:1.1;
	margin:.5rem 0
}
#about-page .myInfoAndSayHello .title1 {
	opacity:.8;
	line-height:1.3
}
#about-page .myInfoAndSayHello .title3 {
	opacity:.8;
	line-height:2;
	font-size:10px
}
#about-page .inline-word {
	word-break:keep-all;
	white-space:nowrap
}
.author-content-item.aboutsiteTips {
	display:flex;
	justify-content:center;
	align-items:flex-start;
	flex-direction:column;
    background:linear-gradient(130deg,#3134f3cc 0,#00dbebcc 80%);
	width:39%
}
.author-content-item .author-content-item-tips {
	opacity:.8;
	font-size:.6rem;
	margin-bottom:.5rem
}
.aboutsiteTips h2 {
	margin-right:auto;
	font-size:36px!important;
	font-family:Helvetica;
	line-height:1.06;
	letter-spacing:-.02em;
	color:var(--font-color);
	margin-top:0!important
}
.aboutsiteTips .mask {
	height:36px;
	position:relative;
	overflow:hidden;
	margin-top:4px
}
.aboutsiteTips .mask span:nth-child(1) {
	background-image:linear-gradient(45deg,#0ecffe 50%,#07a6f1)
}
.aboutsiteTips .mask span {
	display:block;
	box-sizing:border-box;
	position:absolute;
	top:36px;
	padding-bottom:var(--offset);
	background-size:100% 100%;
	-webkit-background-clip:text;
	background-clip:text;
	-webkit-text-fill-color:transparent;
	background-repeat:no-repeat
}
.aboutsiteTips .mask span[data-up] {
	transform:translateY(-100%);
	transition:.5s transform ease-in-out
}
.aboutsiteTips .mask span:nth-child(2) {
	background-image:linear-gradient(45deg,#18e198 50%,#0ec15d)
}
.aboutsiteTips .mask span:nth-child(3) {
	background-image:linear-gradient(45deg,#8a7cfb 50%,#633e9c)
}
.aboutsiteTips .mask span:nth-child(4) {
	background-image:linear-gradient(45deg,#fa7671 50%,#f45f7f)
}
#about-page .about-statistic {
	min-height:380px;
	width:39%;
	background:url(/img/tongji.webp) no-repeat top;
	background-size:cover;
	color:rgb(255,253,253,.92);
	overflow:hidden
}
.author-content-item .card-content {
	position:absolute;
	width:100%;
	height:100%;
	top:0;
	left:0;
	z-index:2;
	display:flex;
	flex-direction:column;
	padding:1rem 2rem
}
#about-page .about-statisticc::after {
	box-shadow:0 -159px 173px 71px #0c1c2c inset;
	position:absolute;
	content:'';
	width:100%;
	height:100%;
	top:0;
	left:0
}
.author-content-item .author-content-item-tips {
	opacity:.8;
	font-size:.6rem;
	margin-bottom:.5rem
}
.author-content-item .card-content .author-content-item-title {
	margin-bottom:.5rem
}
.author-content-item .author-content-item-title {
	font-size:36px;
	font-weight:700;
	line-height:1
}
.author-content-item-changjian {
	font-size:16px;
	font-weight:600;
	line-height:1
}
#about-page #statisticc {
	font-size:16px;
	border-radius:15px;
	width:100%;
	color:var(--mr-white);
	display:flex;
	justify-content:space-between;
	flex-direction:row;
	flex-wrap:wrap;
	margin-top:1rem;
	margin-bottom:2rem
}
.post-tips {
	color:var(--mr-gray);
	font-size:14px;
	position:absolute;
	bottom:1rem;
	left:2rem
}
.author-content-item .card-content .banner-button-group {
	position:absolute;
	bottom:1.5rem;
	right:2rem
}
#about-page #statisticc div {
	display:flex;
	justify-content:space-between;
	flex-direction:column;
	width:50%;
	margin-bottom:.5rem
}
#about-page #statisticc div span:first-child {
	opacity:.8;
	font-size:.6rem
}
#about-page #statisticc div span:last-child {
	font-weight:700;
	font-size:34px;
	line-height:1;
	white-space:nowrap
}
.post-tips a {
	color:var(--mr-gray)!important;
	border:none!important
}
.author-content-item .card-content .banner-button-group .banner-button {
	height:40px;
	width:124px;
	border-radius:20px;
	justify-content:center;
	background:rgba(255,253,253,.9);
	color:var(--font-color)!important;
	text-decoration:none!important;
	display:flex;
	align-items:center;
	z-index:1;
	cursor:pointer
}
[data-theme=dark] .author-content-item .card-content .banner-button-group .banner-button {
	background:#1d1b26ec
}
.author-content-item .card-content .banner-button-group .banner-button:hover {
	text-decoration:none!important;
	color:rgba(255,253,253,.95)!important;
	background:linear-gradient(to bottom right,#0396ff,#abdcff)
}
.author-content-item .card-content .banner-button-group .banner-button i {
	margin-right:8px;
	font-size:1rem
}
.author-content-item-group.column.mapAndInfo {
	width:59%
}
.author-content-item-group.column {
	display:flex;
	flex-direction:column;
	width:49%;
	justify-content:space-between
}
.author-content-item.map {
	background:url(/img/map1.webp) no-repeat center!important;
	min-height:200px;
	max-height:400px;
	position:relative;
	overflow:hidden;
	margin-bottom:.5rem;
	height:60%;
	border:1px;
	background-size:100%;
	transition:1s ease-in-out
}
.author-content-item.single {
	width:100%;
    background:linear-gradient(to bottom right,#0396ff,#abdcff)
}
.author-content-item.map .map-title,.author-content-item.personalities .map-title {
	position:absolute;
	bottom:0;
	left:0;
	width:100%;
	background:var(--mr-maskbg);
	padding:.5rem 2rem;
	backdrop-filter:saturate(180%) blur(2px);
	-webkit-backdrop-filter:blur(20px);
	transition:1s ease-in-out;
	font-size:20px
}
.author-content-item.map .map-title b,.author-content-item.personalities .map-title b {
	color:var(--font-color);
	font-weight:bolder;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box
}
.author-content-item.selfInfo {
    display: flex;
    min-height: 100px;
    max-height: 500px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: -webkit-fill-available;
    height: 500px;
}
.author-content-item.selfInfo div {
	display:flex;
	flex-direction:column;
	margin:.5rem 2rem .5rem 0
}
.author-content-item.selfInfo .selfInfo-title {
	opacity:.8;
	font-size:.6rem;
	line-height:1;
	margin-bottom:8px
}
.author-content-item.selfInfo .selfInfo-content {
	font-weight:700;
	font-size:34px;
	line-height:1
}
.author-content-item.map:hover {
	background-size:120%;
	transition:3s ease-in-out;
	background-position-x:80%;
	background-position-y:36%
}
.author-content-item.map:hover .map-title,.author-content-item.personalities:hover .map-title {
	bottom:-100%
}
.author-content-item.personalities:hover {
	background-size:150%;
	transition:3s ease-in-out;
	background-position-x:60%;
	background-position-y:20%
}
.author-content-item.ability {
	background:linear-gradient(60deg,#0f0408d0 0,#043749d0 100%)
}
.author-content-item.maxim {
	font-size:36px;
	font-weight:700;
	line-height:1.1;
	display:flex;
	color:rgb(255,253,253,.95);
	background:url(https://api-image.mrzefr.cn) no-repeat;
	background-size:cover;
	align-items:flex-start;
	flex-direction:column;
	justify-content:center;
	width:53%
}
.author-content-item.maxim .maxim-title {
	display:flex;
	flex-direction:column
}
.author-content-item.personalities {
	background:url(https://api-image.mrzefr.cn) no-repeat;
	height:60%;
	background-size:100%;
	transition:1s ease-in-out;
	position:relative;
	min-height:200px;
	max-height:400px;
	border:1px;
	overflow:hidden;
	width:45%
}
@media screen and (max-width:1150px) {
	.author-content-item.personalities {
	background-size:cover
}
}
.author-content-item.map,.author-content-item.personalities {
	margin-bottom:0
}
.skill {
	margin:0 auto
}
.skill li {
	list-style:none;
	padding:1px 0;
	width:45%;
	float:left;
	margin-right:2.5%;
	margin-left:2.5%
}
.skill li p {
	display:inline-block;
	width:auto;
	min-width:26%;
	max-width:30%;
	color:rgba(255,253,253,.9);
	font-size:16px;
	padding:0;
	margin:0!important;
	transition-timing-function:cubic-bezier(.19,1,.22,1)
}
.skill li {
	list-style:none
}
.skill li .progress {
	display:inline-block;
	width:70%;
	height:3px;
	overflow:inherit;
	background-color:hsla(0,0%,100%,.2);
	vertical-align:middle
}
.skill li .progress div {
	background-color:#fff;
	height:3px;
	position:relative;
	animation:progressin 7s;
	-webkit-animation:progressin 7s;
	-ms-animation:progressin 7s;
	-moz-animation:progressin 7s
}
.skill li .progress span {
	font-size:12px;
	color:hsla(0,0%,100%,.4);
	opacity:0;
	position:relative;
	top:-5px;
	letter-spacing:.5em;
	transition:all .3s
}
.skill li .progress div:after {
	content:"";
	display:inline-block;
	position:absolute;
	right:-4px;
	top:-8px;
	width:0;
	height:0;
	border-left:4px solid transparent;
	border-right:4px solid transparent;
	border-top:3px solid #fff
}
.author-content-item .clear:after {
	content:"";
	display:block;
	height:0;
	visibility:hidden;
	clear:both
}
.skill li:hover .progress span {
	opacity:1;
	top:0
}
</style>
<img style="border-radius:50%;width:110px;height:auto" src="https://cdn.mrzefr.cn/Doraemon.ico" alt="我的头像" data-ll-status="loading" class="entered loading">
<center style="font-size:1.7rem;font-weight:1000;background-image:linear-gradient(to right,#2980b9, #6dd5fa, #ffffff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">MrZeFr</center>
<h1>Hello there👋</h1>
<span style="font-size:40px;color:var(--mr-theme)">这里是MrZeFr的小窝</span>
<div id="about-page">
                <div class="author-content">
                    <div class="author-content-item myInfoAndSayHello">
                        <div class="title1">这里~</div>
                        <div class="title2">网名 <span class="inline-word">MrZeFr</span></div>
                        <div class="title1">是一只还在求学路上的 <span class="inline-word">萌新、小学生、个人博主</span></div>
                    </div>
                    <div class="aboutsiteTips author-content-item">
                        <div class="author-content-item-tips">追求</div>
                        <h2>源于<br>乐趣·兴趣<span class="inline-word"></span>
                            <div class="mask"><span class="first-tips">学习@创作</span></div>
                        </h2>
                    </div>
                </div>
                <div class="author-content">
                    <div class="about-statistic author-content-item">
                        <div class="card-content">
                            <div class="author-content-item-tips">数据</div><span class="author-content-item-title">访问统计</span>
                            <div id="statisticc"></div>
                            <div class="post-tips">统计信息来自 <a href="https://v6.51.la/" target="_blank" rel="noopener nofollow">51la网站统计</a></div>
                            <div class="banner-button-group">
                            </div>
                        </div>
                    </div>
                    <div class="author-content-item-group column mapAndInfo">
                        <div class="author-content-item map single"><span class="map-title">我现在住在 <b>中国，广东省,中山市</b></span>
                        </div>
                        <div class="author-content-item selfInfo single">
                            <div><span class="selfInfo-title">生于</span><span class="selfInfo-content" style="color:#43a6c6">2011</span></div>
                            <div><span class="selfInfo-title">专业</span><span class="selfInfo-content" style="color:#c69043">计算机科学与信息技术</span></div>
                            <div><span class="selfInfo-title">现在职业</span><span class="selfInfo-content" style="color:#b04fe6">学习中的小学生</span></div>
                        </div>
                    </div>
                </div>
                <div class="author-content">
                    <div class="author-content-item maxim">
                        <div class="author-content-item-tips">个性签名</div><span class="maxim-title"><span style="opacity:.6;margin-bottom:8px">Hello,</span><span>World。</span></span>
                    </div>
                    <div class="author-content-item personalities">
                        <div class="author-content-item-tips">性格</div><span
                            class="author-content-item-title">探险家</span>
                        <div class="title2" style="color:#ac899c">ISFP-T</div>
                        <div class="image"><img class="entered exited" src="https://static.neris-assets.com/images/personality-types/headers/explorers_Adventurer_ISFP_personality_header.svg">
                        </div>
                        <div class="post-tips">在 <a href="https://www.16personalities.com/" target="_blank"
                                rel="noopener nofollow">16personalities</a> 了解更多关于 <a target="_blank"
                                rel="noopener external nofollow"
                                href="https://www.16personalities.com/ch/isfp-%E4%BA%BA%E6%A0%BC">探险家</a></div>
                    </div>
                <div class="author-content">
                    <div class="author-content-item ability single">
                            <div class="skill clear">
                                <li>
                                    <p>HTML/CSS</p>
                                    <div class="progress">
                                        <div style="width:25%;"></div>
                                        <span>制作网站的能力</span>
                                    </div>
                                </li>
                                <li>
                                    <p>JavaScript</p>
                                    <div class="progress">
                                        <div style="width:15%;"></div>
                                        <span>使用现代轮子程度的能力</span>
                                    </div>
                                </li>
                                <li>
                                    <p>C</p>
                                    <div class="progress">
                                        <div style="width:30%;"></div>
                                        <span>掌握一种较古老的能力</span>
                                    </div>
                                </li>
                                <li>
                                    <p>装X能力</p>
                                    <div class="progress">
                                        <div style="width:10%;">
                                        </div><span>装X最NB</span>
                                    </div>
                                </li>
                                <li>
                                    <p>PHP</p>
                                    <div class="progress">
                                        <div style="width:30%;"></div>
                                        <span>学习...（新建index.php...</span>
                                    </div>
                                </li>
                                <li>
                                    <p>搞事情</p>
                                    <div class="progress">
                                        <div style="width:70%;"></div>
                                        <span>让事情发生程度的能力</span>
                                    </div>
                                </li>
                                <li>
                                    <p>魔法</p>
                                    <div class="progress">
                                        <div style="width:30%;"></div>
                                        <span>和普通人相同程度的能力</span>
                                    </div>
                                </li>
                                <li>
                                    <p>干饭能力</p>
                                    <div class="progress">
                                        <div style="width:100%;"></div>
                                        <span>溢出~</span>
                                    </div>
                                </li>
                            </div>
                    </div>
                <div class="author-content">
                    <div class="create-site-post author-content-item single">
                        <div class="author-content-item-tips">心路历程</div><span class="author-content-item-title">为什么建站？</span><br><span class="author-content-item-title" style="color:red">Why build a site</span>
                        <p>以前尝试过搭自己的网站，我的技术非常低级,还需要人帮忙,在此感谢<a href="https://blog.dearxuan.com" style="color:red;">Dearxuan</a>,现在我可以自己开始建站了!</p>
                        <p>如今建此站，一方面是记录自己学习的知识与技术，另一方面，是在这是一把双刃剑的互联网上，留下一点点的足迹。当然，作为一个信息和电脑专业的人来说，也应该有一个博客。<strong><span id="jinrishici-sentence"></span></strong>，此博客也会成为回忆之所。
                        </p><p>这是我所做的，可以骄傲感到快乐的事情。</p>
                        <p></p>
                        <p>这是一个个人博客，乘风破浪,必战胜一切!</p>
                    </div>
                </div>
            </div>
<script>
fetch('https://v6-widget.51.la/v6/Je019XpQZttoCqwA/quote.js').then(res => res.text()).then((data) => {
    let title = ['最近活跃访客:', '今日人数:', '今日访问:', '昨日人数:', '昨日访问:', '本月访问:', '总访问量:']
    let num = data.match(/(?<=<\/span><span>).*?(?=<\/span><\/p>)/g)
    let s = document.querySelector('#statisticc')
    // 自定义不显示哪个或者显示哪个，如下为不显示 最近活跃访客 和 总访问量
    for (let i = 0; i < num.length; i++) {
        if (i == 0) continue;
        s.innerHTML += '<div><span>' + title[i] + '</span><span class="num">' + num[i] + '</span></div>'
    }
});
</script>
<script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>