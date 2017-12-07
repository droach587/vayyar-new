const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const extname = require('gulp-extname');
const assemble = require('assemble');
const app = assemble();

gulp.task('assemble', () => {
  app.build(['views'], function(err) {
    if (err) throw err;
  });
});

app.task('views', function() {
  app.data('source/data/**/*.{json,yml}');
  app.helpers('source/helpers/**/*.js');
  app.partials('source/views/partials/*.hbs');
  app.layouts('source/views/layouts/*.hbs');
  app.option('layout', 'layout.hbs');
  app.pages('source/views/pages/*.hbs');

  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(htmlmin())
    .pipe(extname())
    .pipe(app.dest('build/'));
});

module.exports = app;
