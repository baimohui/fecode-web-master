(function () {
    var xui_prototype = {};

    function Xui() {
        this.appVersion = '0.0.0';
        this.deviceId = 'developer';
        this.systemType = 'web';
        this.pageParam = (function () {
            var pageParam = {};
            var query = window.location.search.substr(1);
            var params = query.split('&');
            _.each(params, function (param) {
                var key = param.split('=')[0];
                var value = param.split('=')[1];
                pageParam[key] = value;
            });
            return pageParam;
        })();
        this.params = {
            ajax: {
                url: '',
                method: 'post',
                timeout: 60 * 20,
                dataType: 'json',
                data: {}
            }
        };
        this._scroller = {};
    }

    // 窗口系统
    xui_prototype = $.extend(true, xui_prototype, {
        openWin: function (params) {
            if (params.url.indexOf('../baseWin/index.html') > -1) {
                // _g.openWin
                var url = params.pageParam.opts.url;
                var pageParam = params.pageParam.opts.pageParam;
            } else {
                // api.openWin
                var url = params.url;
                var pageParam = params.pageParam;
            }
            var queryList = [];
            var query = '?';
            var hasQuery = (url.split('?').length == 2);
            if (hasQuery) {
                queryList.push(url.split('?')[1]);
            }
            url = url.split('?')[0];
            _.each(pageParam, function (value, key) {
                queryList.push(key + '=' + value);
            });
            query += queryList.join('&');
            window.location.href = url + query;
        },
        closeWin: function () {
            location.href = document.referrer;
        },
        closeToWin: function () {
        },
        setWinAttr: function () {
        },
        openFrame: function () {
        },
        closeFrame: function () {
        },
        setFrameAttr: function () {
        },
        bringFrameToFront: function () {
        },
        sendFrameToBack: function () {
        },
        setFrameClient: function () {
        },
        animation: function () {
        },
        openFrameGroup: function () {
        },
        closeFrameGroup: function () {
        },
        setFrameGroupAttr: function () {
        },
        setFrameGroupIndex: function () {
        },
        openPopoverWin: function () {
        },
        closePopoverWin: function () {
        },
        openSlidLayout: function () {
        },
        openSlidPane: function () {
        },
        closeSlidPane: function () {
        },
        lockSlidPane: function () {
        },
        unlockSlidPane: function () {
        },
        openDrawerLayout: function () {
        },
        openDrawerPane: function () {
        },
        closeDrawerPane: function () {
        },
        execScript: function () {
        },
        removeLaunchView: function () {
        },
        parseTapmode: function () {
        },
    });

    // 应用管理
    xui_prototype = $.extend(true, xui_prototype, {
        installApp: function () {
        },
        uninstallApp: function () {
        },
        openApp: function () {
        },
        appInstalled: function () {
        },
        rebootApp: function () {
        },
        openWidget: function () {
        },
        closeWidget: function () {
        },
    });

    // 网络通信
    xui_prototype = $.extend(true, xui_prototype, {
        ajax: function (params, callback) {
            var ret,
                err;
            params = _.extend({}, this.params.ajax, params);
            if (!callback || typeof callback !== 'function') {
                console.log('callback不存在或者callback不是一个函数');
                return;
            }
            if (!params.url) {
                console.log('url为空');
                return;
            }
            params.data.values.data = _g.j2s(params.data.values.data);
            $.ajax({
                type: params.method,
                url: params.url,
                data: params.data.values,
                cache: false,
                dataType: params.dataType,
                success: function (result) {
                    ret = result;
                    callback(ret, err);
                },
                error: function (result) {
                    err = result;
                    callback(ret, err);
                }
            });
        },
        cancelAjax: function () {
        },
        download: function () {
        },
        cancelDownload: function () {
        },
        imageCache: function () {
        },
    });

    // 数据存储
    xui_prototype = $.extend(true, xui_prototype, {
        readFile: function () {
        },
        writeFile: function () {
        },
        setPrefs: function () {
        },
        getPrefs: function () {
        },
        removePrefs: function () {
        },
        clearCache: function () {
        },
        getCacheSize: function () {
        },
        getFreeDiskSpace: function () {
        },
        loadSecureValue: function () {
        },
    });

    // 消息事件
    xui_prototype = $.extend(true, xui_prototype, {
        addEventListener: function (opts, callback) {
            var self = this;
            if (opts.name == 'scrolltobottom') {
                self._scroller.scroller = opts.extra.scroller || window;
                self._scroller.panelHeight = opts.extra.panelHeight || window.innerHeight;
                self._scroller.threshold = opts.extra.threshold || 100;
                self._scroller.callback = callback;
                self._scroller.prevScrollTop = 0;
                $(self._scroller.scroller).on('scroll', function () {
                    if (self._scroller.scroller === window) {
                        var realHeight = $('body').height();
                    } else {
                        var realHeight = $(self._scroller.scroller).children().eq(0).height();
                    }
                    var maxScrollHeight = realHeight - self._scroller.panelHeight;
                    var move = $(self._scroller.scroller).scrollTop() - self._scroller.prevScrollTop;
                    var delta = maxScrollHeight - $(self._scroller.scroller).scrollTop();
                    if (delta <= self._scroller.threshold && move > 0) {
                        self._scroller.callback && self._scroller.callback();
                    }
                    self._scroller.prevScrollTop = $(self._scroller.scroller).scrollTop();
                });
            } else {
                window[opts.name] = callback;
            }
        },
        removeEventListener: function () {
        },
        sendEvent: function () {
            if (window[opts.name]) {
                window[opts.name]({
                    value: opts.extra
                });
            }
        },
        accessNative: function () {
        },
        notification: function () {
        },
        cancelNotification: function () {
        },
    });

    // 设备访问
    xui_prototype = $.extend(true, xui_prototype, {
        startLocation: function () {
        },
        stopLocation: function () {
        },
        getLocation: function () {
        },
        startSensor: function () {
        },
        stopSensor: function () {
        },
        call: function (opts) {
            var _opts = {
                content: opts.number,
                buttons: [{
                    label: '取消',
                    type: 'default',
                    onClick: function () {
                    }
                }, {
                    label: '呼叫',
                    type: 'primary',
                    onClick: function () {
                        window.location = 'tel:' + opts.number;
                    }
                }]
            };
            weui.confirm('', _opts);
            setTimeout(function () {
                $('.weui-dialog').css({
                    'font-size': '16px',
                });
            }, 0);
        },
        sms: function () {
        },
        mail: function () {
        },
        openContacts: function () {
        },
        setFullScreen: function () {
        },
        setStatusBarStyle: function () {
        },
        setScreenOrientation: function () {
        },
        setKeepScreenOn: function () {
        },
        toLauncher: function () {
        },
        setScreenSecure: function () {
        },
        setAppIconBadge: function () {
        },
        getPhoneNumber: function () {
        },
    });

    // UI组件
    xui_prototype = $.extend(true, xui_prototype, {
        alert: function (opts, callback) {
            var _opts = {};
            opts.title && (_opts.title = opts.title);
            opts.msg && (_opts.content = opts.msg);
            _opts.buttons = [{
                label: '确定',
                type: 'default',
                onClick: function () {
                    callback && callback();
                }
            }];
            weui.alert('', _opts);
            setTimeout(function () {
                $('.weui-dialog').css({
                    'font-size': '16px',
                });
            }, 0);
            return
            alert(opts.msg || opts.title || '');
            callback && callback();
        },
        confirm: function (opts, callback) {
            var ret = null,
                err = null;

            var _opts = {};
            opts.title && (_opts.title = opts.title);
            opts.msg && (_opts.content = opts.msg);
            _opts.buttons = [{
                label: '确定',
                type: 'primary',
                onClick: function () {
                    (ret = {}) && (ret.buttonIndex = 1);
                    callback && callback(ret, err);
                }
            }, {
                label: '取消',
                type: 'default',
                onClick: function () {
                    (ret = {}) && (ret.buttonIndex = 2);
                    callback && callback(ret, err);
                }
            }];
            weui.confirm('', _opts);
            setTimeout(function () {
                $('.weui-dialog').css({
                    'font-size': '16px',
                });
            }, 0);
            return
            var ret = null,
                err = null;
            if (confirm(opts.msg || opts.title || '')) {
                (ret = {}) && (ret.buttonIndex = 1);
                callback && callback(ret, err);
            } else {
                (ret = {}) && (ret.buttonIndex = 2);
                callback && callback(ret, err);
            }
        },
        prompt: function (opts, callback) {
            var ret = null,
                err = null;
            var text = prompt(opts.msg || opts.title || '', opts.text || '');
            if (text) {
                (ret = {}) && (ret.buttonIndex = 1, ret.text = text);
                callback && callback(ret, err);
            } else {
                (ret = {}) && (ret.buttonIndex = 2, ret.text = '');
                callback && callback(ret, err);
            }
        },
        actionSheet: function (opts, callback) {
            var ret = null,
                err = null;
            var buttons = [];
            var cancelButton = [{
                label: (opts && opts.cancelTitle) || '取消',
                onClick: function () {
                    ret = {
                        buttonIndex: buttons.length + 1
                    };
                    callback && callback(ret, err);
                }
            }];
            if (opts && opts.title) {
                var $titleDom = $('<div><p>' + opts.title + '</p><b></b></div>');
                $titleDom.css({
                    'position': 'relative',
                    'padding': '10px 0',
                    'text-align': 'center',
                    'font-size': '18px',
                    'background-color': '#fff',
                });
                $titleDom.find('b').css({
                    'position': 'absolute',
                    'left': '0',
                    'bottom': '0',
                    'right': '0',
                    'height': '1px',
                    'border-top': '1px solid #d9d9d9',
                    'color': '#d9d9d9',
                    '-webkit-transform-origin': '0 0',
                    'transform-origin': '0 0',
                    '-webkit-transform': 'scaleY(.5)',
                    'transform': 'scaleY(.5)',
                });
                setTimeout(function () {
                    $('.weui-actionsheet').prepend($titleDom);
                }, 0);
            }
            if (opts && opts.destructiveTitle) {
                buttons.push({
                    label: opts.destructiveTitle,
                    onClick: function () {
                        ret = {
                            buttonIndex: 1
                        };
                        callback && callback(ret, err);
                    }
                });
                setTimeout(function () {
                    $('.weui-actionsheet__menu .weui-actionsheet__cell').eq(0).css('color', 'red');
                }, 0);
            }
            if (opts && opts.buttons) {
                _.each(opts.buttons, function (item) {
                    var index = buttons.length + 1;
                    buttons.push({
                        label: item,
                        onClick: function () {
                            ret = {
                                buttonIndex: index
                            };
                            callback && callback(ret, err);
                        }
                    });
                });
            }
            weui.actionSheet(buttons, cancelButton);
        },
        showProgress: function (opts) {
            var $loading = $('.weui-loading_toast');
            if ($loading.length > 0) {
                $loading.find('.weui-toast').css('top', '50%');
                $loading.addClass('weui-animate-fade-in');
                $loading.find('.weui-mask_transparent').show();
            } else {
                weui.loading('正在加载中...');
                setTimeout(function () {
                    $('.weui-loading_toast .weui-toast').css({
                        'font-size': '16px',
                        'top': '50%',
                        'margin-top': '-3.8em'
                    });
                }, 0);
            }
        },
        hideProgress: function () {
            var $loading = $('.weui-loading_toast');
            $loading.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
                if ($loading.hasClass('weui-animate-fade-out')) {
                    $loading.removeClass('weui-animate-fade-in');
                    $loading.removeClass('weui-animate-fade-out');
                    $loading.find('.weui-toast').css('top', '200%');
                    $loading.find('.weui-mask_transparent').hide();
                }
                // $loading.remove();
            });
        },
        toast: function (opts) {
            if (!opts) return;
            weui.toast(opts.msg || '', {
                duration: opts.duration || 3000,
                callback: function () {
                }
            });
            setTimeout(function () {
                $('.weui-toast').css({
                    'font-size': '16px',
                    'min-height': '4em',
                    'padding-top': '15px',
                });
                $('.weui-icon_toast.weui-icon-success-no-circle').remove();
            }, 0);
        },
        openPicker: function (opts, callback) {
            var ret = null,
                err = null;
            weui.datePicker({
                onConfirm: function (date) {
                    ret = {
                        year: date[0],
                        month: date[1] + 1,
                        day: date[2],
                    };
                    callback && callback(ret, err);
                },
                onChange: function (date) {
                    console.log(date)
                },
                start: new Date().getFullYear() - 50,
                end: new Date().getFullYear() + 50,
            });
            setTimeout(function () {
                $('.weui-picker').css({
                    'font-size': '16px',
                });
            })
        },
        setRefreshHeaderInfo: function () {
        },
        setCustomRefreshHeaderInfo: function () {
        },
        refreshHeaderLoading: function () {
        },
        refreshHeaderLoadDone: function () {
        },
        showFloatBox: function () {
        },
    });

    // 多媒体
    xui_prototype = $.extend(true, xui_prototype, {
        getPicture: function () {
        },
        saveMediaToAlbum: function () {
        },
        startRecord: function () {
        },
        stopRecord: function () {
        },
        startPlay: function () {
        },
        stopPlay: function () {
        },
        openVideo: function () {
        },
    });

    // 模块加载
    xui_prototype = $.extend(true, xui_prototype, {
        require: function () {
        },
    });

    // WebApp历史
    xui_prototype = $.extend(true, xui_prototype, {
        historyBack: function () {
            window.history.back();
        },
        historyForward: function () {
            window.history.forward();
        },
    });

    // 其他
    xui_prototype = $.extend(true, xui_prototype, {
        pageUp: function (opts, callback) {
            var ret = null,
                err = null;
            var scrollTop = $('body').scrollTop() - window.innerHeight;
            opts && opts.top && (scrollTop = 0);
            $('body').scrollTop(scrollTop);
            (ret = {}) && (ret.scrolled = !!scrollTop);
            callback && callback(ret, err);
        },
        pageDown: function (opts, callback) {
            var ret = null,
                err = null;
            var scrollTop = $('body').scrollTop() + window.innerHeight;
            opts && opts.bottom && (scrollTop = $('body').height());
            $('body').scrollTop(scrollTop);
            (ret = {}) && (ret.scrolled = !(scrollTop >= $('body').height()));
            callback && callback(ret, err);
        },
    });

    Xui.prototype = xui_prototype;

    Xui.prototype.constructor = Xui;

    // window.Xui = new Xui();

    var isApp = !!window.localStorage.getItem('isApp');
    if (typeof api == 'undefined' && !isApp) api = new Xui();
})();