var gulp = require('gulp'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean'),
    gulpSequence = require('gulp-sequence'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin');

gulp.task("dev", function () {
    connect.server({
        port: 8090
    })
});

//清除文件
gulp.task('clean', function () {
    return gulp.src(['./index', './.tmp'], {read: false})
        .pipe(clean());
});

//useref 同一页面js css 资源压缩合并
gulp.task('com', function () {
    return gulp.src(['./*.html'])
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('./.tmp'));
});

// js md5后缀处理
gulp.task('js', function () {
    return gulp.src(['./.tmp/js/*.js'])
        .pipe(rev())                  //加md5后缀
        .pipe(gulp.dest('./js')) //加后缀后存放位置
        .pipe(rev.manifest())         //生成map文件
        .pipe(gulp.dest('./.tmp/rev/js'))  //map文件存放位置
});
//css md5后缀处理
gulp.task('css', function () {
    return gulp.src(['./.tmp/css/*.css'])
        .pipe(rev())
        .pipe(gulp.dest('./styles'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./.tmp/rev/css'))
});

//替换路径
gulp.task('rev', function () {
    return gulp.src(['./.tmp/rev/*/*.json', './.tmp/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./'))
});

//图片压缩
gulp.task('img', function () {
    return gulp.src(['./images/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('./images'));
});

gulp.task("build", gulpSequence('clean', 'com', 'js', 'css', 'rev', 'img'));
