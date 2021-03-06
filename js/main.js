var isPlaying = false;
var round = 0;
var totalRounds = 3;
var red = 0;
var green = 0;
var blue = 0;
var totalPercent = 0;
var total = 0;
var counter = 0;
var incorrect = 0;
var correct = 0;
var redonce = 0;
var greenonce = 0;
var blueonce = 0;
var totalPercentonce = 0;
var totalonce = 0;
var counteronce = 0;
var incorrectonce = 0;
var correctonce = 0;
var finalScore = 0;
var totalPossibleSocre = 100;
var redend = 0;
var greenend = 0;
var blueend = 0;
var totalPercentend = 0;
var totalend = 0;
var counterend = 0;
var incorrectend = 0;
var correctend = 0;
var redb = 0;
var greenb = 0;
var blueb = 0;
var totalPercentb = 0;
var totalb = 0;
var counterb = 0;
var incorrectb = 0;
var correctb = 0;

function randomizeColor() {
	red = Math.round(Math.random() * 255);
	green = Math.round(Math.random() * 255);
	blue = Math.round(Math.random() * 255);
	$(".color-rect").css("background-color", "rgba("+red+","+green+","+blue+",255)");
	console.log("rgba("+red+","+green+","+blue+",255)");
}

function initVars() {
	counter = 0;
	round = 0;
	incorrect = 0;
	correct = 0;
	totalPercent = 0;
	total = 0;
	totalMinutes = 0;
	totalSeconds = 0;
	totalDecaSeconds = 0;
	setTime(startMinutes,startSeconds,startDecaSeconds);
	startTimer();
	console.log("Initialized variables");
}

function endGame() {
	// 50% accuracy and 50% speed
	var totalPossiblDecaSeconds = (startMinutes * 60 * 100 + startSeconds * 100 + startDecaSeconds) * totalRounds;
	finalScore = Math.round(totalPercent / 2.0 + ((totalPossiblDecaSeconds - (totalMinutes * 60 * 100 + totalSeconds * 100.0 + totalDecaSeconds)) / totalPossiblDecaSeconds) * 50.0);
	$(".finalScore").html(finalScore + " / " + totalPossibleSocre);
	console.log("finalScore: " + finalScore);
	stopTime();
	window.location.href = "#finalPage";
	$("#score-box-hidden").val(finalScore);
	initVars();
}

