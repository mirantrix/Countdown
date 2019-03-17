function getData() {
  fetch('http://localhost:8080/matches') // http://mirantrix.com/api/games/
  .then(function(response) {
  return response.text();
})
.then(function(text) {
  populateHTML(JSON.parse(text));
  console.log('Request successful', typeof text);
})
.catch(function(error) {
  console.log('Request failed', error)
});
}



/*
function getData() {
  fetch('http://mirantrix.com/api/games/')
    .then(res => {
      return res.text()
    })
    .then(matches => {
      populateHTML(matches);
      console.log('Response successful');
    })
    .catch(function(error) {
      console.log('Request failed', error);
    });
}
*/
