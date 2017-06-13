/// <binding BeforeBuild='vendor:20:copy' />
const gulp = require('gulp');

gulp.task('vendor:20:copy', function () {
    gulp.src(
      [
            'node_modules/dashboardwidget/widget-component.ts',
            'Scripts/*.*'
      ])
        .pipe(gulp.dest('wwwroot/Scripts'));

    return gulp.src([
        'style.css',
        'node_modules/jquery/dist/jquery.js',
        'node_modules/jquery-ui-dist/jquery-ui.min.js',
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/font-awesome/css/font-awesome.css',
        'node_modules/lodash/dist/lodash.min.js',
        'node_modules/gridstack/dist/gridstack.min.css',
        'node_modules/gridstack/dist/gridstack.all.js'
    ]).pipe(gulp.dest('wwwroot'));
});