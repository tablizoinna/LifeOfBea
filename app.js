const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

/* environment carousel */
const cards = document.querySelectorAll(".carousel__card");

const dots = document.querySelectorAll(".dot");
s
const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let index = 0;


function updateCarousel() {

cards.forEach(card => {

card.classList.remove("active", "left", "right");

});


dots.forEach(dot => dot.classList.remove("active"));


cards[index].classList.add("active");

dots[index].classList.add("active");


if(index > 0){

cards[index - 1].classList.add("left");

}


if(index < cards.length - 1){

cards[index + 1].classList.add("right");

}

}


next.onclick = () => {

index++;

if(index >= cards.length){

index = 0;

}

updateCarousel();

};


prev.onclick = () => {

index--;

if(index < 0){

index = cards.length - 1;

}

updateCarousel();

};


dots.forEach((dot, i) => {

dot.onclick = () => {

index = i;

updateCarousel();

};

});


updateCarousel();