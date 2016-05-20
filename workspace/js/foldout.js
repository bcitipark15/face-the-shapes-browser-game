/* 
 * Author: Team 17 (Chris Centenera, Evan Chen, Ching Choi, John Park, Ian Park)
 * Description: JavaScript file that focuses on creating and manipulating 2D foldout 
 * 				screen elements along with error checking 3d and 2d faces.
 */
 

//Fixes bug where refreshes does not take player to main menu screen.
$(document).ready(function(){
    window.location.hash = '#mainmenu';
});

function resizeGame(){
	if($('#foldoutScreen').width() < $('#foldoutScreen').height()){
		axis = $('#foldoutScreen').width();
	} else {
		axis = $('#foldoutScreen').height();
	}
	
	//Size is a portion of the screen to allow the full foldout to fit.
	size = Math.floor(axis/4);
	$('#foldout tr td').children().css({'width': size, 'height': size, 'border': 'solid 1px black'});
	
	$('#foldout tr td div').children().css({'width': size, 'height': size});
}
window.onresize = resizeGame;
//variable that determine if easter egg two is activated
var easterEggTwoActivate = false;

 //Color array for face colors.
var colors = ['red','lime','blue','purple','yellow','cyan','orange'];

//Hard code 6 faces for cube
var faces = 6;

//Array of objects that contain face info
var faceArray = [];

//Array containing the face names of the cube.
var faceNames = ['facetop','faceleft','facefront','faceright','facebottom','faceback'];

//Size is used to determine face width and height.
var size;

//Flags used to indicate different actions.
var colorFlag = false;
var timeModeFlag = false;

//Set pivot color, default is set to black.
var pivotColor = 'black';

//Current elapsed time in competitive modes.
var time = 0;
//Levels will contain randomized level order
var levels = [];
//level is current level.
var level;


/**
 * makeFace creates a face object with a generated arrow value
 * @param {integer} trueValue The true orientation of the arrow.
 * @param {integer} value The player's orientation of the arrow.
 * @param {integer} trueColor The true color of the arrow.
 * @param {integer} playerColor The player's color of the arrow.
 * @param {integer} faceNum The face number
 * @return {makeFace.face} Face object that is generated
 */
function face(trueValue, value, trueColor, playerColor, id){
	this.trueValue = trueValue;
	this.value = value;
	this.trueColor = trueColor;
	this.playerColor = playerColor;
	this.id = id;
	//Print out current object state for debugging.
	this.print = function(){return "tval=" + trueValue +"val=" + value 
							+ "tCol=" + trueColor + "col=" + playerColor
							+ "id=" + this.id;};
}

/**
 * generateCube generates all the cube faces, both 3d and 2d
 * @return {undefined}
 */
function generateCube(){
	//Fills array of faces with newly generated faces.
	for(var i = 0; i < faces; i++){
       //Generate new face objects and store them in faceArray.
       faceArray[i] = new face(Math.floor(Math.random() * 4),
							Math.floor(Math.random() * 4),
							colors[Math.floor(Math.random() * colors.length)],
							colors[Math.floor(Math.random() * colors.length)],
							faceNames[i]);
	} 
	
	
    //Size of each face scales with screen to provide user with scaled faces
	if($('#foldoutScreen').width() < $('#foldoutScreen').height()){
		axis = $('#foldoutScreen').width();
	} else {
		axis = $('#foldoutScreen').height();
	}
	
	//Size is a portion of the screen to allow the full foldout to fit.
	size = Math.floor(axis/4);
	generatePivots(difficultyNum);
}

/**
 * foldoutT Generates a foldout of a cube in the shape of the letter 't'.
 * @return {undefined}
 */
