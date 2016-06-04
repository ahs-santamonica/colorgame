<?php
$dbc = mysqli_connect('localhost',"root",'password');
//$dbc = mysqli_connect('localhost',"saladraider",'retep1');
if (!$dbc)
{
	die('Not connected : ' . mysqli_error($dbc));
}

//select database
$db_selected = mysqli_select_db($dbc,"colorgame");
if (!$db_selected)
{
	die("Can not connect : " . mysqli_error($dbc));
}
?>