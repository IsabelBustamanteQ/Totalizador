
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  var cantidad=document.querySelector("#cantidad").value;
  var precio=document.querySelector("#precio").value;
  div.innerHTML = "Cantidad: "+cantidad +", Precio:"+ precio;
});