function foldoutT(foldoutNum){
	//If the easter egg has been activated, generate that cube instead.
	if(easterEggTwoActivate === true){
		pivotColor = 'white';
	}
	
	//Game generates cube after determining if easter egg is present.
	generateCube();
	
	$('#foldoutScreen').html('');
	$('#foldoutScreen').append('<table id="foldout"></table>');
	
	//2D array, first dimension is foldout type, second dimension is foldout layout.
	var foldoutArray = [];
	foldoutArray[0] = [ undefined, getFace('facetop'), undefined,
						getFace('faceleft'), getFace('facefront'), getFace('faceright'),
						undefined, getFace('facebottom'), undefined,
						undefined, getFace('faceback'), undefined ];
						
	foldoutArray[1] = [ getFace('faceleft'),getFace('facetop'),getFace('faceright'),
						undefined, getFace('facefront'), undefined,
						undefined, getFace('facebottom'),undefined,
						undefined, getFace('faceback'), undefined ];
						
	foldoutArray[2] = [ undefined,getFace('facetop'),getFace('faceright'),
						undefined, getFace('facefront'), undefined,
						getFace('faceleft'), getFace('facebottom'),undefined,
						undefined, getFace('faceback'), undefined ];
						
	foldoutArray[3] = [ undefined,getFace('facetop'),getFace('faceright'),
						getFace('faceleft'), getFace('facefront'), undefined,
						undefined, getFace('facebottom'),undefined,
						undefined, getFace('faceback'), undefined ];
						
	foldoutArray[4] = [ undefined, undefined, getFace('facetop'),
						getFace('faceleft'), getFace('facefront'), getFace('faceright'),
						undefined, getFace('facebottom'),undefined,
						undefined, getFace('faceback'), undefined ];
						
	foldoutArray[5] = [ undefined, undefined, getFace('facetop'),
						undefined, getFace('facefront'), getFace('faceright'),
						getFace('faceleft'), getFace('facebottom'),undefined,
						undefined, getFace('faceback'), undefined ];
						
	foldoutArray[6] = [ undefined,getFace('facetop'),getFace('faceright'),
						undefined, getFace('facefront'), undefined,
						undefined, getFace('facebottom'),undefined,
						getFace('faceleft'), getFace('faceback'), undefined ];
						
	foldoutArray[7] = [ undefined, getFace('facetop'), undefined,
						undefined, getFace('facefront'), getFace('faceright'),
						getFace('faceleft'), getFace('facebottom'), undefined,
						undefined, getFace('faceback'), undefined ];
						
	foldoutArray[8] = [ undefined,getFace('facetop'),getFace('faceright'),
						undefined, getFace('facefront'), undefined,
						getFace('faceleft'), getFace('facebottom'),undefined,
						getFace('faceback'), undefined, undefined ];
						
	foldoutArray[9] = [ undefined, undefined, getFace('facetop'),
						undefined, getFace('facefront'), getFace('faceright'),
						getFace('faceleft'), getFace('facebottom'),undefined,
						getFace('faceback'), undefined, undefined ];
						
	//Max table rows for the foldout.
	var rows = 4;
	
	//Max table columns for the foldout.
	var cols = 3;
	
	//image source for the foldout.
	
	var img = '<img src="./workspace/image/arrow3.png" height="' + size
			  + '" width="' + size + '">';
	
	if(easterEggTwoActivate){
		img = '<img src="./workspace/image/skull.png" height="50%'
			  + '" width="50%">';
		
	}
	//Used to store html in string.
	var htmlLine;
	
	for(var i = 0; i < foldoutArray[foldoutNum].length; i++){
		
		//Every 3 columns append a new row starting tag
		if(i % cols == 0){
			htmlLine = '<tr>';
		}
		
		//append face in a column if there is a face in that array slot
		if(foldoutArray[foldoutNum][i]){
			htmlLine += '<td><div class="foldoutFace" id="' 
					 + foldoutArray[foldoutNum][i].id
					 + '"onclick="rotateFace(\''
					 + foldoutArray[foldoutNum][i].id + '\')"></div></td>';
		} else {
			//append empty table column if array slot is undefined
			htmlLine += '<td></td>';
		}
		//Append row closing tag after last column is generated
		if(i % cols == 2) {
			htmlLine += '</tr>';
			$('#foldout').append(htmlLine);
		}
	}
	
	//Apply rotations and images
	for(var i = 0; i <foldoutArray[foldoutNum].length; i++){
		if(foldoutArray[foldoutNum][i]){
			$('#' + foldoutArray[foldoutNum][i].id).append(img);
			
			//Rotate image depending on face value.
			$('#' + foldoutArray[foldoutNum][i].id).css('transform', 'rotateZ(' + foldoutArray[foldoutNum][i].value * 90 + 'deg)');
			
			//Color the face depending on the randomly generated color value.
			$('#' + foldoutArray[foldoutNum][i].id).css('background-color', foldoutArray[foldoutNum][i].playerColor);
		}
	}
	
	//Image centering happens after all images are applied.
	if(easterEggTwoActivate){
		$('.foldoutFace').children().css({'position':'absolute','left':'0','right':'0','bottom':'0','top':'0','margin':'auto'})
	}
	
	$('.foldoutFace').css({'width': size, 'height': size, 'border': 'solid 1px black'});
}

