const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
// const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('js', (cb) => {

    pump([
        gulp.src('./src/index.js'),
        sourcemaps.init(),
        uglify(),
        gulp.dest('./dist')
    ], cb);
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

