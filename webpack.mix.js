const mix = require('laravel-mix');

// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 // mix.js('resources/js/app.js', 'public/js')
//     .vue()
//     .sass('resources/sass/app.scss', 'public/css');

 // После добавления version() необходимо сделать yarn run development заново, после этого появится измененная ссылка с версионированием (): 
// <script src="/js/app.js?id=0483c4f07d840ba1a502"></script>
// В index.blade.php не забыть добавить <script src="{{ mix('/js/app.js') }}"></script>
//
// browserSync() - https://laravel.com/docs/5.8/mix#browsersync-reloading 
// необходимо запустить yarn run watch в консоли в папке с проектом. 
// Возможно, перед выполнением данной команды потребуется выйти из openserver полностью (3000 порт может быть занят)
mix.js('resources/js/app.js', 'public/js').version()
    .vue()
    .sass('resources/sass/app.scss', 'public/css').browserSync(process.env.APP_URL); // vue2.local либо process.env.APP_URL
    // .webpackConfig({
    //     plugins: [
    //         new VuetifyLoaderPlugin({
    //             options: {}
    //         }),
    //     ]
    // });