const mix = require('laravel-mix');

/*как происходит сборка фронтенда в laravel
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js');
    // .sass('resources/sass/app.scss', 'public/css');
    // .vuetify("vuetify-loader", {extract: "[name].csss"})

mix.version();
