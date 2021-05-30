const path = require('path');
module.exports = {
    resolve: {
        alias: {
            'U': path.resolve('src/common/utils'),
            '~': path.resolve('src'),
            '~~': path.resolve('src'),
            '@': path.resolve('src'),
            '@@': path.resolve('src')
        }
    }
};