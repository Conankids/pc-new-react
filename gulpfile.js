
var gulp = require('gulp');
var jade = require('gulp-jade');
var minify = require('gulp-minify');

gulp.task('default', function() {

  gulp.src('./*.js')
	//.pipe( jade() )
	.pipe( minify() )
	.pipe(gulp.dest('build/main.js'));

});

























