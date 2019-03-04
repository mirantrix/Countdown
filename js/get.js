
function getData(){

  fetch('http://mirantrix.com/api/games/', {credentials: 'same-origin'})
  .then(function(response) {
    console.log(response);
    return response.text();
  })
  .then(function(text) {
    var obj = JSON.parse(text)
    for (var i = 0; i < obj.length; i++) {
      console.log(obj[i].local.abbreviation + " vs " + obj[i].visiting.abbreviation)
    }
    console.log('Request successful');
  })
  .catch(function(error) {
    console.log('Request failed', error)
  });
}
