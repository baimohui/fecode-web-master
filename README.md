# fecode-web 

- nuxt文档 https://zh.nuxtjs.org/guide/

### 环境及启动

* 安装 node 
* npm install
* npm run dev

### 框架能力

* 支持vue 2.0
* 异步加载页面组件
* ...

### 项目结构

```
├── README.md                   项目开发说明文档  
├── nuxt.config.js              用于组织Nuxt.js 应用的个性化配置
├── package-lock.json
├── package.json
├── src
│   ├── app.html
│   ├── assets                  资源目录
│   │   └── image                   图片
│   │       
│   ├── components              组件目录
│   │   └── common                 通用组件
│   │       ├── footer.vue            头部
│   │       └── header.vue            底部
│   ├── layouts                 布局目录
│   │   ├── default.vue
│   │   ├── error.vue
│   │   └── test.vue
│   ├── locales
│   ├── middleware
│   ├── pages                    项目开发页面目录, 以业务为模块, 模块内部平级, 文件名与模块名必须一致
│   │   ├── index.vue                应用入口页面
│   │   └── product
│   │       └── list.vue
│   ├── plugins                  插件目录
│   │   ├── ctx-inject.js           上下文插件
│   │   ├── global.js
│   │   └── vue-inject.js           vue插件
│   ├── static
│   │   ├── base.css
│   │   ├── base.js
│   │   ├── common.js
│   │   ├── favicon.ico
│   │   ├── script
│   │   │   └── lib
│   │   │       ├── iscroll
│   │   │       ├── jquery.min.js
│   │   │       ├── leoTextAnimate.js
│   │   │       ├── mock.min.js
│   │   │       ├── moment.min.js
│   │   │       ├── num.js
│   │   │       ├── odoo.js
│   │   │       ├── pdf.js
│   │   │       ├── photo
│   │   │       ├── swiper
│   │   │       ├── underscore.min.js
│   │   │       ├── vue
│   │   │       ├── weui
│   │   │       └── zepto.min.js
│   │   └── xui.js
│   └── store
│       └── index.js
└── webpack.config.js
```

### 项目开发基本用法

#### 新建页面

- 除了首页外,其他页面按照原本`html`下的目录结构,在`pages`下新建
- 页面名称以原本页面名命名
- 每个页面由`template`,`script`,`style`组成

#### 2.`template`事项说明

- `template`用于放原本项目中的`_view`
- `template`下`img`的`src`写法: `<img src="~assets/image/home/crycle.png" />`, 由`~assets`开头
- `template`下`background-image`写法:

    ```    
     :style="{'background-image': `url(${require('~/assets/image/common/ui-header__logo.png')})`}"`
    ```

#### 3.`script`事项说明

- `script`用于放原本项目的逻辑代码
- `script`图片的写法: `require('~/assets/image/home/company-1.png')`
- 所有请求需要在`asyncData`中调用,请求完后统一在`return`返回, 返回的字段的key与`data`的key需保持一致
- 在mounted后请求,可以直接使用之前的请求方式(可以直接拷贝之前的代码)

#### 3.1 head

- `head` 用于引入页面需要用到的js,css

```
    head() {
        return {
            link: [
                {rel: 'stylesheet', href: '/script/lib/swiper/swiper.min.css'},
            ],
            script: [
                {src: '/script/lib/swiper/swiper.min.js', defer: 'defer', body: true},
                {src: '/script/lib/moment.min.js', defer: 'defer', body: true},
            ]
        }
    };
```

##### 3.2 `asyncData`

- 在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象(`context`)
- 发送请求,使用`context`中的`$http`

```
    const ret = await $http(url, params);
    demo:
    async asyncData({$http}) { 
        const banner = await $http('/pc/home/bannerList.do',  {
            locationType: 1,
            platform: 1,
        });
    }
```

- 获取`query`, 在`context`中有`query`

```
    async asyncData({query}) {}
```

##### 3.3 页面跳转

```
    const self = this;
    _g.openWin({
        url: '/product/list',
        pageParam: {a:1,b:2}
    }, self);
```

#### 4.`style`事项说明

- `style`用于放`less`代码
- less中背景图片的写法: `~assets/image/home/phone.png`
- 框架已响应式处理,蓝湖设置设计稿宽度为750px,100px == 1rem

