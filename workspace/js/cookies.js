// Stores cookies
function setCookies(cname, cvalue, exdays) {

	var d			= new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires 	= "expires=" + d.toUTCString();
	document.cookie	= cname + "=" + cvalue + "; " + expires;
}

// Get cookies
function getCookies(cname) {

	var c 			= cname + "=";
	var cSearch		= document.cookie.split(';');
	for(var i = 0; i < cSearch.length; i++) {

		var search 	= cSearch[i];
		while (search.charAt(0) == ' ') {
			search 	= search.substring(1);
		}

		if (search.indexOf(name) == 0) {
			return search.substring(c.length, search.length);
		}
	}
	return "";
}

// Update the html badge currenet highest level completed
function updateBadge(mode, lv) {

	if (mode == 'standard') {
   		document.getElementById("badges").style.backgroundImage = "url('./workspace/image/orangeGemBadge.png')";
    } else if (mode == 'advanced') {
    	document.getElementById("badges").style.backgroundImage = "url('./workspace/image/blueGemBadge.png')";	
    }

	$("#badgeOfCurrentHigh").html('');
	$("#badgeOfCurrentHigh").append(lv);
	alert("the level is " + lv);
}

// Check and change badge level completed on classic standard mode
function checkCookies() {
	
	var badge	= getCookies("badgeLevel");
	
	alert("checkCookies = True\nbadge = " + badge);

	if (badge != "") {
			updateBadge('standard', badge);
			levelStandardHigh = parseInt(badge) + 1;
	} else {
			setCookies("badgeLevel", 0, 365);
	}

	var aBadge	= getCookies("badgeAdvancedLevel");
		
	alert("checkCookies = True\nAdvanced badge = " + aBadge);

	if (aBadge != "") {
			updateBadge('advanced', aBadge);
			levelAdvancedHigh = parseInt(aBadge) + 1;
	} else {
			setCookies("badgeAdvancedLevel", 0, 365);
	}
}

// Set the current level of standard mode to lv selected
function setLevel(lv) {
	alert("setLevel called");
	if (difficultyNum == 0) {
		if (lv <= levelStandardHigh) { 
			alert("level difference sensed");
			currentLevel = lv;
			standardMode = true;
			advancedmode = false;
			screenChange('mode3D')
		} else {
			alert("Level Locked");
		}
	} else if (difficultyNum == 1) {
		if (lv <= levelAdvancedHigh) { 
			alert("level difference sensed");
			currentLevel = lv;
			advancedMode = true;
			standardMode = false;
			screenChange('mode3D')
		} else {
			alert("Level Locked");
		}
	}
}
// Check and change badge level completed on classic standard mode
function setBadgeStandard() {
	
	alert("function is called");
	
	var badge = getCookies("badgeLevel");
	
	if (badge < currentLevelStandard) {
		setCookies("badgeLevel", currentLevelStandard, 365);
		alert("low level detected and set success");
		levelStandardHigh = currentLevelStandard + 1;
		$("#standardBadge").html('');
		$("#standardBadge").append(currentLevelStandard);
	}
}

// Check and change badge level completed on classic standard mode
function setBadgeAdvanced() {

	alert("set badge advanced is called");

	var aBadge = getCookies("badgeAdvancedLevel");

	if (aBadge < currentLevel) {
		setCookies("badgeAdvancedLevel", currentLevel, 365);
		alert("low level detected and set success");
		levelAdvancedHigh = currentLevel + 1;
		updateBadge('advanced', currentLevel);

	}

}

// Delete all cookies written by ElliotSchmelliot
function resetCookies() {

	setCookies("badgeLevel", 0, 365);
}