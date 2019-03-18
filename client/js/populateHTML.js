
function populateHTML(matches, data) {
  jumbotron(data.media.jumbotron);
  populateProximoPartido();
  populateIntroCard();
  matches.map(toDOM);
  populateFooter(data.fmf, data.footer);
}


// Refactor
function jumbotron(image) {
  const jumbotron = getId('jumbotron');
  jumbotron.innerHTML = '<img src=' + '" ' + image + '.gif' + '" ' + 'alt="">';
}

function toDOM({local, visiting, match_date, stadium, city, tournament}, index) {
  let matchCards = getId('match-cards');

  if(index === 0) {
    matchCards = getId('upComming-match');
    countdown(match_date);
  };

  const match = setTag('div');
  const dateAndMatchDiv = setTag('div');

  match.className = "match";
  dateAndMatchDiv.className = "match-card";

  const getTeams = setLocalAndVisitingTeamDiv(local, visiting);
  const getDate = setMatchDateDiv(match_date);
  const getMoreInfo = setMoreInfoDiv({stadium, city, tournament});

  dateAndMatchDiv.appendChild(getDate);
  dateAndMatchDiv.appendChild(getTeams);
  match.appendChild(dateAndMatchDiv);
  match.appendChild(getMoreInfo);
  return matchCards.appendChild(match);
}

function countdown(nextMatch) {
  countdownHTML();

  const days = getId('days');
  const hours = getId('hours');
  const minutes = getId('minutes');
  const seconds = getId('seconds');

  const perSecond = 1000;

  function startCountdown() {
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

// Refactor
function countdownHTML() {
  const countdown = getId('countdown');
  const html = '<div id="countdown-clock" class="row justify-center align-center">\
    <div class="falta-container">\
      <p class="faltan">Faltan</p>\
    </div>\
    <div class="timer-blocks">\
      <p id="days" class="time-value"></p>\
      <p class="time-indicator">DÍAS</p>\
    </div>\
    <div class="timer-blocks">\
      <p class="time-symbol">.</p>\
    </div>\
    <div class="timer-blocks">\
      <p id="hours" class="time-value"></p>\
      <p class="time-indicator">HRS</p>\
    </div>\
    <div class="timer-blocks">\
      <p class="time-symbol">:</p>\
    </div>\
    <div class="timer-blocks">\
      <p id="minutes" class="time-value"></p>\
      <p class="time-indicator">MIN</p>\
    </div>\
    <div class="timer-blocks">\
      <p class="time-symbol">:</p>\
    </div>\
    <div class="timer-blocks">\
      <p id="seconds" class="time-value"></p>\
      <p class="time-indicator">SEG</p>\
    </div>\
  </div>';

  countdown.innerHTML = html;
}


function setLocalAndVisitingTeamDiv(local, visiting) {
  const match = getId('match-cards');
  const div = setTag('div');
  const ul = setTag('ul');
  const versus = setTag('li');

  div.className = "match-teams";
  versus.className = "versus";

  const getLocalTeam = setTeam(local);
  const getVisitingTeam =  setTeam(visiting);
  versus.innerHTML = "VS";

  ul.appendChild(getLocalTeam);
  ul.appendChild(versus);
  ul.appendChild(getVisitingTeam);

  div.appendChild(ul);
  return div;
}

function setTeam({abbreviation, flag, status}) {
  const teamStatus = setTag('li');
  const teamIconDiv = setTag('figure');
  const teamIcon = setTag('img');
  const h3 = setTag('h3');

  teamStatus.className = status;
  teamStatus.className += " " + "team-status";
  teamIcon.className = "team-icon";
  teamIcon.src = flag + ".png";

  h3.innerHTML = abbreviation;

  teamIconDiv.appendChild(teamIcon);
  teamStatus.appendChild(teamIconDiv);
  teamStatus.appendChild(h3);

  return teamStatus;
}

function setMatchDateDiv(match_date) {
  const {getMonth, getDate, getDay, getHours, getMinutes} = parseDate(match_date);
  const matchCards = getId('match-cards');
  const div = setTag('div');
  const month = setTag('p');
  const date = setTag('p');
  const time = setTag('p');

  div.className = "match-date";
  month.className = "month";
  date.className = "date";
  time.className = "time";

  month.innerHTML = getMonth.toUpperCase();
  date.innerHTML = getDate;
  time.innerHTML = getDay.substring(0, 3) + ", " + hoursConvertion(getHours).time + ":" + getMinutes + " " + hoursConvertion(getHours).amPm;

  div.appendChild(month);
  div.appendChild(date);
  div.appendChild(time);

  return div;
}

function setMoreInfoDiv(info) {
  const {stadium, city, tournament} = info;
  const div = setTag('div');
  const tournamentData = setTag('p');
  const cityData = setTag('p');

  div.className = "complementary-info";
  tournamentData.className = "tournament";
  cityData.className = "city";

  tournamentData.innerHTML = tournament;
  cityData.innerHTML = '@ ' + city;

  div.appendChild(tournamentData);
  div.appendChild(cityData);

  return div;
}



function parseDate(anyDate) {
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

function hoursConvertion(time) {
  if(time > 12) {
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

function splitDate(input) {

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



function populateIntroCard(fmf) {
  const introCard = getId('intro-card');
  const introCardSection = createIntroCard('Calendario:', 'Más Partidos!');
  introCard.appendChild(introCardSection);
}

function populateProximoPartido() {
  const introCard = getId('upComming-match');
  const introCardSection = createIntroCard('Próximo Partido:', 'Vamos a Ganar!');
  introCard.appendChild(introCardSection);
}

function createIntroCard(title, subTitle) {

  const matchCards = getId('intro-card');
  const container = setTag('div');
  const span = setTag('span');
  const h2 = setTag('h2');
  const p = setTag('p');

  container.className = "intro container col-90";
  h2.className = "";
  span.className = "col-10 mt-xs";

  h2.innerHTML = title;
  p.innerHTML = subTitle;

  container.appendChild(p);
  container.appendChild(h2);
  container.appendChild(span);

  return container;
}


function populateFooter(team, footerData) {
  const {name, description, avatar, setTags} = team;
  const {year, legal } = footerData;

  const footer = getId('footer');

  const footer_brand = createFooterOwner(team);
  const footer_legal = createFooterLegal(footerData);

  footer.appendChild(footer_brand);
  footer.appendChild(footer_legal);

  return footer;
}


function createFooterOwner({name, description, avatar}) {

  const section = setTag('section');
  section.className = "footer container col-90";

  const matchCards = getId('footer');
  const container = setTag('div');
  const figure = setTag('figure');
  const img = setTag('img');
  const div = setTag('div');
  const h3 = setTag('h3');
  const p = setTag('p');

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

function createFooterLegal({year, legal}) {
  const matchCards = getId('footer');
  const section = setTag('section');
  const container = setTag('div');
  const legal_year = setTag('p');
  const disclaimer_informative = setTag('p');

  section.className = "container col-90";
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

function getGameEmojis() {
  const container = setTag('div');
  const figure1 = setTag('figure');
  const figure2 = setTag('figure');
  const figure3 = setTag('figure');
  const img1 = setTag('img');
  const img2 = setTag('img');
  const img3 = setTag('img');

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

function setTag(name){
  return document.createElement(name);
};

function getId(name){
  return document.getElementById(name);
};