function pickColor() {
	stopTime();

	var usrRed = $("#red-val").val();
	var usrGreen = $("#green-val").val();
	var usrBlue = $("#blue-val").val();

	savedDecaSeconds = startDecaSeconds - decaseconds;
	savedSeconds = startSeconds - seconds - ((savedDecaSeconds < 0) ? Math.ceil(Math.abs(savedDecaSeconds / 100)) : 0);
	savedMinutes = startMinutes - minutes - ((savedSeconds < 0) ? Math.ceil(Math.abs(savedSeconds / 60)) : 0);
	savedDecaSeconds = (savedDecaSeconds < 0) ? 100 + savedDecaSeconds : savedDecaSeconds;
	savedSeconds = (savedSeconds < 0) ? 100 + savedSeconds : savedSeconds;

	totalDecaSeconds += savedDecaSeconds;
	totalSeconds += savedSeconds + Math.floor(totalDecaSeconds / 100);
	totalDecaSeconds %= 100;
	totalMinutes += totalMinutes + Math.floor(totalSeconds / 60);
	totalSeconds %= 60;
	console.log("Did time calculations");

	incorrect = 0;
	incorrect = ((((Math.abs(usrRed - red))/255)*100) + (((Math.abs(usrGreen - green))/255)*100) + (((Math.abs(usrBlue - blue))/255)*100));
	correct = Math.round((300-incorrect)/3);
	total += correct;
	counter++;
	totalPercent = Math.round(total/counter);

	$("#round-score").html(correct + "%");
	$("#total-score").html(totalPercent + "%");
	$(".round-time").html(pad(savedMinutes,2)+":"+pad(savedSeconds,2)+":"+pad(savedDecaSeconds,2));
	$(".total-time").html(pad(totalMinutes,2)+":"+pad(totalSeconds,2)+":"+pad(totalDecaSeconds,2));

	var usrRedonce = $("#red-valonce").val();
	var usrGreenonce = $("#green-valonce").val();
	var usrBlueonce = $("#blue-valonce").val();

	$(".col-par").css("color", "rgba("+(255-red)+","+(255-green)+","+(255-blue)+")");
	$(".col-par-usr").css("color", "rgba("+(255-usrRed)+","+(255-usrGreen)+","+(255-usrBlue)+")");

	incorrectonce = 0;
	incorrectonce = ((((Math.abs(usrRedonce - red))/255)*100) + (((Math.abs(usrGreenonce - green))/255)*100) + (((Math.abs(usrBlueonce - blue))/255)*100));
	correctonce = Math.round((300-incorrectonce)/3);
	totalonce += correctonce;
	counteronce++;
	totalPercentonce = Math.round(totalonce/counteronce);
	$("#round-scoreonce").html(correctonce + "%");
	$("#total-scoreonce").html(totalPercentonce + "%");
	$(".red-col").html(red);
	$(".green-col").html(green);
	$(".blue-col").html(blue);
	$(".red-col-usr").html(red);
	$(".green-col-usr").html(green);
	$(".blue-col-usr").html(blue);
	$(".red-col-usronce").html(usrRedonce);
	$(".green-col-usronce").html(usrGreenonce);
	$(".blue-col-usronce").html(usrBlueonce);
	
	var usrRedend = $("#red-valend").val();
	var usrGreenend = $("#green-valend").val();
	var usrBlueend = $("#blue-valend").val();

	incorrectend = 0;
	incorrectend = ((((Math.abs(usrRedend - red))/255)*100) + (((Math.abs(usrGreenend - green))/255)*100) + (((Math.abs(usrBlueend - blue))/255)*100));
	correctend = Math.round((300-incorrectend)/3);
	totalend += correctend;
	counterend++;
	totalPercentend = Math.round(totalend/counterend);
	$("#round-scoreend").html(correctend + "%");
	$("#total-scoreend").html(totalPercentend + "%");
	$(".red-col").html(red);
	$(".green-col").html(green);
	$(".blue-col").html(blue);
	$(".red-col-usrend").html(usrRedend);
	$(".green-col-usrend").html(usrGreenend);
	$(".blue-col-usrend").html(usrBlueend);
	
	var usrRedb = $("#red-valb").val();
	var usrGreenb = $("#green-valb").val();
	var usrBlueb = $("#blue-valb").val();
	
	savedDecaSeconds = startDecaSeconds - decaseconds;
	savedSeconds = startSeconds - seconds - ((savedDecaSeconds < 0) ? Math.ceil(Math.abs(savedDecaSeconds / 100)) : 0);
	savedMinutes = startMinutes - minutes - ((savedSeconds < 0) ? Math.ceil(Math.abs(savedSeconds / 60)) : 0);
	savedDecaSeconds = (savedDecaSeconds < 0) ? 100 + savedDecaSeconds : savedDecaSeconds;
	savedSeconds = (savedSeconds < 0) ? 100 + savedSeconds : savedSeconds;

	totalDecaSeconds += savedDecaSeconds;
	totalSeconds += savedSeconds + Math.floor(totalDecaSeconds / 100);
	totalDecaSeconds %= 100;
	totalMinutes += totalMinutes + Math.floor(totalSeconds / 60);
	totalSeconds %= 60;
	console.log("Did time calculations");

	incorrectb = 0;
	incorrectb = ((((Math.abs(usrRedb - red))/255)*100) + (((Math.abs(usrGreenb - green))/255)*100) + (((Math.abs(usrBlueb - blue))/255)*100));
	correctb = Math.round((300-incorrectb)/3);
	totalb += correctb;
	counterb++;
	totalPercentb = Math.round(totalb/counterb);

	$("#round-scoreb").html(correctb + "%");
	$("#total-scoreb").html(totalPercentb + "%");
	$(".red-col").html(red);
	$(".green-col").html(green);
	$(".blue-col").html(blue);
	$(".red-col-usrb").html(usrRedb);
	$(".green-col-usrb").html(usrGreenb);
	$(".blue-col-usrb").html(usrBlueb);
	
	round++;

	if(round >= totalRounds) {
		// Game Over, show final screen
		endGame();
	}
}

