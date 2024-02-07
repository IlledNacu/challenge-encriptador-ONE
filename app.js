let textoUsuario;
let textroTraducido;

function asignarTextoElemento(texto) {
    let elementoHTML = document.getElementById("texto-traducido");
    elementoHTML.innerHTML = texto;
}

function limpiarCaja() {
    document.getElementById("texto-traducido").innerHTML = "";
}

function deshabilitarNotFound() {
    let contenidoNotFound = document.getElementById("contenido-not-found");
    if (textoUsuario === "") {
        contenidoNotFound.style.display = "block";
    } else {
        contenidoNotFound.style.display = "none";
    }
}

function capturarTexto() {
    textoUsuario = document.getElementById("textoUsuario").value;
}

function activarCaja() {
    limpiarCaja();
    capturarTexto();
    deshabilitarNotFound();
}

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

    // Creo un textarea temporal para copiar el texto porque el navegador no admite copiarlo directamente del p
    const textarea = document.createElement('textarea');
    textarea.value = textoTraducido.textContent;
    document.body.appendChild(textarea);

    // Efectuo la copia en el portapapeles
    textarea.select();
    document.execCommand('copy');

    // Eliminar el textarea temporal
    document.body.removeChild(textarea);
}