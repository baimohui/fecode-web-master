import Vue from 'vue';
import {CONFIG} from '~/common/global';

Vue.prototype.$Http = photo => {
    console.log(Vue.$axios);
};
Vue.prototype.transPhoto = photo => {
    if (photo) {
        if (photo.includes('../') || photo.includes('http://') || photo.includes('https://')) {
            return photo;
        } else {
            return CONFIG.HOST_PHOTO + photo;
        }
    } else {
        return CONFIG.DEFAULT_PHOTO;
    }
};
Vue.filter('trans-price', function (price) {
    return (price / 100).toFixed(2);
});
Vue.filter('trans-price-before', function (price) {
    return (price / 100).toFixed(2).split('.')[0];
});
Vue.filter('trans-price-after', function (price) {
    return (price / 100).toFixed(2).split('.')[1];
});
Vue.filter('trans-discount', function (discount) {
    return (discount / 10).toFixed(1);
});
Vue.filter('trans-photo', function (photo) {
    if (photo.indexOf('http') > -1) {
        return photo;
    }
    if (photo.indexOf('https') > -1) {
        return photo;
    }
    // if (photo.indexOf('UploadFiles') > -1) {
    // 	return photo;
    // }
    return photo ? CONFIG.HOST_PHOTO + (photo) : CONFIG.DEFAULT_PHOTO;
});
Vue.filter('trans-avatar', function (avatar) {
    if (avatar.indexOf('http') > -1) {
        return avatar;
    }
    if (avatar.indexOf('https') > -1) {
        return avatar;
    }
    // if (avatar.indexOf('UploadFiles') > -1) {
    // 	return avatar;
    // }
    return avatar ? CONFIG.HOST_PHOTO + (avatar) : CONFIG.DEFAULT_AVATAR;
});
Vue.filter('trans-date', function (millisec) {
    if ((millisec + '').length < 13) millisec *= 1000;
    var now = new Date().getTime();
    var delta = Math.round((now - millisec) / 1000);
    var showNum = 0;
    var showText = '';
    if (delta < 60 * 60) {
        // 一个小时内,显示 *分钟前
        showNum = Math.floor(delta / 60);
        showNum = showNum == 0 ? 1 : showNum;
        showText = showNum + '分钟前';
    } else if (delta >= 60 * 60 && delta < 24 * 60 * 60) {
        // 一天内,超过一个小时,显示 *小时前
        showNum = Math.floor(delta / 3600);
        showText = showNum + '小时前';
    } else if (delta >= 24 * 60 * 60 && delta < 72 * 60 * 60) {
        // 三天内,超过一天,显示 *天前
        showNum = Math.floor(delta / 3600 / 24);
        showText = showNum + '天前';
    } else {
        var d = new Date();
        d.setTime(millisec);
        showText = d.Format('yyyy-MM-dd');
    }
    return showText;
});
Vue.filter('trans-month-day', function (millisec) {
    if ((millisec + '').length < 13) millisec *= 1000;
    var showText = '';
    var d = new Date();
    d.setTime(millisec);
    showText = d.Format('MM-dd');
    return showText;
});
Vue.filter('trans-ymd-hm', function (millisec) {
    if ((millisec + '').length < 13) millisec *= 1000;
    var showText = '';
    var d = new Date();
    d.setTime(millisec);
    showText = d.Format('yyyy.MM.dd hh:mm');
    return showText;
});
Vue.filter('trans-date-time', function (millisec) {
    if ((millisec + '').length < 13) millisec *= 1000;
    var now = new Date().getTime();
    var delta = Math.round((now - millisec) / 1000);
    var showNum = 0;
    var showText = '';
    if (delta < 24 * 60 * 60) {
        // 一天内,展示时分
        var d = new Date();
        d.setTime(millisec);
        showText = d.Format('hh:mm');
    } else {
        //超过一天,展示年月日 时分秒
        var d = new Date();
        d.setTime(millisec);
        showText = d.Format('yyyy-MM-dd hh:mm');
    }
    return showText;
});

var elArr = [];
Vue.directive('scrollShow', {
    inserted: function (el, binding, vnode) {
        // el.getBoundingClientRect().top 距离浏览器顶部距离
        // el.getAttribute()  获取元素属性值
        elArr.push(el);
        window.onscroll = function () {
            for (var i = 0; i < elArr.length; i++) {
                if (elArr[i].getBoundingClientRect().top < document.documentElement.clientHeight - document.documentElement.clientHeight / 4) {
                    if (elArr[i].getAttribute('class').indexOf(elArr[i].getAttribute('className')) == -1) {
                        elArr[i].classList.add(elArr[i].getAttribute('className'));
                        elArr.splice(i, 1);
                        i = i - 1;
                    }
                }
            }
        }

    }
});