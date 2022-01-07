const {
    src,
    dest,
    watch
} = require('gulp');

const compileSass = require('gulp-sass')(require('sass'));

compileSass.compiler = require('node-sass');

const bundleSass = () => {
    return src('src/scss/*.scss')

        .pipe(compileSass().once('error', compileSass.logError))
        .pipe(dest('src/dist/css/'));
};

function minificarcss() {
    return src('src/scss/app.scss')
        .pipe(compileSass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('src/dist/css'))
};

const devWatch = () => {
    watch('src/scss/layout/*.scss', bundleSass);
};

exports.minificarcss = minificarcss;
exports.bundleSass = bundleSass;
exports.devWatch = devWatch;