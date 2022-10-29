const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "MrZeFr"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

// 注册成功后要立即缓存的资源列表
// 具体缓存列表在gulpfile.js中配置，见下文
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST,{
    directoryIndex: null
});

// 清空过期缓存
workbox.precaching.cleanupOutdatedCaches();

// 图片资源（可选，不需要就注释掉）
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 谷歌字体（可选，不需要就注释掉）
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();
//MrZeFr-SW
const CACHE_NAME = 'MrZeFr-Cache';
const cachelist = [
    '/offline.html'
];
self.log = { // output
    s: (message) => {
        console.log(`%c[SUCCESS]%c ${message}`, 'color:white;background:green;', '')
    },
    w: (message) => {
        console.warn(`%c[WARNING]%c ${message}`, 'color:brown;background:yellow;', '')
    },
    i: (message) => {
        console.log(`%c[INFO]%c ${message}`, 'color:white;background:blue;', '')
    },
    e: (message) => {
        console.error(`%c[ERROR]%c ${message}`, 'color:white;background:red;', '')
    },
    d: (message) => {
        console.log(`%c[DEBUG]%c ${message}`, 'color:white;background:black;', '')
    }
}

self.db = {
    read: (key) => {
        return new Promise((resolve, reject) => {
            caches.match(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`)).then(function (res) {
                res.text().then(text => resolve(text))
            }).catch(() => {
                resolve(null)
            })
        })
    },
    read_arrayBuffer: (key) => {
        return new Promise((resolve, reject) => {
            caches.match(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`)).then(function (res) {
                res.arrayBuffer().then(aB => resolve(aB))
            }).catch(() => {
                resolve(null)
            })
        })
    },
    write: (key, value) => {
        return new Promise((resolve, reject) => {
            caches.open(CACHE_NAME).then(function (cache) {
                cache.put(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`), new Response(value));
                resolve()
            }).catch(() => {
                reject()
            })
        })
    }
}

self.addEventListener('install', async function (installEvent) { // open cache
    self.skipWaiting();
    installEvent.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                log.s('MrZeFr-SW Register Success!')
                return cache.addAll(cachelist);
            })
    );
});
const npm = async (req) => {
    const domain = req.url.split('/')[2];
    if (domain.match("cdn.jsdelivr.net")) {
        return fetch(req.url.replace("https://cdn.jsdelivr.net", "https://cdn1.tianli0.top"));
    }
    else {
        return fetch(req)
    }
}
const set_blog_config = (version) => { // blog settings
    self.packagename = "blog-mrzefr"
    self.blogversion = version
    self.blog = {
        local: 0,
        plus: [
            "blog.mrzefr.cn",
            "vercel.mrzefr.cn",
            "cloudflare.mrzefr.cn",
            "netlify.mrzefr.cn"
        ],
        npmmirror: [
            `https://jsd.mrzefr.cn/npm/${packagename}@${blogversion}`,
            `https://unpkg.com/${packagename}@${blogversion}`,
            `https://cdn.jsdelivr.net/npm/${packagename}@${blogversion}`,
            `https://unpkg.zhimg.com/${packagename}@${blogversion}`,
            `https://cdn1.tianli0.top/npm/${packagename}@${blogversion}`,
        ]
    };
}
self.addEventListener('fetch', async event => {
    try {
        event.respondWith(handle(event.request))
    } catch (msg) {
        event.respondWith(handleerr(event.request, msg))
    }
});
const handleerr = async (req, msg) => {
    return new Response(`<h1>MrZeFr-SW ERROR!</h1>
    <b>${msg}</b>`, { headers: { "content-type": "text/html; charset=utf-8" } })
}
let cdn = {//镜像列表
    "gh": {
        jsdelivr: {
            "url": "https://cdn.jsdelivr.net/gh"
        },
        jsdelivr_fastly: {
            "url": "https://fastly.jsdelivr.net/gh"
        },
        jsdelivr_gcore: {
            "url": "https://gcore.jsdelivr.net/gh"
        },
        tianli: {
            "url": "https://cdn1.tianli0.top/gh"
        }
    },
    "combine": {
        jsdelivr: {
            "url": "https://cdn.jsdelivr.net/combine"
        },
        jsdelivr_fastly: {
            "url": "https://fastly.jsdelivr.net/combine"
        },
        jsdelivr_gcore: {
            "url": "https://gcore.jsdelivr.net/combine"
        },
        tianli: {
            "url": "https://cdn1.tianli0.top/combine"
        }
    },
    "npm": {
        arcitcgn: {
            "url": "https://cdn.afdelivr.top"
        },
        zhimg: {
            "url": "https://unpkg.zhimg.com"
        },
        tianli: {
            "url": "https://cdn1.tianli0.top/npm"
        }
    }
}
const cache_url_list = [
    /(http:\/\/|https:\/\/)jsd\.mrzefr\.cn/g,
    /(http:\/\/|https:\/\/)cdn\.staticfile\.org/g,
    /(http:\/\/|https:\/\/)cdn\.mrzefr\.cn/g
]

const blog_default_version = '1.2.3'

const handle = async (req) => {
    set_blog_config(await db.read('blog_version') || blog_default_version) // update version
    const urlStr = req.url
    const urlObj = new URL(urlStr);
    const urlPath = urlObj.pathname
    const pathname = urlObj.href.substr(urlObj.origin.length);
    const domain = urlObj.hostname;
    if (pathname.match(/\/sw\.js/g)) { return fetch(req) }
    if (pathname.match(/\/package\.json/g)) return new Response(null, { status: 404 })
    let urls = [] // ICDN
    for (let i in cdn) {
        for (let j in cdn[i]) {
            if (domain == cdn[i][j].url.split('https://')[1].split('/')[0] && urlStr.match(cdn[i][j].url)) {
                urls = []
                for (let k in cdn[i]) {
                    urls.push(urlStr.replace(cdn[i][j].url, cdn[i][k].url))
                }
                if (urlStr.indexOf('@latest/') > -1) {
                    return lfetch(urls, urlStr)
                } else {
                    return caches.match(req).then(function (resp) {
                        return resp || lfetch(urls, urlStr).then(function (res) {
                            return caches.open(CACHE_NAME).then(function (cache) {
                                cache.put(req, res.clone());
                                return res;
                            });
                        });
                    })
                }
            }
        }
    }
    if (domain === "blog.mrzefr.cn") {
        if (urlStr.match(/\/MrZeFr\-cgi/g)) {
            return new Response('MrZeFr-SW Install Success', { status: 200 })
        }
        if (blog.local) { return fetch(req) } // localhost
        // ALL-SITE-NPM
        setTimeout(async () => {
            await set_newest_blogver()
        }, 30 * 1000);
        urls = []
        for (let k in blog.plus) {
            urls.push(`https://${blog.plus[k]}` + fullpath(pathname))
        }
        for (let k in blog.npmmirror) {
            urls.push(blog.npmmirror[k] + fullpath(pathname))
        }
        const generate_blog_html = async (res) => {
            return new Response(await res.arrayBuffer(), {
                headers: {
                    'Content-Type': 'text/html;charset=utf-8',
                    'X-Powered-By': 'MrZeFr',
                    'X-MrZeFr-Server': 'MrZeFr-Server',
                    'X-MrZeFr-CDN': 'Kangle'
                },
                status: res.status,
                statusText: res.statusText
            })
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                caches.match(req).then(function (resp) {
                    if (!!resp) {
                        log.s(`Cache Hited! | Origin:${urlStr}`)
                        setTimeout(() => {
                            resolve(resp)
                        }, 200);
                        setTimeout(() => {
                            lfetch(urls, urlStr).then(async function (res) {
                                return caches.open(CACHE_NAME).then(async function (cache) {
                                    cache.delete(req);
                                    log.s(`Cache Updated! | Origin:${urlStr}`)
                                    if (fullpath(pathname).match(/\.html$/g)) {
                                        const NewRes = await generate_blog_html(res)
                                        cache.put(req, NewRes.clone());
                                        resolve(NewRes)
                                    } else {
                                        cache.put(req, res.clone());
                                        resolve(res)
                                    }
                                });
                            });
                        }, 0);
                    } else {
                        log.w(`Cache Missed! | Origin:${urlStr}`)
                        setTimeout(() => {
                            lfetch(urls, urlStr).then(async function (res) {
                                return caches.open(CACHE_NAME).then(async function (cache) {
                                    if (fullpath(pathname).match(/\.html$/g)) {
                                        const NewRes = await generate_blog_html(res)
                                        cache.put(req, NewRes.clone());
                                        resolve(NewRes)
                                    } else {
                                        cache.put(req, res.clone());
                                        resolve(res)
                                    }
                                });
                            }).catch(function (err) {
                                resolve(caches.match(new Request('/offline.html')))
                            })
                        }, 0);
                        setTimeout(() => {
                            resolve(caches.match(new Request('/offline.html')))
                        }, 5000);
                    }
                })
            }, 0);
        })
    }
    for (var i in cache_url_list) {
        if (urlStr.match(cache_url_list[i])) {
            if (!await mrzefrdb.read('cache')) return fetch(req)
            return caches.match(req).then(function (resp) {
                return resp || fetch(req).then(function (res) {
                    return caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(req, res.clone());
                        return res;
                    });
                });
            })
        }
    }
    return fetch(req)
}

