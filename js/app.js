$(function(){

	var header= document.getElementById('header');
	var headroom = new Headroom(header);
	headroom.init();
	//menu responsive
//calculamos ancho de  la  pagina 
	var ancho = $(window).width(), //calculamos ancho del  dipositivo
		enlaces = $('#enlaces'),
		btnMenu= $('#btnMenu'),
		icono = $('#btnMenu .icono');
	//creamos una codicion que diga si el usuario 
//esta en un tamaño menos a 700px
	if(ancho < 700){
		enlaces.hide();
		icono.addClass('fa-bars');

	}
	btnMenu.on('click', function(e){
		enlaces.slideToggle();
		icono.toggleClass('fa-bars');
		icono.toggleClass('fa-times');

	});
	$(window).on ('resize', function(){
		//si el tamaño de la ventana es mas grande de 700 px 
		//

		if ($(this).width() > 700){
			enlaces.show();
			icono.addClass('fa-times');
			icono.addClass('fa-bars');
		} else{
			enlaces.hide();
			//reiniciamos los iconos
			icono.addClass('fa-bars');
			icono.addClass('fa-times');
		}

	})

});