/**
 * getFace Finds the face object associated with given id
 * @param id The id of the face object.
 * @return {Object} Face object with given id.
 */
function getFace(id){
	//cycle through face array until id is found
	for(var i = 0; i < faceArray.length; i++){
		if(id == faceArray[i].id) {
			return faceArray[i];
		}
	}
}

/** 
 * ** Name of this function needs to be changed to accomodate new color changing capability. **
 * rotateFace Rotates the image of the face that was clicked on.
 * @param id The id of the face that will be rotated.
 * @return {undefined}
 */
function rotateFace(id){
	
	//Takes the passed id and determines which face in the array it is.
    currentFace = getFace(id);
	
	//Changes the arrow rotation if the face clicked is not the pivot face and if the color flag is not on.
	if(currentFace.trueColor !== pivotColor && !colorFlag){
		currentFace.value = (currentFace.value + 1) % 4;
		$('#' + id).css('transform','rotateZ(' + currentFace.value * 90 + 'deg)');
	}
	
	//Changes face color if the face clicked is not the pivot face and if the color flag is on.
	if(currentFace.trueColor !== pivotColor && colorFlag){
		//Changes color to next color in the colors array.
		currentFace.playerColor = colors[(colors.indexOf(currentFace.playerColor) + 1) % colors.length];
		//Sets background color to newly adjusted color.
		$('#' + id).css('background-color',currentFace.playerColor);
	}
}

/** ~~~Move to game.js~~~
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

/**  ~~~Move to cube.js~~~
 * applyFaces Applies generated 3D face arrow orientations and colors.
 * @return {undefined}
 */
function applyFaces(foldoutNum){
	//Offsets for different foldouts
	offsets = [];
	//order is top,left,front,right,bottom,back(Same as faceNames array order)
	offsets[0] = [0,0,0,0,0,0];
	offsets[1] = [0,-1,0,1,0,0];
	offsets[2] = [0,1,0,1,0,0];
	offsets[3] = [0,0,0,1,0,0];
	offsets[4] = [-1,0,0,0,0,0];
	offsets[5] = [-1,1,0,0,0,0];
	offsets[6] = [0,2,0,1,0,0];
	offsets[7] = [0,1,0,0,0,0];
	offsets[8] = [0,1,0,1,0,-1];
	offsets[9] = [-1,1,0,0,0,-1];
	
	//Loop to apply settings to each face.
	for(var i = 0; i < faces; i++){
		
		//Finds class of each face name and rotates it's arrow image according to the trueValue that was generated.
		$('.' + faceNames[i].substring(4)).children().css('transform','rotateZ(' 
			+ (getFace(faceNames[i]).trueValue + offsets[foldoutNum][i]) * 90 + 'deg)');
		
		//Sets the background color of the face according to the trueColor that was generated.
		$('#cube .' + faceNames[i].substring(4)).css('background-color',faceArray[i].trueColor);
	}
}

/** ~~~ Move to game.js ~~~
 * validate Tests user's arrow orientation vs true arrow orientation along with user's colors vs true colors.
 * 			If user's answers perfectly align, results screen displays success message. Otherwise it displays
 *			
 * @return {undefined}
 */
