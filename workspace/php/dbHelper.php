<?php

/* Performs query against the specified database after trying to connect to it.
   Then, returns the result of the query. */
function performQuery($query)
{
	$dbhost = "db4free.net";
	$dbuser = "bcitipark15";
	$dbpass = "parkian93";
	$dbname = "facetheshapes";
	
	/* Try to connect to database and if failed, show the error message. */
	$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname)
					or die("Unable to Connect to '$dbhost': " . mysqli_connect_error());

	/* Perform the query. */
	$queryResult = mysqli_query($connection, $query);

	/* Close the connection. */
	mysqli_close($connection);

	return $queryResult;
}