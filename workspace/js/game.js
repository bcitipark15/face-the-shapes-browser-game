/* 
 * Author: Team 17 (Chris Centenera, Evan Chen, Ching Choi, John Park, Ian Park)
 * Description: Game mechanics and screen transitions(for now) are located in here.
 */


/** 
 * Calculate the available screen real estate without the address bar and set it as the height.  
 */
function navBar() {
	var a = screen.height;
	var b = window.innerHeight;
	var difference =  a - ( (a - b) / 4 ) ;
	
	$('#gameContainer').css('height', Math.round(difference));
}

/** 
 * Will perform the screen change by removing the current and display the next. 
 */
function screenChange(screen) {
	var x = document.getElementsByTagName('section');
	for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(screen).style.display = "block"; 
    if (screen != "mainMenu") {
    	document.getElementById("badges").style.display = "block";
    	if (difficultyNum == 0) {
    		updateBadge('standard', (levelStandardHigh - 1));
    	} else if (difficultyNum == 1) {
    		updateBadge('advanced', (levelAdvancedHigh - 1));
    	}
    }
}

/** 
 * Screen orientation change listener. 
 */
window.addEventListener('orientationchange', navBar, false);
/**
 * Window resize listener.
 */
window.onresize = resizeGame;

/**
 * levelLoad Loads the levels specifics once level is selected.
 * @param lowerBound The lowest foldout difficulty to be generated.
 * @param upperBound The highest foldout difficulty to be generated.
 * @param numAnswers The number of faces that the player needs to solve.
 * @return {undefined}
 */
function levelLoad(lowerBound, upperBound, numAnswers) {
	levels = [0,1,2,3,4,5,6,7,8,9];
	//Hard cap answer count to 5.
	if(numAnswers > 5){
		numAnswers = 5;
	}
	
	generatedLevel = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
	
	foldoutT(levels[generatedLevel], numAnswers);
	applyFaces(levels[generatedLevel]);
	
	//Revert mode2D if user was viewing answer version.
	answerMode = false;
	$('#mode2D div.topNav').html('');
	$('#mode2D div.topNav').append('<button class="backButton buttonDesign floatLeft" onclick="modalOption(); buttonClick()"></button>'
									+ '<button class="buttonDesign floatRight" onclick="screenChange(\'mode3D\');">To 3D</button>');
	$('#mode2D div.bottomNav').html('');
	$('#mode2D div.bottomNav').append('<button id="colorArrow" class="buttonDesign floatLeft" onclick="colorChanger();">Color</button>'
									+ '<button id="mode2DSubmit" class="buttonDesign floatRight" onclick="validate();">Submit</button>');
}

/**
 * validate Tests user's arrow orientation vs true arrow orientation along with user's colors vs true colors.
 * 			If user's answers perfectly align, results screen displays success message. Otherwise it displays
 *			
 * @return {undefined}
 */
function validate(levelNumber){
	
	
	//Clears results screen along with answer screen before editing them.
	$('#resultMessage').html('');
	$('#correctAnswer').html('');
	var match = true;
	for(var i = 0; i< faces; i++){
		//Sets match to false if user has any combination wrong.
		if (getFace(faceNames[i]).trueValue != getFace(faceNames[i]).value){
			match = false;
		}
		
		//Only checks for color match on non-white faces.
		if(getFace(faceNames[i]).trueValue != 4){
			if(getFace(faceNames[i]).playerColor != getFace(faceNames[i]).trueColor){
				match = false;
			}
		}
	}

	
	/*******Added on May 26th 1:05am *********/
	//Appropriate message is displayed according to the result.
	if (match) {
		modalCorrect();
		$('#resultMessage').append('Foldout is a perfect match!');
		if (standardMode) {
			setBadgeStandard();
		} else if (advancedMode) {
			setBadgeAdvanced();
		}
		if(scoreModeFlag){
			//Score is determined by base and level multiplier.
			updateScore(scoreBase);
			//Give player additional time when level is completed.
			time += 30;
		}
		if(timeModeFlag){
			if(level > numLevels){
				endGame();
			}
		}
		level++;
	} else {
		modalIncorrect();
		$('#resultMessage').append('Foldout does not match!');
		
		if(scoreModeFlag){
				//Score is determined by base and level multiplier.
				updateScore(-25);
			}
		if(timeModeFlag){
			//Penalty of 20 seconds is applied on wrong submission in time mode.
			time += 20;
		}
	}
	
	
	//Deprecated.
	/* //Set resultScreen buttons depending on which game mode you are in.
	$('#resultScreen div.bottomNav').html('');
	if(timeModeFlag || scoreModeFlag){
		//If user completed all x time mode levels, send to end game screen. ~~Specify how many levels later, 2 set for testing purposes.~~
		if(match){
			//update score if in score mode
			if(scoreModeFlag){
				updateScore(100);
				$('#score').text(score);
				time += 30;
			}
			//level is changed
			level++;
			//button takes you to next level
			$('#resultScreen div.bottomNav').append('<button class="buttonDesign floatRight" onclick="levelLoad(' + level + ',' + level + ',3); screenChange(\'mode3D\');">Next Level</button>');
			//ends game if you've completed all the levels
			if(timeModeFlag && level == 2){
				endGame();
			}
		} else {
			//score is deducted if in score mode
			if(scoreModeFlag){
				if(score >= 25)
					updateScore(-25);
				$('#score').text(score);
			}
			if(timeModeFlag){
				time += timeMode;
			}
			//button leads you back.
			$('#resultScreen div.bottomNav').append('<button class="buttonDesign floatRight" onclick="screenChange(\'mode3D\')">back</button>');
		}
	} else {
		$('#resultScreen div.bottomNav').append('<button class="buttonDesign floatLeft" onclick="screenChange(\'levelSelect\')">Levels</button>');
		$('#resultScreen div.bottomNav').append('<button class="buttonDesign floatRight" onclick="screenChange(\'answerScreen\');showAnswer();">Answer</button>');
	} */
}

