// DEPENDENCY INVERSION PRINCIPLE

// FAKE AJAX CALL
$.get("/address/to/date", function (data) {
  $('#thingy1').text(data.property1)
  $('thingy2').text(data.property2);
});




// BELOW WOULD BE THE BEST WAY TO DO IT
function fillFromServer(url, view) {
  $get(url, function (data) {
    view.setValues(data);
  })
}


const thingyView = {
  setValues: function (data) {
    $('thingy1').text(data.property1);
    $('thingy2').text(data.property2);
  }
}


fillFromServer("/address/to/data", thingyView)
