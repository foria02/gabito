

function seguroAuto(precioAuto,edadUsuario,anioAuto){




let CuotaAuto=precioAuto*0.01;

let recargoEdad;
let recargoAnio;
let cuotaTotal;

if (edadUsuario<25 || edadUsuario<65){   //calcula el porcentaje de recargo que se le hace a la cuota en base a edad del conductor.
        recargoEdad=(CuotaAuto*10)/100;
    }

if (anioAuto==0){
        recargoAnio=0;
    }
if (anioAuto>0 && anioAuto<=3){    // calcula el porcentaje de recargo que se le hace a la cuota en base a la cantidad de anios que tiene el auto.
        recargoAnio=(CuotaAuto*10)/100;
    }else if (anioAuto>=4 && anioAuto<=10){
        recargoAnio=(CuotaAuto*15)/100;
    }else if (anioAuto>10){
        recargoAnio=(CuotaAuto*20)/100;
    }
    
cuotaTotal=CuotaAuto+recargoEdad+recargoAnio; //esta variable representa la suma de la cuota pura del seguro del auto mas los respectivos recargos segun la edad y el precio del auto y el anio del mismo.
return cuotaTotal;

}

const edadConductor=parseInt(prompt("ingresa tu edad: "));
let precioAuto=parseInt(prompt("ingresa precio del auto: "));
let anioAuto=parseInt(prompt("ingresa anio del auto: "));

//var edadConductor=23;
//var anioAuto=3;
//var precioAuto=23000000;

var precioFinal=seguroAuto(precioAuto,edadConductor,anioAuto);


console.log(precioFinal);