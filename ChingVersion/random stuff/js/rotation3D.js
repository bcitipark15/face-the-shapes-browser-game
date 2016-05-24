document.onmousedown	= mouseDown;
document.onmouseup		= mouseUp;
document.onmousemove	= mouseMove;

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

/* Translate current X and Y position when mouse clicked into starting x and
   y rotation point for pitch and yawn. Also calls the function rotate.*/
function mouseDown(e) {
	if (mouseDownID == -1) {
		e.preventDefault();
		startX 		= e.clientX - innerWidth/2;
		startY 		= e.clientY - innerHeight/2;
		mouseDownID = setInterval(rotate, 10);
	}
}

/* Clear the interval of function rotate upon mouse release. Also update the
   x and y rotation point.*/
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
function mouseMove(e) {
	
	e.preventDefault();

	x 			= startX - (e.clientX - innerWidth/2);
	y 			= startY - (e.clientY - innerHeight/2);

	addYawn 	= x / innerWidth * 180;
	addPitch 	= y / innerHeight * 180;

	startX 		= e.clientX - innerWidth/2;
	startY		= e.clientY - innerHeight/2;
}

/* Translate current X and Y position when mouse clicked into starting x and
   y rotation point for pitch and yawn. Also calls the function rotate.*/
window.addEventListener('load', function(){ // on page load
 
    document.body.addEventListener('touchstart', function(e){
        if (touchDownID == -1) {
			startX 		= e.changedTouches[0].pageX - innerWidth/2;
			startY 		= e.changedTouches[0].pageY - innerHeight/2;
			mouseDownID = setInterval(rotate, 10);
		}
	}, false)
 
}, false)

/* Clear the interval of function rotate upon mouse release. Also update the
   x and y rotation point.*/
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

/* Translate current X and Y position into rotating point all the time as 
   the mouse move.*/
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
	cubeRotation();
}


function cubeRotation() {
	document.getElementById('pitch').innerHTML 	= (pitch*100+.5|0) / 100;
	document.getElementById('yawn').innerHTML 	= (yawn*100+.5|0) / 100;
	document.querySelector('#shape').style.transform = 'rotateY(' + yawn + 'deg) rotateX(' + pitch + 'deg) translateX(-50px) translateY(-200px)';	
}