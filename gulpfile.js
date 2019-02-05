'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
  return gulp.src('assets/styles/sass/*sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/styles/css'));
});


gulp.task('image', () =>
  gulp.src('assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img/'))
);
