/* 
 * Author: Team 17 (Chris Centenera, Evan Chen, Ching Choi, John Park, Ian Park)
 * Description: Contains all functions that are used for the competitive game modes.
 */

 
/** ~~~ Move to game.js ~~~
 * selectMode Pre renders certain pages and activates modes depending on selected mode.
 * @param {String} mode The mode selected.
 */
function selectMode(mode){
	clearInterval(timer);
	timeModeFlag = false;
	scoreModeFlag = false;
	switch(mode){
		case 'classic':
			$('#timerBox').css('display', 'none');
			$('#scoreBox').css('display', 'none');
			break;
		case 'time':
			difficultyNum = 0;
			$('#timerBox').css('display', 'initial');
			$('#scoreBox').css('display', 'none');
			startTimeMode();
			break;
		case 'score':
			difficultyNum = 0;
			$('#timerBox').css('display', 'initial');
			$('#scoreBox').css('display', 'initial');
			startScoreMode();
			break;
	}
}


/**
 * Classic mode tutorial screen activator.
 * @param {int} indicate which page is currently being referred to.
 */
function classicHelper(page) {
	helperMode = 1;
	switch(page){
		case 0:
			levelLoad(0,0,1); 
			$('#classicHelpContainer').css('display', 'initial');
			$('#overlay').css('display', 'initial');
			$('#classicHelp1').css('display', 'initial');
			$('#classicHelp2').css('display', 'none');
			$('#proceed').css('display', 'initial');
			$('#preceed').css('display', 'none');
			$('#cubeContainer').css({
				'z-index' 	: '0',
				'position'	: 'relative',
				'left'		: '0',
				'right'		: '0', 
				'margin'	: "auto"
			});
			break;
		case 1:
			$('#cubeContainer').css({
				'z-index' 	: '2',
				'position'	: 'absolute',
				'left'		: '0',
				'right'		: '0', 
				'margin'	: "auto"
			});
			$('#to2D').css({
				'z-index' 	: '0',
				'position' 	: 'relative',
				'right'		: '0'
			});					
			$('#classicHelp1').css('display', 'none');
			$('#classicHelp2').css('display', 'initial');
			$('#classicHelp3').css('display', 'none');
			$('#preceed').css('display', 'initial');
			break;
			
		case 2:
			$('#to2D').css({
				'z-index' 	: '4',
				'position' 	: 'absolute',
				'right'		: '0'
			});			
			$('#cubeContainer').css({
				'z-index' 	: '0',
				'position'	: 'relative',
				'left'		: '0',
				'right'		: '0', 
				'margin'	: "auto"
			});
			$('#classicHelp2').css('display', 'none');
			$('#classicHelp3').css('display', 'initial');
			$('#classicHelp4').css('display', 'none');

			screenChange('mode3D');
			resizeGame();

			$('#foldoutScreen').css({
				'zoom'		: '1',
				'z-index'	: '0'
			});

			$('#colorArrow').css({
				'z-index'	: '0',
				'position'	: 'relative',
				'bottom'	: '0'
			});

			$('#mode2DSubmit').css({
				'z-index'	: '0',
				'position'	: 'relative',
				'bottom'	: '0',
				'right'		: '0'
			});
			break;

		case 3:
			screenChange('mode2D');
			resizeGame();
			$('#classicHelp3').css('display', 'none');
			$('#classicHelp4').css('display', 'initial');
			$('#classicHelp5').css('display', 'none');
			$('#to2D').css({
				'z-index' 	: '0',
				'position' 	: 'relative',
				'right'		: '0'
			});
			$('#foldoutScreen').css({
				'zoom'		: '0.7',
				'z-index'	: '4'
			});
			$('#colorArrow').css({
				'z-index'	: '4',
				'position'	: 'absolute',
				'bottom'	: '220px'

			});
			$('#mode2DSubmit').css({
				'z-index'	: '4',
				'position'	: 'absolute',
				'bottom'	: '220px',
				'right'		: '0'

			});
			break;

		case 4:
			screenChange('resultScreen');
			validate();
			resizeGame();

			$('#foldoutScreen').css({
				'zoom'		: '1',
				'z-index'	: '0'
			});

			$('#colorArrow').css({
				'z-index'	: '0',
				'position'	: 'relative',
				'bottom'	: '0'
			});

			$('#mode2DSubmit').css({
				'z-index'	: '0',
				'position'	: 'relative',
				'bottom'	: '0',
				'right'		: '0'
			});
			$('#classicHelp4').css('display', 'none');
			$('#classicHelp5').css('display', 'initial');
			$('#proceed').css('display', 'none');
			$('#endHelp').css('display', 'initial');
			break;
		case 5:
			screenChange('gameMode');
			$('#classicHelp5').css('display', 'none');
			$('#classicHelpContainer').css('display', 'none');
			$('#overlay').css('display', 'none');
			$('#proceed').css('display', 'none');
			$('#endHelp').css('display', 'none');
			currentPage = 0;
	}
}

