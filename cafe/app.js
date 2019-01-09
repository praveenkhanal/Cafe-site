function slideshow(){
		var x = document.getElementById('check-class');
		if (x.style.display === "none"){
			x.style.display= "block";
	}
	else{x.style.display ="none";
		}
	}
var menuButton = document.querySelector('i');

// // menu click event listener

menuButton.addEventListener('click', handleMenuClick);
// // handle menu click

function handleMenuClick() {
// 	//console.log('click');
	var sidebar = document.querySelector('.sidebar');
// 	// var main
	if (sidebar.classList.contains('sidebar-hidden')) {
		sidebar.classList.toggle('sidebar-hidden');
		menuButton.style.color = '#fff';
		menuButton.classList.remove('fa-bars');
		menuButton.classList.add('fa-times');

	} else {
		sidebar.classList.toggle('sidebar-hidden');
		menuButton.style.color = '#000';
		menuButton.classList.remove('fa-times');
		menuButton.classList.add('fa-bars');
	}

// }