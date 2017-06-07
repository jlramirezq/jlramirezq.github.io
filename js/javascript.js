
// Toggle between hiding and showing blog replies/comments
document.getElementById("myBtn").click();
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

function likeFunction(x) {
    x.style.fontWeight = "bold";
    x.innerHTML = "✓ Liked";
}
</script>

<script>

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
