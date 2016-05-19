<?php 

$con = new mysqli_connect('mysql6.000webhost.com','a4492753_g17fts','parkian93') or 
	die(mysqli_error($con));

mysqli_select_db($con, 'a4492753_g17fts') or 
	die(mysqli_error($con));

$query = "SELECT * FROM scores ORDER BY time_score DESC LIMIT 10"
$info = mysqli_query($con, $query);

while($row = mysqli_fetch_assoc($result)) {
	echo "<tr>";
	echo "<td>" . $row['rank'] . "</td>";
	echo "<td>" . $row['name'] . "</td>";
	echo "<td>" . $row['highScore'] . "</td>";
	echo "<td>" . $row['date'] . "</td>";
	echo "</tr>";
}