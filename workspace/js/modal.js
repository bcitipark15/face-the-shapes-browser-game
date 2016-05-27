
/**
 * Fade in the modal.
 */
function modalFadeIn() {
	$('#modalBox').fadeIn(200);
}

/**
 * Face out the modal.
 */
function modalFadeOut() {
	$('#modalBox').fadeOut(200);
}

/** 
 * Will display the modal. 
 */
function displayModal() {
    modalFadeIn();
	var timer = setTimeout(function() {document.getElementById('modalBox').style.display = 'block';}, 200);
}

/** 
 * Will hide the modal. 
 */
function hideModal() {
	modalFadeOut();
	var timer = setTimeout(function() {document.getElementById('modalBox').style.display = 'none';}, 200);
}

/** 
 * When the user clicks anywhere outside of the modal, this will close it. 
 */
window.onclick = function(event) {
    if (event.target == document.getElementById('modalBox')) {
        hideModal();
    }
}
/**
 * Will display when the user has a matching fold-out.
 */
function modalCorrect() {
	var msgList = ['Well done. Here come the test results: "You are a horrible person." That\'s what it says. We weren\'t even testing for that.', 
				'You did it!', 
				'*Generic congratulatory Message*', 
				'Well Done.']
	var msg = msgList[Math.floor(Math.random() * msgList.length)];
	$('.modalContent').html('');
	var additionalInfo = '';
	var levelSelectButton = '<li><button class="buttonDesign" onclick="screenChange(\'levelSelect\');hideModal();">Levels</button></li>';
	var nextLevelButton = '<li><button class="buttonDesign" onclick="$(\'#level'+ (currentLevel + 1) + '\').click(); screenChange(\'mode3D\');hideModal();">Next</button></li>'
	
	if(timeModeFlag){
		var levelSelectButton = ''
		if(level >= numLevels){
			clearInterval(timer);
			var nextLevelButton = '<li><button class="buttonDesign" onclick="endGame();hideModal();">Done!</button></li>'
		} else {
			var nextLevelButton = '<li><button class="buttonDesign" onclick="levelLoad(2,4,' + (level + 1) + '); screenChange(\'mode3D\');hideModal();">Next</button></li>'
		}
	}
	
	if(scoreModeFlag){
		var additionalInfo = '<p style="color: green; text-align: center; font-size: 50px;"> +30 seconds <br> +' + scoreBase + ' points!</p>';
		var levelSelectButton = ''
		var nextLevelButton = '<li><button class="buttonDesign" onclick="levelLoad(' 
								+ Math.floor(level/3) % 10//Minimum foldout type
								+ ',' 
								+ Math.floor((level)/2 + 1) % 10 //maximum foldout type
								+ ',' 
								+ Math.floor((level)/3 + 1)
								+ '); screenChange(\'mode3D\');hideModal();">Next</button></li>'
	}
	$('.modalContent').append('<h1>' + msg + '</h1>' 
								+ 	additionalInfo
								+ 	'<div class="bottomNav">'
								+ 		'<ul>' 
								+ 			levelSelectButton
								+ 			nextLevelButton
								+		'</ul>'
								+ 	'</div>');
	/**Insert function for completion of all levels*/
	displayModal();
}

/**
 * Will display when the user has a mismatch fold-out.
 */
function modalIncorrect() {
	var msgList = ['You failed it!'];
	var msg = msgList[Math.floor(Math.random() * msgList.length)];
	$('.modalContent').html('');
	var additionalInfo = '';
	var retryLevelButton = '<li><button class="buttonDesign " onclick="screenChange(\'mode3D\');hideModal();">retry</button></li>';
	var answerButton = '<li><button class="buttonDesign " onclick="screenChange(\'answerScreen\');showAnswer();hideModal();">answer</button></li>'
	
	if(timeModeFlag){
		var additionalInfo = '<p style="color: red; text-align: center; font-size: 50px;"> +20 sec </p>';
		var answerButton = ''
	}
	
	if(scoreModeFlag){
		var additionalInfo = '<p style="color: red; text-align: center; font-size: 50px;"> -25 points!</p>';
		var answerButton = ''
	}
	$('.modalContent').append('<h1>' + msg + '</h1>' 
								+ 	additionalInfo
								+ 	'<div class="bottomNav">'
								+ 		'<ul>' 
								+ 			retryLevelButton
								+ 			answerButton
								+		'</ul>'
								+ 	'</div>');
	displayModal();
}
/**
 * Will display when the user presses the back button in game.
 */
