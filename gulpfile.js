//Import dependencies
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var header = require('gulp-header');

//Import the package
var pkg = require('./package.json');

//Generate the header
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  '', ''].join('\n');


  //Concat all files in build folder
  gulp.task('concat', function(){

    //Set the source files
    gulp.src(['./src/cv.js', './src/**/*'])

    //Concat all files
    .pipe(concat('cv.js'))

    //Add the header
    .pipe(header(banner, { pkg : pkg } ))

    //Save
    .pipe(gulp.dest('./dist/'));

  });

  //Minimize the output file
  gulp.task('minimize', function(){

    //Set the source file
    gulp.src('./dist/cv.js')

    //Minimize
    .pipe(uglify())

    //Save the file
    .pipe(rename('cv.min.js'))

    //Add the header
    .pipe(header(banner, { pkg : pkg } ))

    //Save in css/ folder
    .pipe(gulp.dest('./dist/'));

  });

//Execute the tasks
gulp.task('default', ['concat']);
