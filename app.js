let textoEntrada;
let textoSalida;

function encriptar(){
    textoSalida="";
    textoEntrada = document.getElementById("text-input").value;
    
console.log(textoEntrada);

     textoSalida = textoEntrada
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
        console.log(textoSalida);

        asignarTextoElemento("text-output",textoSalida)
}

function desencriptar(){
     textoEntrada = document.getElementById("text-input").value;
    
console.log(textoEntrada);

    textoSalida = textoEntrada
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    
        console.log(textoSalida);

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
    elemento.value = elemento.value.toLowerCase();
  }

  