jQuery( document ).ready(function( $ ) {


	"use strict";


    
        $(function() {
            $( "#tabs" ).tabs();
        });


        // Page loading animation

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
        

        if ($(window).width() < 800) {
            document.getElementById("logoimage").src = "images/logohomeservicelign.png"; 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                var box = $('.header-text').height();
                var header = $('header').height();
      
                if (scroll >= box - header) {
                  $("header").addClass("background-header");
                  $(".navbar .navbar-brand img").attr("src","images/logohomeservicelign.png");
                } else {
                  $("header").removeClass("background-header");
                  $(".navbar .navbar-brand img").attr("src","images/logohomeservicelign.png");
                }
              });
         }
         else {
            document.getElementById("logoimage").src = "images/logohomeservicelignwhite.png";   
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                var box = $('.header-text').height();
                var header = $('header').height();
      
                if (scroll >= box - header) {
                  $("header").addClass("background-header");
                  $(".navbar .navbar-brand img").attr("src","images/logohomeservicelign.png");
                } else {
                  $("header").removeClass("background-header");
                  $(".navbar .navbar-brand img").attr("src","images/logohomeservicelignwhite.png");
                }
              });
         }


  





		if ($('.owl-testimonials').length) {
            $('.owl-testimonials').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 2,
                        margin: 30
                    }
                }
            });
        }
        if ($('.owl-partners').length) {
            $('.owl-partners').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 4,
                        margin: 30
                    }
                }
            });
        }

        $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:10000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });

        function visible(partial) {
            var $t = partial,
                $w = jQuery(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

        }

        $(window).scroll(function(){

          if(visible($('.count-digit')))
            {
              if($('.count-digit').hasClass('counter-loaded')) return;
              $('.count-digit').addClass('counter-loaded');
              
        $('.count-digit').each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        }
    })
 
});

function beforeafterfunction(beforeafterimage){


    beforeafterimage.src='images/guttercleaning2.jpg';
    document.getElementById("beforeaftertext").innerHTML = "After";
}


 function mouseaway(beforeafterimage)
    {

        beforeafterimage.src='assets/images/single_service_01.jpg';
        document.getElementById("beforeaftertext").innerHTML = "Before";
    }

    function beforeafterfunction2(beforeafterimage2){


    beforeafterimage2.src='images/mossremoval2.png';
    document.getElementById("beforeaftertext2").innerHTML = "After";
}


 function mouseaway2(beforeafterimage2)
    {

        beforeafterimage2.src='assets/images/single_service_02.jpg';
        document.getElementById("beforeaftertext2").innerHTML = "Before";
    }


function beforeafterfunction3(beforeafterimage3){


    beforeafterimage3.src='images/windowafter.png';
    document.getElementById("beforeaftertext3").innerHTML = "After";
}


 function mouseaway3(beforeafterimage3)
    {

        beforeafterimage3.src='images/windowbefore.png';
        document.getElementById("beforeaftertext3").innerHTML = "Before";
    }

function beforeafterfunction4(beforeafterimage4){


    beforeafterimage4.src='images/drivewayafter.png';
    document.getElementById("beforeaftertext4").innerHTML = "After";
}


 function mouseaway4(beforeafterimage4)
    {

        beforeafterimage4.src='images/drivewaybefore.png';
        document.getElementById("beforeaftertext4").innerHTML = "Before";
    }





function beforeafterfunction5(beforeafterimage5){


    beforeafterimage5.src='images/concreteafter.png';
    document.getElementById("beforeaftertext5").innerHTML = "After";
}


 function mouseaway5(beforeafterimage5)
    {

        beforeafterimage5.src='images/concretebefore.png';
        document.getElementById("beforeaftertext5").innerHTML = "Before";
    }

 function beforeafterfunction6(beforeafterimage6){


    beforeafterimage6.src='images/softwash_after.jpg';
    document.getElementById("beforeaftertext6").innerHTML = "After";
}


 function mouseaway6(beforeafterimage6)
    {

        beforeafterimage6.src='images/softwash_before.jpg';
        document.getElementById("beforeaftertext6").innerHTML = "Before";
    }





function openForm() {
  document.getElementById("popupform").style.display = "block";
  document.getElementById("getan").innerHTML = "Get an " + "<em>estimate</em>";
  document.getElementById("getan2").innerHTML = "What services are you looking for?";
  document.getElementById("getan3").value = "";
  document.getElementById("subjectform").value = "WEBSITE FORM: get-an-estimate--website-traffic";
}

function closeForm() {
  document.getElementById("popupform").style.display = "none";
} 

window.onclick = function(openForm) {
  if (event.target == popupform) {
    popupform.style.display = "none";
  }
}
function Validate()
{
var regEx = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
if(regEx.test(document.getElementById("postalcode").value))
{
  openForm()

}
else
{
alert("Invalid Postal Code");
}
}
function goinput(){

    var ofs = 0;
var el = document.getElementById('postalcode');

window.setInterval(function(){
  el.style.background = 'rgba(151,192,73,'+Math.abs(Math.sin(ofs))+')';
  ofs += 0.1;
}, 10);
alert("Enter your postal code")
       
}

function springcoupon(){
     openForm()


     document.getElementById("getan").innerHTML = "Soft Wash <em>Spring Special</em>";
     document.getElementById("getan2").innerHTML = "20% off coupon";
     document.getElementById("getan3").value = "Soft Wash 20% off";
     document.getElementById("subjectform").value = "WEBSITE FORM: Soft Wash 20% off";

}

/*POPUP LOADING PAGE*/

$(document).ready(function(){  
    if(localStorage.getItem('popState') != 'shown'){
      $("#myModal").delay(2000).fadeIn();
      localStorage.setItem('popState','shown')
  }
 $('#myModal').modal('show');
  }); 

  function Validate2()
{
var regEx = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
if(regEx.test(document.getElementById("postalcode").value))
{
  openForm()
  $('#myModal').modal('hide');
  document.getElementById("getan").innerHTML = "<em>Free</em> Lawn Aeration";
  document.getElementById("getan2").innerHTML = "in Waterloo";
  document.getElementById("getan3").value = "Free Lawn Aeration (Waterloo)";
  document.getElementById("subjectform").value = "WEBSITE FORM: Free-lawn-aeration";
}
else
{
alert("Invalid Postal Code");
}
}