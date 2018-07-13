// vendor dependencies
const gulp = require('gulp-help')(require('gulp'));
const gulpSequence = require('gulp-sequence');
const uglify = require('gulp-uglify');
const shell = require('gulp-shell');
const Plugins = require('gulp-load-plugins')({
  camelize: true, // transforms hyphenated plugins names to camel case
  lazy: true // whether plugins should be lazy loaded on demand
});

const argv = require('yargs').argv;

// set src paths
const paths = {
  all: ['*.js', '**/*.js', '!**/ignore.*', '!node_modules/**'],
  test: ['tests/**/*.js', '!tests/**/ignore.*'],
  minify: ['js/*.js'],
  exclude: '!**/ignore.*'
};

// Available options
const options = {
  options: {
    'env':        '   Set environment.',
    'glob':       '   Set subset via glob pattern.',
  }
};

// eslint - all
gulp.task('lint-all', 'Lint all JS files.', () =>
  gulp.src(paths.all)
    .pipe(Plugins.eslint())
    .pipe(Plugins.eslint.format())
);

// eslint - subset
gulp.task('lint-subset', 'Lint a subset of JS files.', () => {
  // default to all paths if glob pattern does not exist
  let globPattern = argv.glob || paths.all;
  return gulp.src(globPattern)
    .pipe(Plugins.eslint())
    .pipe(Plugins.eslint.format());
}, options);

// minify js files
gulp.task('minify','minifying js code', () => {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('minjs'));
});

gulp.task('dev', gulpSequence('lint-all', 'developer'));

gulp.task('prod', gulpSequence('minify', 'build', 'start'));

gulp.task('build', shell.task('npm run build'));

gulp.task('start', shell.task('npm run start'));

gulp.task('developer', shell.task('npm run dev'));
