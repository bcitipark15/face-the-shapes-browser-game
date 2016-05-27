function unlockFirstStep(){
	if(match && !getAchievement(1)){
		setAchievement(1, true);
		achievementSound();
	}
}
function unlockScoringBig(){
	if(score > 1000 && !getAchievement(2)){
		setAchievement(2, true);
		achievementSound();
	}
}
function unlockSpeedy(){
	if(time <  && !getAchievement(3)){
		setAchievement(3, true);
		achievementSound();
		setUnlock = true;
	}
}

function displayAchievements(){
	if(getAchievement(1)){
		$('#achievementIcon1').css('display','initial');
	}
	if(getAchievement(2)){
		$('#achievementIcon2').css('display','initial');
	}
	if(getAchievement(3)){
		$('#achievementIcon3').css('display','initial');
	}
	
}