<?php 

$name = ($_GET['name']);
$name = mysql_real_escape($name);
$score = intval($_GET['score']);

<<<<<<< HEAD

$con =  mysqli_connect('localhost','group17','parkian93') or 
=======
$con = new mysqli_connect('mysql6.000webhost.com','a4492753_g17fts','parkian93') or 
>>>>>>> 6de2104013c84690b61727d6bfe884d60aca726d
	die(mysqli_error($con));

mysqli_select_db($con, 'group17_FaceTheShapes') or 
	die(mysqli_error($con));

$query = "INSERT INTO scores(name, score) VALUES('$name', $score)";

mysqli_query($con, $query);

mysqli_close($con);