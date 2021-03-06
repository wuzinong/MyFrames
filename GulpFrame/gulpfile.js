﻿
var gulp = require('gulp'); //引入gulp
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');//引入插件
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');//sass监听
var autoprefixer = require('gulp-autoprefixer');//自动添加前缀
//var cleancss = require('gulp-clean-css');//取代minify

var babel = require("gulp-babel");//ES6


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



//Es6转换ES6
gulp.task("Es6ToEs5", function () {
    return gulp.src("src/scripts/es6/*.js")
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('convertedEs6.js'))
        .pipe(gulp.dest("./build/scripts/es6/"));
});
//监听ES6实时转换
gulp.task('watchEs6',['Es6ToEs5'],function(){
   gulp.watch("src/scripts/es6/*.js",function(){
        gulp.run('Es6ToEs5');
   })
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

