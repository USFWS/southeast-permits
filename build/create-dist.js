(function () {
  'use strict';

  var mkdirp = require('mkdirp');

  var directories = ['dist/css', 'dist/images', 'dist/js', 'dist/pdf', 'dist/data'];

  directories.forEach( function(dir) {
    mkdirp(dir, function (err) {
      if (err) console.error(err);
    });
  });
})();
