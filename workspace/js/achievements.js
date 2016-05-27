/**
 * unlockFirstStep Unlocks the achivement if given requirement is met.
 * @return {undefined}
 */
function unlockFirstStep(){
	if(match && !getAchievement(1)){
		setAchievement(1, true);
		achievementSound();
		achievementModal(1);
	}
}
/**
 * unlockScoringBig Unlocks the Scoring Big achivement if given requirement is met.
 * @return {undefined}
 */
function unlockScoringBig(){
	if(score > 1000 && !getAchievement(2)){
		setAchievement(2, true);
		achievementSound();
		achievementModal(2);
	}
}
/**
 * unlockSpeedy Unlocks the Speedy The Speedster achivement if given requirement is met.
 * @return {undefined}
 */
function unlockSpeedy(){
	if(time < 30 && !getAchievement(3)){
		setAchievement(3, true);
		achievementSound();
		setUnlock = true;
		achievementModal(3);
	}
}

/**
 * Displays the achievement image on the achievement page if unlocked.
 * @return {undefined}
 */
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