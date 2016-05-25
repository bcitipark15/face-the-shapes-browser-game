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

// Check and change badge level completed on classic standard mode
function checkCookies() {
	
	var badge	= getCookies("badgeLevel");
	
	alert("checkCookies = True\nbadge = " + badge);

	if (badge != "") {
			$("#standardBadge").html('');
			$("#standardBadge").append(badge);
			levelStandardHigh = parseInt(badge) + 1;
	} else {
			setCookies("badgeLevel", 0, 365);
	}
}


// Set the current level of standard mode to lv selected
function setLevel(lv) {
	alert("setLevel called");
	if (lv <= levelStandardHigh) { 
		alert("level difference sensed");
		currentLevelStandard = lv;
		standardMode = true;
		screenChange('mode3D')
	} else {
		alert("Level Locked");
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

// Delete all cookies written by ElliotSchmelliot
function resetCookies() {

	setCookies("badgeLevel", 0, 365);
}