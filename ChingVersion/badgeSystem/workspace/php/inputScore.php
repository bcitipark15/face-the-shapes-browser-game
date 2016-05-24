<?php 

// Store the values sent from the function inputHighScore into variables.
$name = ($_GET['name']);
$score = intval($_GET['score']);

// Database Info
$dbname = 'ftsg17_FaceTheShapes';
$dbuser = 'ftsg17';
$dbpass = 'parkian93';
$dbhost = 'localhost';

// Try to connect to the database server.
$connect = mysqli_connect($dbhost, $dbuser, $dbpass) or die("Unable to Connect to '$dbhost'");

// Try to open the database.
mysqli_select_db($connect, $dbname) or die("Could not open the db '$dbname'");

// Query to insert the name and score values to the table 'scores'. 
$query = "INSERT INTO scores(name, score) VALUES('$name', '$score')";

// Perform the query on the database
mysqli_query($con, $query);

// Close the connection.
mysqli_close($con);