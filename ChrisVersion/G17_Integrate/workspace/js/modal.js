
/**
 * Fade in the modal.
 */
function modalFadeIn() {
	$('#modalBox').fadeIn(400);
}

/**
 * Face out the modal.
 */
function modalFadeOut() {
	$('#modalBox').fadeOut(400);
}

/** 
 * Will display the modal. 
 */
function displayModal() {
	$('.modalContent').html('');
	$('.modalContent').append('<h1>Quit?</h1>' 
						+ '<br>'
						+ '<br>'
						+ '<br>'
						+ 	'<ol>' 
						+ 		'<li><button class="buttonDesign menuBSize" onclick="screenChange(\'mainMenu\'); hideModal(); clearTimer();">Yes</button></li>'
						+		'<li><button class="buttonDesign menuBSize" onclick="hideModal();">No</button></li>'
						+ 	'</ol>');
	
    modalFadeIn();
	var timer = setTimeout(function() {document.getElementById('modalBox').style.display = 'block';}, 400);
}


/** 
 * Will hide the modal. 
 */
function hideModal() {
	modalFadeOut();
	var timer = setTimeout(function() {document.getElementById('modalBox').style.display = 'none';}, 400);
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
	var msgList = ['You did it!'];
	var msg = msgList[Math.floor(Math.random() * msgList.length)];
	$('.modalContent').html('');
	var additionalInfo = '';
	/**							**
	 **		ADD THIS TO MAIN	**
	 **							**
	 **							**
	 **							**
	 **/
	//HTML for level select button.
	var levelSelectButton = '<li><button class="buttonDesign menuBSize" onclick="screenChange(\'levelSelect\');modalFadeOut();">Level List</button></li>';
	var nextLevelButton = '<li><button class="buttonDesign menuBSize" onclick="$(\'level'+ currentLevelStandard + '\').click(); screenChange(\'mode3D\');">Next Level</button></li>'
	
	if(timeModeFlag){
		var levelSelectButton = ''
		var nextLevelButton = '<li><button class="buttonDesign menuBSize" onclick="$(\'level'+ level + '\').click(); screenChange(\'mode3D\');">Next Level</button></li>'
	}
	
	if(scoreModeFlag){
		var additionalInfo = '<p style="color: green;"> +30 seconds <br> +100 points!</p>';
		var levelSelectButton = ''
		var nextLevelButton = '<li><button class="buttonDesign menuBSize" onclick="$(\'level'+ level + '\').click(); screenChange(\'mode3D\');">Next Level</button></li>'
	}
	$('.modalContent').append('<h1>' + msg + '</h1>' 
								+ 	additionalInfo
								+ 	'<div class="bottomNav">'
								+ 		'<ul>' 
								+ 			levelSelectButton
								+ 			nextLevelButton
								+		'</ul>'
								+ 	'</div>');
	/**** END OF ADDITION****/
	modalFadeIn();
	var timer = setTimeout(function() {document.getElementById('modalBox').style.display = 'block';}, 400);
}

/**
 * Will display when the user has a mismatch fold-out.
 */
function modalIncorrect() {
	var msgList = ['You failed it!'];
	var msg = msgList[Math.floor(Math.random() * msgList.length)];
	$('.modalContent').html('');
	var additionalInfo = '';
	
	
	/**							**
	 **		ADD THIS TO MAIN	**
	 **							**
	 **							**
	 **							**
	 **/
	//HTML for level select button.
	var retryLevelButton = '<li><button class="buttonDesign menuBSize" onclick="screenChange(\'mode3D\');modalFadeOut();">retry</button></li>';
	var answerButton = '<li><button class="buttonDesign menuBSize" onclick="screenChange(\'answerScreen\');showAnswer();modalFadeOut();">answer</button></li>'
	
	if(timeModeFlag){
		var additionalInfo = '<p style="color: red;"> +20 seconds!</p>';
		var answerButton = ''
	}
	
	if(scoreModeFlag){
		var additionalInfo = '<p style="color: red;"> -25 points!</p>';
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
								
								
								
	/**** END OF ADDITION****/
	modalFadeIn();
	var timer = setTimeout(function() {document.getElementById('modalBox').style.display = 'block';}, 400);
}


/**							**
 **		ADD THIS TO MAIN	**
 **							**
 **							**
 **							**
 **/
	 
function compDiffSelect(mode){
	difficultyNum = 0;
	$('.modalContent').html('');
	$('.modalContent').append('<ul>' 
							+ '<li><button class="buttonDesign menuBSize setDifficulty" onclick="setDifficulty();">Standard</button></li>'
							+ '<li><button class="buttonDesign menuBSize" onclick="screenChange(\'mode3D\'); selectMode(\'' + mode + '\');">Start!</button></li>'
							+ '</ul>');
	modalFadeIn();
	var timer = setTimeout(function() {document.getElementById('modalBox').style.display = 'block';}, 400);
}
/**** END OF ADDITION****/













