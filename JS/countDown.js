
var end = new Date('June 8 2018 08:00 am');


var sec = 1000;
var min = sec * 60;
var hrs = min * 60;
var day = hrs * 24;


var interval = setInterval(myTimer, 1000);

function myTimer(){

	var now = new Date();

	var countdown = end.getTime() - now.getTime();
	
	var days = (Math.floor(countdown / day));
	var hours = (Math.floor((countdown % day) / hrs));
	var minutes = (Math.floor((countdown % hrs ) / min));
	var seconds = (Math.floor((countdown % min ) / sec));

	document.getElementById("display").innerHTML = 
	days + " days  " + hours + "  hrs  " + minutes + "  min  " + seconds + "  sec";

	if (countdown < 0){
		document.getElementById("display").innerHTML = "Game Time!"
	}

}



