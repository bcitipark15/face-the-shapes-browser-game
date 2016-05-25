<?php 

// Store the values sent from the function inputHighTime into variables.
$name = ($_GET['name']);
$time = intval($_GET['time']);

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
$query = "INSERT INTO time(name, time) VALUES('$name', '$time')";

// Perform the query on the database
mysqli_query($con, $query);

// Close the connection.
mysqli_close($con);