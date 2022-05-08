 $('.multiple-items').slick({


   slidesToShow: 1,
  slidesToScroll: 1,               
  dots: true,
  arrows:false,
  infinite: true, 
    

});





 $('.multiple-items-partners').slick({


   slidesToShow: 3,
  slidesToScroll: 1,               
  dots: false,
  arrows:true,
  infinite: true, 
  //variableWidth: true,  

  responsive: [
  
    {
      breakpoint: 1200, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 992, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
       {
      breakpoint: 767, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false
      }
    },
           {
      breakpoint: 520, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true
      }
    },
  ]
});









$('.single-item').slick({
  dots:true,
    responsive: [
    {
           breakpoint:767, 
      settings: {
        
        arrows:false,
        dots:true
      }
    },
    ]
});


$(document).ready(function(){
  // появление/затухание кнопки #back-top
  $(function (){
    // прячем кнопку #back-top
    $("#back-top").hide();
  
    $(window).scroll(function (){
      if ($(this).scrollTop() > 100){
        $("#back-top").fadeIn();
      } else{
        $("#back-top").fadeOut();
      }
    });

    // при клике на ссылку плавно поднимаемся вверх
    $("#back-top a").click(function (){
      $("body,html").animate({
        scrollTop:0
      }, 800);
      return false;
    });
  });
});




