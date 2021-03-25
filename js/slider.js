var slider = document.querySelector(".slider");
var button1 = document.querySelector(".slider-controls-button1");
var button2 = document.querySelector(".slider-controls-button2");
var button3 = document.querySelector(".slider-controls-button3");
var slideItem1 = document.querySelector(".slider-item1");
var slideItem2 = document.querySelector(".slider-item2");
var slideItem3 = document.querySelector(".slider-item3");

button1.addEventListener("click", function(evt){
  evt.preventDefault();
  button1.classList.add("current");
  slider.classList.add("slide-picture-1");
  slideItem1.classList.add("slide-current");
  button2.classList.remove("current");
  slider.classList.remove("slide-picture-2");
  slideItem2.classList.remove("slide-current");
  button3.classList.remove("current");
  slider.classList.remove("slide-picture-3");
  slideItem3.classList.remove("slide-current");
})

button2.addEventListener("click", function(evt){
  evt.preventDefault();
  button1.classList.remove("current");
  slider.classList.remove("slide-picture-1");
  slideItem1.classList.remove("slide-current");
  button2.classList.add("current");
  slider.classList.add("slide-picture-2");
  slideItem2.classList.add("slide-current");
  button3.classList.remove("current");
  slider.classList.remove("slide-picture-3");
  slideItem3.classList.remove("slide-current");
})

button3.addEventListener("click", function(evt){
  evt.preventDefault();
  button2.classList.remove("current");
  slider.classList.remove("slide-picture-2");
  slideItem2.classList.remove("slide-current");
  button3.classList.add("current");
  slider.classList.add("slide-picture-3");
  slideItem3.classList.add("slide-current");
  button1.classList.remove("current");
  slider.classList.remove("slide-picture-1");
  slideItem1.classList.remove("slide-current");
})
