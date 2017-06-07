/// <binding BeforeBuild='copy' />
const gulp = require('gulp');

gulp.task('copy', function () {
    gulp.src(
        [
            'index.html',
        ])
        .pipe(gulp.dest('wwwroot'));

    return gulp.src(
      [
          'node_modules/dashboardwidget/widget-component.ts',
      ])
      .pipe(gulp.dest('Scripts'));
});