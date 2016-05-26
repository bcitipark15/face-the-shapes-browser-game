/* 
 * Author: Team 17 (Chris Centenera, Evan Chen, Ching Choi, John Park, Ian Park)
 * Description: Contains all the 3D cube related functionality.
 */
 
//Events are bound to their corresponding functions.
document.onmousedown 	= mouseDown;
document.onmouseup 		= mouseUp;
document.onmousemove 	= mouseMove;
document.onkeydown = rotateCubeOnKeyPress;


// List of variables used in the rotation of the 3D cube.
var mouseDownID 		= -1;
var touchDownID			= -1;
var x 					= 0;
var y 					= 0;
var startX 				= 0;
var startY 				= 0;
var yawn				= -45;
var pitch				= -45;
var addYawn				= 0;
var addPitch			= 0;
var stopYawn			= 0;
var stopPitch			= 0;
var unfolded			= 0;
var front_rX			= 0;
var front_rY 			= 0;
var front_rZ			= 0;
var back_rX				= 0;
var back_rY				= 0;
var back_rZ				= 0;
var right_rX			= 0;
var right_rY			= 0;
var right_rZ			= 0;
var left_rX				= 0;
var left_rY				= 0;
var left_rZ				= 0;
var top_rX				= 0;
var top_rY				= 0;
var top_rZ 				= 0;
var bottom_rX			= 0;
var bottom_rY			= 0;
var bottom_rZ			= 0;
var unfolded			= false;
var alignBreak 			= 0;
var unfoldingBegin;
var foldingBegin;
var translate 			= 0;
var pressed 			= false;
var spinDeg				= -45;


/**
 * mouseDown Translates current X and Y positions when the mouse is clicked into a starting point for
 *			 the upcoming x and y rotations that will affect pitch and yawn. Triggers rotate function.
 * @param e The event generated by mouse.
 * @return {undefined}
 */
function mouseDown(e) {
	if (mouseDownID == -1) {
		e.preventDefault();
		startX 		= e.clientX - innerWidth/2;
		startY 		= e.clientY - innerHeight/2;
		mouseDownID = setInterval(rotate, 10);
	}
}

/**
 * mouseUp Clears the interval of function rotate upon mouse release. Updates x and y rotation points.
 * @param e The event generated by mouse.
 * @return {undefined}
 */
function mouseUp(e) {

	if (mouseDownID != -1) {
		e.preventDefault();
		clearInterval(mouseDownID);
		mouseDownID = -1;
		startX 		= e.clientX - innerWidth/2;
		startY 		= e.clientY - innerHeight/2;
	}
}

/* Translate current X and Y position into rotating point all the time as 
   the mouse move.*/
/**
 * mouseMove Translates current X and Y position into rotated x and y points every time the mouse is moved.
 * @param e The event generated by mouse.
 * @return {undefined}
 */
function mouseMove(e) {
	
	e.preventDefault();

	x 			= startX - (e.clientX - innerWidth/2);
	y 			= startY - (e.clientY - innerHeight/2);

	addYawn 	= x / innerWidth * 180;
	addPitch 	= y / innerHeight * 180;

	startX 		= e.clientX - innerWidth/2;
	startY		= e.clientY - innerHeight/2;
}

/**
 * Touch version of mouseDown.
 * @return {undefined}
 */
window.addEventListener('load', function(){ // on page load
 
    document.body.addEventListener('touchstart', function(e){
        if (touchDownID == -1) {
			startX 		= e.changedTouches[0].pageX - innerWidth/2;
			startY 		= e.changedTouches[0].pageY - innerHeight/2;
			mouseDownID = setInterval(rotate, 10);
		}
	}, false)
 
}, false)

/**
 * Touch version of mouseUp.
 * @return {undefined}
 */
window.addEventListener('load', function(){ // on page load
 
    document.body.addEventListener('touchend', function(e){
        if (touchDownID != -1) {
			clearInterval(mouseDownID);
			touchDownID = -1;
			startX 		= e.changedTouches[0].pageX - innerWidth/2;
			startY 		= e.changedTouches[0].pageY - innerHeight/2;
		}
	}, false)
 
}, false)

/**
 * Touch version of mouseMove.
 * @return {undefined}
 */
