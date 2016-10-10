'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');//压缩js
var autoprefixer = require('gulp-autoprefixer');//自动添加前缀
var cleancss = require('gulp-clean-css');//压缩css
var concat = require('gulp-concat');

var jshint = require('gulp-jshint');//引入插件


var rename = require('gulp-rename');

//合并雪碧图
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');//雪碧图生成
var notify = require('gulp-notify');

var spriter  = require('gulp-css-spriter');//另一种雪碧图生成


var rootPath = {
    src: './Content',
    dist: './dist'
}

var srcPath = {
   sassPath:rootPath.src+"/sass",//sass文件路径
   cssPath:rootPath.src+"/css",  //编译后的css文件路径
   jsPath:rootPath.src+"/js",
   slice:rootPath.src+"/images/slice",  //待合并的雪碧图
   sprite: rootPath.src + '/images/sprite',
}

var distPath = {
    cssPath:rootPath.dist+"/css",
    jsPath:rootPath.dist+"/js",
    imgPath:rootPath.dist+"/images"
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





//监听js错误
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


// 合并精灵图片1 
gulp.task('sprite', function () {
  var spriteData = gulp.src(srcPath.slice+'/*').pipe(spritesmith({//需要合并的图片地址
    imgName: 'sprite.png',  //保存合并后图片的地址
    cssName: 'sprite.scss', //保存合并后对于css样式的地址
    padding:5,  //合并时两个图片的距离
    //algorithm:'binary-tree', //即合并图片的位置，top-down:从上到下，left-right-从左到右等等
    imgPath:'../sprite/sprite.png',
    cssTemplate: 'scss.sprite.template.mustcache'  //
  }));

  var imgStream = spriteData.img
    .pipe(gulp.dest(srcPath.sprite));

  var cssStream = spriteData.css
    .pipe(gulp.dest(srcPath.sassPath));

  return merge(imgStream, cssStream)
        .pipe(notify({
            message: 'sprite task ok'
        }));
});

//合成精灵图片2 生成css
// gulp.task('spriteCss',function(){
//      return gulp.src(srcPath.cssPath+'/sprite.css')
//             .pipe(spriter({
//             // The path and file name of where we will save the sprite sheet
//             'spriteSheet': distPath.imgPath+'/sprite.png', //生成的spriter的位置
//             // Because we don't know where you will end up saving the CSS file at this point in the pipe,
//             // we need a litle help identifying where it will be.
//             'pathToSpriteSheetFromCSS': distPath.imgPath+'/sprite.png' //这是在css引用的图片路径，很重要
//             }))
//             .pipe(gulp.dest(srcPath.cssPath)); //最后生成出来
// })






gulp.task("watchAll",['watchSass'],function(){
      //监听Sass 压缩Css
      gulp.watch(srcPath.sassPath+'/*.scss',['watchSass']);
      gulp.watch(srcPath.cssPath+'/*.css',['handleCss']);

      //监听js 压缩js
      gulp.watch(srcPath.jsPath+'/*.js',function(){
         gulp.run('jshint','handleScripts');
      });
});

