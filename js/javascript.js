
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



var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
}



windows.onload;




function nuevoEvento(elemento, evento, funcion) {
    // para cualquier navegador
    try {
        if (elemento.addEventListener)
            elemento.addEventListener(evento, funcion, false);
 
        // para IE
        else
            elemento.attachEvent("on" + evento, funcion);
    } catch(e) {
        alert("No se pudo agregar el eventon" + e.name + " - " + e.message);
    }
}
 
// codigo javascript no intrusivo que asigna al evento onload una funcion
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function')
        window.onload = func;
    else {
        window.onload = function() {
            if (oldonload)
            oldonload();
            func();
        }
    }
}



 

addLoadEvent(carousel);



