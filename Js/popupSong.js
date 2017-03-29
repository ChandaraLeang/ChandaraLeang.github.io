"use strict";

function openModal() {
	document.getElementById('myModal').style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

function minusSlides(n){
	showSlides(slideIndex -= n);
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var fromAlt = document.getElementById("play");
	var musicPlayer = document.getElementById("music");
		
	if (n > slides.length) {slideIndex = 1;}
	if (n < 1) {slideIndex = slides.length;}
		
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	if (slideIndex == 1){
		document.getElementById('music').play();
		document.getElementById('music2').pause();
		document.getElementById('music2').currentTime = 0;
		document.getElementById('music3').pause();
		document.getElementById('music3').currentTime = 0;
		document.getElementById('music4').pause();
		document.getElementById('music4').currentTime = 0;
		document.getElementById('music5').pause();
		document.getElementById('music5').currentTime = 0;
		document.getElementById('music6').pause();
		document.getElementById('music6').currentTime = 0;
	}else if(slideIndex == 2){
		document.getElementById('music2').play();
		document.getElementById('music').pause();
		document.getElementById('music').currentTime = 0;
		document.getElementById('music3').pause();
		document.getElementById('music3').currentTime = 0;
		document.getElementById('music4').pause();
		document.getElementById('music4').currentTime = 0;
		document.getElementById('music5').pause();
		document.getElementById('music5').currentTime = 0;
		document.getElementById('music6').pause();
		document.getElementById('music6').currentTime = 0;
	}else if(slideIndex == 3){
		document.getElementById('music3').play();
		document.getElementById('music').pause();
		document.getElementById('music').currentTime = 0;
		document.getElementById('music2').pause();
		document.getElementById('music2').currentTime = 0;
		document.getElementById('music4').pause();
		document.getElementById('music4').currentTime = 0;
		document.getElementById('music5').pause();
		document.getElementById('music5').currentTime = 0;
		document.getElementById('music6').pause();
		document.getElementById('music6').currentTime = 0;
	}else if(slideIndex == 4){
		document.getElementById('music4').play();
		document.getElementById('music').pause();
		document.getElementById('music').currentTime = 0;
		document.getElementById('music2').pause();
		document.getElementById('music2').currentTime = 0;
		document.getElementById('music3').pause();
		document.getElementById('music3').currentTime = 0;
		document.getElementById('music5').pause();
		document.getElementById('music5').currentTime = 0;
		document.getElementById('music6').pause();
		document.getElementById('music6').currentTime = 0;
	}else if(slideIndex == 5){
		document.getElementById('music5').play();
		document.getElementById('music').pause();
		document.getElementById('music').currentTime = 0;
		document.getElementById('music2').pause();
		document.getElementById('music2').currentTime = 0;
		document.getElementById('music3').pause();
		document.getElementById('music3').currentTime = 0;
		document.getElementById('music4').pause();
		document.getElementById('music4').currentTime = 0;
		document.getElementById('music6').pause();
		document.getElementById('music6').currentTime = 0;
	}else if(slideIndex == 6){
		document.getElementById('music6').play();
		document.getElementById('music').pause();
		document.getElementById('music').currentTime = 0;
		document.getElementById('music2').pause();
		document.getElementById('music2').currentTime = 0;
		document.getElementById('music3').pause();
		document.getElementById('music3').currentTime = 0;
		document.getElementById('music4').pause();
		document.getElementById('music4').currentTime = 0;
		document.getElementById('music5').pause();
		document.getElementById('music5').currentTime = 0;
	}

	slides[slideIndex-1].style.display = "block";
}

function closeModal() {
	document.getElementById('myModal').style.display = "none";
	document.getElementById('music').pause();
	document.getElementById('music').currentTime = 0;
	document.getElementById('music2').pause();
	document.getElementById('music2').currentTime = 0;
	document.getElementById('music3').pause();
	document.getElementById('music3').currentTime = 0;
	document.getElementById('music4').pause();
	document.getElementById('music4').currentTime = 0;
	document.getElementById('music5').pause();
	document.getElementById('music5').currentTime = 0;
	document.getElementById('music6').pause();
	document.getElementById('music6').currentTime = 0;
}