var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(){
	return gulp.src('dev/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer('last 2 version'))
		.pipe(gulp.dest('dev/css/'));
	gulp.src('node_modules/bootstrap-sass/assets/stylesheets/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dev/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('dev/sass/**/*.scss',['styles']);
});
