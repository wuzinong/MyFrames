'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');//压缩js
var autoprefixer = require('gulp-autoprefixer');//自动添加前缀
var cleancss = require('gulp-clean-css');//压缩css
var concat = require('gulp-concat');

var jshint = require('gulp-jshint');//引入插件


var rename = require('gulp-rename');


var rootPath = {
    src: './Content',
    dist: './dist'
}

var srcPath = {
   sassPath:rootPath.src+"/sass",//sass文件路径
   cssPath:rootPath.src+"/css",  //编译后的css文件路径
   jsPath:rootPath.src+"/js"
}

var distPath = {
    cssPath:rootPath.dist+"/css",
    jsPath:rootPath.dist+"/js"
}

 

//gulp.src 排除文件：
//gulp.src(['*.js','!gulpfile.js'])


//处理 Sass 文件
gulp.task('watchSass',function(){
   return gulp.src(srcPath.sassPath+'/*.scss')
              .pipe(sass().on('error',sass.logError))
              .pipe(autoprefixer({
                  browsers: ['last 2 versions', 'Android >= 4.0'],
                  cascade: true, //是否美化属性值 默认：true 像这样：
                  //-webkit-transform: rotate(45deg);
                  //        transform: rotate(45deg);
                  remove:true //是否去掉不必要的前缀 默认：true 
              }))
              // .pipe(concat('all.min.css'))
              // .pipe(cleancss())
              .pipe(gulp.dest(srcPath.cssPath));//编译scss文件至Content/css目录
});
//压缩合并css
gulp.task('handleCss',function(){
   //return gulp.src([srcPath.cssPath+'/*.css',"!"+srcPath.cssPath+'/base.css'])
   return gulp.src([srcPath.cssPath+'/*.css'])
              .pipe(concat('built.min.css'))
              .pipe(cleancss())
              .pipe(gulp.dest(distPath.cssPath));//合并压缩并输出到dist/css下
});





//监听js出差
gulp.task('jshint', function() {
    gulp.src([srcPath.jsPath+"/*.js"])
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});//src配置需要对哪个文件进行Hint

gulp.task('handleScripts', function() {
    gulp.src([srcPath.jsPath+"/*.js","!"+srcPath.jsPath+"/handledJS.js"])
      .pipe(concat("handledJS.min.js"))
      //.pipe(rename({suffix:'.min'}))
      .pipe(uglify())
      .pipe(gulp.dest(distPath.jsPath));//压缩合并js至dist/js
});





gulp.task("watchAll",['watchSass'],function(){
      //监听Sass 压缩Css
      gulp.watch(srcPath.sassPath+'/*.scss',['watchSass']);
      gulp.watch(srcPath.cssPath+'/*.css',['handleCss']);

      //监听js 压缩js
      gulp.watch(srcPath.jsPath+'/*.js',function(){
         gulp.run('jshint','handleScripts');
      });
});

