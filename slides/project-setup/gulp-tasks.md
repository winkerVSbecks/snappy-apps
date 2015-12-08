# Gulp Tasks

--

### gulp-sass and gulp-sourcemaps

```js
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.src('./scss/app.scss')
  .pipe(sourcemaps.init())
    .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./css'));
```

--

### scss-lint

```js
var scsslint = require('gulp-scss-lint');

gulp.src('./scss/**/*.scss')
  .pipe(scsslint({
    'config': 'scss-lint.yml'
  }))
  .pipe(scssLint.failReporter());
});
```

--

### Livereload

```js
connect.server({
  root: './build',
  port: 3000,
  livereload: true
});


gulp.src('./scss/app.scss')
  .pipe(sourcemaps.init())
    .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./css'))
  .pipe(connect.reload());
```
