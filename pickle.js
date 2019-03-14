let ken=document.getElementById("ken");
let jumponceb=document.querySelector("#jumponce");
let moveto30b=document.querySelector("#moveto30");
let movefrom30b=document.querySelector("#movefrom30");
let moveb=document.querySelector("#move");
let movetoleftb=document.querySelector("#movetoleft");
let jumpingb=document.querySelector ("#jumping");
let fadeb=document.querySelector("#fade");
let glowb=document.querySelector("#glow");
let falldownb=document.querySelector("#falldown");
let singb=document.querySelector("#sing");
let shakeb=document.querySelector("#shake");
let vacationb=document.querySelector("#vacation");
let smokeb=document.querySelector("#smoke");
let iloveyoub=document.querySelector("#iloveyou");
let nothingb=document.querySelector("#nothing");
let cigarette = document.querySelector(".ciga");
let bg = document.querySelector("#background");


jumponceb.addEventListener("click",jumpp);
moveto30b.addEventListener("click",moveTo30);
movefrom30b.addEventListener("click",moveFrom30);
moveb.addEventListener("click",move);
movetoleftb.addEventListener("click",movetoleft);
jumpingb.addEventListener("click",jumping);
fadeb.addEventListener("click",fade);
glowb.addEventListener("click",glow);
falldownb.addEventListener("click",falldown);
singb.addEventListener("click",sing);
shakeb.addEventListener("click",shake);
vacationb.addEventListener("click",vacation);
smokeb.addEventListener("click",smoke);
iloveyoub.addEventListener("click",iloveyou);
nothingb.addEventListener("click",nothing);


function jumpp(){
	ken.classList.toggle("jumponce");

}
function moveTo30(){

	ken.classList.toggle("moveto30");


}
function moveFrom30(){
	ken.classList.toggle("movefrom30");
}
function move(){
	ken.classList.toggle("move");
}
function moveToLeft(){
	ken.classList.toggle("movetolsseft");

}
function jumping(){
	ken.classList.add("ria");
	console.log("jumpoed");
}
function fade(){
	ken.classList.toggle("fade");

}
function glow(){
	ken.classList.toggle("glow");
	console.log("glowed");

}
function falldown(){
	ken.classList.toggle("fallDown");
}

function smoke(){
	console.log("clicked");
	  if (cigarette.style.display === "none") {
    cigarette.style.display = "block";
  } else {
    cigarette.style.display = "none";
  }
}


function vacation(){
	bg.style.backgroundImage = 'url(croatia.jpg)';
}













