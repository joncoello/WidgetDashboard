/// <binding BeforeBuild='vendor:20:copy' />
const gulp = require('gulp');

gulp.task('vendor:20:copy', function () {
    gulp.src(
        [
            'node_modules/dashboardwidget/widget-component.ts',
        ])
        .pipe(gulp.dest('Scripts'));

    gulp.src(
        [
            'scripts/*.js',
        ])
        .pipe(gulp.dest('wwwroot/scripts'));

    return gulp.src(
        [
            'style.css',
            'index.html'
        ])
        .pipe(gulp.dest('wwwroot'));
});