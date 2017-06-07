
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



var x =	document.getElementById("like");
x.onclick = megusta();
		
}

function megusta(){
	
	alert("Gracias por darle me gusta");
}



