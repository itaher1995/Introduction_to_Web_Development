
var myHeading = document.querySelector('h1');
myHeading.textContent = 'El Presidente Aoun no es de nuestro mundo';

var firefoxImg = document.querySelector('img');

firefoxImg.onclick = function () {
	var mySrc = firefoxImg.getAttribute('src');
	if(mySrc === 'images/firefox2.png') {
		firefoxImg.setAttribute('src','images/firefox-icon.png');
	}
	else {
		firefoxImg.setAttribute('src','images/firefox2.png');
	}
}

var myButton = document.querySelector('button');

function buttonClicked() {
	var reply = prompt('Do You Believe Me? Type Yes or No');
	localStorage.setItem('thereply', reply);
	if (reply === 'Yes' || reply === 'yes'){
		myHeading.textContent = 'Fight Aoun';
	}
	else{
		myHeading.textContent = 'I guess you have all the answers!';
	}
}

myButton.onclick = function() {
	buttonClicked();
}

if(!localStorage.getItem('thereply')) {
  alert('Please read this page and click the button on the bottom!')
} else {
  var storedResponse = localStorage.getItem('thereply');
  if (storedResponse === 'Yes' || storedResponse === 'yes'){
		myHeading.textContent = 'Fight Aoun';
	}
	else{
		myHeading.textContent = 'I guess you have all the answers!';
	}

}