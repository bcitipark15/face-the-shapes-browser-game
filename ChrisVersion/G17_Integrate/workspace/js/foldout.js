/* 
 * Author: Team 17 (Chris Centenera, Evan Chen, Ching Choi, John Park, Ian Park)
 * Description: JavaScript file that focuses on creating and manipulating 2D foldout 
 * 				screen elements along with error checking 3d and 2d faces.
 */
 

//Fixes bug where refreshes does not take player to main menu screen. ~~~ Move to game.js ~~~
$(document).ready(function(){
    window.location.hash = '#mainmenu';
});





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
 * @param numAnswer The number of faces for the user to solve.
 * @return {undefined}
 */
function generateCube(numAnswers){
	//Fills array of faces with newly generated faces.
	for(var i = 0; i < faces; i++){
       //Generate new face objects and store them in faceArray.
	   if(difficultyNum == 0){
		   faceArray[i] = new face(Math.floor(Math.random() * 4),
								4,
								selectedColor,
								selectedColor,
								faceNames[i]);
	   } else {
		   faceArray[i] = new face(Math.floor(Math.random() * 4),
								4,
								colors[Math.floor(Math.random() * colors.length)],
								colors[Math.floor(Math.random() * colors.length)],
								faceNames[i]);
		}
	} 
	
	
    //Size of each face scales with screen to provide user with scaled faces
	if($('#foldoutScreen').width() < $('#foldoutScreen').height()){
		axis = $('#foldoutScreen').width();
	} else {
		axis = $('#foldoutScreen').height();
	}
	
	//Size is a portion of the screen to allow the full foldout to fit.
	size = Math.floor(axis/4);
	
	scaleDifficulty(numAnswers);
}

/**
 * scaleDifficulty Takes the newly generated cube and adjusts the number of answers the user needs to solve.
 * @param numAnswers The number of faces that need to be solved.
 */
function scaleDifficulty(numAnswers){
	
	//Generate 1 pivot
	generatePivots(2);
	var blankCount = 0;
	
	//Generate blank faces. Number of blank faces + number of faces to be solved has to equal 5 since there is 1 pivot face.
	while(blankCount + numAnswers != 5){
		var newBlank = Math.floor(Math.random() * faceArray.length);
		//if selected face is not a pivot, turn it into a blank. If it's already blank, reselect.
		if(faceArray[newBlank].trueColor !== 'black' && faceArray[newBlank].trueValue != 4){
			faceArray[newBlank].trueValue = 4;
			blankCount++;
		}
	}
}


/**
 * foldoutT Generates a foldout of a cube in the shape of the letter 't'.
 * @param foldoutNum The foldout that will be generated.
 * @param numAnswers The number of faces that needs to be solved by the player.
 * @return {undefined}
 */
function foldoutT(foldoutNum, numAnswers){
	//If the easter egg has been activated, generate that cube instead.
	if(easterEggTwoActivate === true){
		pivotColor = 'white';
	}
	
	//Game generates cube after determining if easter egg is present.
	generateCube(numAnswers);
	
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
			
			//Print faces
			if(foldoutArray[foldoutNum][i].value != 4){
				//Rotate image depending on face value.
				$('#' + foldoutArray[foldoutNum][i].id).css('transform', 'rotateZ(' + foldoutArray[foldoutNum][i].value * 90 + 'deg)');
				
				//Color the face depending on the randomly generated color value.
				$('#' + foldoutArray[foldoutNum][i].id).css('background-color', foldoutArray[foldoutNum][i].playerColor);
			} else {
				$('#' + foldoutArray[foldoutNum][i].id).children().css('display','none');
				$('#' + foldoutArray[foldoutNum][i].id).css('background-color','white');
			}
		}
	}
	
	//Image centering happens after all images are applied.
	if(easterEggTwoActivate){
		$('.foldoutFace').children().css({'position':'absolute','left':'0','right':'0','bottom':'0','top':'0','margin':'auto'})
	}
	//Alter image size.
	$('.foldoutFace').children().css({'height': size, 'width': size});
	//Alter image container size.
	//$('.foldoutFace').css({'width': size, 'height': size, 'border': 'solid 5px black'});
}

