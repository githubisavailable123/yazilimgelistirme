$(document).ready(function(){


    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 30){
        $('.baslik').css({'background':'#C0C0C0','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)','height':'59px'});
      }else{
        $('.baslik').css({'background':'none','box-shadow':'none'});
      }
    });

     $(".sorular").on("click", ".sorular-baslik", function() {
      $(this).toggleClass("active").next().slideToggle();
    });

  });

  const toTop = document.querySelector(".to-top");

 window.addEventListener("scroll", () => {
   if (window.pageYOffset > 100) {
     toTop.classList.add("active");
   } else {
     toTop.classList.remove("active");
   }
 })


 
