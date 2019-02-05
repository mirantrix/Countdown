

(function getLocalGames(team){
	var ul = document.getElementById('upCommingGames');
	var ul2 = document.getElementById('unConfirmed');

	for(var i = 0; i < games.length; i++){

		if((games[i].local == team || games[i].visiting == team) && (games[i].local !== null && games[i].visiting !== null)){

			let match_at = formatDate(games[i].match_at);
			let match = games[i].local + " vs " + games[i].visiting;
			let match_tournament = games[i].tournament;
			let match_city = games[i].city;

			let li = document.createElement('li');
			let h3 = document.createElement('h3');
			let p2 = document.createElement('p');
			let p3 = document.createElement('p');
			let p4 = document.createElement('p');

			h3.innerHTML = match_at;
			p2.innerHTML = match;
			p3.innerHTML = match_tournament;
			p4.innerHTML = match_city;

			li.appendChild(h3);
			li.appendChild(p2);
			li.appendChild(p3);
			li.appendChild(p4);
			ul.appendChild(li);


		} else {

			let match_at = formatDate(games[i].match_at);
			let match_tournament = games[i].tournament;
			let match_city = games[i].city;

			let li = document.createElement('li');
			let h3 = document.createElement('h3');
			let p2 = document.createElement('p');
			let p3 = document.createElement('p');
			let p4 = document.createElement('p');

			h3.innerHTML = match_at;
			p3.innerHTML = match_tournament;
			p4.innerHTML = match_city;

			li.appendChild(h3);
			li.appendChild(p3);
			li.appendChild(p4);
			ul2.appendChild(li);

		}
	}
})("MEX");



// Display Date

function formatDate(date){
	var value = (new Date(date)).toString();
	var array = value.split(" ").splice(0,4);
	console.log(array[1] + " " + array[2] + " " + array[3]);
	return (array[1] + " " + array[2] + " " + array[3]);
}


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
