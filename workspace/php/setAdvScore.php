<?php

require_once("dbHelper.php");

// Store the values sent from the function setAdvHighScore into variables.
$name = ($_GET['name']);
$score = intval($_GET['score']);

// Insert the name and score values to the table. 
$query = "INSERT INTO score_point_adv(name, score) VALUES('$name', '$score')";

performQuery($query);

/*$query = "SELECT DISTINCT t1.name, t1.score, COUNT(t1.name) AS rank
		  FROM score_point t1, score_point t2
		  WHERE t1.score < t2.score
		  OR t1.name = t2.name
		  GROUP BY t1.name
		  ORDER BY rank"

performQuery($query);*/