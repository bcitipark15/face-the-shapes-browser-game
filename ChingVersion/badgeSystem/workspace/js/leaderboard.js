/* 
 * Author: Team 17 (Chris Centenera, Evan Chen, Ching Choi, John Park, Ian Park)
 * Description: JavaScript file that focuses on sending and receving highscores from the 
 * 				corresponding php files.
 */
 

/**
 * inputHighScore sends the player's highscore info to inputScore.php
 * @param {string} name The player's name.
 * @param {integer} score The player's high score.
 * @return {undefined}
 */
function inputHighScore(name, score) {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "/workspace/php/inputScore.php?name=" + name + "&?score=" + score, true);
	xmlhttp.send();
}

/**
 * getHighScores returns a string of elements and values from getScores.php
 * @return {string} Rows of data from database.
 */
function getHighScores() {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("ScoreAttackScores").innerHTML = xmlhttp.responseText;
		}
	}

	xmlhttp.open("GET", "/workspace/php/getScores.php", true);
	xmlhttp.send();
}

/**
 * inputHighTime sends the player's highscore info to inputTime.php
 * @param {string} name The player's name.
 * @param {integer} score The player's high score.
 * @return {undefined}
*/
function inputHighTime(name, time) {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "/workspace/php/inputTime.php?name=" + name + "&?time=" + time, true);
	xmlhttp.send();
}

/**
 * getHighTimes returns a string of elements and values from getTimes.php
 * @return {string} Rows of data from database.
 */
function getHighTimes() {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("ScoreAttackScores").innerHTML = xmlhttp.responseText;
		}
	}

	xmlhttp.open("GET", "/workspace/php/getTimes.php", true);
	xmlhttp.send();
}