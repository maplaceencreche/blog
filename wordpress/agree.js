'use strict';

$(function () {
  var submitURL = $('#btn-inscript').attr('href');
  console.log(submitURL);

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
