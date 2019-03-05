
function getData(){

  fetch('http://mirantrix.com/api/games/', {credentials: 'same-origin'})
  .then(function(response) {
    console.log(response);
    return response.text();
  })
  .then(function(text) {
    var matches = JSON.parse(text)
    getGamesData(matches)
    console.log('Response successful');
  })
  .catch(function(error) {
    console.log('Request failed', error)
  });
}


var matches = [ { "id": "2019-03-22&MEXvsCHI", "local": { "abbreviation": "MEX", "name": "México", "flag": "./images/mex-flag" }, "visiting": { "abbreviation": "CHI", "name": "Chile", "flag": "./images/chi-flag" }, "match_at": "2019-03-22T19:15:00Z", "stadium": "SDCCU Stadium", "city": "San Diego, CA", "tournament": "Amistoso" }, { "id": "2019-03-26&PARvsMEX", "local": { "abbreviation": "PAR", "name": "Paraguay", "flag": "./images/par-flag" }, "visiting": { "abbreviation": "MEX", "name": "México", "flag": "./images/mex-flag" }, "match_at": "2019-03-26T16:00:00Z", "stadium": "Levi's Stadium", "city": "Santa Clara, CA", "tournament": "Amistoso" }, { "id": "2019-06-05&MEXvsVEN", "local": { "abbreviation": "MEX", "name": "México", "flag": "./images/mex-flag" }, "visiting": { "abbreviation": "VEN", "name": "Venezuela", "flag": "./images/ven-flag" }, "match_at": "2019-06-05T16:00:00Z", "stadium": "Mercedes Benz Stadium", "city": "San Diego, CA", "tournament": "Atlanta, GA" }]


function populateHTML(matches){
  setMatchDiv();
  console.log(document.getElementById('match-cards'));
}


function setMatchDiv(){

  let match = document.getElementById('match-cards');
  let div = document.createElement('div');
  let ul = document.createElement('ul');

  div.className = "match";

  var localTeam = setTeam("local");
  var visitingTeam =  setTeam("visiting");

  ul.appendChild(localTeam);
  ul.appendChild(visitingTeam);

  div.appendChild(ul);
  match.appendChild(div);
}




function setTeam(status) {

  let teams = matches[0];

  let teamName = teams[status].abbreviation;
  let imgSrc = teams[status].flag;

  let team = document.createElement('li');
  let figure = document.createElement('figure');
  let img = document.createElement('img');
  let h3 = document.createElement('h3');

  team.className = status;
  team.className += " " + "team";
  img.className = "team-icon";
  img.src = imgSrc;

  h3.innerHTML = teamName;

  figure.appendChild(img);
  team.appendChild(figure);
  team.appendChild(h3);

  return team;
}
