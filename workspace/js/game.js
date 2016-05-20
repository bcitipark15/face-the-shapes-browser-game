
/** Front page easter egg.
 *  Will play when tutturuCount hits 10. 
 */
var tutturuCount = 0;
function tutturu(){
    var audio = new Audio('./workspace/audio/tuturu-century-fox.mp3');
    tutturuCount++;
	if (tutturuCountt == 10) {
		audio.play();
		tutturuCount = 0;
	}
	
}

/** 
 * Calculate the available screen real estate without the address bar and set it as the height.  
 */
function navBar() {
	var a = screen.height;
	var b = window.innerHeight;
	var difference =  a - ( (a - b) / 4 ) ;
	
	$('#gameContainer').css('height', Math.round(difference));
	
}

/** 
 * Will perform the screen change by removing the current and display the next. 
 */
function screenChange(current, next) {
	document.getElementById(next).style.display = 'block';
	document.getElementById(current).style.display = 'none';
}

/** 
 * Screen orientation change listener. 
 */
window.addEventListener('orientationchange', navBar, false);

/** 
 * Will display the modal. 
 */
function displayModal() {
    document.getElementById('modalBox').style.display = 'block';
}

/** 
 * Will hide the modal. 
 */
function hideModal() {
	document.getElementById('modalBox').style.display = 'none';
}

/** 
 * When the user clicks anywhere outside of the modal, this will close it. 
 */
window.onclick = function(event) {
    if (event.target == document.getElementById('modalBox')) {
        hideModal();
    }
}