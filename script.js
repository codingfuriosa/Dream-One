
/* HAMBURGER */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click",()=>{

navLinks.classList.toggle("show");

});



/* HERO SLIDER */

const slider = document.querySelector(".slider");

let index = 0;

function slideHero(){

index++;

if(index > 1){
index = 0;
}

slider.style.transform = "translateX(-" + (index * 100) + "%)";

}

setInterval(slideHero,10000);


const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach((el,i)=>{

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 80){

setTimeout(()=>{

el.classList.add("active");

}, i * 200);

}

});

}

/* run on scroll */

window.addEventListener("scroll", revealOnScroll);

/* run once when page loads */

window.addEventListener("load", revealOnScroll);

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".plans-content");

tabs.forEach(btn=>{
btn.addEventListener("click",()=>{

tabs.forEach(b=>b.classList.remove("active"));
btn.classList.add("active");

contents.forEach(c=>c.classList.remove("active"));

document.getElementById(btn.dataset.tab).classList.add("active");

});
});

const modal = document.getElementById("enquiryModal")
const openButtons = document.querySelectorAll(".open-modal")
const closeBtn = document.querySelector(".close-modal")

const form = document.getElementById("enquiryForm")

const nameField = document.getElementById("name")
const phoneField = document.getElementById("phone")
const emailField = document.getElementById("email")

let clickedType = ""


/* BUTTON CLICK */

openButtons.forEach(btn => {

btn.addEventListener("click",function(){

clickedType = this.dataset.type

/* BROCHURE LOGIC */

if(clickedType === "brochure"){

if(localStorage.getItem("formSubmitted")){
window.open("img/brochure.pdf","_blank")
return
}

}

modal.classList.add("active")

})

})



/* CLOSE MODAL */

closeBtn.onclick = () => modal.classList.remove("active")

window.onclick = e=>{
if(e.target === modal){
modal.classList.remove("active")
}
}



/* VALIDATION */

form.addEventListener("submit",function(e){

e.preventDefault()

const name = nameField.value.trim()
const phone = phoneField.value.trim()
const email = emailField.value.trim()

const nameRegex = /^[A-Za-z]+\s+[A-Za-z]+/
const phoneRegex = /^(\+91\s?)?[6-9][0-9]{9}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/



if(!nameRegex.test(name)){
alert("Please enter your full name (first and last name).")
return
}

if(!phoneRegex.test(phone)){
alert("Please enter a valid 10 digit phone number.")
return
}

if(!emailRegex.test(email)){
alert("Please enter a valid email address.")
return
}


/* SAVE FORM STATUS */

localStorage.setItem("formSubmitted",true)


/* CLOSE MODAL */

modal.classList.remove("active")


/* OPEN THANK YOU PAGE */

window.location.href="thankyou.html"

})

// MAP SWITCH
const mapTabs = document.querySelectorAll(".map-tabs .tab");
const mapViews = document.querySelectorAll(".map-view");

mapTabs.forEach(tab => {
tab.addEventListener("click", () => {

mapTabs.forEach(t => t.classList.remove("active"));
mapViews.forEach(m => m.classList.remove("active"));

tab.classList.add("active");

const target = tab.dataset.map + "-map";
document.getElementById(target).classList.add("active");

});
});


// ACCORDION
const accItems = document.querySelectorAll(".acc-item");

accItems.forEach(item => {
const title = item.querySelector(".acc-title");

title.addEventListener("click", () => {

const isActive = item.classList.contains("active");

accItems.forEach(i => i.classList.remove("active"));

if(!isActive){
item.classList.add("active");
}

});
});

// SELECT ALL NAV LINKS
const navLinksItems = document.querySelectorAll("#navLinks a");

// CLOSE MENU ON CLICK
navLinksItems.forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("show");
});
});
