//calculating stroke length for SVG and CSS animation
const artdecotitle = document.querySelectorAll("#artdecotitle path");

for (let i = 0; i < artdecotitle.length; i++) {
    console.log (`letter ${i} is ${artdecotitle[i].getTotalLength()}`);
}

//-----Art Deco Placecards-----//
//select image element
const artdecoarchitectureplacecard = document.getElementById('artdecoarchitectureplacecard');
//listen for click event
//toggle variable 

let toggle1 = true;
artdecoarchitectureplacecard.addEventListener('click', function(){
    //toggle
    toggle1 = !toggle1;
    if(toggle1){
        artdecoarchitectureplacecard.src = 'images/artdecoarchitectureplacecard.png';
    }else{
        artdecoarchitectureplacecard.src = 'images/artdecoarchitecture.jpg';
    }
})

const artdecodesignerplacecard = document.getElementById('artdecodesignerplacecard');
//listen for click event
//toggle variable 

let toggle2 = true;
    artdecodesignerplacecard.addEventListener('click', function(){
    //toggle
    toggle2 = !toggle2;
    if(toggle2){
        artdecodesignerplacecard.src = 'images/artdecodesignerplacecard.png';
    }else{
        artdecodesignerplacecard.src = 'images/artdecodesigner.jpg';
    }
})

const artdecoposterplacecard = document.getElementById('artdecoposterplacecard');
//listen for click event
//toggle variable 

let toggle3 = true;
artdecoposterplacecard.addEventListener('click', function(){
    //toggle
    toggle3 = !toggle3;
    if(toggle3){
        artdecoposterplacecard.src = 'images/artdecoposterplacecards.png';
    }else{
        artdecoposterplacecard.src = 'images/artdecoposter.jpg';
    }
})

//image gallery

let slidesIndex = 1;
showSlides(slidesIndex);

//next and previous button controls
function plusSlides(n) {
    showSlides(slidesIndex += n);
}

//thumbnail image controls
function currentSlide(n) {
    showSlides(slidesIndex = n);
}

//function allowing user access to next and previous images
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slidesIndex = 1}
    if (n < 1) {slidesIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i< dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slidesIndex-1].style.display = "block";
    dots[slidesIndex-1].className += " active";
}

//i couldnt for the life of me figure out this scroll trigger 
//but i thought id just code comment it out to show that i tried.

//scroll trigger for layered sections
//gsap.registerPlugin(ScrollTrigger);

//gsap.utils.toArray(".layeredsection").
//forEach((layeredsection, i) => {
    //ScrollTrigger.create({
        //trigger: layeredsection,
        //start: "top top",
        //pin:true,
        //pinSpacing:false
    //});
//});
