/* globals require */
'use strict';

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
 |                                                                           |
 *    Base paths                                                             *
 |                                                                           |
 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

let SRC   = 'src';
let BUILD = '.';
let DATA  = 'src/data';


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
 |                                                                           |
 *    Requires                                                               *
 |                                                                           |
 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

let gulp       = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  babel        = require('gulp-babel'),
  concat       = require('gulp-concat'),
  cssnano      = require('gulp-cssnano'),
  eslint       = require('gulp-eslint'),
  filesize     = require('gulp-filesize'),
  fs           = require('fs'),
  htmlmin      = require('gulp-minify-html'),
  imagemin     = require('gulp-imagemin'),
  insert       = require('gulp-insert'),
  livereload   = require('gulp-livereload'),
  newer        = require('gulp-newer'),
  notify       = require('gulp-notify'),
  // markdown     = require('gulp-markdown'),
  // path         = require('path'),
  plumber      = require('gulp-plumber'),
  pngquant     = require('imagemin-pngquant'),
  rename       = require('gulp-rename'),
  sass         = require('gulp-sass'),
  sourcemaps   = require('gulp-sourcemaps'),
  // svgsprite    = require('gulp-svg-sprite'),
  uglify       = require('gulp-uglify'),
  gutil        = require('gulp-util');

let HTML_HEADER, HTML_FOOTER;

HTML_HEADER = fs.readFileSync(SRC + '/tmpl/header.html', 'utf-8');
HTML_FOOTER = fs.readFileSync(SRC + '/tmpl/footer.html', 'utf-8');

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
 |                                                                           |
 *    Destination paths                                                      *
 |                                                                           |
 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

let dest = {
  css:   BUILD + '/assets/css',
  img:   BUILD + '/assets/img',
  svg:   BUILD + '/assets/svg',
  fonts: BUILD + '/assets/fonts',
  js:    BUILD + '/assets/js'
};


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
 |                                                                           |
 *    Gulp tasks                                                             *
 |                                                                           |
 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

let styles = [ SRC + '/scss/style.scss' ];
// Css
gulp.task('style', () => {
  return gulp.src(styles)
    .pipe(newer(dest.css))
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: [ 'last 4 versions' ],
        cascade: false
      }))
      .pipe(cssnano())
      .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest.css))
    .pipe(livereload());
});

let linters = [ 'gulpfile.js', SRC + '/js/site/**/*.js' ];

// Lint everything except the vendor directory.
gulp.task('lint', () => {
  return gulp.src(linters)
    .pipe(plumber())
    .pipe(eslint({ configFile: 'eslintrc.json' }))
    .pipe(eslint.format());
});


let vendors = [ SRC + '/js/vendor/**/*.js' ];
// Vendor scripts
gulp.task('vendor-js', () => {
  return gulp.src(vendors)
    .pipe(plumber())
    .pipe(newer(dest.js))
    // .pipe(sourcemaps.init())
    //   .pipe(babel())
      .pipe(concat('vendor.js'))
    //   .pipe(uglify())
    //   .pipe(filesize())
      .pipe(rename({ suffix: '.min' }))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest.js))
    .pipe(livereload());
});


let apps = [ SRC + '/js/site/**/*.js' ];

// App scripts
gulp.task('app-js', () => {
  return gulp.src(apps)
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(filesize())
      .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest.js))
    .pipe(livereload());
});


let images = [ SRC + '/img/**/*' ];
// Images
gulp.task('image', () => {
  return gulp.src(images)
    .pipe(newer(dest.img))
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [ pngquant() ]
    }))
    .pipe(gulp.dest(dest.img))
    .pipe(notify({ message: 'Images task complete' }))
    .pipe(livereload());
});

// let svgs = [ SRC + '/img/**/*.svg' ];
// gulp.task('svg', function() {
//     gulp.src(SRC_DIR + '/img/svg-sprite-partials/*.svg')
//         .pipe(newer(imgDest))
//         .pipe(svgmin(function (file) {
//             var prefix = path.basename(file.relative, path.extname(file.relative));
//             return {
//                 plugins: [{
//                     cleanupIDs: {
//                         prefix: prefix + '-',
//                         minify: true
//                     }
//                 }]
//             };
//         }))
//         .pipe(svgstore())
//         .pipe(rename('sprite.svg'))
//         .pipe(gulp.dest(imgDest))
//         .pipe(livereload());
//     return gulp;
// });


let fonts = [ SRC + '/fonts/**/*.*' ];
// Copy fonts (no listener)
gulp.task('font', () => {
  return gulp.src(fonts)
    .pipe(newer(dest.fonts))
    .pipe(gulp.dest(dest.fonts));
});


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
 |                                                                           |
 *    Mardown/template                                                       *
 |                                                                           |
 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

let datafiles = [ DATA + '/**/*.html' ];

gulp.task('htmlmin', function() {
  gutil.log('Run HTML minify...');

  let opts = {
    conditionals: true,
    spare: true,
    empty: true,
    quotes: true
  };

  return gulp.src(datafiles)
    .pipe(insert.transform(function(content, file) {
      // Check for definition comment. Must be the first thing in a .md file
      // to be recognized.
      //
      // <!--
      //   { "title": "Some page title" }
      // -->
      let reg = /^<!--\s+(.[\s\S]+)\n-->/;
      let m = content.match(reg);
      let obj = {};

      if (m) {
        // gutil.log('Meta  header: ', JSON.parse(m[1]));
        obj = JSON.parse(m[1]);
        content = content.replace(reg, '');
      }

      content = HTML_HEADER + content + HTML_FOOTER;

      Object.keys(obj).forEach((k) => {
        content = content.replace('${' + k + '}', obj[k]);
      });

      content = content.replace(/\$\{.[^}]*\}/g, '');

      return content;
    }))
    .pipe(htmlmin(opts))
    .pipe(gulp.dest(BUILD))
    .pipe(livereload());
});

let templates = [ SRC + '/tmpl/header.html', SRC + '/tmpl/footer.html' ];
gulp.task('reload-template', function() {
  gutil.log('Re-read templates');

  fs.readFile(templates[0], 'utf-8', function(err, _data) {
    HTML_HEADER = _data;
  });
  fs.readFile(templates[1], 'utf-8', function(err, _data) {
    HTML_FOOTER = _data;
  });
  return gulp.src(templates).pipe(livereload());
});


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
 |                                                                           |
 *    Compilation tasks                                                      *
 |                                                                           |
 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

gulp.task('all-js', [ 'lint', 'vendor-js', 'app-js' ]);


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
 |                                                                           |
 *    Main task                                                              *
 |                                                                           |
 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

gulp.task('default', [ 'all-js', 'style', 'image', 'font', 'reload-template', 'htmlmin' ], () => {
  livereload.listen();

  let scss = SRC + '/scss/**/*.scss';

  gulp.watch(scss,         [ 'style'                       ]);
  gulp.watch(vendors,      [ 'lint', 'vendor-js'           ]);
  gulp.watch(apps,         [ 'lint', 'app-js'              ]);
  gulp.watch(images,       [ 'image'                       ]);
  gulp.watch(fonts,        [ 'font'                        ]);
  gulp.watch(datafiles,    [ 'htmlmin'                     ]);
  gulp.watch(templates     [ 'reload-template', 'htmlmin'  ]);
});