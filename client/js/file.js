
const footer = {
  year: "2019",
  legal: "Sitio de Carácter Informativo",
}

const fmf = {
  owner: "FMF",
  name: "Selección Mexicana",
  avatar : "./public/images/mex-flag",
  description: "#siSePuede",
  tags: {
    owner: "FMF",
    name: "Selección Mexicana",
    calendario: "Calendario",
    proximosPartidos: "Próximos Partidos",
    elTri: "El Tri",
    ponteLaVerde: "Ponte La Verde",
    laSelección: "La Selección",
    proximosPartidos: "Próximos Partidos",
    mexico: "México"
  }
}


function populateHTML(matches){

  console.log(matches);

  countdown(matches[0].match_date);

  populateIntroCard(fmf);
  populateFooter(fmf, footer);

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

}

function countdown(nextMatch){
  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  const perSecond = 1000;

  function startCountdown(){
    let now = parseDate(new Date()).getMilliseconds;
    let matchTime = parseDate(nextMatch).getMilliseconds;
    let timeLeft = parseDate(matchTime - now);

    days.innerHTML = timeLeft.getMillisecondsToDays;
    hours.innerHTML = timeLeft.getHours;
    minutes.innerHTML = timeLeft.getMinutes;
    seconds.innerHTML = timeLeft.getSeconds;
  }

  startCountdown();
  setInterval(startCountdown,perSecond);
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
  time.innerHTML = hoursConvertion(getHours).time + ":" + getMinutes + " " + hoursConvertion(getHours).amPm + " pt";

  div.appendChild(month);
  div.appendChild(date);
  div.appendChild(time);

  return div;
}


function parseDate(anyDate){
  const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octurbe", "Noviembre", "Diciembre"]

  const date = new Date(anyDate);
  const getNow = Date.now();

  const getDay = dias[date.getDay()];
  const getMonth = meses[date.getMonth()];
  const getFullYear = date.getFullYear();
  const getDate = date.getDate();
  const getHours = ('0' + date.getHours()).slice(-2);
  const getMinutes = ('0' + date.getMinutes()).slice(-2);
  const getSeconds = ('0' + date.getSeconds()).slice(-2);
  const getMilliseconds = date.getTime();
  const getMillisecondsToDays = Math.floor(getMilliseconds / ( 1000 * 60 * 60 * 24));


  const parsedDate = {
    getDay,
    getMonth,
    getFullYear,
    getDate,
    getHours,
    getMinutes,
    getSeconds,
    getMilliseconds,
    getMillisecondsToDays,
    getNow
  };

  return parsedDate;
}

function hoursConvertion(time){
  if(time > 12){
    return {
      time: time - 12,
      amPm: "pm"
    }
  }
  return {
    time: time,
    amPm: "am"
  }
}


function splitDate(input){

  const newDate = new Date(input);

  function dateToArray(dateInput) {
    const dateToStringToArray = dateInput.toString().split(" ");
    const [day, month, date, fullYear, time] = dateToStringToArray;
    const timeArray = time.split(":");
    const [hours, minutes, seconds] = timeArray;
    return {day, month, date, fullYear, time, hours, minutes, seconds};
  }

  const {day, month, date, fullYear, time, hours, minutes, seconds} = dateToArray(newDate);

  const getDay =  day;
  const getMonth =  month;
  const getDate =  date;
  const getFullYear =  fullYear;
  const getHours = hours;
  const getMinutes = minutes;
  const getSeconds = seconds;
  const getTime = getHours + ":" + getMinutes;
  const getFullTime = getHours + ":" + getMinutes + ":" + getSeconds;

  const splitedDate = {
    getDay,
    getMonth,
    getFullYear,
    getDate,
    getHours,
    getMinutes,
    getTime,
    getFullTime
  };

  return splitedDate;
}



function populateIntroCard(fmf){
  const introCard = document.getElementById('intro-card');
  const introCardSection = createIntroCard(fmf);
  introCard.appendChild(introCardSection);
}



function createIntroCard({name}){

  const matchCards = document.getElementById('intro-card');
  const container = document.createElement('div');
  const span = document.createElement('span');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  container.className = "intro container col-90";
  h1.className = "mt-lg";
  span.className = "brd-3 col-10 mt-md";

  h1.innerHTML = name;
  p.innerHTML = "#siSePuede";

  container.appendChild(h1);
  container.appendChild(p);
  container.appendChild(span);

  return container;
}


function populateFooter(team, footerData){

  const {name, description, avatar, tags} = team;
  const {year, legal } = footerData;

  const footer = document.getElementsByTagName('footer')[0];
  footer.id = "footer";

  const footer_brand = createFooterOwner(team);
  const footer_legal = createFooterLegal(footerData);

  footer.appendChild(footer_brand);
  footer.appendChild(footer_legal);

  return footer;
}


function createFooterOwner({name, description, avatar}){

  const section = document.createElement('section');
  section.className = "footer";

  const matchCards = document.getElementById('footer');
  const container = document.createElement('div');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  container.className = "footer-brand";
  div.className = "footer-brand-name";
  p.className = "siSePuede";

  img.src = avatar + ".png";
  h3.innerHTML = name;
  p.innerHTML = description;

  figure.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  container.appendChild(figure);
  container.appendChild(div);
  section.appendChild(container);

  return section;

}


function createFooterLegal({year, legal}){

  const matchCards = document.getElementById('footer');
  const section = document.createElement('section');
  const container = document.createElement('div');
  const legal_year = document.createElement('p');
  const disclaimer_informative = document.createElement('p');

  section.className = "container";
  container.className = "footer-legal";
  legal_year.className = "legal-year";
  disclaimer_informative.className = "disclaimer-informative";

  legal_year.innerHTML = year;
  disclaimer_informative.innerHTML = legal;

  container.appendChild(legal_year);
  container.appendChild(disclaimer_informative);
  section.appendChild(container);

  return section;
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
