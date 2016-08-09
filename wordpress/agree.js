'use strict';

jQuery(document).ready(function () {
  var submitURL = $('#btn-inscript').attr('href');

  $('#agreed').change(function () {
    if ($(this).is(':checked')) {
      $('#btn-inscript').attr('href', submitURL + '&mpec_agree=true');
      console.log('check');
    } else {
      $('#btn-inscript').attr('href', submitURL);
      console.log('uncheck');
    }
  });
});
