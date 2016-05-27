<?php

require_once("dbHelper.php");
//include_once("setRanks.php");

/* Get top 10 scores in descending order with corresponding names. */
$query = "SELECT name, score FROM score_point_std ORDER BY score DESC LIMIT 10";
$queryResult = performQuery($query);

$i = 0;
// Get all the rows from the database and put them on the leaderboard table.
while ($row = mysqli_fetch_array($queryResult))
{
	$i++;

	echo "<tr>";
	echo "<td>" . $i . "</td>";
	echo "<td>" . $row['name'] . "</td>";
	echo "<td>" . $row['score'] . "</td>";
	echo "</tr>";
}