<?php 

// Database Info
$dbname = 'ftsg17_FaceTheShapes';
$dbuser = 'ftsg17';
$dbpass = 'parkian93';
$dbhost = 'localhost';

// Try to connect to the database server.
$connect = mysqli_connect($dbhost, $dbuser, $dbpass) or die("Unable to Connect to '$dbhost'");

// Change the rows according to the scores in descending order and limit the
// number of players to display to top 10.
$test_query = 'SELECT rank, name, score FROM scores ORDER BY score DESC LIMIT 10';

// Try to open the database.
mysqli_select_db($connect, $dbname) or die("Could not open the db '$dbname'");
$result = mysqli_query($connect, $test_query);

// Get all the rows from the database and put them on the leaderboard table.
while ($row = mysqli_fetch_array($result, true)) {
	echo "<tr>";
	echo "<td>" . $row['rank'] . "</td>";
	echo "<td>" . $row['name'] . "</td>";
	echo "<td>" . $row['score'] . "</td>";
	echo "</tr>";
}

// Close the connection.
mysqli_close($connect);