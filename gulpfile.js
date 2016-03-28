var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream');

gulp.task('vendors', function(){
  gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
      .pipe(gulp.dest('./src/js/vendors'));
  gulp.src('./bower_components/jquery/dist/jquery.min.js')
      .pipe(gulp.dest('./src/js/vendors'));
});

gulp.task('setup-font-awesome', function(){
  gulp.src('./bower_components/font-awesome/css/font-awesome.min.css')
      .pipe(gulp.dest('./src/css'))
  gulp.src('./bower_components/font-awesome/fonts/*.*')
      .pipe(gulp.dest('./src/fonts'))
})

gulp.task('init', ['vendors', 'setup-font-awesome']);

gulp.task('browserify', function(){
    browserify('./src/js/main.js')
        .transform('reactify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));
    gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', ['browserify', 'copy'], function(){
    return gulp.watch('src/**/*.*', ['browserify', 'copy'])
});
