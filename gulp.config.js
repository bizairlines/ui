module.exports = function() {
    return {
        sources: {
            index: 'src/index.html',
            scripts: 'src/app/**/*.js',
            stylesheets: [
                'src/assets/stylesheets/main.scss'
            ],
            vendors:  {
                scripts : [
                        'node_modules/angular/angular.min.js',
                ],
                styles : []
            }
        },
        dev: {
            index: 'dev',
            scripts: 'dev/app',
            constants: 'dev/app',
            stylesheets: 'dev/stylesheets',
            images: 'dev/images',
            fonts: 'dev/fonts',
            map: 'dev/map',
            templates: 'dev/app',
            vendors: 'dev/vendors'
        },
        release: {
            index: 'public',
            scripts: 'public/app',
            constants: 'public/app',
            stylesheets: 'public/stylesheets',
            images: 'public/images',
            fonts: 'public/fonts',
            map: 'dev/map',
            templates: 'public/app',
            vendors: 'public/vendors'
        }
    };
};