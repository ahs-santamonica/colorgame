<?php
require('config.php');

$name = trim($dbc->real_escape_string(htmlentities($_POST['name'])));
$score = trim($dbc->real_escape_string(htmlentities($_POST['score'])));
$game_mode = trim($dbc->real_escape_string(htmlentities($_POST['game_mode'])));

$sql = "INSERT INTO `high_scores` (`name`, `score`, `game_mode`) VALUES ('$name', '$score', '$game_mode')";
$result = $dbc->query($sql);

if($result) {
	header("Location:highscores.php");
} else {
	echo "Failed: " + $sql;
}

?>