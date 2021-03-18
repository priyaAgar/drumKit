// for single button 

//   document.querySelector("button").addEventListener("click",handleClick);
//   function handleClick() {
//	 alert("I got Clicked");
//   }

// Another way of doing it for single button

//   document.querySelector("button").addEventListener("click",function() {
//	 alert("I got Clicked");
//   });

// for multiple buttons

//document.querySelectorAll('button').forEach(item => {
//  item.addEventListener('click', event => {
//    alert("I got Clicked");
//  });
//});

// event tells us the reason why the call back function is called in the first place

// callback function is called by the element or object or key that is tampered with and it provides the activities information to the callback function which is passed through its parameter. 

var l=document.querySelectorAll("button").length;
// button click

for(var i=0;i<l;i++){
	document.querySelectorAll("button")[i].addEventListener("click",handleClick); //we don't use () in function name because it will call it immediately even before the button gets clicked
}
function handleClick() {
	var buttonn=this.innerHTML; // we use "this" here because button is a html element/object and can have a reference which can be used to call it. and event contains (MouseEvent Information) which is not useful for getting the button pressed
	makeSound(buttonn);
	buttonAnimation(buttonn);
}

// keyboard press

for(var i=0;i<l;i++){
	document.addEventListener("keydown",handlePress); 
}
function handlePress(event) { // we don't use "this" here because keyboard keys are not those elements/objects which are defined by us,they are part of system,they are not objects,they don't have references.
	var buttonn=event.key;
	makeSound(buttonn);
	buttonAnimation(buttonn);
}

// function for making sound

function makeSound(buttonn){
	switch (buttonn){

case 'w':
	var crash = new Audio("sounds/crash.mp3"); // creating a new html audio element
	crash.play();
break;
case 'a':
	var kick = new Audio("sounds/kick-bass.mp3"); 
	kick.play();
break;
case 's':
	var snare = new Audio("sounds/snare.mp3"); 
	snare.play();
break;
case 'd':
	var tom1 = new Audio("sounds/tom-1.mp3"); 
	tom1.play();
break;
case 'j':
	var tom2 = new Audio("sounds/tom-2.mp3"); 
	tom2.play();
break;
case 'k':
	var tom3 = new Audio("sounds/tom-3.mp3");
	tom3.play();
break;
case 'l':
	var tom4 = new Audio("sounds/tom-4.mp3"); 
	tom4.play();
break;
default:console.log(butonn);
	}
}

// giving animation to drums used

function buttonAnimation(keyy){
var currentKey=document.querySelector("."+keyy);
currentKey.classList.add("pressed");
setTimeout(function(){
currentKey.classList.remove("pressed");
},100)
}