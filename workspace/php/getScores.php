<?php 

$con =  mysqli_connect('localhost','group17','parkian93') or 
	die(mysqli_error($con));

mysqli_select_db($con, 'group17_FaceTheShapes') or 
	die(mysqli_error($con));

$query = "SELECT * FROM scores ORDER BY time_score DESC LIMIT 10"
$info = mysqli_query($con, $query);

while($row = mysqli_fetch_array($info)) {
	echo "<tr>";
	echo "<td>" . $row['rank'] . "</td>";
	echo "<td>" . $row['name'] . "</td>";
	echo "<td>" . $row['score'] . "</td>";
	echo "<td>" . $row['date'] . "</td>";
	echo "</tr>";
}

mysqli_close($con);