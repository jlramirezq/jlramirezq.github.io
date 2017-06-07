
$(document).ready(function(){
	$('#biografia').click(function(){
		$("#contenido").load("biografia.html");
								 });
	
	$('#inicio').click(function(){
		$("#contenido").load("inicio.html");
								 });

	$('#quehago').click(function(){
		$("#contenido").load("quehago.html");
								 });

	$('#contacto').click(function(){
		$("#contenido").load("contacto.html");
								 });
							});

windows.onload= function(){
	document.getElementById("like").onclick= megusta;
		
}

function like(x){
	
	x.innerHTML=" :) Te gusta!!!!"
}



