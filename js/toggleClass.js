$(document).ready(function(){
		
	$('#noah p span').hover(function(){
		$('#noah div').css({'width':'190px'});
		$('#noah div').toggleClass('hehe');
		$('#noah div span').css({'display':'inline'});
		$('body').css({'background-image':'url(img/background.jpg)', 'backgroundSize':'100% 100%’, 'backgroundRepeat':'no-repeat'});
	},function(){
		$('#noah div').css({'width':'250px'});
		$('#noah div').removeClass();
		$('#noah div span').delay(3000).fadeOut(1000,'linear');
	});
});
  
