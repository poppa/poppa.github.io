// jshint esversion: 6, node: true
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
  exec         = require('child_process').execSync,
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
 *    Markdown/template                                                      *
 |                                                                           |
 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

let datafiles = [ DATA + '/**/*.html' ];

const parseAttr = (s) => {
  let m = s.match(/([-\w]+)=?(['"]?)(.*?)\2/g);
  if (m) {
    let o = {};
    m.forEach(x => {
      let a = x.split('=');
      if (a.length > 1 && (a[1][0] == '\'' || a[1][0] == '"')) {
        a[1] = a[1].substring(1, a[1].length-1);
      }
      o[a[0]] = a[1];
    });

    return o;
  }
};


// Check for metadata comment. Must be the first thing in a .md file
// to be recognized.
//
// <!--
//   { "title": "Some page title" }
// -->
const readMetadata = (fileOrCont, isConent) => {
  if (!isConent) {
    fileOrCont = fs.readFileSync(fileOrCont, 'utf-8');
  }

  let reg = /^<!--\s+(.[\s\S]+)\n-->/;
  let m = fileOrCont.match(reg);
  let obj = {};

  if (m) {
    obj = JSON.parse(m[1]);
    return obj;
  }
};

const replaceString = (s, o) => {
  Object.keys(o).forEach(name => {
    s = s.replace('${' + name + '}', o[name]);
  });

  return s;
};

const makeArchive = (c) => {
  // let m = c.match(/<list (.*?)\/?>/);
  let m = c.match(/<list (.*?)\/?>\s*(.[\s\S]+)\s*<\/list>/);

  if (m && m.length >= 3) {
    let attr = parseAttr(m[1]);
    let stub = m[2];

    if (attr && attr.path) {
      let abspath = SRC + '/data' + attr.path;
      let files = getDirWithMetadata(abspath);

      files.sort((a, b) => {
        return a.created === b.created ? 0 : a.created > b.created ? -1 : 1;
      });

      if (attr.type) {
        files = files.filter(a => {
          if (a.type && a.type === attr.type) {
            return a;
          }
        });
      }

      let out = '';
      let plen = (SRC + '/data').length;

      files.forEach(f => {
        f.path = f.path.substring(plen);
        out += replaceString(stub, f);
      });

      out = `<ul class='archive list'>${out}</ul>`;

      return c.replace(m[0], out);
    }
  }
  return c;
};

const parseIsoDate = (d) => {
  try {
    let date = new Date(Date.parse(d));
    return date;
  }
  catch (e) {
    return 0;
  }
};

const getDirWithMetadata = (path) => {
  if (path[path.length-1] === '/') {
    path = path.substring(0, path.length-1);
  }

  let ret = [];
  let files = fs.readdirSync(path, 'utf-8');

  files.forEach(p => {
    let fp = path + '/' + p;
    let st = fs.statSync(path + '/' + p);

    if (st.isDirectory()) {
      ret = ret.concat(getDirWithMetadata(fp));
    }
    else {
      let o = readMetadata(fp);

      if (o) {
        o.path     = fp;
        o.name     = p;
        o.created  = st.ctime;
        o.modified = st.mtime;

        if (o.pubdate) {
          o.created = parseIsoDate(o.pubdate);
        }

        ret.push(o);
      }
    }
  });

  return ret;
};


gulp.task('htmlmin', function() {
  gutil.log('Run HTML minify...');

  let opts = {
    conditionals: true,
    spare: true,
    empty: true,
    quotes: true
  };

  const quoteArg = function(a) {
    return '"' + a.replace(/\\/g, '\\\\')
                  .replace(/"/g, '\\"') + '"';
  };

  return gulp.src(datafiles)
    .pipe(plumber())
    .pipe(insert.transform(function(content, file) {
      // Check for definition comment. Must be the first thing in a .md file
      // to be recognized.
      //
      // <!--
      //   { "title": "Some page title" }
      // -->
      let reg = /^<!--\s+(.[\s\S]+)\n-->/;
      let m = content.match(reg);
      let obj = readMetadata(content, true) || {};

      // Look for code blocks
      reg = /<<<([\w\d]+)?\s*([\s\S]*?)>>>/g;
      let newCont = content;

      do {
        m = reg.exec(content);

        if (!m) {
          break;
        }

        if (m[1] === 'pike') {
          let code = quoteArg(m[2]);
          let res = exec('src/bin/pike2html.pike ' + code);
          m[2] = '<pre><code>' + res.toString().trim() + '</code></pre>';
        }
        else {
          m[2] = '<pre><code>' + m[2].trim() + '</code></pre>';
        }
        newCont = newCont.replace(m[0], m[2]);
      } while (m);

      content = newCont;

      content = makeArchive(content);

      if (!obj.noconcat) {
        content = HTML_HEADER + content + HTML_FOOTER;
      }
      else {
        gutil.log('Skip header and footer');
      }


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
  gulp.watch(templates,    [ 'reload-template', 'htmlmin'  ]);
});
