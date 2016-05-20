<?php 

// Database Info
$dbname = 'ftsg17_FaceTheShapes';
$dbuser = 'ftsg17';
$dbpass = 'parkian93';
$dbhost = 'localhost';

// Try to connect to the database server.
$connect = mysqli_connect($dbhost, $dbuser, $dbpass) or die("Unable to Connect to '$dbhost'");

// Try to open the database.
mysqli_select_db($connect, $dbname) or die("Could not open the db '$dbname'");

// Change the rows according to the scores in descending order and limit the
// number of players to display to top 10.
$query = 'SELECT rank, name, time FROM time ORDER BY time DESC LIMIT 10';
$result = mysqli_query($connect, $query);

// Get all the rows from the database and put them on the leaderboard table.
while ($row = mysqli_fetch_array($result, true)) {
	echo "<tr>";
	echo "<td>" . $row['rank'] . "</td>";
	echo "<td>" . $row['name'] . "</td>";
	echo "<td>" . $row['time'] . "</td>";
	echo "</tr>";
}

// Close the connection.
mysqli_close($connect);