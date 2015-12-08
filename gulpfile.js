var colors = require('colors');
var connect = require('gulp-connect');
var gulp = require('gulp');
var watch = require('gulp-watch');
var ghPages = require('gulp-gh-pages');

var revealJsPaths = [
  'node_modules/reveal.js/lib/js/head.min.js',
  'node_modules/reveal.js/js/reveal.js',
  'node_modules/reveal.js/lib/js/classList.js',
  'node_modules/reveal.js/plugin/markdown/marked.js',
  'node_modules/reveal.js/plugin/markdown/markdown.js',
  'node_modules/reveal.js/plugin/highlight/highlight.js'
];


gulp.task('gh-deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages({
      remoteUrl: 'git@github.com:rangle/front-end-workshop.git'
    }));
});


gulp.task('styles', function() {
  return gulp.src(['./css/**/*.css', 'node_modules/reveal.js/css/reveal.css'])
          .pipe(gulp.dest('./build/css'))
          .pipe(connect.reload());
});


gulp.task('reveal-js', function() {
  return gulp.src(revealJsPaths)
          .pipe(gulp.dest('./build/reveal-js'));
});


gulp.task('slides', function() {
  return gulp.src('./slides/**/*')
          .pipe(gulp.dest('./build/slides'))
          .pipe(connect.reload());
});


gulp.task('img', function() {
  return gulp.src('./img/**/*')
          .pipe(gulp.dest('./build/img'))
          .pipe(connect.reload());
});


gulp.task('index', function() {
  return gulp.src('./index.html')
          .pipe(gulp.dest('./build'))
          .pipe(connect.reload());
});


gulp.task('dev', ['index', 'slides', 'img', 'styles', 'reveal-js'], function() {
  // Start a server
  connect.server({
    root: './build',
    port: 3000,
    livereload: true
  });
  console.log('[CONNECT] Listening on port 3000'.yellow.inverse);

  // Watch CSS files for changes and move to build
  watch(['./css/**/*.css'], function () {
    gulp.start('styles');
  });

  // Watch slides for changes and rebuild
  watch('./slides/**/*', function () {
    gulp.start('slides');
  });

  // Watch img for changes and rebuild
  watch('./img/**/*', function () {
    gulp.start('img');
  });

  // Watch index.html for changes and rebuild
  watch('./index.html', function () {
    gulp.start('index');
  });
});
