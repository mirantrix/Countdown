

function getLocalGames(team){
	var ul = document.getElementById('upCommingGames');
	var ul2 = document.getElementById('unConfirmed');

	for(var i = 0; i < games.length; i++){

		if((games[i].local == team || games[i].visiting == team) && (games[i].local !== null && games[i].visiting !== null)){

			let match_at = formatDate(games[i].match_at);
			let match_time = formatTime(games[i].match_at);
			let match = "<span class=mex>" + games[i].local + "</span>"+ "<span class=vs> vs </span>" + games[i].visiting;
			let match_tournament = "<span class=torneo>" + games[i].tournament  + "</span>";
			let match_city = "<span class=city>" + games[i].city + "</span>";

			let li = document.createElement('li');
			let div_date = document.createElement('div');
			let div_game = document.createElement('div');
			let h3 = document.createElement('h3');
			let h2 = document.createElement('h2');
			let p2 = document.createElement('p');
			let p3 = document.createElement('p');
			let p4 = document.createElement('p');

			h3.innerHTML = match_at;
			h2.innerHTML = match;
			p2.innerHTML = match_time;
			p3.innerHTML = match_tournament;
			p4.innerHTML = match_city;

			li.className = "row";

			div_date.appendChild(h3);
			div_game.appendChild(h2);
			div_game.appendChild(p2);
			div_game.appendChild(p3);
			div_game.appendChild(p4);
			li.appendChild(div_date);
			li.appendChild(div_game);
			ul.appendChild(li);


		} else {
			continue;

			let match_at = formatDate(games[i].match_at);
			let match_tournament = games[i].tournament;
			let match_city = games[i].city;

			let h4 = document.createElement('h4');

			let li = document.createElement('li');
			let h3 = document.createElement('h3');
			let h2 = document.createElement('p');
			let p3 = document.createElement('p');
			let p4 = document.createElement('p');

			h4.innerHTML = "Por Confirmar";
			h3.innerHTML = match_at;
			p3.innerHTML = match_tournament;
			p4.innerHTML = match_city;

			li.appendChild(h3);
			li.appendChild(p3);
			li.appendChild(p4);
			ul2.appendChild(h4);
			ul2.appendChild(li);

		}
	}
};



// Display Date


function formatTime(date){

	var getHours = new Date(date).getHours();
	var getMinutes = new Date(date).getMinutes();
	var amPM = "pm"

	if(getHours > 12){
		getHours = getHours-12;
	} else {
		amPM = "am";
	}

	if(getHours === 0 && getMinutes === 0){
		console.log("TBD");
		return "TBD";

	} else {

		console.log(getHours + " : " + getMinutes);
		return (
			"<span class=time><span class=hours> " + ('0' + getHours).slice(-2).toString() + "</span>" + " : " +
			"<span class=minutes> " + ('0' + getMinutes).slice(-2).toString() + "</span></span>" + "<span class=amPM> "+ amPM + "</span>" + "<span class=timeZone> pt </span>"
		);

	}


}




function formatDate(date){

	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	var getMonth = new Date(date).getMonth();
	var getDate = new Date(date).getDate();
	var getFullYear = new Date(date).getFullYear();
	console.log(new Date(date).getDate());
	return (
		"<span class=month> " + meses[getMonth] + " " +
		"<span class=date> " + ('0' + getDate).slice(-2) + "</span>" +
		"<span class=year> " + getFullYear + "</span>"
	);
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
