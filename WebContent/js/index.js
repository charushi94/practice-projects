$('.message a').click(function(){
	   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
	   
});
$('#createLink').click(function(){
	$('.register-form').show();
	$('.login-form').hide();
});
$('#loginLink').click(function(){
	$('.register-form').hide();
	$('.login-form').show();
});