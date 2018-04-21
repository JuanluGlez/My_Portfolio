//Accordion

$('.toggle').click(function() {
    if ($(this).siblings().is(':visible')) {
        $(this).siblings().slideUp();
        $(this).siblings().find('.inner:visible').slideUp();
    } else {
        $(this).parent().parent().find('inner:visible').slideUp();
        $(this).siblings().slideToggle();
    };
});

//Seemore button

$(document).on("ready", main);

function main(){
    $("#seemore").on("click", cambiarTexto);
}

function cambiarTexto(){
    $(this).toggleClass("port-btn-seeless");
}


//Portfolio animation on click

$(document).on("ready", first);

function first(){
    $("#port-mod, #port-mod2").on("click", second);
}

function second(){
    $(this).toggleClass("girando");
}

   
//Validación de formulario

var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    $(document).ready(function(){
        
       $("#bEnviar").click(function(){
          
           var nombre = $("#itNombre").val();
           var correo = $("#itMail").val();
           
           if(nombre == ""){
                $("#mensaje1").fadeIn();
                return false;
            
            }else{
                $("#mensaje1").fadeOut();
                if(correo == "" || !expr.test(correo)){
                    $("#mensaje2").fadeIn();
                    return false;
            }
                
                }
                
            });
       });
                           
    
//Smooth Scroll

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});



//Portfolio text stucked

$(document).ready(function(){
	var altura = 1150;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.port-header').addClass('port-header-fixed');
		} else {
			$('.port-header').removeClass('port-header-fixed');
		}
	});
 
});




