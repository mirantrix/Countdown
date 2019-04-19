function getData() {
  const endpoint = 'https://next-fc.herokuapp.com/matches/fmf';
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



// Refactor Date
function matchDateConvertion(matchDate){
  let dateToArray = String(new Date(matchDate)).split(" ");
  let day = dateToArray[0];
  let month = dateToArray[1];
  let date = dateToArray[2];
  let time = dateToArray[4].split(":");
  let hours = time[0];
  let minutes = time[1];

  return {
    day,
    month,
    date,
    hours,
    minutes
  }
}


function iterateMacthes(eachMatch, index){
  let { day, month, date, hours, minutes} = matchDateConvertion(eachMatch.matchDate);
  let matches = document.getElementById('matches');
  let li = document.createElement('li');

  if (index === 0) {
    matches = document.getElementById('upComming-match');
  };

  // Mockup, will Refactor
  li.innerHTML =
      `<div class="match">\
        <div class="match-card">\
          <div class="match-date">\
            <p class="month">${month}</p>\
            <p class="date">${date}</p>\
            <p class="time">${eachMatch.tournament}</p>\
          </div>\
          <div class="match-teams">\
            <ul>\
              <li class="local team-status">\
                <figure>\
                  <img class="team-icon" src= "./public/images/${eachMatch.local.icon}.png">\
                </figure>\
                <h3>${eachMatch.local.abbreviation}</h3>\
              </li>\
              <li class="versus">VS</li>\
              <li class="visiting team-status">\
                <figure>\
                  <img class="team-icon" src= "./public/images/${eachMatch.visiting.icon}.png">\
                </figure>\
                <h3>${eachMatch.visiting.abbreviation}</h3>\
              </li>\
            </ul>\
          </div>\
        </div>\
        <div class="complementary-info">\
          <p class="tournament">${day}, ${hoursConvertion(hours).time}:${minutes} ${hoursConvertion(hours).amPm}</p>\
          <p class="city">${eachMatch.city}</p>\
        </div>\
      </div>`

  matches.appendChild(li);
  return;
}


function countdown(nextMatch) {

  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  const perSecond = 1000;

  function startCountdown() {
    let matchTime = new Date(nextMatch).getTime();
    let now = new Date().getTime();

    let remainder = matchTime - now;

    var getDays = Math.floor(remainder / (1000 * 60 * 60 * 24));
    var getHours = Math.floor((remainder % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var getMinutes = Math.floor((remainder % (1000 * 60 * 60)) / (1000 * 60));
    var getSeconds = Math.floor((remainder % (1000 * 60)) / 1000);

    let timeLeft = {getDays, getHours, getMinutes, getSeconds};

    days.innerHTML = ('0' + timeLeft.getDays).slice(-2);
    hours.innerHTML = ('0' + timeLeft.getHours).slice(-2); timeLeft.getHours;
    minutes.innerHTML = ('0' + timeLeft.getMinutes).slice(-2);
    seconds.innerHTML = ('0' + timeLeft.getSeconds).slice(-2);
  }

  startCountdown();
  setInterval(startCountdown,perSecond);
}

function hoursConvertion(time) {
  console.log(time)
  if (time > 12) {
    return {
      time: time - 12,
      amPm: 'pm'
    }
  }
  return {
    time: time,
    amPm: 'am'
  }
}


function response(text){
  let json = JSON.parse(text);
  countdown(json[0].matchDate);
  json.map(iterateMacthes);
}
