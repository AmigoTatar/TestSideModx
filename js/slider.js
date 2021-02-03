$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight:true, 
		slidesToShow:1,
		slidesToScroll:1, 
		speed:1000,
		easing:'ease',
		infinite:true ,  
		initialSlide:0, 
		autoplay:true, 
		autoplaySpeed:3000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		
	
		
		asNavFor:".sliderbig",
		responsive:[
		{
			breakpoint:768,
			settings:{
			slidesToShow:2,
			}
		},{
			breakpoint:480,
			settings:{
			slidesToShow:1,
			}
		}

		]

	});
	$('.sliderbig').slick({
		arrows:false,
		fade:true,
		asNavFor:".slider",

	});
});
