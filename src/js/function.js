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

//Portfolio animation on click

$('a.button').on('click' ,function() {
    
    $('input[name=firstName]').addClass('animated shake');
    
}); 