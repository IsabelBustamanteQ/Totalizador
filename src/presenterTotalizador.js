
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  var cantidad=document.querySelector("#cantidad").value;
  var precio=document.querySelector("#precio").value;
  var estado=document.getElementById("estado");
  var codigoEstado=estado.options[estado.selectedIndex].text;
  var impuesto;
  if(codigoEstado==="UT")
  {
    impuesto=0.0665;
  }
  else
  {
    if(codigoEstado==="NV")
    {
        impuesto=0.08;
    }
    else
    {
        if(codigoEstado==="TX")
        {
            impuesto=0.0625;
        }
        else
        {
            if(codigoEstado==="AL")
            {
                impuesto=0.04;
            }
            else
            {
                impuesto=0.0825;
            }
        }
    }
  }
  div.innerHTML = "<p> Cantidad: "+cantidad +"</p><p> Precio:"+ precio+"</p><p> Estado:"+codigoEstado+"</p> <p> Impuesto: "+impuesto*100+"% </p>";
});

