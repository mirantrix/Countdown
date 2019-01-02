
var calendario = [

	{	
	oponente: ["USA SOCCER", "USA"],
	local: ["USA", "MEX"],
	fecha: "July 24, 2019 01:15:00", 
	estadio: "Bank of America Stadium de Charlotte",
	torneo: "Amistoso",
	bandera : "img"
	},
	{	
	oponente: ["TRINIDAD y TOBAGO", "TYT"],
	local: ["TYT", "MEX"],
	fecha: "December 21, 2019 23:15:00", 
	estadio: "AT&T Stadium",
	torneo: "Amistoso",
	bandera : "img"
	},
	{	
	oponente: ["JAMAICA", "JAM"],
	local: ["JAM", "MEX"],
	fecha: "July 21, 2019 15:15:00", 
	estadio: "Locación Por Definir",
	torneo: "Copa Oro",
	bandera : "img"
	},
	{	
	oponente: ["HONDURAS", "HON"],
	local: ["HON", "MEX"],
	fecha: "January 21, 2018 01:15:00", 
	estadio: "Locación Por Definir",
	torneo: "Liga de Naciones de Concacaf" , 
	bandera : "img"
	},
	{	
	oponente: ["CANADA", "CAN"],
	local: ["CAN", "MEX"],
	fecha: "January 21, 2019 12:15:00", 
	estadio: "Locación Por Definir",
	torneo: "Liga de Naciones de Concacaf" ,
	bandera : "img"
	}
]



// Time of Game
var gameTime = function(param){
	return new Date(param).getTime();
}

// Date at this moment 
var actualTime = function(){
	return new Date().getTime()
}

var  stopInterval = function(){
	clearInterval(timer);
}


// Values of Time
var sec = 1000 * 60,
	min = sec * 60,
	hrs = min * 24,
	dys = hrs * 365;


// Interval
var timer = setInterval(displayDate, 1000);


// Sort Object
var orderGamesByDate = function(){

	var orderByDate = calendario.slice(0);

	orderByDate.sort(function(a,b){

		if((gameTime(a.fecha) - actualTime()) >= 0){
			return (gameTime(a.fecha) - gameTime(b.fecha));
		}
		
	});

	return orderByDate;

};


var nextDate;

// Display Games Data
(function displayGamesByDate(){

	var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


	var gamesData = orderGamesByDate();
		games = 4;

	

	for(var j = 0; j < games; j++){

		var game = document.getElementById('games');
		var upCommingGames = document.getElementById('upCommingGames');
		var nextGame = document.getElementById('nextGame');

		var 
			divTag = document.createElement("div"),
			divTagOne = document.createElement("div"),
			divTagTwo = document.createElement("div"),
			imgTag = document.createElement("img"),
			pOneTag = document.createElement("p"),
			spanTwoTag = document.createElement("span");
			pThreeTag = document.createElement("p");
			pFourTag = document.createElement("p");
			pFiveTag = document.createElement("p");

		if( j > 0){

			

			upCommingGames.appendChild(divTag);
			upCommingGames.lastChild.appendChild(divTagOne);
			divTagOne.className = "inline";

			upCommingGames.lastChild.lastChild.appendChild(spanTwoTag).innerHTML = 'vs ';
			upCommingGames.lastChild.lastChild.appendChild(spanTwoTag).innerHTML += gamesData[j].oponente[0];
			upCommingGames.lastChild.lastChild.appendChild(pThreeTag).innerHTML = gamesData[j].torneo;

			upCommingGames.lastChild.appendChild(divTagTwo);
			divTagTwo.className = "inline right";

			upCommingGames.lastChild.lastChild.appendChild(pOneTag).innerHTML = 	weekdays[new Date(gamesData[j].fecha).getDay()].substring(0,3) + ", " + 
																					months[new Date(gamesData[j].fecha).getMonth()].toUpperCase().substring(0,3) + " " + 
																					new Date(gamesData[j].fecha).getDate() + " " + 
																					new Date(gamesData[j].fecha).getFullYear().toString();

			upCommingGames.lastChild.lastChild.appendChild(pFourTag).innerHTML = 	new Date(gamesData[j].fecha).getHours().toString() + ' : ' +
																					new Date(gamesData[j].fecha).getMinutes().toString() + " PM" + " PT"  ;

		} else {

			nextGame.appendChild(divTag);
			nextGame.lastChild.appendChild(divTagOne);
			divTagOne.className = "inline";

			nextGame.lastChild.lastChild.appendChild(spanTwoTag).innerHTML = 'vs '+ gamesData[j].oponente[0];
			nextGame.lastChild.lastChild.appendChild(pThreeTag).innerHTML = gamesData[j].torneo;

			nextGame.lastChild.appendChild(divTagTwo);
			divTagTwo.className = "inline right";

			nextGame.lastChild.lastChild.appendChild(pOneTag).innerHTML = 	weekdays[new Date(gamesData[j].fecha).getDay()].substring(0,3) + ", " + 
																					months[new Date(gamesData[j].fecha).getMonth()].toUpperCase().substring(0,3) + " " + 
																					new Date(gamesData[j].fecha).getDate() + " " + 
																					new Date(gamesData[j].fecha).getFullYear().toString();

			nextGame.lastChild.lastChild.appendChild(pFourTag).innerHTML = 	new Date(gamesData[j].fecha).getHours().toString() + ' : ' +
																					new Date(gamesData[j].fecha).getMinutes().toString() + " PM" + " PT"  ;

			nextDate = gamesData[j].fecha;

		}

	}


})();




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
		stopInterval();
	} else {
		secondsLeftId.innerHTML = ("0" + seconds).slice(-2);	
		minutesLeftId.innerHTML = ("0" + minutes).slice(-2);	
		hoursLeftId.innerHTML = ("0" + hours).slice(-2);	
		daysLeftId.innerHTML = ("0" + days).slice(-2);	
	}

};

displayDate();





