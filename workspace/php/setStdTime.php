<?php

require_once("dbHelper.php");

// Store the values sent from the function inputHighScore into variables.
$name = ($_GET['name']);
$time = intval($_GET['time']);

// Query to insert the name and score values to the table 'scores'. 
$query = "INSERT INTO score_time_std(name, score) VALUES('$name', '$time')";

performQuery($query);