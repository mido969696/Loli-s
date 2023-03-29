
/* Landing page start*/

 //Calculates the part of the day and displays it in the opening message
function getPartOfDay() {
	let today = new Date();
	let hours = today.getHours();
	const element = document.getElementById('welcome-message');
	// Morning
	if(hours >= 5) {
		element.innerHTML = `Good morning!! Welcome to Lolie's`;
		}
		//Afternoon
		if (hours >= 12) {
			element.innerHTML = `Good afternoon!! welcome to Lolie's`;
		}
		//Evening
		if (hours >= 17) {
			element.innerHTML = `Good evening!! Welcome to Lolie's`;
		}
		//Night
		if (hours >= 21 || hours < 5) {
			element.innerHTML = `Good night!! Welcome to Lolie's`;
		}
		
	}		

	//function calls
	getPartOfDay();

/* Landing page end*/

// header section start 
function openNav() {
	document.getElementById("mySidenav").style.width = "30%";
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

 // header section end

$(".carousel-control-prev").click(function () {
    $('#carouselExampleControls').carousel('prev');
})
$(".carousel-control-next").click(function () {
    $('#carouselExampleControls').carousel('next');
})