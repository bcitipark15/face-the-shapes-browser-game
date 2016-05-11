
var mouseDownID = -1;
var startx = 0;
var starty = 0;
var yawn = 0;
var pitch = 0;
var x = 0;
var y = 0;
var addYawn = 0;
var addPitch = 0;
var stopYawn = 0;
var stopPitch = 0;
var front_rX = 0, front_rY = 0, front_rZ = 0;
var back_rX = 0, back_rY = 0, back_rZ = 0;
var left_rX = 0, left_rY = 0, left_rZ = 0;
var right_rX = 0, right_rY = 0, right_rZ = 0;
var top_rX = 0, top_rY = 0, top_rZ = 0;
var bottom_rX = 0, bottom_rY = 0, bottom_rZ = 0;

document.onmousedown = mouseDown;
document.onmouseup = mouseUp;

function mouseDown(e) {

    if (mouseDownID == -1) {

        startx = e.clientX - innerWidth / 2;
        starty = e.clientY - innerHeight / 2;

        mouseDownID = setInterval(rotate, 10);

    }
}

function mouseUp(e) {
    if (mouseDownID != -1) {

        clearInterval(mouseDownID);
        mouseDownID = -1;
        startx = e.clientX - innerWidth / 2;
        starty = e.clientY - innerHeight / 2;
    }
}


document.onmousemove = function (e) {
    x = startx - (e.clientX - innerWidth / 2),
			y = starty - (e.clientY - innerHeight / 2),

			addYawn = x / innerWidth * 180,
			addPitch = y / innerHeight * 180;

    startx = e.clientX - innerWidth / 2;
    starty = e.clientY - innerHeight / 2;

}

function rotate() {
    if (stopYawn != addYawn) {

        yawn += addYawn;
        stopYawn = addYawn;
    }

    if (stopPitch != addPitch) {

        pitch += addPitch;
        stopPitch = addPitch;
    }

    if (Math.abs(pitch % 360) > 60 && Math.abs(pitch % 360) < 120) {




        document.querySelector('#cube .front').style.transform = 'rotateX( ' + (0 + pitch) + 'deg ) rotateY( ' + (0 - yawn) + 'deg ) translateZ( 100px )';
        document.querySelector('#cube .back').style.transform = 'rotateX( ' + (180 + pitch) + 'deg ) rotateY( ' + (0 + yawn) + 'deg ) translateZ( 100px )';
        document.querySelector('#cube .right').style.transform = 'rotateX( ' + (0 + pitch) + 'deg ) rotateY( ' + (90 - yawn) + 'deg ) translateZ( 100px )';
        document.querySelector('#cube .left').style.transform = 'rotateX( ' + (0 + pitch) + 'deg ) rotateY( ' + (-90 - yawn) + 'deg ) translateZ( 100px )';
        document.querySelector('#cube .top').style.transform = 'rotateX( ' + (90 + pitch) + 'deg ) rotateZ( ' + (0 + yawn) + 'deg ) translateZ( 100px )';
        document.querySelector('#cube .bottom').style.transform = 'rotateX( ' + (-90 + pitch) + 'deg ) rotateZ( ' + (0 - yawn) + 'deg ) translateZ( 100px )';

    } else {

        front_rX = 0 + pitch;
        front_rY = 0 - yawn;
        back_rX = 0 + pitch;
        back_rY = 0 - yawn;
        right_rX = 0 + pitch;
        right_rY = 0 - yawn;
        left_rX = 0 + pitch;
        left_rY = 0 - yawn;
        top_rX = 0 + pitch;
        top_rY = 0 - yawn;
        bottom_rX = 0 + pitch;
        bottom_rY = 0 - yawn;



        document.querySelector('#cube .front').style.transform = 'rotateX( ' + (0 + pitch) + 'deg ) rotateY( ' + (0 - yawn) + 'deg ) translateZ( 100px )';
        document.querySelector('#cube .back').style.transform = 'rotateX( ' + (180 + pitch) + 'deg ) rotateY( ' + (0 + yawn) + 'deg ) translateZ( 100px )';
        document.querySelector('#cube .right').style.transform = 'rotateX( ' + (0 + pitch) + 'deg ) rotateY( ' + (90 - yawn) + 'deg ) translateZ( 100px )';
        document.querySelector('#cube .left').style.transform = 'rotateX( ' + (0 + pitch) + 'deg ) rotateY( ' + (-90 - yawn) + 'deg ) translateZ( 100px )';
        document.querySelector('#cube .top').style.transform = 'rotateX( ' + (90 + pitch) + 'deg ) rotateZ( ' + (0 + yawn) + 'deg ) translateZ( 100px )';
        document.querySelector('#cube .bottom').style.transform = 'rotateX( ' + (-90 + pitch) + 'deg ) rotateZ( ' + (0 - yawn) + 'deg ) translateZ( 100px )';



        document.getElementById('pitch').innerHTML = (pitch * 100 + .5 | 0) / 100;
        document.getElementById('yawn').innerHTML = (yawn * 100 + .5 | 0) / 100;
    }
}
		
	