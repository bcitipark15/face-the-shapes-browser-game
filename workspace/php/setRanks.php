<?php

require_once("dbHelper.php");

$query = "SELECT score FROM score_point ORDER BY score DESC";
$queryResult = performQuery($query);

$arrayOfRows = array();

// Get all the rows from the database and put them on the leaderboard table.
while ($row = mysqli_fetch_array($queryResult))
{
	$arrayOfRows = $row;
}

$numOfRows = mysqli_num_rows($queryResult);

while ($row = mysqli_fetch_array($queryResult))
{

}





$query2 = "UPDATE score_point
		   SET rank='$i'
		   WHERE score='$arrayOfRows[3]['score']";

performQuery($query2);


/*$query = "UPDATE score_point
		  SET rank='4'
		  WHERE score='15'";

performQuery($query);*/