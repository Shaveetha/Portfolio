/* $(document).ready(function(){
    $(window).onscroll(function(){
        if(this.scrollY > 20){
             $('.navbar').addClass("sticky");
    
         }else{
             $('.navbar').removeClass("sticky");
         }
    })
});*/
// // $(document).ready(function(){
    // $(window).scroll(function(){
        // var scroll = $(window).scrollTop();
        // if (scroll > 20) {
        //   $(".navbar").css("background" , "crimson");
        // }
  
        // else{
            // $(".navbar").css("background" , "black");  	
        // }
    // })
//   })
const navbar = document.querySelector('.navbar');
window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 20){
        navbar.classList.add('active');
    }else{
        navbar.classList.remove('active');
    }
    // if(this.scroll > 500){
    //     scroll-up-btn.classList.add('show');
    // }else{
    //     scroll-up-btn.classList.remove('show');
    // }
} 

// slide-up-script
// scroll-up-btn.classList.click(function(){
//     html.animate(scrollTop: 0);
// });

// typing animation script
var typed = new Typed(".typing", {
    strings: ["WebDeveloper", "Designer", "Freelancer", "MemeCreator"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["WebDeveloper", "Designer", "Freelancer", "MemeCreator"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});