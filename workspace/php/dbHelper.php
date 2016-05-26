<?php

function performQuery($query)
{
	$dbhost = "db4free.net";
	$dbuser = "bcitipark15";
	$dbpass = "parkian93";
	$dbname = "facetheshapes";
	
	$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname)
					or die("Unable to Connect to '$dbhost': " . mysqli_connect_error());

	$queryResult = mysqli_query($connection, $query);

	mysqli_close($connection);

	return $queryResult;
}