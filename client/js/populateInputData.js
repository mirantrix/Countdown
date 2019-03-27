function populateInputs(inputData){
  const {meses, dias, date} = inputData;
  setMonths(meses);
  setDates(date);
}

function setMonths(input) {
  const monthElement = document.getElementById('month');

  function iterateMonths(month){
    let option = document.createElement('option');
    option.value = month;
    monthElement.appendChild(option)
    return;
  }

  input.map(iterateMonths);
}

function setDates(input) {
  const dateElement = document.getElementById('date');

  function iterateDates(dates){
    let option = document.createElement('option');
    option.value = dates;
    dateElement.appendChild(option)
    return;
  }

  input.map(iterateDates);
}
