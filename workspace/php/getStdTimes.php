<?php 

require_once("dbHelper.php");

/* Get top 10 scores in ascending order with corresponding names. */
$query = "SELECT name, score FROM score_time_std ORDER BY score LIMIT 10";
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