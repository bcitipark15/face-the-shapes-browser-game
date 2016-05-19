<?php 

<<<<<<< HEAD
$con =  mysqli_connect('localhost','group17','parkian93') or 
=======
$con = new mysqli_connect('mysql6.000webhost.com','a4492753_g17fts','parkian93') or 
>>>>>>> 6de2104013c84690b61727d6bfe884d60aca726d
	die(mysqli_error($con));

mysqli_select_db($con, 'group17_FaceTheShapes') or 
	die(mysqli_error($con));

$query = "SELECT * FROM scores ORDER BY time_score DESC LIMIT 10"
$info = mysqli_query($con, $query);

<<<<<<< HEAD
while($row = mysqli_fetch_array($info)) {
	echo "<tr>";
	echo "<td>" . $row['rank'] . "</td>";
	echo "<td>" . $row['name'] . "</td>";
	echo "<td>" . $row['score'] . "</td>";
	echo "<td>" . $row['date'] . "</td>";
	echo "</tr>";
}

mysqli_close($con);
=======
while($row = mysqli_fetch_assoc($result)) {
	echo "<tr>";
	echo "<td>" . $row['rank'] . "</td>";
	echo "<td>" . $row['name'] . "</td>";
	echo "<td>" . $row['highScore'] . "</td>";
	echo "<td>" . $row['date'] . "</td>";
	echo "</tr>";
}
>>>>>>> 6de2104013c84690b61727d6bfe884d60aca726d
