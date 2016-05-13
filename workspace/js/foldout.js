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

//Size is used to determine face width and height.
var size;

//Used to determine if user is editing a color instead of arrow orientation.
var colorFlag = false;

//Set pivot color, default is set to black.
var pivotColor = 'black';

//To be used at a later date.
$(document).ready(function() {
  
});

/**
 * makeFace creates a face object with a generated arrow value
 * @param {integer} faceNum The face number
 * @return {makeFace.face} Face object that is generated
 */
function makeFace(faceNum){
    var face = {
        //Randomized arrow value (0 = left, 1 = up, 2 = right, 3 = down
		trueValue: Math.floor(Math.random() * 4),
        value: Math.floor(Math.random() * 4),
		trueColor: colors[Math.floor(Math.random() * colors.length)],
		playerColor: colors[Math.floor(Math.random() * colors.length)]
    };
    return face;
}

/**
 * generateCube generates all the cube faces, both 3d and 2d
 * @return {undefined}
 */
function generateCube(){
	//Fills array of faces with newly generated faces.
	for(var i = 0; i < faces; i++){
       //Generate new face objects and store them in faceArray.
       faceArray[i] = makeFace(i);
	}
   //Size of each face scales with screen to provide user with scaled faces
	if($('#foldoutScreen').width() < $('#foldoutScreen').height()){
		axis = $('#foldoutScreen').width();
	} else {
		axis = $('#foldoutScreen').height();
	}
	//Size is a portion of the screen to allow the full foldout to fit.
	size = Math.floor(axis/4);
	
	//Pick a face to become pivot
	var pivot = Math.floor(Math.random() * faceArray.length);
	
	//Set pivot to be the pivot color.
	faceArray[pivot].trueColor = pivotColor;
	faceArray[pivot].playerColor = pivotColor;
	
	//set arrow orientation to same as pivot orientation value.
	faceArray[pivot].value = faceArray[pivot].trueValue;
}

/**
 * foldoutT Generates a foldout of a cube in the shape of the letter 't'.
 * @return {undefined}
 */
