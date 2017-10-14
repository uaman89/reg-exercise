const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
//const uglify = require('gulp-uglify');
const pump = require('pump');
var webpackStream = require('webpack-stream');
var webpack3 = require('webpack');

gulp.task('js', (cb) => {

    pump([
        gulp.src('./src/index.js'),
        sourcemaps.init(),
        webpackStream( require('./webpack.config.js'), webpack3 ),
        sourcemaps.write(),
        gulp.dest('./dist')
    ],cb);
});


// html
//----------------------------------------------------------------------------------------------------------------------
gulp.task('html', () => {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
});


// style
//----------------------------------------------------------------------------------------------------------------------
gulp.task('sass', (cb) => {
    pump([
        gulp.src('./src/**/*.scss'),
        sass().on('error', sass.logError),
        gulp.dest('./dist')
    ], cb);
});


// Static Server + watching scss/html files
//----------------------------------------------------------------------------------------------------------------------
gulp.task('default', ['js', 'sass', 'html'], function () {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("./src/**/*.js", ['js']);
    gulp.watch("./src/**/*.scss", ['sass']);
    gulp.watch("./src/index.html", ['html']);

    gulp.watch([
        "./dist/index.html",
        "./dist/index.js",
        "./dist/style.css"
    ]).on('change', browserSync.reload);
});

