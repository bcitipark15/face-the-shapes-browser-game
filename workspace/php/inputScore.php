<?php 

$name = ($_GET['name']);
$name = mysql_real_escape($name);
$score = intval($_GET['score']);

$con = mysqli_connect('localhost','ftsg17','parkian93') or 

mysqli_select_db($con, 'ftsg17_FaceTheShapes') or 
	die(mysqli_error($con));

$query = "INSERT INTO scores(name, score) VALUES('$name', $score)";

mysqli_query($con, $query);

mysqli_close($con);