function validate(){
	
	
	//Clears results screen along with answer screen before editing them.
	$('#resultMessage').html('');
	$('#correctAnswer').html('');
	var match = true;
	for(var i = 0; i< faces; i++){
		//Sets match to false if user has any combination wrong.
		if (getFace(faceNames[i]).trueValue != getFace(faceNames[i]).value
			|| getFace(faceNames[i]).playerColor != 
						getFace(faceNames[i]).trueColor) {
			match = false;
		}
	}

	//Appropriate message is displayed according to the result.
	if (match) {
		$('#resultMessage').append('Foldout is a perfect match!');
	} else {
		$('#resultMessage').append('Foldout does not match!');
	}
	
	//Set answerScreen buttons depending on which game mode you are in.
	$('#answerScreen div.bottomNav').html('');
	if(timeModeFlag || scoreModeFlag){
		//If user completed all x time mode levels, send to end game screen. ~~Specify how many levels later, 2 set for testing purposes.~~
		if(match){
			//update score if in score mode
			if(scoreModeFlag){
				updateScore(100);
			}
			//level is changed
			level++;
			//button takes you to next level
			$('#answerScreen div.bottomNav').append('<div><a class="buttons floatRight mobileBSize" href="#mode3D" onclick="foldoutT(\''+ levels[level % 10] + '\');applyFaces(\''+ levels[level % 10] 
													+ '\');screenChange(\'answerScreen\', \'mode3D\');">Next Level</a></div>');
			//ends game if you've completed all the levels
			if(timeModeFlag && level >= 2){
				endGame();
			}
		} else {
			//score is deducted if in score mode
			if(scoreModeFlag){
				updateScore(-25);
			}
			//button leads you back.
			$('#answerScreen div.bottomNav').append('<div><a class="buttons floatRight mobileBSize" href="#mode3D" onclick="screenChange(\'answerScreen\',\'mode3D\')">back</a></div>');
		}
	} else {
		$('#answerScreen div.bottomNav').append('<div><a class="buttons floatLeft mobileBSize" href="#levelSelect" onclick="screenChange(\'answerScreen\',\'levelSelect\')">Levels</a></div>');
		$('#answerScreen div.bottomNav').append('<div><a class="buttons floatRight mobileBSize" href="#mainMenu" onclick="screenChange(\'answerScreen\',\'mainMenu\')">Menu</a></div>');
	}
}

/** ~~~Move to easteregg.js~~~
 * ** Will be updated in later version to be more efficient/modular. **
 * easterEggTwo Edits the game's style to compliment the easter egg.
 * @return {undefined}
 */
function easterEggTwo() {
	easterEggTwoActivate = true;
	var easterEggTwoActivateHead = document.getElementsByTagName('head').item(0);
	var easterEggTwoActivateStyle = document.createElement("style");
	easterEggTwoActivateStyle.type = "text/css"; 
	easterEggTwoActivateStyle.appendChild(document.createTextNode("#gameContainer{background-color: #042714;"
			+ "background-image: linear-gradient(120deg, #021127, #042714);} "
			+ "body{background-color:black;}"
			+ ".title{color: rgba(200, 100, 100, 0.7);}"
			+ ".buttons{color: rgba(200, 100, 100, 0.7);}"
			+ "#cube img{width: 50%; height: 50%;}"));
	easterEggTwoActivateHead.appendChild(easterEggTwoActivateStyle);
	var easterEggTwoActivateCubeFace = document.getElementById('cube');
	easterEggTwoActivateCubeFace.innerHTML = '<figure class="front"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure> '
            + '<figure class="back"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
            + '<figure class="right"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
            + '<figure class="left"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
            + '<figure class="top"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
            + '<figure class="bottom"><img class="cubeCover" src="./workspace/image/skull.png" alt="arrow"></figure>'
}



difficultyNum = 0;

/**
 * setDifficulty Difficulty button for number of pivots generated.
 * @return {undefined}
 */
