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
function setStdHighScore(name, score) {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "/workspace/php/setStdScore.php?name=" + name + "&score=" + score, true);
	xmlhttp.send();
}

/**
 * getHighScores returns a string of elements and values from getScores.php
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
 * inputHighScore sends the player's highscore info to inputScore.php
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
 * inputHighTime sends the player's highscore info to inputTime.php
 * @param {string} name The player's name.
 * @param {integer} score The player's high score.
 * @return {undefined}
*/

/**
 * getHighScores returns a string of elements and values from getScores.php
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

function setStdHighTime(name, time) {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "/workspace/php/setStdTime.php?name=" + name + "&time=" + time, true);
	xmlhttp.send();
}

/**
 * getHighTimes returns a string of elements and values from getTimes.php
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

function setAdvHighTime(name, time) {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "/workspace/php/setAdvTime.php?name=" + name + "&time=" + time, true);
	xmlhttp.send();
}

/**
 * getHighTimes returns a string of elements and values from getTimes.php
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

$(function() {
	$("#tabs").tabs();
});

function tabFocus(id){
    $('#leaderboardTabs li').children().removeClass('testDeadBtn');
    $('#' + id).addClass('testDeadBtn');
}