const lfetch = async (urls, url) => {
    log.i(`LFetch Handled! | Mirrors Count:${urls.length} | Origin: ${url}`)
    const t1 = new Date().getTime()
    if (!await mrzefrdb.read('mirror')) {
        return fetch(url)
    }
    if (!Promise.any) {
        Promise.any = function (promises) {
            return new Promise((resolve, reject) => {
                promises = Array.isArray(promises) ? promises : []
                let len = promises.length
                let errs = []
                if (len === 0) return reject(new AggregateError('All promises were rejected'))
                promises.forEach((promise) => {
                    promise.then(value => {
                        resolve(value)
                    }, err => {
                        len--
                        errs.push(err)
                        if (len === 0) {
                            reject(new AggregateError(errs))
                        }
                    })
                })
            })
        }
    }
    let controller = new AbortController();
    const PauseProgress = async (res) => {
        return new Response(await (res).arrayBuffer(), { status: res.status, headers: res.headers });
    };
    let results = Promise.any(urls.map(async urls => {
        return new Promise(async (resolve, reject) => {
            fetch(urls, {
                signal: controller.signal
            })
                .then(PauseProgress)
                .then(async res => {
                    const resn = res.clone()
                    if (resn.status == 200) {
                        controller.abort();
                        log.s(`LFetch Success! | Time: ${new Date().getTime() - t1}ms | Origin: ${url} `)
                        resolve(resn)
                    } else {
                        reject(null)
                    }
                }).catch((e) => {
                    if (String(e).match('The user aborted a request') || String(e).match('Failed to fetch')) {
                        console.log()
                    } else if (String(e).match('been blocked by CORS policy')) {
                        log.e(`LFetch Blocked by CORS policy! | Origin: ${url}`)
                    }
                    else {
                        log.e(`LFetch Error! | Origin: ${url} | Resean: ${e}`)
                    }
                    reject(null)
                })
        }
        )
    }
    )).then(res => { return res }).catch(() => { return null })
    return results
}