function setDifficulty(){
	difficultyNum = (difficultyNum + 1) % 3;
	switch(difficultyNum){
		case 0:
			difficulty = 'easy'
			break;
		case 1:
			difficulty = 'med'
			break;
		case 2:
			difficulty = 'hard'
			break;
	}
	$('#setDifficulty').text('Difficulty: ' + difficulty);
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
			faceArray[pivot].value = faceArray[pivot].trueValue;
			//Increment pivots when a new one is made.
			pivots++;
		}
	}
}

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
			$('#timer').css('display', 'none');
			$('#score').css('display', 'none');
			break;
		case 'time':
			$('#timer').css('display', 'initial');
			$('#score').css('display', 'none');
			startTimeMode();
			break;
		case 'score':
			$('#timer').css('display', 'initial');
			$('#score').css('display', 'initial');
			startScoreMode();
			break;
	}
}

/** ~~~ Move to game.js ~~~
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
	
	//Build foldout and apply generated faces to 3D cube.
	foldoutT(levels[level]);
	applyFaces(levels[level]);
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
	//Randomize levels **** NEEDS TO BE PUT INTO FUNCTION ****
	levels = [0,1,2,3,4,5,6,7,8,9];
	level = 0;
	randomizeOrder(levels);
	//flag set for screen rendering.
	scoreModeFlag = true;
	//Sets interval for when to update countdown timer.
	timer = setInterval(drawCountdownTimer, 1000, time);
	
	//Move to level 1 **** NEEDS TO BE PUT INTO FUNCTION (CALL IT nextLevel());
	foldoutT(levels[level]);
	applyFaces(levels[level]);
	level++;
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
		clearInterval(timer);
	}
}

/** ~~~ Move to game.js ~~~
 * endGame Ends all game timers and brings user to end game screen (Modified version of answerScreen).
 * @return {undefined}
 */
function endGame(){
	//Change to answerScreen from either screen.
	screenChange('mode2D','answerScreen');
	screenChange('mode3D','answerScreen');
	window.location.hash = '#mode3D';
	$('#answerScreen div.bottomNav').html('');
	$('#answerScreen div.bottomNav').append('<div><a class="buttons floatRight mobileBSize" href="#" onclick="toLeaderboard();">Post!</a></div>');
	$('#answerScreen div.bottomNav').append('<div><a class="buttons floatleft mobileBSize" href="#mainMenu" onclick="screenChange(\'answerScreen\',\'mainMenu\')">back</a></div>');
	$('#answerScreen div.messageBox').html('');
	
	if(scoreModeFlag){
		$('#answerScreen div.messageBox').append('<p>Your score: ' + score + '</p>');
	}
	if(timeModeFlag){
		$('#answerScreen div.messageBox').append('<p>Your time: ' + time + '</p>');
	}
	$('#answerScreen div.messageBox').append('<br><p>Enter Your Name:</p>' +
											'<input type="text" id="username" name="username"style="z-index: 999; position: relative"></input>');
	$('#username').focus();
	
}

/** ~~~ Move to game.js ~~~
 * toLeaderBoard takes user's name and score and sends it to the database with AJAX and PHP.
 * @return {undefined}
 */
function toLeaderboard(){
	var name = $('#username').val();
	if(scoreModeFlag){
		inputHighScore(name,score);
		alert("Sent\nYour Name: " + name + "\nYour Score: " + score);
	}
	
	
	//*****inputBestTime here******
	
	$('#answerScreen div.bottomNav').html('');
	$('#answerScreen div.bottomNav').append('<div><p class="deadButton floatRight mobileBSize">Post!</p></div>');
	$('#answerScreen div.bottomNav').append('<div><a class="buttons floatleft mobileBSize" href="#mainMenu" onclick="screenChange(\'answerScreen\',\'mainMenu\')">back</a></div>');
}

/** ~~~ Move to game.js ~~~
 * updateScore Updates the visual representation of the user's score on the 3D screen.
 * @param value The value to be added to the current score.
 * @return {undefined}
 */
function updateScore(value){
	score += value;
	$('#score p').text(score);
}

/** ~~~ Move to game.js ~~~
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

/** ~~~ Move to game.js ~~~
 * drawTimer Updates the visual representation of the timer in Timed mode on 3D screen.
 * @return {undefined}
 */
function drawTimer(){
	time++;
	$('#timer').text(time);
}