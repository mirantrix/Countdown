function getTimer(nextMatch) {

  const days = document.getElementById('days');
  const hours = document.getElementById('hours');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');

  const perSecond = 1000;

  function startCountdown() {
    let matchTime = new Date(nextMatch).getTime();
    let now = new Date().getTime();

    let remainder = matchTime - now;

    let getDays = Math.floor(remainder / (1000 * 60 * 60 * 24));
    let getHours = Math.floor((remainder % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let getMinutes = Math.floor((remainder % (1000 * 60 * 60)) / (1000 * 60));
    let getSeconds = Math.floor((remainder % (1000 * 60)) / 1000);

    let timeLeft = {getDays, getHours, getMinutes, getSeconds};

    console.log(timeLeft);

    /*
    days.innerHTML = ('0' + timeLeft.getDays).slice(-2);
    hours.innerHTML = ('0' + timeLeft.getHours).slice(-2);
    minutes.innerHTML = ('0' + timeLeft.getMinutes).slice(-2);
    seconds.innerHTML = ('0' + timeLeft.getSeconds).slice(-2);
    */
  }

  startCountdown();
  setInterval(startCountdown,perSecond);

}



export default {
  getTimer
};
