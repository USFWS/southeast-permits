(function () {
  var permits = /*@echo permits*/,
      $output = $('.output'),
      $search = $('#permit-search'),
      html = '';

  $search.on('keyup', function () {
    var query = $(this).val(),
        match;

    if (query.length < 6) return;

    match = $.grep(permits, function (permit) {
      return permit.number === query;
    });

    if (match.length === 1) {
      html = 'Status: ' + match[0].status + '<br>';
      html += 'Federal Register Status: ' + match[0].fed_register;
      $output.empty().append(html);

    } else if (query.length < 6 && match.length === 0) {
      $output.empty().append('An error occurred. Could not lookup permit number.');
    }
  });
})();
