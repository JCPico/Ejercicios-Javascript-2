var palabra = prompt("Palabra","");

function pal (palabra){
    palabra = palabra.toLowerCase().replace(/\s/g,"");

    palabraReverse=palabra.split("").reverse().toString();

    for (var i = 0; i < ((palabraReverse.length)-1); i++) {
        palabraReverse = palabraReverse.replace(",","");
      };

    if(palabra==palabraReverse){
        resu="es un Palindromo";
      }
    else{
        resu="no es un Palindromo";
      }

      console.log("Tu palabra "+resu);
    }
   pal(palabra);