window.addEventListener('load', function(){ // on page load
 
    document.body.addEventListener('touchmove', function(e){
        x 			= startX - (e.changedTouches[0].pageX - innerWidth/2);
		y 			= startY - (e.changedTouches[0].pageY - innerHeight/2);

		addYawn 	= x / innerWidth * 180;
		addPitch 	= y / innerHeight * 180;

		startX 		= e.changedTouches[0].pageX - innerWidth/2;
		startY		= e.changedTouches[0].pageY - innerHeight/2;
	}, false)
 
}, false)

/**
 * rotate Rotates the cube based on changes in the mouse X and Y positions when the mouse is
 *		  pressed down and moved.
 * @return {undefined}
 */
function rotate() {
	// Only add the addYawn to yawn if the mouse has moved while pressed
	if (stopYawn != addYawn) {
		yawn 		+= addYawn;
		stopYawn 	 = addYawn;
	}

	// Only add the addPitch to pitch if the mouse has moved while pressed
	if (stopPitch != addPitch) {
		pitch 		+= addPitch;
		stopPitch 	 = addPitch;
	}
	
	// Check to see if the cube is folded or not, and rotate accordingly
	if (unfolded === false) {
	
		front_rX 	= 0 	+ pitch;
		front_rY 	= 0 	- yawn;
		back_rX 	= 180 	+ pitch;
		back_rY 	= 0 	+ yawn;
		right_rX 	= 0 	+ pitch;
		right_rY 	= 90 	- yawn;
		left_rX 	= 0 	+ pitch;
		left_rY 	= -90 	- yawn;
		top_rX 		= 90 	+ pitch;
		top_rZ	 	= 0 	+ yawn;
		bottom_rX 	= -90 	+ pitch;
		bottom_rZ 	= 0 	- yawn;

		applyRotation();

	} else if (unfolded === true) {

		front_rX 	= 0 	+ pitch;
		front_rY 	= 0 	- yawn;
		back_rX 	= 180 	+ pitch 	+ alignBreak * 2;
		back_rY 	= 0 	- yawn;
		right_rX 	= 0 	+ pitch;
		right_rY 	= 90 	- yawn 		- alignBreak;
		left_rX 	= 0 	+ pitch;
		left_rY 	= -90 	- yawn 		+ alignBreak;
		top_rX 		= 90 	+ pitch 	- alignBreak;
		top_rZ		= 0;
		top_rY	 	= 0 	- yawn;
		bottom_rX 	= -90 	+ pitch 	+ alignBreak;
		bottom_rZ 	= 0;
		bottom_rY 	= 0 	- yawn;

		applyRotation();
	}
}

/**
 * applyRotation Updates the cube according to the new rotational values in the global variables.
 * @return {undefined}
 */
function applyRotation() {

	document.querySelector('#cube .front').style.transform 	= 'rotateX( '
		+ front_rX +'deg ) rotateY( '+ front_rY +'deg ) rotateZ( '+ front_rZ 
		+'deg ) translateZ( 100px )';
	document.querySelector('#cube .back').style.transform 	= 'rotateX( '
		+ back_rX +'deg ) rotateY( '+ back_rY +'deg ) rotateZ( '+ back_rZ 
		+'deg ) translateZ( 100px ) translateY( ' + (translate * 2) + 'px )';
	document.querySelector('#cube .right').style.transform 	= 'rotateX( '
		+ right_rX +'deg ) rotateY( '+ right_rY +'deg ) rotateZ( '+ right_rZ 
		+'deg ) translateZ( 100px ) translateX( ' + translate + 'px ) ';
	document.querySelector('#cube .left').style.transform 	= 'rotateX( '
		+ left_rX +'deg ) rotateY( '+ left_rY +'deg ) rotateZ( '+ left_rZ 
		+'deg ) translateZ( 100px ) translateX( -' + translate + 'px ) ';
	document.querySelector('#cube .top').style.transform 	= 'rotateX( '
		+ top_rX +'deg ) rotateY( '+ top_rY +'deg ) rotateZ( '+ top_rZ 
		+'deg ) translateZ( 100px ) translateY(-' + translate + 'px)';
	document.querySelector('#cube .bottom').style.transform = 'rotateX( '
		+ bottom_rX +'deg ) rotateY( '+ bottom_rY +'deg ) rotateZ( '
		+ bottom_rZ +'deg ) translateZ( 100px ) translateY('+translate+'px)';
}

