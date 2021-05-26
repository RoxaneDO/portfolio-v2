// ANIMATION HEADER
$(document).ready(function(){
    var mouseX, mouseY;
    var ww = $( window ).width();
    var wh = $( window ).height();
    var traX, traY;
    $(document).mousemove(function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((4 * mouseX) / 570) + 40;
        traY = ((4 * mouseY) / 570) + 50;

        $(".titre_header").css({"background-position": traX + "%" + traY + "%"});
    }
);


/*
// ANIMATION CARD
//Movement Animation to happen
const card = document.querySelector(".card");
const containerPhoto = document.querySelector(".containerPhoto");

//Moving Animation Event
containerPhoto.addEventListener("mousemove", (e) => {
let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
containerPhoto.addEventListener("mouseenter", (e) => {
card.style.transition = "none";
card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

//Animate Out
containerPhoto.addEventListener("mouseleave", (e) => {
card.style.transition = "all 1s ease";
card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
*/


// ANIMATION OMBRE PHOTO

let photo = $(".Photo");

let vh = $(window).height();

$(window).scroll(function() {
    if ($(this).scrollTop()>0.5*vh){
        photo.css("--maVarTop", "30px");
        photo.css("--maVarLeft", "-30px");
    }
});

});
