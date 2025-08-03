"use strict"
let ducumentActions = (e) =>{
    const targetElement=e.target
    if(targetElement.closest('.burger')){
        document.documentElement.classList.toggle("open-menu")
    }
}
document.addEventListener('click',ducumentActions)

let slides = document.querySelectorAll(".sliders__slide");
let slider = document.getElementById('sliders');
let next = document.querySelector('.slider__right');
let prev= document.querySelector('.slider__left');
const totalSlides = slides.length; //кількість слайдів
let currentIndex = 0;
function updateSliderPosition(){
    const offset = -currentIndex*100;
    slider.style.transform= `translateX(${offset}%)`;
}
next.addEventListener('click', ()=>{
    currentIndex=(currentIndex+1)%totalSlides;
    updateSliderPosition();
});
prev.addEventListener('click', ()=>{
    currentIndex=(currentIndex-1+totalSlides)%totalSlides;
    updateSliderPosition();
});
let slide_1=document.querySelectorAll(".slider-clients__slide");
let slider_1=document.getElementById("slider-clients");
let btnleft=document.querySelector(".clients__left");
let btnright=document.querySelector(".clients__right");
let totalSlides_1=slide_1.length;
let currentIndex_1=0;
function  updateSliderPosition_1 (){
   if (window.innerWidth <= 768) {
   
    let offset_1 = -currentIndex_1 * 100;
    slider_1.style.transform = `translateX(${offset_1}%)`;
  }
    else{
   const offset_1=-currentIndex_1*slide_1[0].offsetWidth;
    slider_1.style.transform=`translateX(${offset_1}px)`;
    }
}
btnleft.addEventListener('click', ()=>{
    currentIndex_1=(currentIndex_1-1+totalSlides_1)%totalSlides_1;
    updateSliderPosition_1 ();
})
btnright.addEventListener('click', ()=>{
    currentIndex_1=(currentIndex_1+1)%totalSlides_1;
    updateSliderPosition_1 ();
})