function foldoutT(){
	//If the easter egg has been activated, generate that cube instead.
	if(easterEggTwoActivate === true){
		pivotColor = 'white';
	}
	
	//Game generates cube after determining if easter egg is present.
	generateCube();
	
	/*Generate easteregg cube.
	 *
	 *   *** This code contains highly similar code to the main cube and NEEDS to be optimized in ***
	 *   *** later versions.																	  ***
	 */
	if (easterEggTwoActivate === true) {
		
		//If there is a foldoutScreen id already in place, delete it's contents.
	    $('#foldoutScreen').html('');
		
	    //Create table for 2d foldout to be rendered inside of the foldout screen.
	    $('#foldoutScreen').append('<table id="foldout"></table>');
	    
	    //Fill table with rows and columns to contain faces.
	    for(var i = 0; i < faces; i++){
			//Second row has 3 faces side by side.
	        if(i === 1 || i === 2 || i === 3){
	            //Appends div containing foldoutFace 1 2 or 3 to the current table column.
	            $("#foldout").append('<td>' +
	                                 '<div class="foldoutFace" id="foldoutFace' + i +
	                                 '" onclick="rotateFace(\'foldoutFace' + i + '\')"' +
	                                 '></div></td>');
	        } else {
				//Appends to the table the rows and columns to give the foldout structure.
	            $("#foldout").append('<tr><td></td><td>' +
	                                 '<div class="foldoutFace" id="foldoutFace' + i +
	                                 '" onclick="rotateFace(\'foldoutFace' + i + '\')"' +
	                                 '></div></td></tr>');
	        }
			
			//Append the image to the generated faces.
	        $('#foldoutFace' + i).append('<img src="./workspace/image/skull.png" height="50%"' +
	                                     '" width="50%">');
										 
			//Rotate the image depending on the randomly generated face object value.
	        $('#foldoutFace' + i).css('transform', 'rotateZ(' + faceArray[i].value * 90 + 'deg)');
	        
			//Color the face depending on the randomly generated color value.
	        $('#foldoutFace' + i).css('background-color', faceArray[i].playerColor);
	    }
		
		//Set the div width and height size and give it a black border to highlight the divs.
	    $('.foldoutFace').css({'width': size, 'height': size, 'border': 'solid 1px black'});
		
		//Centers the image in the div.
	    $('.foldoutFace').children().css({'position':'absolute','left':'0','right':'0','bottom':'0','top':'0','margin':'auto'})

	} else {
		//If there is a foldoutScreen id already in place, delete it's contents.
	    $('#foldoutScreen').html('');
		
	    //Create table for 2d foldout to be rendered inside of the foldout screen.
	    $('#foldoutScreen').append('<table id="foldout"></table>');
	    
		//Fill table with rows and columns to contain faces.
		for(var i = 0; i < faces; i++){
			
			//Second row will have 3 faces side by side.
			if(i === 1 || i === 2 || i === 3){
				
				//Appends div containing foldoutFace 1 2 or 3 to the current table column.
				$("#foldout").append('<td>' +
									 '<div class="foldoutFace" id="foldoutFace' + i +
									 '" onclick="rotateFace(\'foldoutFace' + i + '\')"' +
									 '></div></td>');
			} else {
				//Appends to the table the rows and columns to give the foldout structure.
				$("#foldout").append('<tr><td></td><td>' +
									 '<div class="foldoutFace" id="foldoutFace' + i +
									 '" onclick="rotateFace(\'foldoutFace' + i + '\')"' +
									 '></div></td></tr>');
			}
			
			//Append image to generated faces.
			$('#foldoutFace' + i).append('<img src="./workspace/image/arrow3.png" height="' + size +
										 '" width="' + size + '">');
										 
			//Rotate the image depending on the randomly generated face object value.
			$('#foldoutFace' + i).css('transform', 'rotateZ(' + faceArray[i].value * 90 + 'deg)');
			
			//Color the face depending on the randomly generated color value.
			$('#foldoutFace' + i).css('background-color', faceArray[i].playerColor);
		}
		
		//Set the div width and height size and give it a black border to highlight the divs.
		$('.foldoutFace').css({'width': size, 'height': size, 'border': 'solid 1px black'});
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
    currentFace = faceArray[parseInt(id.charAt(id.length -1))];
	
	//Changes the arrow rotation if the face clicked is not the pivot face and if the color flag is not on.
	if(currentFace.trueColor !== 'black' && !colorFlag){
		currentFace.value = (currentFace.value + 1) % 4;
		$('#' + id).css('transform','rotateZ(' + currentFace.value * 90 + 'deg)');
	}
	
	//Changes face color if the face clicked is not the pivot face and if the color flag is on.
	if(currentFace.trueColor !== 'black' && colorFlag){
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
function applyFaces(){
	//Array containing the face names of the cube.
	var faceNames = ['top','left','front','right','bottom','back'];
	
	//Loop to apply settings to each face.
	for(var i = 0; i < faces; i++){
		
		//Finds class of each face name and rotates it's arrow image according to the trueValue that was generated.
		$('.' + faceNames[i]).children().css('transform','rotateZ(' + faceArray[i].trueValue * 90 + 'deg)');
		
		//Sets the background color of the face according to the trueColor that was generated.
		$('#cube .' + faceNames[i]).css('background-color',faceArray[i].trueColor);
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
		if (faceArray[i].trueValue != faceArray[i].value || faceArray[i].playerColor != faceArray[i].trueColor) {
			match = false;
		}
	}
	
	//Appropriate message is displayed according to the result.
	if (match) {
		$('#resultMessage').append('You did it!');
	} else {
		$('#resultMessage').append('You got a face wrong!!');
	}
	
	//Displays answer for debugging.
	$('#correctAnswer').append(correct1 + '<br>' + correct2);
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