/**
 * Transition to next page of the tutorial.
 */

function nextPage(direction) {
	if (direction == 'next') {
		currentPage++;
		if (helperMode == 1) {
			classicHelper(currentPage);
		}
	} else if (direction == 'previous') {
		currentPage--;
		if (helperMode == 1) {
			classicHelper(currentPage);
		}
	}
}

/** ~~~ Move to game.js ~~~
 * startScoreMode Manages transition into score mode.
 * @return {undefined}
 */
function startScoreMode(){
	//Time remaining for game mode.
	time = 60;
	//User's score.
	score = 0;
	levels = [0,1,2,3,4,5,6,7,8,9];
	level = 0;
	randomizeOrder(levels);
	//flag set for screen rendering.
	scoreModeFlag = true;
	//Sets interval for when to update countdown timer.
	timer = setInterval(drawCountdownTimer, 1000, time);
	$('#timer').text(time);
	$('#score').text(score);
	levelLoad(2,2,3);
}

/**
 * startTimeMode Manages transition into time mode.
 * @return {undefined}
 */
function startTimeMode(){
	//Total time elapsed.
	time = 0;
	//Updates time every 1 seconds and draws it to the 3D mode screen.
	timer = setInterval(drawTimer, 1000);
	//Sets timer flag to true for screen rendering.
	timeModeFlag = true;
	//List of all levels.
	levels = [0,1,2,3,4,5,6,7,8,9];
	//Starting level
	level = 0;
	randomizeOrder(levels);
	$('#timer').text(time);
	//Build foldout and apply generated faces to 3D cube.
	levelLoad(2,2,3);
}

/**
 * updateScore Updates the visual representation of the user's score on the 3D screen.
 * @param value The value to be added to the current score.
 * @return {undefined}
 */
function updateScore(value){
	score += value;
	$('#score p').text(score);
}

/**
 * randomizeOrder Randomizes the level order.
 * @return {undefined}
 */
function randomizeOrder(){
	for(var i = 0; i < levels.length; i++){
		var tempIndex = Math.floor(Math.random() * 10);
		var temp = levels[tempIndex];
		levels[tempIndex] = levels[i];
		levels[i] = temp;
	}
}

/**
 * drawTimer Updates the visual representation of the timer in Timed mode on 3D screen.
 * @return {undefined}
 */
function drawTimer(){
	time++;
	$('#timer').text(time);
}

/** ~~~ Move to game.js ~~~
 * drawCountdownTimer Updates the text for the timer on the 3D screen. 
 *					  Timer goes towards 0 and ends game when length <= 0.
 * @return {undefined}
 */
function drawCountdownTimer(){
	time--;
	$('#timer').text(time);
	if(time <= 0){
		endGame();
		clearTimer();
	}
}

/** 
 * clearTimer Clears interval timer so endGame doesn't activate if score mode is left.
 * @return {undefined}
 */
function clearTimer(){
	clearInterval(timer);
}

/**
 * endGame Ends all game timers and brings user to end game screen (Modified version of resultsScreen).
 * @return {undefined}
 */
function endGame(){
	//Change to resultsScreen from either screen.
	screenChange('resultScreen');
	screenChange('resultScreen');
	//May not be necessary.
	window.location.hash = '#mode3D';
	$('#resultScreen div.bottomNav').html('');
	$('#resultScreen div.bottomNav').append('<button class="buttonDesign floatRight" onclick="toLeaderboard();">Post!</button>');
	$('#resultScreen div.bottomNav').append('<button class="buttonDesign floatleft" onclick="screenChange(\'mainMenu\')">back</button>');
	$('#resultScreen div.messageBox').html('');
	
	//Change score message depending on mode
	if(scoreModeFlag){
		$('#resultScreen div.messageBox').append('<p>Your score: ' + score + '</p>');
	}
	if(timeModeFlag){
		$('#resultScreen div.messageBox').append('<p>Your time: ' + time + '</p>');
	}
	//Input field for name
	$('#resultScreen div.messageBox').append('<br><p>Enter Your Name:</p>' +
											'<input type="text" id="username" name="username"style="z-index: 999; position: relative"></input>');
	//Weird bug where input field is unclickable. Added this as temporary work around.
	$('#username').focus();
}