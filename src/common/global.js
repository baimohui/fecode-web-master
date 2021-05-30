const APPMODE = 'pub'; // dev:开发模式, pub:发布模式
const VERSION = '0.0.1'; // 代码版本号, 每次发布之前, 请更新, 小版本号自增+1
const CONFIG = {};
// CONFIG.DEFAULT_AVATAR = require('~/assets/image/me/icon-logo.png'); // 默认头像
CONFIG.DEFAULT_PHOTO = require('~/assets/image/placeholder.png'); // 默认图片
APPMODE === 'dev' && (function () {
    CONFIG.HOST = '';
    CONFIG.HOST_PHOTO = '';
})();
APPMODE === 'pub' && (function () {
    CONFIG.HOST = '';
    CONFIG.HOST_PHOTO = 'http://yanjiaoshou.oss-cn-shenzhen.aliyuncs.com';
})();

module.exports = {APPMODE, VERSION, CONFIG};