const set_newest_blogver = async () => {
    self.packagename = "blog-mrzefr"
    const mirror = [
        `https://registry.npmmirror.com/${packagename}/latest`,
        `https://registry.npmjs.org/${packagename}/latest`,
        `https://mirrors.cloud.tencent.com/npm/${packagename}/latest`
    ]
    log.i(`Searching For The Newest Version...`)
    return lfetch(mirror, mirror[0])
        .then(res => res.json())
        .then(async res => {
            if (!res.version) throw ('No Version Found!')

            const gVer = choose_the_newest_version(res.version, await db.read('blog_version') || blog_default_version)
            log.d(`Newest Version: ${res.version} ; Local Version: ${await db.read('blog_version')} | Update answer: ${gVer}`)
            log.s(`Update Blog Version To ${gVer}`);
            await db.write('blog_version', gVer)
            set_blog_config(gVer)
        })
        .catch(e => {
            log.e(`Get Blog Newest Version Erorr!Reseon:${e}`);
            set_blog_config(blog_default_version)
        })
}

const choose_the_newest_version = (g1, g2) => {
    const spliter = (v) => {
        const fpart = v.split('.')[0]
        return [parseInt(fpart), v.replace(fpart + '.', '')]
    }
    const compare_npmversion = (v1, v2) => {
        const [n1, s1] = spliter(v1)
        const [n2, s2] = spliter(v2)
        log.d(`n1:${n1} s1:${s1} n2:${n2} s2:${s2}`)
        if (n1 > n2) {
            return g1
        } else if (n1 < n2) {
            return g2
        } else if (!s1.match(/\./) && !s2.match(/\./)) {
            if (parseInt(s1) > parseInt(s2)) return g1
            else return g2
        } else {
            return compare_npmversion(s1, s2)
        }
    }
    return compare_npmversion(g1, g2)
}

setInterval(async () => {
    log.i('Trying to fetch the newest version...')
    await set_newest_blogver()
}, 120 * 1000);
setTimeout(async () => {
    await set_newest_blogver()
}, 1000);

const mrzefrdb = {
    read: async (key) => {
        try {
            const mrzefr_config = JSON.parse(await db.read('mrzefr_config') || '{}')
            return typeof mrzefr_config[key] === 'boolean' ? mrzefr_config[key] : (key == "globalcompute" ? false : true)
        } catch (e) {
            return true
        }
    },
    change: async (key) => {
        const mrzefr_config = JSON.parse(await db.read('mrzefr_config') || '{}')
        if (typeof mrzefr_config[key] != 'boolean') mrzefr_config[key] = true
        mrzefr_config[key] = !mrzefr_config[key]
        await db.write('mrzefr_config', JSON.stringify(mrzefr_config))
    }
}

const fullpath = (path) => {
    path = path.split('?')[0].split('#')[0]
    if (path.match(/\/$/)) {
        path += 'index'
    }
    if (!path.match(/\.[a-zA-Z]+$/)) {
        path += '.html'
    }
    return path
}
