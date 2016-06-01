
var gulp = require('gulp'); //引入gulp
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');//引入插件
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');//sass监听
var autoprefixer = require('gulp-autoprefixer');//自动添加前缀

//npm install  gulp
//npm install 先安装package.json中需要的插件

gulp.task('hintTest', function() {
    gulp.src(['./src/scripts/*.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});//src配置需要对哪个文件进行Hint

gulp.task('handleScripts', function() {
    gulp.src(['./src/scripts/*.js'])
      .pipe(concat("handledJS.js"))
      .pipe(uglify())
      .pipe(gulp.dest('./build/scripts/'));
});


gulp.task('handleSass',function(){
    gulp.src(['./src/styles/main.scss'])
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4','opera'))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./build/styles/')); 
});

//监听Sass,第二个参数表示先执行一次
gulp.task('watchSass',['handleSass'],function(){
   gulp.watch('./src/styles/main.scss',function(){
    gulp.run('handleSass');
   });
});

//批量监听
gulp.task('watchAll',function(){
  gulp.watch('./src/scripts/*.js',function(){
	 gulp.run('hintTest','handleScripts','handleSass');
   });
});

