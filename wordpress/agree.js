'use strict';

jQuery(document).ready(function () {
  var submitURL = $('#btn-inscript').attr('href');

  $('#agreed').change(function () {
    if ($('#agree').is(':checked')) {
      $('#btn-inscript').attr('href', submitURL + '&mpec_agree=true');
    } else {
      $('#btn-inscript').attr('href', submitURL);
    }
  });
});
