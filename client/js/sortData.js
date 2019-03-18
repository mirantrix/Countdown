

function fetchDataFromEndpoint(matches, data){
  const getUpComingMatches = previousAndUpcomming(matches).getUpCommingMatches;
  populateHTML(getUpComingMatches, data);
}

function previousAndUpcomming(matches) {
  function indexForPreviousAndUpcomming(matchesInAscendingOrder) {
    for (var index = 0; index < matchesInAscendingOrder.length; index++) {
      let matchMilliseconds = parseDate(matchesInAscendingOrder[index].match_date).getMilliseconds;
      let getTime = new Date().getTime();
      let timeLeft = matchMilliseconds - getTime;
      if(timeLeft > 0) {
        return index;
      }
    }
  }

  let matchesInAscendingOrder = sortByDate(matches).inAscendingOrder;
  let upCommingMatchesStartAt = indexForPreviousAndUpcomming(matchesInAscendingOrder);
  let previousMatches = [];
  let upCommingMatches = [];

  getPreviousMatches = matchesInAscendingOrder.slice(0, upCommingMatchesStartAt);
  getUpCommingMatches = matchesInAscendingOrder.slice(upCommingMatchesStartAt, matchesInAscendingOrder.length);

  return {
    getPreviousMatches: getPreviousMatches,
    getUpCommingMatches: getUpCommingMatches
  }
}

function sortByDate(matches) {
  function ascendingOrder(compareDateA, compareDateB) {
    let upComming = parseDate(compareDateA.match_date).getMilliseconds;
    let farComming = parseDate(compareDateB.match_date).getMilliseconds;
    return upComming - farComming;
  }

  function inAscendingOrder(matches) {
    let upCommingMatches = matches.sort(ascendingOrder);
    return upCommingMatches;
  }

  return {
    inAscendingOrder: inAscendingOrder(matches)
  }
}
