

$("header").css("height", window.innerHeight + 100 ); // Header Taille 

//$(".grosse").css("height", window.innerHeight) ; // Header Taille



$(document).ready(function(){ 
          
   $(window).scroll(function(){  /*Fonction ecoute le scroll*****/
 
    if($(window).scrollTop() > 100){ /*Nombre de pixcel pour condition ok***/
      
          $('.navbar-default').addClass("bigcontent");/*Aplique les classes****/
          $('.contact').addClass("cache");
          $('img').addClass("logoNav");
  }
  else{$('.navbar-default').removeClass("bigcontent");
        $('.contact').removeClass("cache");
        $('img').removeClass("logoNav");
       }
  
       });
       
    });