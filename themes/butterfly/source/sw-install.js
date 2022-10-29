(async () => { //async异步加载
    const $ = document.querySelector.bind(document); //创建函数
    if ('serviceWorker' in navigator) {  //判断是否支持ServiceWorker
        if (Number(window.localStorage.getItem('MrZeFr_SW_Install')) < 1) { //判断
            log({Subtitle: '当前检测到您的浏览器没有安装MrZeFr-SW,开始启动安装程序!',Style: 'Warning'}); //提示没有安装ServiceWorker
            //console.warn('当前检测到您的浏览器没有安装MrZeFr-SW,开始启动安装程序!')
            window.localStorage.setItem('MrZeFr_SW_Install', 1) //安装ServiceWorker前自动向localStorage存入数据
            window.stop() //暂停所有资源加载
            document.body.innerHTML = await (await fetch('https://cdn.mrzefr.cn/HTML/SW.html')).text() //将Body全部替换为安装页面
        }
        navigator.serviceWorker.register(`/sw.js?time=` + new Date()) //注册ServiceWorker
            .then(async () => {
                if (Number(window.localStorage.getItem('MrZeFr_SW_Install')) < 2) { //判断ServiceWorker是否安装
                    setTimeout(() => {
                        window.localStorage.setItem('MrZeFr_SW_Install', 2) //存入localStorage
                        log({Subtitle: 'MrZeFr-SW已经安装完毕,将在3秒后自动刷新!',Style: 'Success'}); //控制台Log提示
                        //console.log('MrZeFr-SW已经安装完毕,将在3秒后自动刷新!')
                        $('#info').innerText = '安装成功,刷新激活!'; //安装完毕提示
                        window.location.reload() //安装完毕,执行重载
                    }, 300)
                }
            })
            .catch(err => //安装错误提示
                log({Subtitle: 'MrZeFr-SW安装失败！原因: ' + err, Style: 'Error'})) //提示安装失败
                //console.error('MrZeFr-SW安装失败！原因:' + err)
 } else {
    log({Subtitle: '您的浏览器不支持ServiceWorker!', Style: 'Error'}) //提示浏览器不支持ServiceWorker
    //console.error('您的浏览器不支持ServiceWorker!')
 }
})(); 
