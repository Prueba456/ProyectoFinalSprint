var mostarOcultar = function(divtexte) {
  var divtext = document.getElementById(divtexte);
  if (divtext.style.display == "block" ) {
    divtext.style.display = "none";
  } else{
    divtext.style.display = "block";
  }
}
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

var arrayFicha = [ { nombre : "Meche", apellido : "Zubieta", promocion : "1era Promoción", estado : "Trabajando" },
{ nombre : "Arabela", apellido : "Rojas", promocion : "2da Promoción", estado : "Trabajando" },
{ nombre : "Maria", apellido : "Rosán", promocion : "2da Promoción", estado : "Trabajando" },
{ nombre : "Guadalupe", apellido : "Racio", promocion : "3ra Promoción", estado : "Trabajando" },
{ nombre : "Sara", apellido : "Casa", promocion : "3ra Promoción", estado : "Trabajando" },
{ nombre : "Daniella", apellido : "Durán", promocion : "4ra Promoción", estado : "Trabajando" },
{ nombre : "Michelle", apellido : "Seguil", promocion : "5ra Promoción", estado : "Trabajando"},
{ nombre : "Diana", apellido : "Navarro", promocion : "5ra Promoción", estado : "Trabajando" } ];


var imprimir=document.getElementById('imprimir');

var allFicha = "";
var array = [0,1,2,3,4,5,6,7]
  arrayFicha.forEach(function(e,i){
    allFicha =  "Nombre: "+ e.nombre + "</br>" +
                       "Apellido: "+ e.apellido + "</br>" +
                       "Promoción: "+ e.promocion + "</br>" +
                       "Estado: "+ e.estado + "</br></br>";
var indice = array[i];
var indice = document.getElementById(i)
indice.innerHTML = allFicha;
  })
