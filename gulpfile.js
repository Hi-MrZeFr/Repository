var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var workbox = require("workbox-build");

//pwa
gulp.task('generate-service-worker', () => {
  return workbox.injectManifest({
    swSrc: './sw-template.js',
    swDest: './public/sw.js',
    globDirectory: './public',
    globPatterns: [
        "404.html","index.html","css/index.css","offline.html"
    ],
    modifyURLPrefix: {
        "": "./"
    }
  });
});

gulp.task('minify-css', () => {
  return gulp.src('./public/**/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie11'
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task("default", gulp.series("generate-service-worker", gulp.parallel(
    'minify-css'
)));
