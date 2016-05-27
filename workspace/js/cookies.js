/**
 * setCookies creates a new cookie.
 * @param cname The name of the cookie.
 * @param cvalue The value of the cookie as a string.
 * @param exdays Days until cookie expires.
 * @return {undefined}
 */
function setCookies(cname, cvalue, exdays) {

	var d			= new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires 	= "expires=" + d.toUTCString();
	document.cookie	= cname + "=" + cvalue + "; " + expires;
}

/**
 * getCookies gets a cookie's value based on the cookie name
 * @param cname The name of the cookie.
 * @return {undefined}
 */
function getCookies(cname) {

	var c 			= cname + "=";
	var cSearch		= document.cookie.split(';');
	for(var i = 0; i < cSearch.length; i++) {

		var search 	= cSearch[i];
		while (search.charAt(0) == ' ') {
			search 	= search.substring(1);
		}

		if (search.indexOf(c) == 0) {
			return search.substring(c.length, search.length);
		}
	}
	return "";
}

/**
 * updateBadge Updates the progression badge when level is cleared.
 * @param mode The difficulty mode of classic. Either standard or advanced.
 * @param lv The current level of the badge.
 * @return {undefined}
 */
function updateBadge(mode, lv) {

	if (mode == 'standard') {
   		document.getElementById("badges").style.backgroundImage = "url('./workspace/image/orangeGemBadge.png')";
    } else if (mode == 'advanced') {
    	document.getElementById("badges").style.backgroundImage = "url('./workspace/image/blueGemBadge.png')";	
    }

	$(".badgeOfCurrentHigh").html('');
	if (lv != 0) {
		$(".badgeOfCurrentHigh").append(lv);
	} else {
		document.getElementById("badges").style.display = "none";
	}
}

/**
 * checkCookies Checks if progression cookies exist and creates them if they don't.
 * @return {undefined}
 */
function checkCookies() {
	
	var badge	= getCookies("badgeLevel");

	if (badge != "") {
			updateBadge('standard', badge);
			levelStandardHigh = parseInt(badge) + 1;
	} else {
			setCookies("badgeLevel", 0, 365);
	}

	var aBadge	= getCookies("badgeAdvancedLevel");

	if (aBadge != "") {
			updateBadge('advanced', aBadge);
			levelAdvancedHigh = parseInt(aBadge) + 1;
	} else {
			setCookies("badgeAdvancedLevel", 0, 365);
	}
}

/**
 * setLevel Determines if selected level was unlocked by the player.
 * @param lv The level being tested.
 * @return {undefined}
 */
function setLevel(lv) {
	if (difficultyNum == 0) {
		if (lv <= levelStandardHigh) {
			currentLevel = lv;
			standardMode = true;
			advancedmode = false;
			screenChange('mode3D')
		}
	} else if (difficultyNum == 1) {
		if (lv <= levelAdvancedHigh) {
			currentLevel = lv;
			advancedMode = true;
			standardMode = false;
			screenChange('mode3D')
		}
	}
}

/**
 * setBadgeStandard Updates the badge level for standard difficulty in the cookie.
 * @return {undefined}
 */
function setBadgeStandard() {
	/*
	alert("function is called");
	*/
	var badge = getCookies("badgeLevel");
	if (badge < currentLevel) {
		setCookies("badgeLevel", currentLevel, 365);
		levelStandardHigh = currentLevel + 1;
		$(".badgeOfCurrentHigh").html('');
		$(".badgeOfCurrentHigh").append(currentLevel);
	}
}

/**
 * setBadgeAdvanced Updates the badge level for advanced difficulty in the cookie.
 * @return {undefined}
 */
function setBadgeAdvanced() {
/*
	alert("set badge advanced is called");*/

	var aBadge = getCookies("badgeAdvancedLevel");

	if (aBadge < currentLevel) {
		setCookies("badgeAdvancedLevel", currentLevel, 365);
		levelAdvancedHigh = currentLevel + 1;
		updateBadge('advanced', currentLevel);

	}

}

/**
 * resetCookies Resets all cookies to premodified states. Used in clearing player's progression.
 * @return {undefined}
 */
function resetCookies() {

	setCookies("badgeLevel", 0, 365);
	setCookies("badgeAdvancedLevel", 0, 365);
	setCookies("achievementOne", false, 365);
	setCookies("achievementTwo", false, 365);
	setCookies("achievementThree", false, 365);
	setCookies("achievementFour", false, 365);
}

/**
 * setAchievement Creates cookies for achievements with the given states.
 * @param number The achievement number in the list of achievements.
 * @param state Boolean representing if the achievement was unlocked or not.
 * @return {undefined}
 */
function setAchievement(number, state) {

	if (number == 1) {
		setCookies("achievementOne", state, 365);
	} else if (number == 2) {
		setCookies("achievementTwo", state, 365);
	} else if (number == 3) {
		setCookies("achievementThree", state, 365);
	} else if (number == 4) {
		//Four is unused as we only have 3 achievements.
		setCookies("achievementFour", state, 365);
	}
}

/**
 * getAchievement Gets value of the achievement cookie to determine if it was unlocked.
 * @param number The achievement number in the list of achievements.
 * @return {undefined}
 */
function getAchievement(number) {

	if (number == 1) {
		var a = getCookies("achievementOne");
		if (a == 'true') {
			achievementOne = true;
		} else if (a == 'false') {
			achievementOne = false;
		}
		return achievementOne;
	} else if (number == 2) {	
		var a = getCookies("achievementTwo");
		if (a == 'true') {
			achievementTwo = true;
		} else if (a == 'false') {
			achievementTwo = false;
		}
		return achievementTwo;
	} else if (number == 3) {
		var a = getCookies("achievementThree");
		if (a == 'true') {
			achievementThree = true;
		} else if (a == 'false') {
			achievementThree = false;
		}
		return achievementThree;
	} else if (number == 4) {
		var a = getCookies("achievementFour");
		if (a == 'true') {
			achievementFour = true;
		} else if (a == 'false') {
			achievementFour = false;
		}
		return achievementFour;
	}	
}