/**
 * showAnswer Creates a foldout of the original cube and displays it on the answer screen.
 * @return {undefined}
 */
function showAnswer(){
	//Create clone
	$('#foldout').clone().appendTo('#correctAnswer').attr('id','foldoutClone');
	$('#foldoutClone > tr > td > div#facetop').attr('id','facetopClone');
	
	for(var i = 0; i < faceArray.length; i++){
		//Change all cloned id's to reflect in actual id.
		$('#foldoutClone > tr > td > div#' + faceArray[i].id).attr('id', faceArray[i].id + 'Clone');
		
		//Reapply image if face isn't white.
		if(faceArray[i].trueValue !== 4){
			$('#' + faceArray[i].id + 'Clone img').css('display','block');
			$('#' + faceArray[i].id + 'Clone').css('background-color', faceArray[i].trueColor);
			$('#' + faceArray[i].id + 'Clone').css('transform','rotate(' + 90 * faceArray[i].trueValue + 'deg)');
		} else {
			$('#' + faceArray[i].id + 'Clone img').css('display','none');
			$('#' + faceArray[i].id + 'Clone').css('background-color', 'white');
		}
	}
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
		currentFace.value = (currentFace.value + 1) % 5;
		if(currentFace.value === 4){
			$('#' + id + ' img').css('display','none');
			$('#' + id).css('background-color','white');
		} else {
			$('#' + id + ' img').css('display','block');
			$('#' + id).css('transform','rotateZ(' + currentFace.value * 90 + 'deg)');
			$('#' + id).css('background-color',currentFace.playerColor);
		}
	}
	
	//Changes face color if the face clicked is not the pivot face and if the color flag is on.
	if(currentFace.trueColor !== pivotColor && colorFlag && difficultyNum == 1){
		//Changes color to next color in the colors array.
		currentFace.playerColor = colors[(colors.indexOf(currentFace.playerColor) + 1) % colors.length];
		//Sets background color to newly adjusted color.
		$('#' + id).children().css('background-color',currentFace.playerColor);
	}
}

/**
 * applyFaces Applies generated 3D face arrow orientations and colors.
 * @param foldoutNum The foldout to be generated.
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
		if(getFace(faceNames[i]).trueValue === 4){
			$('.' + faceNames[i].substring(4)).children().css('display','none');
			$('.' + faceNames[i].substring(4)).css('background-color','white');
		} else {
			$('.' + faceNames[i].substring(4)).children().css('display','block');
			$('.' + faceNames[i].substring(4)).children().css('transform','rotateZ(' 
				+ (getFace(faceNames[i]).trueValue + offsets[foldoutNum][i]) * 90 + 'deg)');
			$('#cube .' + faceNames[i].substring(4)).css('background-color',faceArray[i].trueColor);
		}
	}
}

/** ~~~ Move to leaderboard.js ~~~
 * toLeaderBoard takes user's name and score and sends it to the database with AJAX and PHP.
 * @return {undefined}
 */
function toLeaderboard(){
	var name = $('#username').val();
	if(scoreModeFlag){
		inputHighScore(name,score);
		alert("Sent\nYour Name: " + name + "\nYour Score: " + score);
	}
	if(timeModeFlag){
		inputHighTime(name, time)
		alert("Sent\nYour Name: " + name + "\nYour Time: " + time);
	}
	
	//Edit buttons to prevent posting same information more than one time.
	$('#resultScreen div.bottomNav').html('');
	$('#resultScreen div.bottomNav').append('<button class="deadButton floatRight mobileBSize">Post!</button>');
	$('#resultScreen div.bottomNav').append('<button class="buttonDesign floatleft mobileBSize" onclick="screenChange(\'mainMenu\')">back</button>');
}