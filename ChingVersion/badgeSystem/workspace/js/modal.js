
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
	var msgList = ['Well done. Here come the test results: "You are a horrible person." That\'s what it says. We weren\'t even testing for that.', 
				'You did it!', 
				'*Generic congratulatory Message*', 
				'Well Done.']
	var msg = msgList[Math.floor(Math.random() * msgList.length)];
	$('.modalContent').html('');
	$('.modalContent').append('<h1>' + msg + '</h1>' 
							+ 	'<p>Insert a hexagon with level in the center change next level button to display next level</p>'
							+ 	'<div class="bottomNav">'
							+ 		'<ul>' 
							+ 			'<li><button class="buttonDesign menuBSize" onclick="screenChange(\'levelSelect\'); hideModal();">Level List</button></li>'
							+ 			'<li><button class="buttonDesign menuBSize">Next Level</button></li>'
							+		'</ul>'
							+ 	'</div>');
	displayModal();
}

/**
 * Will display when the user has a mismatch fold-out.
 */
function modalIncorrect() {
	$('.modalContent').html('');
	$('.modalContent').append('<h1>Incorrect Screen</h1>' 
							+ 	'<p>Input Message</p>'
							+ 	'<div class="bottomNav">'
							+ 		'<ul>' 
							+ 			'<li><button class="buttonDesign menuBSize" onclick="screenChange(\'levelSelect\'); hideModal();">Level List</button></li>'
							+ 			'<li><button class="buttonDesign menuBSize">Fuck If I know</button></li>'
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