<?php 

/*$con = mysqli_connect('localhost','ftsg17','parkian93') or 
	die(mysqli_error($con));

mysqli_select_db($con, 'ftsg17_FaceTheShapes') or 
	die(mysqli_error($con));

$query = "SELECT * FROM scores ORDER BY score DESC LIMIT 10";
//$info = mysqli_query($con, $query);

while($row = mysqli_fetch_array(mysqli_query($con, $query))) {
	echo "<tr>";
	echo "<td>" . $row['rank'] . "</td>";
	echo "<td>" . $row['name'] . "</td>";
	echo "<td>" . $row['score'] . "</td>";
	echo "<td>" . $row['date'] . "</td>";
	echo "</tr>";
}

mysqli_close($con);*/

$dbname = 'ftsg17_FaceTheShapes';
$dbuser = 'ftsg17';
$dbpass = 'parkian93';
$dbhost = 'localhost';

$connect = mysqli_connect($dbhost, $dbuser, $dbpass) or die("Unable to Connect to '$dbhost'");

$test_query = 'SELECT rank, name, score FROM scores ORDER BY score DESC LIMIT 10';
mysqli_select_db($connect, $dbname) or die("Could not open the db '$dbname'");
$result = mysqli_query($connect, $test_query);

while ($row = mysqli_fetch_array($result, true)) {
	echo "<tr>";
	echo "<td>" . $row['rank'] . "</td>";
	echo "<td>" . $row['name'] . "</td>";
	echo "<td>" . $row['score'] . "</td>";
	echo "</tr>";
}

mysqli_close($connect);