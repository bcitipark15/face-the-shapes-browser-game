/**
  * Displays the choice of the user on the screen.
  */
function openOptions(choice) {
	var x = document.getElementsByClassName('storeOptions');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(choice).style.display = "block"; 
	
}