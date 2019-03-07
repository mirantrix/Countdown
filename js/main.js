
function getData(){

  fetch('http://mirantrix.com/api/games/', {credentials: 'same-origin'})
  .then(function(response) {
    console.log(response);
    return response.text();
  })
  .then(function(text) {
    const matches = JSON.parse(text)
    getGamesData(matches)
    console.log('Response successful');
  })
  .catch(function(error) {
    console.log('Request failed', error)
  });
}


var matches = [ { "id": "2019-03-22&MEXvsCHI", "local": {"status":"local", "abbreviation": "MEX", "name": "México", "flag": "./public/images/mex-flag" }, "visiting": {"status":"visiting", "abbreviation": "CHI", "name": "Chile", "flag": "./public/images/chi-flag" }, "match_date": "2019-03-22T19:15:00Z", "stadium": "SDCCU Stadium", "city": "San Diego, CA", "tournament": "Amistoso" }, { "id": "2019-03-26&PARvsMEX", "local": {"status":"local", "abbreviation": "PAR", "name": "Paraguay", "flag": "./public/images/par-flag" }, "visiting": {"status":"visiting", "abbreviation": "MEX", "name": "México", "flag": "./public/images/mex-flag" }, "match_date": "2019-03-26T16:00:00Z", "stadium": "Levi's Stadium", "city": "Santa Clara, CA", "tournament": "Amistoso" }, { "id": "2019-06-05&MEXvsVEN", "local": {"status":"local", "abbreviation": "MEX", "name": "México", "flag": "./public/images/mex-flag" }, "visiting": {"status":"visiting", "abbreviation": "VEN", "name": "Venezuela", "flag": "./public/images/ven-flag" }, "match_date": "2019-06-05T16:00:00Z", "stadium": "Mercedes Benz Stadium", "city": "San Diego, CA", "tournament": "Atlanta, GA" }]


function populateHTML(){

  console.log(splitDate("2019-06-05T16:00:00Z"));

  for (let i = 0; i < matches.length; i++) {
    const matchCards = document.getElementById('match-cards');
    const div = document.createElement('div');

    const match = setMatchDiv(matches[i].local, matches[i].visiting);
    const match_date = setDateDiv(matches[i].match_date);

    div.className = "match-card";

    div.appendChild(match);
    div.appendChild(match_date);
    matchCards.appendChild(div);

  }
  console.log(document.getElementById('match-cards'));
}


function setMatchDiv(local, visiting){

  const match = document.getElementById('match-cards');
  const div = document.createElement('div');
  const ul = document.createElement('ul');

  div.className = "match-teams";

  const localTeam = setTeam(local);
  const visitingTeam =  setTeam(visiting);

  ul.appendChild(localTeam);
  ul.appendChild(visitingTeam);

  div.appendChild(ul);
  return div;
}


function setDateDiv(match_date){

  const {getMonth, getDate, getHours, getMinutes} = parseDate(match_date);

  const matchCards = document.getElementById('match-cards');
  const div = document.createElement('div');
  const month = document.createElement('p');
  const date = document.createElement('p');
  const time = document.createElement('p');

  div.className = "match-date";
  month.className = "month";
  date.className = "date";
  time.className = "time";

  month.innerHTML = getMonth;
  date.innerHTML = getDate;
  time.innerHTML = getHours + ":" + getMinutes + " pm" + " pt";

  div.appendChild(month);
  div.appendChild(date);
  div.appendChild(time);

  return div;
}


function setTeam({abbreviation, flag, status}) {

  const team = document.createElement('li');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const h3 = document.createElement('h3');

  team.className = status;
  team.className += " " + "team";
  img.className = "team-icon";
  img.src = flag+ ".png";

  h3.innerHTML = abbreviation;

  figure.appendChild(img);
  team.appendChild(figure);
  team.appendChild(h3);

  return team;
}


function parseDate(anyDate){
  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octurbe", "Noviembre", "Diciembre"]

  const date = new Date(anyDate);
  const getDay = dias[date.getDay()];
  const getMonth = meses[date.getMonth()];
  const getFullYear = date.getFullYear();
  const getDate = ('0' + date.getDate()).slice(-2);
  const getHours = date.getUTCHours();
  const getMinutes = ('0' + date.getMinutes()).slice(-2);
  const getSeconds = date.getSeconds();
  const getMilliseconds = date.getTime();
  const getNow = Date.now();


  const parsedDate = {
    getDay,
    getMonth,
    getFullYear,
    getDate,
    getHours,
    getMinutes,
    getSeconds,
    getMilliseconds,
    getNow
  };

  return parsedDate;
}


function splitDate(input){

  const newDate = new Date(input);

  function dateToArray(dateInput) {
    const dateToStringToArray = dateInput.toString().split(" ");
    const [day, month, date, fullYear, time] = dateToStringToArray;
    const timeArray = time.split(":");
    const [hours, minutes] = timeArray;
    return {day, month, date, fullYear, time, hours, minutes};
  }

  const {day, month, date, fullYear, time, hours, minutes} = dateToArray(newDate);

  const getDay =  day;
  const getMonth =  month;
  const getDate =  date;
  const getFullYear =  fullYear;
  const getHours = hours;
  const getMinutes = minutes;
  const getTime = getHours + ":" + getMinutes;


  const splitedDate = {
    getDay,
    getMonth,
    getFullYear,
    getDate,
    getHours,
    getMinutes,
    getTime
  };

  return splitedDate;
}


function getGameEmojis(){

  const container = document.createElement('div');
  const figure1 = document.createElement('figure');
  const figure2 = document.createElement('figure');
  const figure3 = document.createElement('figure');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');

  container.className = "emoji-container";
  container.className += " " + "container";
  img1.className = "game-emojis";
  img2.className = "game-emojis";
  img3.className = "game-emojis";
  img.src = emoji + ".png";

  h3.innerHTML = abbreviation;

  figure1.appendChild(img1);
  figure2.appendChild(img2);
  figure3.appendChild(img3);
  container.appendChild(figure1);
  container.appendChild(figure2);
  container.appendChild(figure3);

  return container;

}
