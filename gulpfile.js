var gulp = require('gulp');

/*
https://github.com/sun-zheng-an/gulp-shell
A handy command line interface for gulp
*/
var shell = require('gulp-shell');

/*
	https://github.com/jscs-dev/gulp-jscs
	Check JavaScript code style with JSCS
*/
var jscs = require('gulp-jscs');

/*
https://github.com/jsdoc3/jsdoc
*/
var isWin = /^win/.test(process.platform);

/* https://mochajs.org/ */
var mocha = require('gulp-mocha');

/* 
Code quality - > http://jshint.com/ 
https://github.com/spalger/gulp-jshint
*/

var jshint = require('gulp-jshint');

var stylish = require('jshint-stylish');


gulp.task('lint', function () {
  return gulp.src(['./src/**/*.js'], ['./test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});


gulp.task('jscs', function () {
  return gulp.src(['src/**/*.js', 'test/**/*.js'])
    .pipe(jscs());
});

gulp.task('test', function () {
  return gulp.src('test/**/*.spec.js')
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        should: require('should')
      }
    }));
});


gulp.task('jsdoc', shell.task([
  (isWin) ?
  '"node_modules/.bin/jsdoc.cmd" -c ./doc-config.json' :
  './node_modules/.bin/jsdoc -c ./doc-config.json'
]));

gulp.task('build', ['lint','jscs','test']);