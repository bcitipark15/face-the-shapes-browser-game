/* 
 * Author: Team 17 (Chris Centenera, Evan Chen, Ching Choi, John Park, Ian Park)
 * Description: JavaScript file that focuses on the level selection process.
 */

function changePage(pageNum) {
	var x = document.getElementsByClassName('pageDiv');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(pageNum).style.display = "block"; 
	
	if (pageNum == 'levelPage1') {
		$("#levelPageNavDotOne").css("background-color", "#FFF");
		$("#levelPageNavDotTwo").css("background-color", "#AAA");
		$("#levelPageNavDotThree").css("background-color", "#AAA");
	} else if (pageNum == 'levelPage2') {
		$("#levelPageNavDotOne").css("background-color", "#AAA");
		$("#levelPageNavDotTwo").css("background-color", "#FFF");
		$("#levelPageNavDotThree").css("background-color", "#AAA");
	} else if (pageNum == 'levelPage3') {
		$("#levelPageNavDotOne").css("background-color", "#AAA");
		$("#levelPageNavDotTwo").css("background-color", "#AAA");
		$("#levelPageNavDotThree").css("background-color", "#FFF");
	}
}