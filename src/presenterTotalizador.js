
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  var cantidad=document.querySelector("#cantidad").value;
  var precio=document.querySelector("#precio").value;
  var estado=document.getElementById("estado");
  var codigoEstado=estado.options[estado.selectedIndex].text;
  var porcentajeImpuesto;
  var precioNeto=precio*cantidad;
  if(codigoEstado==="UT")
  {
    porcentajeImpuesto=0.0665;
  }
  else
  {
    if(codigoEstado==="NV")
    {
        porcentajeImpuesto=0.08;
    }
    else
    {
        if(codigoEstado==="TX")
        {
            porcentajeImpuesto=0.0625;
        }
        else
        {
            if(codigoEstado==="AL")
            {
                porcentajeImpuesto=0.04;
            }
            else
            {
                porcentajeImpuesto=0.0825;
            }
        }
    }
  }
  var impuesto=precioNeto*porcentajeImpuesto;
  var precioTotal=precioNeto+impuesto;
  var tPrecioNeto="<p>Precio neto: $"+precioNeto+"</p>";
  var tImpuesto="<p>Impuesto para "+codigoEstado+": $"+impuesto+"</p>";
  var tPrecioTotal="<p> Precio total: $"+precioTotal+"</p>";
  div.innerHTML = tPrecioNeto + tImpuesto+tPrecioTotal;
});

