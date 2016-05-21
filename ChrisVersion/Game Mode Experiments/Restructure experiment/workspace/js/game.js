var count = 0;
function tutturu(){
    var audio = new Audio('./workspace/audio/tuturu-century-fox.mp3');
    count++;
	if (count == 10) {
		audio.play();
		count = 0;
	}
	
}

setInterval(removeNavBar, 10) 

function removeNavBar() {
	/*window.scrollTo(0, 1);*/
}


function screenChange(next) {
	$('#gameContainer').children().css('display','none');
	$('#' + next).css('display','block');
}
/*
window.addEventListener("orientationchange", function() {
	if (window.innerWidth > window.innerHeight) {
		$('body').css('transform', 'rotate(90deg)');
	}
}, false);
*/