function modalOption() {
	$('.modalContent').html('');
	$('.modalContent').append('<h1>Mini Menu</h1>' 
							+ 	'<div>'
							+ 		'<ol>' 
							+			'<li><button class="buttonDesign menuBSize" onclick="screenChange(\'mainMenu\'); hideModal();">Main Menu</button></li>'
							+ 			'<li><button class="buttonDesign menuBSize" onclick="screenChange(\'levelSelect\'); hideModal();">Level Select</button></li>'
							+ 			'<li><button class="buttonDesign menuBSize" onclick="hideModal();">Cancel</button></li>'
							+		'</ol>'
							+ 	'</div>');
	
	displayModal();
}
/* Work In progress */
function modalArrow() {
	$('.modalContent').html('');
	$('.modalContent').append('<h1>Select Arrow</h1>' 
							+ 	'<div id="arrowBox">'
							+ 		'<table>' 
							+ 			'<tr>'
							+				'<td></td>'
							+				'<td><div id="modalArrow1" onclick=""><img src="./workspace/image/arrow3.png"></div></td>'
							+				'<td></td>'
							+			'</tr>'
							+ 			'<tr>'
							+				'<td><div id="modalArrow2" onclick=""><img src="./workspace/image/arrow3.png"></div></td>'
							+				'<td></td>'
							+				'<td><div id="modalArrow3" onclick=""><img src="./workspace/image/arrow3.png"></div></td>'
							+			'</tr>'
							+ 			'<tr>'
							+				'<td></td>'
							+				'<td><div id="modalArrow4" onclick=""><img src="./workspace/image/arrow3.png"></div></td>'
							+				'<td></td>'
							+			'</tr>'
							+		'</table>'
							+ 	'</div>');
	
	displayModal();
}
/* Work In progress */
function modalColor() {
	
}

function compDiffSelect(mode){
	difficultyNum = 0;
	$('.modalContent').html('');
	$('.modalContent').append('<h1>Select Difficulty</h1>'
							+	'<ol>' 
							+		'<li><button id="modalStd" class="testDeadBtn menuBSize" onclick="setDifficulty(\'0\');compDiffSelectButtonChange();">Standard</button></li>'
							+		'<li><button id="modalAdv" class="buttonDesign menuBSize" onclick="setDifficulty(\'1\');compDiffSelectButtonChange();">Advance</button></li>'
							+		'<li><button class="buttonDesign menuBSize" onclick="screenChange(\'mode3D\'); selectMode(\'' + mode + '\');hideModal();">Start!</button></li>'
							+	'</ol>');
	displayModal();
}

function compDiffSelectButtonChange(){
	if(difficultyNum == 0){
		$('#modalStd').replaceWith('<button id="modalStd" class="testDeadBtn menuBSize" onclick="setDifficulty(\'0\');compDiffSelectButtonChange();">Standard</button>');
		$('#modalAdv').replaceWith('<button id="modalAdv" class="buttonDesign menuBSize" onclick="setDifficulty(\'1\');compDiffSelectButtonChange();">Advance</button>');
	} else {
		$('#modalStd').replaceWith('<button id="modalStd" class="buttonDesign menuBSize" onclick="setDifficulty(\'0\');compDiffSelectButtonChange();">Standard</button>');
		$('#modalAdv').replaceWith('<button id="modalAdv" class="testDeadBtn menuBSize" onclick="setDifficulty(\'1\');compDiffSelectButtonChange();">Advance</button>');
	}
}

function achievementModal(achivementNum) {
	$('.modalContent').html('');
	var achivementName;
	var achievementImage;
	var achivementText;
	switch(achivementNum){
		case 1:
			var achievementName = '<h1>The First Step</h1>';
			var achievementImage = '<li><img src="./workspace/image/Quas.png" alt="achievement1" width="50%" height="50%"></li>';
			var achievementText = '<li><p>Solve your first cube</p></li>';
			break;
		case 2:
			var achievementName = '<h1>Scoring Big</h1>';
			var achievementImage = '<li><img src="./workspace/image/Wex.png" alt="achievement1" width="50%" height="50%"></li>';
			var achievementText = '<li><p>Score over 1000pts!</p></li>';
			break;
		case 3:
			var achievementName = '<h1>Speedy the<br>Speedster</h1>';
			var achievementImage = '<li><img src="./workspace/image/Exort.png" alt="achievement1" width="50%" height="50%"></li>';
			var achievementText = '<li><p>Solve a cube in under 30 seconds!</p></li>';
			break;
	}
	$('.modalContent').append(achievementName
							+	'<ol>' 
							+		achievementImage
							+		achievementText
							+		'<li><button class="buttonDesign menuBSize" onclick="hideModal();">Okay</button></li>'
							+	'</ol>');
	displayModal();
	
}

function resetCookieModal() {
	$('.modalContent').html('');
	$('.modalContent').append('<h1>Reset Progress?</h1>'
							+	'<ol>' 
							+		'<li><button class="buttonDesign menuBSize" onclick="resetCookies(); hideModal();">Continue</button></li>'
							+		'<li><button class="buttonDesign menuBSize" onclick="hideModal();">Cancel</button></li>'
							+	'</ol>');
	displayModal();
}