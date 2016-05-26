function changePage(pageNum) {
	var x = document.getElementsByClassName('pageDiv');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(pageNum).style.display = "block"; 
	
}