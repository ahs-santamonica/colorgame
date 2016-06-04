var isPlaying = false;
var round = 0;
var red = 0;
var green = 0;
var blue = 0;
var totalScore = 0;
var tempScore = 0;

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

	tempScore = 0;
	tempScore += Math.abs(usrRed - red) - Math.abs(usrGreen - green) - Math.abs(usrBlue - blue);

	totalScore += tempScore;

	$("#round-score").html(tempScore);
	$("#total-score").html(totalScore);

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

$(document).on("change", "input", function() {
	var usrRed = $("#red-val").val();
	var usrGreen = $("#green-val").val();
	var usrBlue = $("#blue-val").val();
	$(".color-rect-usr").css("background-color", "rgba("+usrRed+","+usrGreen+","+usrBlue+",255)");
	console.log("color-changed");
});

$(window).on("load", randomizeColor());