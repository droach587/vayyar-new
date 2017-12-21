const gulp = require('gulp');

gulp.task('copy:media', function() {
  return gulp.src('source/assets/media/**/*')
    .pipe(gulp.dest('build/assets/media'));
});
