(function () {
  'use strict';

  var rimraf = require('rimraf');
  var imagemin = require('imagemin');
  var imageminJpegtran = require('imagemin-jpegtran');
  var imageminPngquant = require('imagemin-pngquant');

  var input = ['src/images/*.{jpg,png}'];
  var output = 'dist/images/';

  rimraf(output + '*', function () {
    imagemin(input, output, {
      plugins: [
        imageminJpegtran(),
        imageminPngquant()
      ]
    });
  });

})();
