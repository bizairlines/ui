var config = require('./gulp.config')();

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    eventStream = require('event-stream'),
    clean = require('gulp-rimraf'),
    sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['clean'], serve);
gulp.task('scripts', scripts);

gulp.task('clean', [], function() {
    return gulp.src("dev/*", { read: false }).pipe(clean());
});

gulp.task('default', ['serve']);

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', buildSass);


function serve() {
    compile();
    browserSync.init({
        server: ['./dev', '.']
    });

    gulp.watch(['src/assets/stylesheets/*.scss', 
        'src/app/**/*.js',
        'src/index.html'], compile);
}

function scripts() {
    return gulp.src('src/app/**/*.js')
    .pipe(gulp.dest('dev/app'))
    .pipe(browserSync.reload);
}

function buildSass() {
    return gulp.src('src/assets/stylesheets/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dev/stylesheets/'))
        .pipe(browserSync.stream());
}

function html() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dev'))
        .pipe(browserSync.reload);
}

function compile() {
    scripts();
    buildSass();
    html()
}