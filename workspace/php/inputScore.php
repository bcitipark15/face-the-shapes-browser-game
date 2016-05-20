<?php 

// Get the name of the player.
$name = ($_GET['name']);

// Get the score of the player.
$score = intval($_GET['score']);

// Try to connect to the database server.
$con = mysqli_connect('localhost','ftsg17','parkian93') or 
	die(mysqli_error($con));

// Try to open the database.
mysqli_select_db($con, 'ftsg17_FaceTheShapes') or 
	die(mysqli_error($con));

// Insert the name and the score of the player's into the database.
$query = "INSERT INTO scores(name, score) VALUES('$name', '$score')";

// Perform the query above.
mysqli_query($con, $query);

// Close the connection to the database.
mysqli_close($con);