function inputHighScore(name, score) {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "../php/inputScore.php?name=" + name + "&?score=" + score, true);
	xmlhttp.send();
}

function getHighScores() {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("ScoreAttackScores").innerHTML = xmlhttp.responseText;
		}
	}

	xmlhttp.open("GET", "../php/getScore.php", true);
	xmlhttp.send();
}