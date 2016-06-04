// Time Variables
var minutes = 0;
var seconds = 0;
var decaseconds = 0;
var savedMinutes = 0;
var savedSeconds = 0;
var savedDecaSeconds = 0;
var totalMinutes = 0;
var totalSeconds = 0;
var totalDecaSeconds = 0;
var startMinutes = 0;
var startSeconds = 2;
var startDecaSeconds = 0;
var t;
var timeIsOut = false;

function startTimer() {
	clearTimeout(t);
	initTimer();
	if(timeIsOut) {
		timeIsOut = false;
	}
}

function initTimer() {
	if((minutes > 0 || seconds > 0 || decaseconds > 0)) {
		t = setTimeout(subTime, 10);
	}
	else {
		$("#timerP").html("00:00:00");
		console.log("Ran out of time! 2 ");
		gameOverTime();
	}
}

function subTime() {
	decaseconds--;
	if(decaseconds < 0) {
		decaseconds = 99;
		seconds--;
		if(seconds < 0) {
			seconds = 59;
			minutes--;
			if(minutes < 0) {
				gameOverTime();
			}
		}
	}

	$("#timerP").html(pad(minutes,2)+":"+pad(seconds,2)+":"+pad(decaseconds,2));

	initTimer();
}

function gameOverTime() {
	console.log("Ran out of time!");
	minutes = 0;
	seconds = 0;
	decaseconds = 0;
	clearTimeout(t);

	// GAME OVER
	window.location.href = "#nextPage";
	pickColor();
	timeIsOut = true;
}

function pad (str, max) {
	str = str.toString();
	return str.length < max ? pad("0" + str, max) : str;
}

function setTime(min,sec,dec) {	
	minutes=min;
	seconds=sec;
	decaseconds=dec;
	
	$("#timerP").html(pad(minutes,2)+":"+pad(seconds,2)+":"+pad(decaseconds,2));
}

function stopTime() {
	clearTimeout(t);
}

