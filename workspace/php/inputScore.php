<?php 

$name = ($_GET['name']);
$name = mysql_real_escape($name);
$score = intval($_GET['score']);


$con =  mysqli_connect('localhost','group17','parkian93') or 
	die(mysqli_error($con));

mysqli_select_db($con, 'group17_FaceTheShapes') or 
	die(mysqli_error($con));

$query = "INSERT INTO scores(name, score) VALUES('$name', $score)";

mysqli_query($con, $query);

mysqli_close($con);