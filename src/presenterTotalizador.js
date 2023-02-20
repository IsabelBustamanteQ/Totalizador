
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
  var porcentajeDescuento=0;
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
  if(cantidad>=30000)
  {
    porcentajeDescuento=0.15;
  }
  else
  {
    if(cantidad>=10000)
    {
        porcentajeDescuento=0.10;
    }
    else
    {
        if(cantidad>=7000)
        {
            porcentajeDescuento=0.07;
        }
        else
        {
            if(cantidad>=3000)
            {
                porcentajeDescuento=0.05;
            }
            else
            {
                if(cantidad>=1000)
                {
                    porcentajeDescuento=0.03;
                }
            }
        }
    }
  }
  var descuento=precioNeto*porcentajeDescuento;
  var impuesto=(precioNeto-descuento)*porcentajeImpuesto;
  var precioTotal=(precioNeto-descuento)+impuesto;
  var tPrecioNeto="<p>Precio neto: $"+precioNeto+"</p>";
  var tDescuento="<p> Descuento("+porcentajeDescuento*100+"%): $"+descuento+"</p>";
  var tImpuesto="<p>Impuesto para "+codigoEstado+"("+porcentajeImpuesto*100+"%): $"+impuesto+"</p>";
  var tPrecioTotal="<p> Precio total: $"+precioTotal+"</p>";
  div.innerHTML = tPrecioNeto+tDescuento + tImpuesto+tPrecioTotal;
});

