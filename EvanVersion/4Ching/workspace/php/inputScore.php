<?php 

$name = ($_GET['name']);
$score = ($_GET['score']);

$con =  mysqli_connect('mysql6.000webhost.com','a4492753_g17fts','parkian93') or 
	die(mysqli_error($con));

mysqli_select_db($con, 'a4492753_g17fts') or 
	die(mysqli_error($con));

$query = "INSERT INTO scores(name, time_score) VALUES($name, $score)";

mysqli_query($con, $query);