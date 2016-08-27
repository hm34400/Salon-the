//window.innerWidth
//window.innerHeight
//window.outerWidth
//window.outerHeight

$("header").css("height", window.innerHeight + 100 ); // Header Taille 
$(".grosse").css("height", window.innerHeight) ; // Header Taille 


$(document).ready(function(){ 
          
   $(window).scroll(function(){  /*Fonction ecoute le scroll*****/
  var scrollTop = $(this).scrollTop();

    if($(window).scrollTop() > 100){ /*Nombre de pixcel pour condition ok***/
      
          $('.navbar-default').addClass("bigcontent");/*Aplique la classe****/
  }
  else{$('.navbar-default').removeClass("bigcontent");}
  
       });
       
    });