let textoEntrada;
let textoSalida;

function encriptar(){
    textoSalida="";
    textoEntrada = document.getElementById("text-input").value;
    
console.log(textoEntrada);

     textoSalida = textoEntrada
     .replaceAll(/e/g, "enter")
     .replaceAll(/i/g, "imes")
     .replaceAll(/a/g, "ai")
     .replaceAll(/o/g, "ober")
     .replaceAll(/u/g, "ufat");
    
        console.log(textoSalida);
        asignarTextoElemento("text-input","")
        asignarTextoElemento("text-output",textoSalida)
}

function desencriptar(){
     textoEntrada = document.getElementById("text-input").value;
    
console.log(textoEntrada);

    textoSalida = textoEntrada  //jaimenters
    .replaceAll(/ai/gi, "a")
    .replaceAll(/enter/gi, "e")
    .replaceAll(/imes/gi, "i")
    .replaceAll(/ober/gi, "o")
    .replaceAll(/ufat/gi, "u");
    
        console.log(textoSalida);
        asignarTextoElemento("text-input","")
        asignarTextoElemento("text-output",textoSalida)
}

function copiar(){

    copiarTexto()
}

function asignarTextoElemento(elemento, texto){

    document.getElementById(elemento).value = texto;

}
function copiarTexto() {
    if (textoSalida != "") {
        navigator.clipboard.writeText(textoSalida);
        console.log("mensaje copiado");
    }
    else {
        //myAlert("Nada que copiar");
        console.log("mensaje  noooo copiado");
    }
}

function convertirAMinusculas(elemento) {
    elemento.value = elemento.value.toLowerCase();      // convierte a minusculas
    elemento.value = elemento.value.replace(/[^a-zA-Z0-9]/,''); //no caracteres especiales
  }

  