$(".pick-btn").on("click", function() {
	pickColor();
});

$(".play-btn").on("click", function() {
	var isPlaying = true;
	initVars();
	randomizeColor();
});

$(".keepgoing-btn").on("click", function() {
	randomizeColor();
});

$(".reset-btn").on("click", function() {
	$("#red-valonce" ).slider( { disabled: false });
	$("#green-valonce" ).slider( { disabled: false });
	$("#blue-valonce" ).slider( { disabled: false } );
	randomizeColor();
	console.log("reset");
});

$(".continue-btn").on("click", function() {
	var isPlaying = true;
	randomizeColor();
	setTime(startMinutes,startSeconds,startDecaSeconds);
	startTimer();
});

$("#blind-btn").on("click", function() {
	randomizeColor();
	setTime(startMinutes,startSeconds,startDecaSeconds);
	startTimer();
});

$(".blindkeep-btn").on("click", function() {
	initVars();
	randomizeColor();
});

$("#accuracy-btn").on("click", function() {
	$("#red-valonce" ).slider( { disabled: false });
	$("#green-valonce" ).slider( { disabled: false });
	$("#blue-valonce" ).slider( { disabled: false } );
});

$(document).on("change", "input", function() {
	var usrRed = $("#red-val").val();
	var usrGreen = $("#green-val").val();
	var usrBlue = $("#blue-val").val();
	$(".color-rect-usr").css("background-color", "rgba("+usrRed+","+usrGreen+","+usrBlue+",255)");
	var usrRedspd = $("#red-valspd").val();
	var usrGreenspd = $("#green-valspd").val();
	var usrBluespd = $("#blue-valspd").val();
	$(".color-rect-usrspd").css("background-color", "rgba("+usrRedspd+","+usrGreenspd+","+usrBluespd+",255)");
	var usrRed2 = $("#red-val2").val();
	var usrGreen2 = $("#green-val2").val();
	var usrBlue2 = $("#blue-val2").val();
	$(".color-rect-usr2").css("background-color", "rgba("+usrRed2+","+usrGreen2+","+usrBlue2+",255)");
	var usrRed3 = $("#red-val3").val();
	var usrGreen3 = $("#green-val3").val();
	var usrBlue3 = $("#blue-val3").val();
	$(".color-rect-usr3").css("background-color", "rgba("+usrRed3+","+usrGreen3+","+usrBlue3+",255)");
	var usrRedonce = $("#red-valonce").val();
	var usrGreenonce = $("#green-valonce").val();
	var usrBlueonce = $("#blue-valonce").val();
	$(".color-rect-usronce").css("background-color", "rgba("+usrRedonce+","+usrGreenonce+","+usrBlueonce+",255)");
	var usrRedend = $("#red-valend").val();
	var usrGreenend = $("#green-valend").val();
	var usrBlueend = $("#blue-valend").val();
	$(".color-rect-usrend").css("background-color", "rgba("+usrRedend+","+usrGreenend+","+usrBlueend+",255)");
	var usrRedb = $("#red-valb").val();
	var usrGreenb = $("#green-valb").val();
	var usrBlueb= $("#blue-valb").val();
	$(".color-rect-usrb").css("background-color", "rgba("+usrRedb+","+usrGreenb+","+usrBlueb+",255)");
	console.log("color-changed");
});

$(document).on('pagecreate', function(){ 
    $(document).on('slidestop', '#red-valonce', function(){ 
        $("#red-valonce" ).slider( { disabled: true } );
    });  
    $(document).on('slidestop', '#green-valonce', function(){ 
        $("#green-valonce" ).slider( { disabled: true } );
    });   
    $(document).on('slidestop', '#blue-valonce', function(){ 
        $("#blue-valonce" ).slider( { disabled: true } );
    });     
});

$(window).on("load", function() {
	randomizeColor();

});



