$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar1').toggleClass('nav1-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar1').removeClass('nav1-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
        // scroll spy
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top>offset && top<offset+height){
                $('.navbar1 ul li a').removeClass('active');
                $('.navbar1').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    
    
});
 // Initiate venobox (lightbox feature used in portofilo)

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Portfolio | Sankar Sivasamy";
        $("#favicon").attr("href","assests/images/avatar1.png");
    }
    else {
        document.title = "Thanks For Your Time..";
        $("#favicon").attr("href","assests/images/black.png");
    }
});

$('a[href*="#"]').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
    },500, 'linear')
})
  // Porfolio isotope and filter
$(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

});
$(document).ready(function() {
    $('.venobox').venobox();
});

// <!-- typed js effect starts -->
    var typed = new Typed(".typing-text", {
        strings: ["Data Science And AI"],
        loop: true,
        typeSpeed: 50,
		backSpeed: 25,
		backDelay: 500,
      });
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
      VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
      });
// <!-- tilt js effect ends -->


// pre loader start
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,500);
}
window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

// Start of Tawk.to Live Chat
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3',{delay: 200}); 
srtop.reveal('.home .content p',{delay: 200}); 
srtop.reveal('.home .content .btn',{delay: 200}); 

srtop.reveal('.home .image',{delay: 400}); 
srtop.reveal('.home .linkedin',{interval: 600}); 
srtop.reveal('.home .github',{interval: 800}); 
srtop.reveal('.home .twitter',{interval: 1000});
srtop.reveal('.home .telegram',{interval: 600}); 
srtop.reveal('.home .instagram',{interval: 600}); 
srtop.reveal('.home .medium',{interval: 600}); 
srtop.reveal('.home .dev',{interval: 600}); 



/* SCROLL ABOUT */
srtop.reveal('.about .content h3',{delay: 300});
srtop.reveal('.about .content .tag',{delay: 400}); 
srtop.reveal('.about .content p',{delay: 300}); 
srtop.reveal('.about .content .box-container',{delay: 300}); 
srtop.reveal('.about .content .resumebtn',{delay: 300}); 


/* SCROLL SKILLS */
srtop.reveal('.skills .container',{interval: 200}); 
srtop.reveal('.skills .container .bar',{delay: 400}); 

/* SCROLL EDUCATION */
srtop.reveal('.education .box',{interval: 200}); 

/* SCROLL PROJECTS */
srtop.reveal('.work .box',{interval: 200}); 
srtop.reveal('.services .container',{interval: 100})
/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 400});
srtop.reveal('.experience .timeline .container',{interval: 400}); 
srtop.reveal('.portfolio .portfolio-container',{delay: 200});
srtop.reveal('.blog .blog-post',{delay: 400});

/* SCROLL CONTACT */
srtop.reveal('.contact .container',{delay: 400});
srtop.reveal('.contact .container .form-group',{delay: 400});



window.addEventListener('scroll', revealSkills);

function revealSkills() {
  var skills = document.querySelectorAll('.skill-category');

  for (var i = 0; i < skills.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = skills[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      skills[i].classList.add('active');
    } else {
      skills[i].classList.remove('active');
    }
  }
}

