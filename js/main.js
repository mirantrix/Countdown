
function getData() {
  fetch('http://mirantrix.com/api/games/', {credentials: 'same-origin'})
  .then(function(response) {
    console.log(response);
    return response.text();
  })
  .then(function(text) {
    const matches = JSON.parse(text)
    populateHTML(matches);
    console.log('Response successful');
  })
  .catch(function(error) {
    console.log('Request failed', error)
  });
}

function populateHTML(matchData) {
  populateIntroCard(fmf);
  populateFooter(fmf, footer);
  matchData.map(perMatch);
}

function perMatch({ local, visiting, match_date }) {
  const matchCards = document.getElementById('match-cards');
  const div = document.createElement('div');
  const localAndVistingTeams = setMatchDiv(local, visiting);
  const dateOfMatch = setDateDiv(match_date);
  div.className = 'match-card';
  div.appendChild(localAndVistingTeams);
  div.appendChild(dateOfMatch);
  matchCards.appendChild(div);
}

function setMatchDiv(local, visiting) {
  const match = document.getElementById('match-cards');
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  div.className = 'match-teams';
  const localTeam = setTeam(local);
  const visitingTeam =  setTeam(visiting);
  ul.appendChild(localTeam);
  ul.appendChild(visitingTeam);
  div.appendChild(ul);
  return div;
}

function setTeam({ abbreviation, flag, status }) {
  const team = document.createElement('li');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const h3 = document.createElement('h3');
  team.className = status;
  team.className += ' ' + 'team';
  img.className = 'team-icon';
  img.src = `${flag}.png`;
  h3.innerHTML = abbreviation;
  figure.appendChild(img);
  team.appendChild(figure);
  team.appendChild(h3);
  return team;
}

function setDateDiv(match_date) {
  const { getMonth, getDate, getHours, getMinutes } = parseDate(match_date);
  const matchCards = document.getElementById('match-cards');
  const div = document.createElement('div');
  const month = document.createElement('p');
  const date = document.createElement('p');
  const time = document.createElement('p');
  div.className = 'match-date';
  month.className = 'month';
  date.className = 'date';
  time.className = 'time';
  month.innerHTML = getMonth;
  date.innerHTML = getDate;
  time.innerHTML = getHours + ':' + getMinutes + ' pm' + ' pt';
  div.appendChild(month);
  div.appendChild(date);
  div.appendChild(time);
  return div;
}

function parseDate(anyDate) {
  const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octurbe', 'Noviembre', 'Diciembre']
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

function splitDate(input) {
  const newDate = new Date(input);
  const { day, month, date, fullYear, time, hours, minutes } = dateToArray(newDate);
  const getDay = day;
  const getMonth = month;
  const getDate = date;
  const getFullYear = fullYear;
  const getHours = hours;
  const getMinutes = minutes;
  const getTime = getHours + ':' + getMinutes;
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

function dateToArray(dateInput) {
  const dateToStringToArray = dateInput.toString().split(' ');
  const [day, month, date, fullYear, time] = dateToStringToArray;
  const timeArray = time.split(':');
  const [hours, minutes] = timeArray;
  return {day, month, date, fullYear, time, hours, minutes};
}

function populateIntroCard(fmf) {
  const introCard = document.getElementById('intro-card');
  const introCardSection = createIntroCard(fmf);
  introCard.appendChild(introCardSection);
}

function createIntroCard({ name }) {
  const matchCards = document.getElementById('intro-card');
  const container = document.createElement('div');
  const span = document.createElement('span');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  container.className = 'intro container col-90';
  span.className = 'brd-3 col-10 my-lg';
  h1.innerHTML = name;
  p.innerHTML = 'Próximos Partidos';
  container.appendChild(span);
  container.appendChild(h1);
  container.appendChild(p);
  return container;
}

function populateFooter(team, footerData) {
  const { name, description, avatar, tags } = team;
  const { year, legal } = footerData;
  const footer = document.getElementsByTagName('footer')[0];
  footer.id = 'footer';
  const footer_brand = createFooterOwner(team);
  const footer_legal = createFooterLegal(footerData);
  footer.appendChild(footer_brand);
  footer.appendChild(footer_legal);
  return footer;
}

function createFooterOwner({ name, description, avatar }) {
  const section = document.createElement('section');
  section.className = 'footer';
  const matchCards = document.getElementById('footer');
  const container = document.createElement('div');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  container.className = 'footer-brand';
  div.className = 'footer-brand-name';
  p.className = 'siSePuede';
  img.src = avatar + '.png';
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

function createFooterLegal({ year, legal }) {
  const matchCards = document.getElementById('footer');
  const section = document.createElement('section');
  const container = document.createElement('div');
  const legal_year = document.createElement('p');
  const disclaimer_informative = document.createElement('p');
  section.className = 'container';
  container.className = 'footer-legal';
  legal_year.className = 'legal-year';
  disclaimer_informative.className = 'disclaimer-informative';
  legal_year.innerHTML = year;
  disclaimer_informative.innerHTML = legal;
  container.appendChild(legal_year);
  container.appendChild(disclaimer_informative);
  section.appendChild(container);
  return section;
}

function getGameEmojis() {
  const container = document.createElement('div');
  const figure1 = document.createElement('figure');
  const figure2 = document.createElement('figure');
  const figure3 = document.createElement('figure');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  container.className = 'emoji-container';
  container.className += ' ' + 'container';
  img1.className = 'game-emojis';
  img2.className = 'game-emojis';
  img3.className = 'game-emojis';
  img.src = emoji + '.png';
  h3.innerHTML = abbreviation;
  figure1.appendChild(img1);
  figure2.appendChild(img2);
  figure3.appendChild(img3);
  container.appendChild(figure1);
  container.appendChild(figure2);
  container.appendChild(figure3);
  console.log(container);
  return container;
}
