

(function getLocalGames(team){
	var ul = document.getElementById('upCommingGames');
	for(var i = 0; i < games.length; i++){
		if(games[i].local == team || games[i].visiting == team){

			var match = games[i].local + " vs " + games[i].visiting;
			var match_at = games[i].match_at;


			var li = document.createElement('li');
			var p1 = document.createElement('p');
			var p2 = document.createElement('p');
			p1.innerHTML = match;
			p2.innerHTML = match_at;
			li.appendChild(p1);
			li.appendChild(p2);
			ul.appendChild(li);
		}
	}
})("JAM");



// Display Date
function displayDate(){


	// Total Remainder
	var remainingTime = (gameTime(nextDate) - actualTime());

	// Remainder of each
	var seconds = Math.floor((remainingTime % sec) / 1000),
		minutes = Math.floor((remainingTime % min) / sec),
		hours = Math.floor((remainingTime % hrs) / min ),
		days = Math.floor(remainingTime % dys / hrs);

	var secondsLeftId = document.getElementById('secondsLeft'),
		minutesLeftId = document.getElementById('minutesLeft'),
		hoursLeftId = document.getElementById('hoursLeft'),
		daysLeftId = document.getElementById('daysLeft');


	// Display Remainder
	if(remainingTime < 0){
		window.location.reload();
		//stopInterval();
	} else {
		secondsLeftId.innerHTML = ("0" + seconds).slice(-2);
		minutesLeftId.innerHTML = ("0" + minutes).slice(-2);
		hoursLeftId.innerHTML = ("0" + hours).slice(-2);
		daysLeftId.innerHTML = ("0" + days).slice(-2);
	}

};
