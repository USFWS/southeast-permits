(function () {
  'use strict';

  var replace = require('replace-in-file');
  var moment = require('moment');

  replace({
    files: 'dist/index.html',

    //Replacement to make (can be string or regex)
    replace: /<%= date %>/g,
    with: moment().format('MMMM Do, YYYY')

  }, function(error, changedFiles) {

    //Catch errors
    if (error) return console.error('Error occurred:', error);

    //List changed files
    console.log('Modified files:', changedFiles.join(', '));
  });
})();
