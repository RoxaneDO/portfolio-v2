// MES POINTEURS
let vh = $(window).height();
let pageComplete=$(document).height();
let containerPresentation = $(".Block2");
let photo = $(".Photo");
let backgroundPhoto = $(".backgroundPhoto");
let bandeauContainer = $("#bandeauContainer");
let imageBandeau = $("#imageBandeau");
let navIcone = $(".nav_icons");
let distanceIcon= vh-225;

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

// ANIMATION OMBRE PHOTO
containerPresentation.on("mouseover", function(){
    backgroundPhoto.css("top", "30px");
    backgroundPhoto.css("left", "-30px");
    backgroundPhoto.css("height", "100%");
    backgroundPhoto.css("transition", "0.5s");
});

containerPresentation.on("mouseleave", function(){
    backgroundPhoto.css("top", "0px");
    backgroundPhoto.css("height", "98%");
    backgroundPhoto.css("left", "0px");
    backgroundPhoto.css("transition", "0.5s");
});

// ANIMATION BANDEAU
bandeauContainer.on("mouseover", function(){
    imageBandeau.css("transform", "scale(1.3)");
    imageBandeau.css("transition", "8s ease");

    bandeauContainer.css("transition", "6s");

});

bandeauContainer.on("mouseleave", function(){
    imageBandeau.css("transform", "scale(1)");
    imageBandeau.css("transition", "10s ease-in-out");
});


$(window).scroll(function(){
    console.log($(document).scrollTop());
    if ($(document).scrollTop() >= (pageComplete-vh-50)){
        navIcone.css("height", "450px");
        navIcone.css("bottom", "0");
        navIcone.css("transition", "0.7s ease-in-out");
    };
    if ($(document).scrollTop() < (pageComplete-vh)){
        navIcone.css("height", "100vh");
        navIcone.css("transition", "0.7s ease-in-out");
    };
})

$(window).resize(function(){
    vh = $(window).height();
    pageComplete=$(document).height();
    containerPresentation = $(".Block2");
    photo = $(".Photo");
    backgroundPhoto = $(".backgroundPhoto");
    bandeauContainer = $("#bandeauContainer");
    imageBandeau = $("#imageBandeau");
    navIcone = $(".nav_icons");
    distanceIcon= vh-225;
});
/*
$(window).scroll(function() {
if ($(this).scrollY>0.5*vh){
let visible = true;
photo.addClass("visible");
photo.css("--maVarTop", "30px");
photo.css("--maVarLeft", "-30px");
}
else if ($(this).scrollY>0.5*vh){
let visible = false;
photo.removeClass("visible");
}
});
*/
});
