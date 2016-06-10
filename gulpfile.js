var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('transform', function(){
  return browserify('./public/components/App.jsx')
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['transform']);
