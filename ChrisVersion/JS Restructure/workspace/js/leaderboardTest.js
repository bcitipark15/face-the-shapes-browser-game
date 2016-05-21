function changeMode(evt, mode) {
	
	var i, tabContent, tabLink;
	
	tabContent = document.getElementsByClassName('tabContent');
	
	for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
	
	tabLink = document.getElementsByClassName("tabLink");
    for (i = 0; i < tabContent.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }
	
	document.getElementById(mode).style.display = "block";
    evt.currentTarget.className += " active";
}