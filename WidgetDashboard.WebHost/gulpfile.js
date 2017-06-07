/// <binding BeforeBuild='vendor:20:copy' />
const gulp = require('gulp');

gulp.task('vendor:20:copy', function () {
    return gulp.src(
      [
            'node_modules/dashboardwidget/widget-component.ts',
            'Scripts/*.*'
      ])
      .pipe(gulp.dest('wwwroot/Scripts'));
});