/// <binding BeforeBuild='copy' />
const gulp = require('gulp');

gulp.task('copy', function () {
    gulp.src(
        [
            'styles.css',
            'index.html',
        ])
        .pipe(gulp.dest('wwwroot'));

    gulp.src(
        [
            'scripts/*.js',
        ])
        .pipe(gulp.dest('wwwroot/scripts'));

    return gulp.src(
      [
          'node_modules/dashboardwidget/widget-component.ts',
      ])
      .pipe(gulp.dest('Scripts'));
});