
var calendario = [

	{	
	oponente: ["USA SOCCER", "USA"],
	local: ["USA", "MEX"],
	fecha: "Dec 1, 2019 15:30:00", 
	estadio: "Bank of America Stadium de Charlotte",
	torneo: "Amistoso"
	},
	{	
	oponente: ["TRINIDAD y TOBAGO", "TYT"],
	local: ["TYT", "MEX"],
	fecha: "Jan 2, 2019 15:30:00", 
	estadio: "AT&T",
	torneo: "Amistoso"
	},
	{	
	oponente: ["JAMAICA", "JAM"],
	local: ["JAM", "MEX"],
	fecha: "Mar1, 2019 15:30:00", 
	estadio: "Por Definir",
	torneo: "Copa Oro"
	},
	{	
	oponente: ["HONDURAS", "HON"],
	local: ["HON", "MEX"],
	fecha: "Jan 1, 2019 15:30:00", 
	estadio: "Por Definir",
	torneo: "Liga de Naciones de Concacaf"  
	},
	{	
	oponente: ["CANADA", "CAN"],
	local: ["CAN", "MEX"],
	fecha: "May 1, 2019 15:30:00", 
	estadio: "Por Definir",
	torneo: "Liga de Naciones de Concacaf"  
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
		a.fecha = new Date(a.fecha).getTime();
		b.fecha = new Date(b.fecha).getTime();
		return a.fecha - b.fecha;
	});

	return orderByDate;

};


// Display Games Data
(function displayGamesByDate(){

	var gamesData = orderGamesByDate();
		games = 3;

	for(var j = 0; j < games; j++){

		var cardContainer = document.getElementById('upCommingGames');

		var aTag = document.createElement("a"),
			imgTag = document.createElement("img"),
			h4Tag = document.createElement("h4"),
			pTag = document.createElement("p");


		cardContainer.appendChild(h4Tag).innerHTML = new Date(gamesData[j].fecha);
		cardContainer.lastChild.appendChild(pTag).innerHTML = gamesData[j].oponente[0];


		console.log(new Date(gamesData[j].fecha));
	}

})();




// Display Date
function displayDate(){


	// Total Remainder
	var remainingTime = (gameTime("Jan 1, 2019 20:00:00") - actualTime());

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






