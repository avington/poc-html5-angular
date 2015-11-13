/**
 * Created by smoseley on 11/4/2015.
 */
'use strict';
const gulp = require('gulp');
const wiredep = require('wiredep').stream;
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const inject = require('gulp-inject');
const webserver = require('gulp-webserver');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');


gulp.task('bower', () => {
    return gulp.src('./angular.html')
        .pipe(wiredep({
            directory: './lib/',
            bowerJson: require('./bower.json'),
            src: './angular.html'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('sass-foundation', () => {
    return gulp.src('./src/sass/foundation.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('sass-custom', () => {
    return gulp.src('./src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('watch-sass', ['sass-custom'], () => {
    gulp.watch('.src/sass/**/*.scss', ['sass-custom']);
})

gulp.task('inject', () => {
    let files = []
        .concat(
            './src/app/**/*.module.js',
            './src/app/**/*.js',
            '!./src/app/**/*.spec.js'
        )

    const jsFiles = gulp.src(files);
    const htmlFile = gulp.src('./angular.html');
    const destination = gulp.dest('./');

    return htmlFile
        .pipe(inject(jsFiles))
        .pipe(destination);
});


gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('ts', () => {
    const tsResult = tsProject.src() // instead of gulp.src(...)
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('./src/'));
});

gulp.task('ts-watcher', ['ts'], () => {
    gulp.watch('./src/app/**/*.ts', ['ts']);
});