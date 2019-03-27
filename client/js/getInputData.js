function getData() {
  const endpoint = 'http://localhost:8080/api/inputData';
  fetch(endpoint)
  .then(function(response) {
  return response.text();
  })
  .then(function(text) {
    response(text);
    console.log('Request successful');
  })
  .catch(function(error) {
    console.log('Request failed', error)
  });
}


function response(text){

  const response = JSON.parse(text);
  const meses = response[0];
  const dias = response[1];
  const date = response[2];

  populateInputs({meses, dias, date});
}
