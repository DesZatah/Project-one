
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  cart.classList.remove('active');
}
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  cart.classList.remove('active');
}

let cart = document.querySelector('.cart-iterms-container');
let cartbtn = document.querySelector('#cart');

cartbtn.onclick = () => {
  cart.classList.toggle('active');
  cartbtn.classList.toggle('fa-times');
}
/*
OR......
menu.addEventListener('click', function() {

  menu.classList.toggle('fa-times');

  navbar.classList.toggle('active');
  
});*/

/*......Search form js.....*/
let Search = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');

Search.onclick = () => {
searchForm.classList.toggle('form-active');
menu.classList.remove('fa-times');
navbar.classList.remove('active');
cart.classList.remove('active');
}

let searchClose = document.querySelector('#close');

searchClose.onclick = () => {
  searchForm.classList.remove('form-active');
}

/*........Slider.....*/

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,

});





