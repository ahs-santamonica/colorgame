var isPlaying = false;
var round = 0;
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


function randomizeColor() {
	red = Math.round(Math.random() * 255);
	green = Math.round(Math.random() * 255);
	blue = Math.round(Math.random() * 255);
	$(".color-rect").css("background-color", "rgba("+red+","+green+","+blue+",255)");
	console.log("rgba("+red+","+green+","+blue+",255)");
}

$("#pick-btn").on("click", function() {
	var usrRed = $("#red-val").val();
	var usrGreen = $("#green-val").val();
	var usrBlue = $("#blue-val").val();
	incorrect = 0;
	incorrect = ((((Math.abs(usrRed - red))/255)*100) + (((Math.abs(usrGreen - green))/255)*100) + (((Math.abs(usrBlue - blue))/255)*100));
	correct = Math.round((300-incorrect)/3);
	total += correct;
	counter++;
	totalPercent = Math.round(total/counter);

	$("#round-score").html(correct + "%");
	$("#total-score").html(totalPercent + "%");

	var usrRedonce = $("#red-valonce").val();
	var usrGreenonce = $("#green-valonce").val();
	var usrBlueonce = $("#blue-valonce").val();
	incorrectonce = 0;
	incorrectonce = ((((Math.abs(usrRedonce - red))/255)*100) + (((Math.abs(usrGreenonce - green))/255)*100) + (((Math.abs(usrBlueonce - blue))/255)*100));
	correctonce = Math.round((300-incorrectonce)/3);
	totalonce += correctonce;
	counter++;
	totalPercentonce = Math.round(totalonce/counteronce);

	$("#round-score").html(correct + "%");
	$("#total-score").html(totalPercent + "%");
	$(".red-col").html(red);
	$(".green-col").html(green);
	$(".blue-col").html(blue);
	$(".red-col-usr").html(usrRed);
	$(".green-col-usr").html(usrGreen);
	$(".blue-col-usr").html(usrBlue);

	$(".col-par").css("color", "rgba("+(255-red)+","+(255-green)+","+(255-blue)+")");
	$(".col-par-usr").css("color", "rgba("+(255-usrRed)+","+(255-usrGreen)+","+(255-usrBlue)+")");

	round++;

	if(round >= 3) {
				// Game Over, show final screen
			}
		});

$(".play-btn").on("click", function() {
	var isPlaying = true;
	randomizeColor();
});

$("#reset-btn").on("click", function() {
	$("#red-valonce" ).prop( "disabled", false );
	$("#green-valonce" ).prop( "disabled", false );
	$("#blue-valonce" ).prop( "disabled", false );
	randomizeColor();
	console.log("reset");
});

$(document).on("change", "input", function() {
	var usrRed = $("#red-val").val();
	var usrGreen = $("#green-val").val();
	var usrBlue = $("#blue-val").val();
	$(".color-rect-usr").css("background-color", "rgba("+usrRed+","+usrGreen+","+usrBlue+",255)");
	var usrRed2 = $("#red-val2").val();
	var usrGreen2 = $("#green-val2").val();
	var usrBlue2 = $("#blue-val2").val();
	$(".color-rect-usr2").css("background-color", "rgba("+usrRed2+","+usrGreen2+","+usrBlue2+",255)");
	var usrRed3 = $("#red-val3").val();
	var usrGreen3 = $("#green-val3").val();
	var usrBlue3 = $("#blue-val3").val();
	$(".color-rect-usr3").css("background-color", "rgba("+usrRed3+","+usrGreen3+","+usrBlue3+",255)");
	var usrRedonce = $("#red-valonce").val();
	$("#red-valonce" ).prop( "disabled", true );
	var usrGreenonce = $("#green-valonce").val();
	$("#green-valonce" ).prop( "disabled", true );
	var usrBlueonce = $("#blue-valonce").val();
	$("#blue-valonce" ).prop( "disabled", true );
	$(".color-rect-usronce").css("background-color", "rgba("+usrRedonce+","+usrGreenonce+","+usrBlueonce+",255)");
	console.log("color-changed");
});

$(window).on("load", randomizeColor());