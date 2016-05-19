<?php 

$name = ($_GET['name']);
/*$name = mysqli_real_escape_string('$name');*/
$score = intval($_GET['score']);

$con = mysqli_connect('localhost','ftsg17','parkian93') or 
	die(mysqli_error($con));
	
mysqli_select_db($con, 'ftsg17_FaceTheShapes') or 
	die(mysqli_error($con));

$query = "INSERT INTO scores(name, score) VALUES('$name', '$score')";

mysqli_query($con, $query);

mysqli_close($con);