let gulp = require('gulp');
let concat = require('gulp-concat');
let minify = require('gulp-minify');
let cleanCss = require('gulp-clean-css');
let rev = require('gulp-rev');
let del = require('del');
 
gulp.task('clean-js', function () {
    return del([
        'public/build/js/*.js'
    ]);
});
 
gulp.task('clean-css', function () {
    return del([
        'public/build/css/*.css'
    ]);
});
 
gulp.task('pack-js', gulp.series('clean-js', function () {
    return gulp.src(['src/assets/js/bootstrap/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true
        }))
        .pipe(rev())
        .pipe(gulp.dest('public/js',{ sourcemaps: true }))
        .pipe(rev.manifest('public/build/rev-manifest.json', {
            merge: true
        }))
        .pipe(gulp.dest('./'));
}));
 
gulp.task('pack-css', gulp.series('clean-css', function () {    
    return gulp.src(['src/assets/css/bootstrap/*.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(rev())
        .pipe(gulp.dest('public/css'))
        .pipe(rev.manifest('public/build/rev-manifest.json', {
            merge: true
        }))
        .pipe(gulp.dest('./'));
}));

gulp.task('watch', function() {
    gulp.watch('src/assets/js/**/*.js', gulp.parallel('pack-js'));
    gulp.watch('src/assets/css/**/*.css', gulp.parallel('pack-css'));
});
 
gulp.task('default', gulp.parallel('watch'));