function spin() {
	setInterval(spinning, 20);
}

function spinning() {
	document.querySelector("#titleCube").style.transform = 'rotateX(-15deg) rotateY(' + spinDeg + 'deg) ';
	spinDeg = (spinDeg - 1) % 360;
}

/*function unfold() {

	if (unfolded === false && pressed === false) {
		pressed = true;
		unfoldingBegin = setInterval('unfolding();', 2);
	} else if (unfolded === true && pressed === false) {
		pressed = true;
		foldingBegin = setInterval('folding();', 2);
	}
}

function unfolding() {
	if (Math.floor(pitch) != 0 || Math.floor(yawn) != 0) {
		pitch 	= 0;
		yawn 	= 0;				
	} else if (unfolded === false) {
		
		if (alignBreak < 90) {
				alignBreak++;

			if (translate < 20) {
				translate = 22;
			} else {
				translate += 2;
			}

			front_rX 	= 0 	+ pitch;
			front_rY 	= 0 	- yawn;
			back_rX 	= 180 	+ pitch 	+ alignBreak * 2;
			back_rY 	= 0 	- yawn;
			right_rX 	= 0 	+ pitch;
			right_rY 	= 90 	- yawn 		- alignBreak;
			left_rX 	= 0 	+ pitch;
			left_rY 	= -90 	- yawn 		+ alignBreak;
			top_rX 		= 90 	+ pitch 	- alignBreak;
			top_rZ		= 0;
			top_rY	 	= 0 	- yawn;
			bottom_rX 	= -90 	+ pitch 	+ alignBreak;
			bottom_rZ 	= 0;
			bottom_rY 	= 0 	- yawn;

			applyRotation();
		} else {
			unfolded = true;
			clearInterval(unfoldingBegin);
			document.getElementById("folding").innerHTML = "fold";
			pressed = false;
		}
	}
}

function folding() {

	if (Math.floor(pitch) != 0 || Math.floor(yawn) != 0) {
		pitch 	= 0;
		yawn 	= 0;				
	} else if (unfolded === true) {
		
		if (alignBreak > 0) {
			alignBreak--;

			if (translate > 180) {
				translate = 178;
			} else {
				translate -= 2;
			}

			front_rX 	= 0 	+ pitch;
			front_rY 	= 0 	- yawn;
			back_rX 	= 180 	+ pitch 	+ alignBreak * 2;
			back_rY 	= 0 	- yawn;
			right_rX 	= 0 	+ pitch;
			right_rY 	= 90 	- yawn 		- alignBreak;
			left_rX 	= 0 	+ pitch;
			left_rY 	= -90 	- yawn 		+ alignBreak;
			top_rX 		= 90 	+ pitch 	- alignBreak;
			top_rZ		= 0;
			top_rY	 	= 0 	- yawn;
			bottom_rX 	= -90 	+ pitch 	+ alignBreak;
			bottom_rZ 	= 0;
			bottom_rY 	= 0 	- yawn;

			applyRotation();

		} else {
			unfolded = false;
			clearInterval(foldingBegin);
			document.getElementById("folding").innerHTML = "unfold";
			pressed = false;
		}
	}
}*/

/**
 * rotateCubeOnKeyPress Listener for rotating the cube according to arrow key presses.
 * @param e The event generated by the key press.
 * @return {undefined}
 */
function rotateCubeOnKeyPress(e)
{
	var key = e.keyCode ? e.keyCode : e.which;

	// Disregards the onmousemove when a key is pressed down
	if (document.onkeydown) {
		addYawn = 0;
		addPitch = 0;
	}

	// Left key
	if (key == 37)
	{
		yawn += 1;
		rotate();
	}
	// Up key
	else if (key == 38)
	{
		pitch += 1;
		rotate();
	}
	// Right key
	else if (key == 39)
	{
		yawn -= 1;
		rotate();
	}
	// Down key
	else if (key == 40)
	{
		pitch -= 1;
		rotate();
	}
}