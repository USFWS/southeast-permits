(function () {
  'use strict';

  // This script is intended to copy files from the Source folder (src) to the
  // distribution folder (dist).

  var ncp = require('ncp').ncp;
  var path = require('path');
  var glob = require('glob');

  // The src property is the original folder, dest is where it will be copied to
  var filesToCopy = [
    { "src": "src/pdf/*.pdf", "dest": "dist/pdf/" },
    { "src": "src/css/*.css", "dest": "dist/css/" },
    { "src": "src/*.html", "dest": "dist/" }
  ];


  filesToCopy.forEach(function (copy) {
    glob(copy.src, function(err, files) {
      if (err) console.error(err);

      files.forEach( function (file) {
        var dest = copy.dest + path.basename(file);
        
        ncp(file, dest, function (err) {
          if (err) return console.error(err);
        });
      });

    });
  });

})();
