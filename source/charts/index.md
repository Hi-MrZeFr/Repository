---
title: 网站统计
date: 2022/9/15 08:00:00
---
<h1>51LA统计信息</h1>
<script>
fetch('https://v6-widget.51.la/v6/Je019XpQZttoCqwA/quote.js').then(res => res.text()).then((data) => {
    let title = ['最近活跃访客:', '今日人数:', '今日访问:', '昨日人数:', '昨日访问:', '本月访问:', '总访问量:']
    let num = data.match(/(?<=<\/span><span>).*?(?=<\/span><\/p>)/g)
    let s = document.querySelector('#statistic')
    // 自定义不显示哪个或者显示哪个，如下为不显示 最近活跃访客 和 总访问量
    for (let i = 0; i < num.length; i++) {
        if (i == 0) continue;
        s.innerHTML += '<div><span>' + title[i] + '</span><span class="num">' + num[i] + '</span></div>'
    }
});
</script>
<style>
  #statistic {
	font-size:18px;
	padding:20px 10px;
	border-radius:12px;
	width:100%;
	color:var(--font-color);
	border:2px solid var(--mr-theme);
	max-width:710px;
	margin:0 auto
}
div#statistic {
	display:flex;
	flex-wrap:wrap;
	justify-content:space-between
}
div#statistic a {
	text-decoration:none
}
#statistic  div {
	display:inline-block
}
#statistic div {
	margin:0 12px
}
#statistic div span {
	font-size:14px;
	line-height:1.3;
	display:block
}
#statistic div .num {
	letter-spacing:1px;
	font-weight:700;
	font-size:2rem;
	margin-bottom:.2rem
}
</style>  
<div id="statistic"></div>
<h1>文章统计信息</h1>
<script src="https://cdn1.tianli0.top/npm/echarts@4.9.0/dist/echarts.min.js"></script>
<div id="posts-chart" data-start="2021-08" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
<div id="tags-chart" data-length="20" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
<div id="categories-chart" data-parent="true" style="border-radius: 8px; height: 300px; padding: 10px;"></div>

