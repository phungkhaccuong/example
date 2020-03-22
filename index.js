$.ajax({
    data: someData,
    dataType: 'json',
    url: '/path/to/script',
    success: function(data, textStatus, jqXHR) {
    // When AJAX call is successfuly
      console.log('AJAX call successful.');
      console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
     // When AJAX call has failed
      console.log('AJAX call failed.');
      console.log(textStatus + ': ' + errorThrown);
    },
    complete: function() {
    // When AJAX call is complete, will fire upon success or when error is thrown
      console.log('AJAX call completed');
    }
  })