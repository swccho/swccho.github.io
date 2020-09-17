const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => {
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});
gulp.task('clean', () => {
    return del([
        'css/*.map.css',
    ]);
});


gulp.task('default', gulp.series(['styles','clean']));
gulp.task('build', gulp.series(['styles','clean']));

gulp.task('watch', () => {
    gulp.watch('./*.scss', (done) => {
        gulp.series(['styles','clean'])(done);
    });
});