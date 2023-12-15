var vfs = require('vinyl-fs');
var map = require('map-stream');
var crypto = require('crypto');
var sort = require('gulp-sort');

let combined = '';
let sortedCombined = '';

var log = function (file, cb) {
  combined = combined + file.path;
  cb(null, file);
};

var logSorted = function (file, cb) {
  sortedCombined = sortedCombined + file.path;
  cb(null, file);
};

var hash = function() {
  let hash = crypto.createHash('md5').update(combined).digest('hex');
  console.log("Unsorted hash is: " + hash);

  let sortedHash = crypto.createHash('md5').update(sortedCombined).digest('hex');
  console.log("Sorted hash is: " + sortedHash);
}

vfs
  .src(['node_modules/**/*.js'])
  .pipe(map(log))
  .pipe(sort())
  .pipe(map(logSorted))
  .on('end', hash);
