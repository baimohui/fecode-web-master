import {APPMODE, VERSION, CONFIG} from '~/common/global';

if (process.browser) {
    window.APPMODE = APPMODE;
    window.VERSION = VERSION;
    window.CONFIG = CONFIG;
    // window.Http = require('U/http');
}