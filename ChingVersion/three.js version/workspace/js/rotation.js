document.onmousedown 	= mouseDown;
document.onmouseup 		= mouseUp;
document.onmousemove 	= mouseMove;

var mouseDownID 		= -1;
var x 					= 0;
var y 					= 0;
var startX 				= 0;
var startY 				= 0;
var yawn				= 0;
var pitch				= 0;
var addYawn				= 0;
var addPitch			= 0;
var stopYawn			= 0;
var stopPitch			= 0;


/* Translate current X and Y position when mouse clicked into starting x and
   y rotation point for pitch and yawn. Also calls the function rotate.*/
function mouseDown(e) {
	if (mouseDownID == -1) {
		startX 		= e.clientX - innerWidth/2;
		startY 		= e.clientY - innerHeight/2;
		mouseDownID = setInterval(rotate, 10);
	}
}

/* Clear the interval of function rotate upon mouse release. Also update the
   x and y rotation point.*/
function mouseUp(e) {

	if (mouseDownID != -1) {
		clearInterval(mouseDownID);
		mouseDownID = -1;
		startX 		= e.clientX - innerWidth/2;
		startY 		= e.clientY - innerHeight/2;
	}
}

/* Translate current X and Y position into rotating point all the time as 
   the mouse move.*/
function mouseMove(e) {
	
	x 			= startX - (e.clientX - innerWidth/2);
	y 			= startY - (e.clientY - innerHeight/2);

	addYawn 	= x / innerWidth * 180;
	addPitch 	= y / innerHeight * 180;

	startX 		= e.clientX - innerWidth/2;
	startY		= e.clientY - innerHeight/2;
}

/* Rotating the cube based on mouse X and Y position changes as the mouse is
   pressed down and moves.*/
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

	octahedronRotation();
	pyramidRotation();
	cubeRotation();
	rectangleRotation();
}

function octahedronRotation() {
	document.querySelector('#octahedronRotatable').style.transform = 'rotateY(' + yawn + 'deg) rotateX(' + pitch + 'deg) translateX(-50px) translateY(-150px)';	
}

function pyramidRotation() {
	document.querySelector('#pyramidRotatable').style.transform = 'rotateY(' + yawn + 'deg) rotateX(' + pitch + 'deg) translateX(-50px) translateY(-100px)';	
}

function cubeRotation() {
	document.querySelector('#cubeRotatable').style.transform = 'rotateY(' + yawn + 'deg) rotateX(' + pitch + 'deg) translateX(-50px) translateY(-100px)';	
}

function rectangleRotation() {
	document.querySelector('#rectangleRotatable').style.transform = 'rotateY(' + yawn + 'deg) rotateX(' + pitch + 'deg) translateX(-50px) translateY(-100px)';	
}

