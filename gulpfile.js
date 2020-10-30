const gulp = require('gulp');
const browserSync = require('browser-sync').create();

var minCss = require('gulp-cssmin');
var rename = require('gulp-rename');
 
// min-css
gulp.task('min-css', function () {
    return gulp.src('src/css/*.css')
        .pipe(minCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

// server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
    gulp.watch("src/*.html").on('change', browserSync.reload);
});