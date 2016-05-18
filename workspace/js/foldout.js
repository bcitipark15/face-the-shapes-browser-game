/* 
 * Author: Team 17 (Chris Centenera, Evan Chen, Ching Choi, John Park, Ian Park)
 * Description: JavaScript file that focuses on creating and manipulating 2D foldout 
 * 				screen elements along with error checking 3d and 2d faces.
 */
 

//Fixes bug where refreshes does not take player to main menu screen.
$(document).ready(function(){
    window.location.hash = '#mainmenu';
});

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

//To be used at a later date.
$(document).ready(function() {
  
});

//************Test Print Function********************//
function testPrint(){
	var str;
	for(var i = 0; i < faceArray.length; i++){
		str += faceArray[i].print() + '\n';
	}
	alert(str);
}

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

//Test function for cube generation
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
	generatePivots(0);
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
					 + '" onclick="rotateFace(\''
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

/** 
 * validate Tests user's arrow orientation vs true arrow orientation along with user's colors vs true colors.
 * 			If user's answers perfectly align, results screen displays success message. Otherwise it displays
 *			
 * @return {undefined}
 */
function validate(){
	
	//Strings for debugging purposes to display user's arrow values vs true arrow values.
	var correct1 = 'Cube values = ';
	var correct2 = 'your values = ';
	
	//Clears results screen along with answer screen before editing them.
	$('#resultMessage').html('');
	$('#correctAnswer').html('');
	var match = true;
	for(var i = 0; i< faces; i++){
		
		//Concatenate each of the face values.
		correct1 += faceArray[i].trueValue + ' ';
		correct2 += faceArray[i].value + ' ';
		
		//Sets match to false if user has any combination wrong.
		if (getFace(faceNames[i]).trueValue != getFace(faceNames[i]).value
			|| getFace(faceNames[i]).playerColor != 
						getFace(faceNames[i]).trueColor) {
			match = false;
		}
	}

	//Appropriate message is displayed according to the result.
	if (match) {
		$('#resultMessage').append('Cube is a perfect match!');
	} else {
		$('#resultMessage').append('Cube Does Not Match');
	}
	
	//Displays answer for debugging.
	$('#correctAnswer').append(correct1 + '<br>' + correct2);
	
	$('#answerScreen div.bottomNav').html('');
	if(timeModeFlag || scoreModeFlag){
		//If user completed all 10 time mode levels, send to end game screen.
		if(timeModeFlag && level >= 10){
			endGame();
		} else if(match){
			if(scoreModeFlag){
				updateScore(100);
			}
			$('#answerScreen div.bottomNav').append('<div><a class="buttons floatRight mobileBSize" href="#mode3D" onclick="foldoutT(\''+ levels[level % 10] + '\');applyFaces(\''+ levels[level % 10] 
													+ '\');screenChange(\'answerScreen\', \'mode3D\');">Next Level</a></div>');
		} else {
			if(scoreModeFlag){
				updateScore(-25);
			}
			$('#answerScreen div.bottomNav').append('<div><a class="buttons floatRight mobileBSize" href="#mode3D" onclick="screenChange(\'answerScreen\',\'mode3D\')">back</a></div>');
		}
	} else {
		$('#answerScreen div.bottomNav').append('<div><a class="buttons floatLeft mobileBSize" href="#levelSelect">Levels</a></div>');
		$('#answerScreen div.bottomNav').append('<div><a class="buttons floatRight mobileBSize" href="#mainMenu">Menu</a></div>');
	}
}

/** 
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

function generatePivots(difficulty){
	var pivotCount = 0;
	var pivots = 0;
	switch(difficulty){
		case 0:
			pivotCount = 1;
			break;
		case 1:
			pivotCount = 2;
			break;
		case 2:
			pivotCount = 3;
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


function startTimeMode(){
	time = 0;
	timer = setInterval(drawTimer, 1000);
	timeModeFlag = true;
	levels = [0,1,2,3,4,5,6,7,8,9];
	level = 0;
	randomizeOrder(levels);
	foldoutT(levels[level]);
	applyFaces(levels[level]);
	level++;
	window.location.hash = '#mode3D';
}

function startScoreMode(){
	length = 1000;
	score = 0;
	levels = [0,1,2,3,4,5,6,7,8,9];
	level = 0;
	randomizeOrder(levels);
	scoreModeFlag = true;
	timer = setInterval(drawCountdownTimer, 1000, length);
	foldoutT(levels[level]);
	applyFaces(levels[level]);
	level++;
	window.location.hash = '#mode3D';
}
function drawCountdownTimer(){
	$('#timer p').text(length);
	length--;
	if(length <= 0){
		endGame();
		clearInterval(timer);
	}
}

function endGame(){
	$('#answerScreen.messageBox').html('');
	$('#answerScreen.messageBox').append('Your score: ' + score);
}
function updateScore(value){
	score += value;
	$('#score p').text(score);
}
function randomizeOrder(){
	for(var i = 0; i < levels.length; i++){
		var tempIndex = Math.floor(Math.random() * 10);
		var temp = levels[tempIndex];
		levels[tempIndex] = levels[i];
		levels[i] = temp;
	}
}

function drawTimer(){
	time++;
	$('#timer p').text(time);
}