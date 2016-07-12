(function() {
  'use strict';
  var filter = require('lodash.filter');
  var xhr = require('xhr');

  var templates = {
    result: require('./result.jade'),
    error: require('./error.jade')
  };

  var permits,
      output = document.querySelector('.output'),
      search = document.getElementById('permit-search'),
      url = './data/permits.js';

  function getOffices () {
    xhr.get(url, function (err, res, body) {
      if (err || res.statusCode !== 200) output.innerHTML = templates.error({ error: 'Could not download permit data.' })
      permits = JSON.parse(body);
      search.addEventListener('keyup', searchPermits);
    });
  }

  // Turn into a function instead of anonymous callback
  function searchPermits (e) {
    var query = e.target.value,
        match;

    if (query.length < 6) {
      output.innerHTML = '';
      return;
    }

    match = filter(permits, function (permit) {
      return permit.number === query;
    });

    if (match.length === 1) output.innerHTML = templates.result({ data: match[0] });
    else if (query.length > 5 && match.length === 0) output.innerHTML = templates.error({ error: 'Permit number did not match any of our records.' });
  }

  getOffices();

}());