/**
 * resizeGame Resizes the foldout according to the new screen size.
 * @return {undefined}
 */
function resizeGame(){
	//Resizes foldout depending on which screen you're on
	if($('#foldoutScreen').width() > $('#correctAnswer').width()){
		if($('#foldoutScreen').width() < $('#foldoutScreen').height()){
			axis = $('#foldoutScreen').width();
		} else {
			axis = $('#foldoutScreen').height();
		}
	} else {
		if($('#correctAnswer').width() < $('#correctAnswer').height()){
			axis = $('#correctAnswer').width();
		} else {
			axis = $('#correctAnswer').height();
		}
	}
	//Size is a portion of the screen to allow the full foldout to fit.
	size = Math.floor(axis/4);
	if($('#foldoutScreen').width() > $('#correctAnswer').width()){
		$('#foldout').css('border-collapse','collapse');
		$('#foldout tr td').children().css({'width': size, 'height': size, 'border': 'solid 5px black'});
		$('#foldout tr td div').children().css({'width': size, 'height': size});
	} else {
		$('#foldoutClone').css('border-collapse','collapse');
		$('#foldoutClone tbody tr td').children().css({'width': size, 'height': size, 'border': 'solid 5px black'});
		$('#foldoutClone tbody tr td div').children().css({'width': size, 'height': size});
	}
}

/**
 * colorChanger Turns on/off color changing flag.
 *				true = on, false = off
 * @return {undefined}
 */
function colorChanger(){
	colorFlag = !colorFlag;
	
	//Makes color button slightly transparent if flag is on.
	if(colorFlag) {
		$('#colorArrow').css('opacity', '0.4');
	} else {
		$('#colorArrow').css('opacity', '1');
	}
}

/**
 * 	 Difficulty button for number of pivots generated.
 * @return {undefined}
 */
function setDifficulty(num){
	
	if(num){
		difficultyNum = num;
	} else {
		difficultyNum = (difficultyNum + 1) % 2;
	}
	switch(difficultyNum){
		case 0:
			difficulty = 'Mode: Standard'
			updateBadge('standard', levelStandardHigh - 1 );
			break;
		case 1:
			difficulty = 'Mode: Advanced'
			updateBadge('advanced', levelAdvancedHigh - 1 );
			break;
	}
	alert(difficultyNum);
	$('#setDifficulty').text(difficulty);
}

/**
 * generatePivots Generates number of pivots on the cube depending on selected difficulty.
 * @param {integer} difficultyNum The difficulty selected, 0 = easy, 1 = medium, 2 = hard.
 * @return {undefined}
 */
function generatePivots(difficultyNum){
	var pivotCount = 0;
	var pivots = 0;
	switch(difficultyNum){
		case 0:
			pivotCount = 3;
			break;
		case 1:
			pivotCount = 2;
			break;
		case 2:
			pivotCount = 1;
			break;
	}
	//Make pivots proportional to difficulty chosen.
	while (pivots < pivotCount) {
		
		var pivot = Math.floor(Math.random() * faceArray.length);
		
		//Set chosen pivot to pivot properties.
		if(faceArray[pivot].trueColor != pivotColor){
			faceArray[pivot].trueColor = pivotColor;
			faceArray[pivot].playerColor = pivotColor;
			faceArray[pivot].trueValue = Math.floor(Math.random() * 4);
			faceArray[pivot].value = faceArray[pivot].trueValue;
			//Increment pivots when a new one is made.
			pivots++;
		}
	}
}
/**
 * compareAnswer Alters some game screens to be fit for comparing your answer to the real answer.
 * @return {undefined}
 */
function compareAnswer(){
	//Set flag so arrows are not rotatable.
	answerMode = true;
	
	//3D screen button changes.
	/* $('#mode3D div.bottomNav').html('');
	$('#mode3D div.bottomNav').append('<button class="buttonDesign floatRight menuBSize" onclick="screenChange(\'levelSelect\');">Levels</button>'
									+ '<button class="buttonDesign floatLeft menuBSize" onclick="screenChange(\'mainMenu\');">Menu</button>'); */
	
	//2D screen button changes.
	$('#mode2D div.topNav').html('');
	$('#mode2D div.topNav').append('<button class="buttonDesign floatRight menuBSize" onclick="screenChange(\'answerScreen\');">Answer</button>');
	$('#mode2D div.topNav').append('<button class="buttonDesign floatLeft menuBSize" onclick="screenChange(\'mode3D\');">To 3D</button>');
	$('#mode2D div.bottomNav').html('');
	$('#mode2D div.bottomNav').append('<button class="buttonDesign floatRight menuBSize" onclick="screenChange(\'levelSelect\');resizeGame();">Levels</button>'
									+ '<button class="buttonDesign floatLeft menuBSize" onclick="screenChange(\'mainMenu\');resizeGame();">Menu</button>');
}