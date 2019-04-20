const hoursConvertion = (time) => {
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

const matchDateConvertion = (matchDate) => {
  let dateToArray = String(new Date(matchDate)).split(" ");
  let day = dateToArray[0];
  let month = dateToArray[1];
  let date = dateToArray[2];
  let time = dateToArray[4].split(":");
  let hours = time[0];
  let minutes = time[1];
  let gameTime = `${day}, ${hoursConvertion(hours).time}:${minutes} ${hoursConvertion(hours).amPm}`

  return {
    day,
    month,
    date,
    hours,
    minutes,
    gameTime
  }
}

export default {
  matchDateConvertion
};
