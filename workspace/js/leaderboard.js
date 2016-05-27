/* 
 * Author: Team 17 (Chris Centenera, Evan Chen, Ching Choi, John Park, Ian Park)
 * Description: JavaScript file that focuses on sending and receving highscores from the 
 * 				corresponding php files.
 */
 

/**
 * setStdHighScore sends the player's highscore info to inputScore.php for standard mode.
 * @param {string} name The player's name.
 * @param {integer} score The player's high score.
 * @return {undefined}
 */
function setStdHighScore(name, score) {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "/workspace/php/setStdScore.php?name=" + name + "&score=" + score, true);
	xmlhttp.send();
}

/**
 * getStdHighScores returns a string of elements and values from getScores.php for standard mode.
 * @return {string} Rows of data from database.
 */
function getStdHighScores() {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("scoreAttackStdResult").innerHTML = xmlhttp.responseText;
		}
	}

	xmlhttp.open("GET", "/workspace/php/getStdScores.php", true);
	xmlhttp.send();
}

/**
 * setAdvHighScore sends the player's highscore info to inputScore.php for advanced mode
 * @param {string} name The player's name.
 * @param {integer} score The player's high score.
 * @return {undefined}
 */
function setAdvHighScore(name, score) {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "/workspace/php/setAdvScore.php?name=" + name + "&score=" + score, true);
	xmlhttp.send();
}

/**
 * getAdvHighScores returns a string of elements and values from getScores.php for advanced mode.
 * @return {string} Rows of data from database.
 */
function getAdvHighScores() {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("scoreAttackAdvResult").innerHTML = xmlhttp.responseText;
		}
	}

	xmlhttp.open("GET", "/workspace/php/getAdvScores.php", true);
	xmlhttp.send();
}

/**
 * setStdHighTime sends the players time and name in time mode through php to the database.Used for standard mode.
 * @param name The player's name.
 * @param time The time it took the player to complete time mode.
 * @return {undefined}
 */
function setStdHighTime(name, time) {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "/workspace/php/setStdTime.php?name=" + name + "&time=" + time, true);
	xmlhttp.send();
}

/**
 * getStdHighTimes returns a string of elements and values from getTimes.php for times in standard difficulty.
 * @return {string} Rows of data from database.
 */
function getStdHighTimes() {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("timeAttackStdResult").innerHTML = xmlhttp.responseText;
		}
	}

	xmlhttp.open("GET", "/workspace/php/getStdTimes.php", true);
	xmlhttp.send();
}

/**
 * setAdvHighTime sends the players time and name in time mode through php to the database. Used for advanced mode.
 * @param name The player's name.
 * @param time The time it took the player to complete time mode.
 * @return {undefined}
 */
function setAdvHighTime(name, time) {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "/workspace/php/setAdvTime.php?name=" + name + "&time=" + time, true);
	xmlhttp.send();
}

/**
 * getAdvHighTimes returns a string of elements and values from getTimes.php for times in advanced difficulty.
 * @return {string} Rows of data from database.
 */
function getAdvHighTimes() {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("timeAttackAdvResult").innerHTML = xmlhttp.responseText;
		}
	}

	xmlhttp.open("GET", "/workspace/php/getAdvTimes.php", true);
	xmlhttp.send();
}

/* Adds jQuery dynamic tabs. */
$(function() {
	$("#tabs").tabs();
});

/**
 * activeTab Creates tab-like effect on leaderboard screen.
 * @param id The button being pressed(receives tab focus).
 */
function activeTab(id){
    $('#leaderboardTabs li').children().removeClass('activeTab');
    $('#' + id).addClass('activeTab');
}