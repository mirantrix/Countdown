
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


var matches = [ { "id": "2019-03-22&MEXvsCHI", "local": {"status":"local", "abbreviation": "MEX", "name": "México", "flag": "./public/images/mex-flag" }, "visiting": {"status":"visiting", "abbreviation": "CHI", "name": "Chile", "flag": "./public/images/chi-flag" }, "match_date": "2019-03-22T19:15:00Z", "stadium": "SDCCU Stadium", "city": "San Diego, CA", "tournament": "Amistoso" }, { "id": "2019-03-26&PARvsMEX", "local": {"status":"local", "abbreviation": "PAR", "name": "Paraguay", "flag": "./public/images/par-flag" }, "visiting": {"status":"visiting", "abbreviation": "MEX", "name": "México", "flag": "./public/images/mex-flag" }, "match_date": "2019-03-26T16:00:00Z", "stadium": "Levi's Stadium", "city": "Santa Clara, CA", "tournament": "Amistoso" }, { "id": "2019-06-05&MEXvsVEN", "local": {"status":"local", "abbreviation": "MEX", "name": "México", "flag": "./public/images/mex-flag" }, "visiting": {"status":"visiting", "abbreviation": "VEN", "name": "Venezuela", "flag": "./public/images/ven-flag" }, "match_date": "2019-06-05T16:00:00Z", "stadium": "Mercedes Benz Stadium", "city": "San Diego, CA", "tournament": "Atlanta, GA" }]


function populateHTML(){

  for (var i = 0; i < matches.length; i++) {
    let matchCards = document.getElementById('match-cards');
    let div = document.createElement('div');

    let match = setMatchDiv(matches[i].local, matches[i].visiting);
    let match_date = setDateDiv(matches[i].match_date);

    div.className = "match-card";

    div.appendChild(match);
    div.appendChild(match_date);
    matchCards.appendChild(div);

  }
  console.log(document.getElementById('match-cards'));
}


function setMatchDiv(local, visiting){

  let match = document.getElementById('match-cards');
  let div = document.createElement('div');
  let ul = document.createElement('ul');

  div.className = "match-teams";

  var localTeam = setTeam(local);
  var visitingTeam =  setTeam(visiting);

  ul.appendChild(localTeam);
  ul.appendChild(visitingTeam);

  div.appendChild(ul);
  return div;
}


function setDateDiv(match_date){

  let match = parseDate(match_date);

  let matchCards = document.getElementById('match-cards');
  let div = document.createElement('div');
  let month = document.createElement('p');
  let date = document.createElement('p');
  let time = document.createElement('p');

  div.className = "match-date";
  month.className = "month";
  date.className = "date";
  time.className = "time";

  month.innerHTML = match.getMonth;
  date.innerHTML = match.getDate;
  time.innerHTML = match.getHours + ":" + match.getMinutes + " pm" + " pt";

  div.appendChild(month);
  div.appendChild(date);
  div.appendChild(time);

  return div;
}


function setTeam(localOrVisiting) {

  console.log(localOrVisiting);

  let teamName = localOrVisiting.abbreviation;
  let imgSrc = localOrVisiting.flag;
  let status = localOrVisiting.status;

  let team = document.createElement('li');
  let figure = document.createElement('figure');
  let img = document.createElement('img');
  let h3 = document.createElement('h3');

  team.className = status;
  team.className += " " + "team";
  img.className = "team-icon";
  img.src = imgSrc + ".png";

  h3.innerHTML = teamName;

  figure.appendChild(img);
  team.appendChild(figure);
  team.appendChild(h3);

  return team;
}


function parseDate(anyDate){
  var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octurbe", "Noviembre", "Diciembre"]

  var date = new Date(anyDate);
  var getDay = date.getDay();
  var getMonth = date.getMonth();
  var getFullYear = date.getFullYear();
  var getDate = date.getDate();
  var getHours = date.getUTCHours();
  var getMinutes = date.getMinutes();
  var getSeconds = date.getSeconds();
  var getMilliseconds = date.getTime();
  var getNow = Date.now();


  var parsedDate = {
    getDay: dias[getDay],
    getMonth: meses[getMonth],
    getFullYear: getFullYear,
    getDate : ('0' + getDate).slice(-2),
    getHours: getHours,
    getMinutes: ('0' + getMinutes).slice(-2),
    getSeconds: getSeconds,
    getMilliseconds: getMilliseconds,
    getNow: getNow
  };

  return parsedDate;
}


function splitDate(anyDate){
  var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octurbe", "Noviembre", "Diciembre"]

  var splitDate = new Date(anyDate).toString();
  var dateArray = splitDate.split(" ");
  var getDay =  dateArray[0];
  var getMonth =  dateArray[1];
  var getDate =  dateArray[2];
  var getFullYear =  dateArray[3];
  var timeArray =  dateArray[4].split(":");
  var getHours = timeArray[0];
  var getMinutes = timeArray[1];
  var getTime = getHours + ":" + getMinutes;


  var splitedDate = {
    getDay: getDay,
    getMonth: getMonth,
    getFullYear: getFullYear,
    getDate : getDate,
    getHours: getHours,
    getMinutes: getMinutes,
    getTime: getTime
  };

  return splitedDate;
}
