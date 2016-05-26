<?php 

require_once("dbHelper.php");

$query = "SELECT name, score FROM score_time_std LIMIT 10";
$queryResult = performQuery($query);

// Get all the rows from the database and put them on the leaderboard table.
while ($row = mysqli_fetch_array($queryResult))
{
	echo "<tr>";
	echo "<td>" . $row['rank'] . "</td>";
	echo "<td>" . $row['name'] . "</td>";
	echo "<td>" . $row['score'] . "</td>";
	echo "</tr>";
}