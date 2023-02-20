
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  var cantidad=document.querySelector("#cantidad").value;
  var precio=document.querySelector("#precio").value;
  var estado=document.getElementById("estado");
  var codigoEstado=estado.options[estado.selectedIndex].text;
  div.innerHTML = "<p> Cantidad: "+cantidad +"</p><p> Precio:"+ precio+"</p><p> Estado:"+codigoEstado+"</p>";
  
});

