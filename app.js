let textoUsuario;
let textroTraducido;

//Función que permite asignar al <p> vacío en la caja del texto encriptado dicho texto
function asignarTextoElemento(texto) {
    let elementoHTML = document.getElementById("texto-traducido");
    elementoHTML.innerHTML = texto;
}

//Función que limpia ese <p>
function limpiarCaja() {
    document.getElementById("texto-traducido").innerHTML = "";
}

//Función que habilita o deshabilita el <div> que contiene la imagen y el mensaje de que no se encontró ningún texto ingresado por el usuario
function deshabilitarNotFound() {
    let contenidoNotFound = document.getElementById("contenido-not-found");
    if (textoUsuario === "") {
        contenidoNotFound.style.display = "block";
    } else {
        contenidoNotFound.style.display = "none";
    }
}

//Función que captura el texto ingresado por el usuario y valida si tiene mayúsculas o tildes, y en función de eso lo retiene o no en la variable textoUsuario
function capturarTexto() {
    textoUsuario = document.getElementById("textoUsuario").value;
    if (/[A-ZÁÉÍÓÚÜ-áéíóú]/.test(textoUsuario)) {
        alert("El texto no debe contener mayúsculas ni tildes.");
        textoUsuario = "";
    }
}

function activarCaja() {
    limpiarCaja();
    capturarTexto();
    deshabilitarNotFound();
}

//Función que cambia las vocales por sus claves de codificación
function codificar(texto) {
    textoCodificado = texto.replace(/e/g, "enter");
    textoCodificado = textoCodificado.replace(/i/g, "imes");
    textoCodificado = textoCodificado.replace(/a/g, "ai");
    textoCodificado = textoCodificado.replace(/o/g, "ober");
    textoCodificado = textoCodificado.replace(/u/g, "ufat");
    return textoCodificado;
}

function encriptar() {
    let textoCodificado = codificar(textoUsuario);
    asignarTextoElemento(textoCodificado);
}

//Función que cambia de regreso a las vocales según sus claves de codificación
function decodificar(texto) {
    textoDecodificado = texto.replace(/enter/g, "e");
    textoDecodificado = textoDecodificado.replace(/imes/g, "i");
    textoDecodificado = textoDecodificado.replace(/ai/g, "a");
    textoDecodificado = textoDecodificado.replace(/ober/g, "o");
    textoDecodificado = textoDecodificado.replace(/ufat/g, "u");
    return textoDecodificado;
}

function desencriptar() {
    let textoDecodificado = decodificar(textoUsuario);
    asignarTextoElemento(textoDecodificado);
}

function copiar() {
    textoTraducido = document.getElementById("texto-traducido");

    //Creo un <textarea> temporal para copiar el texto porque el navegador no admite copiarlo directamente del <p>
    const textarea = document.createElement('textarea');
    textarea.value = textoTraducido.textContent;
    document.body.appendChild(textarea);

    //Efectuo la copia en el portapapeles
    textarea.select();
    document.execCommand('copy');

    //Eliminar el <textarea> temporal
    document.body.removeChild(textarea);
}