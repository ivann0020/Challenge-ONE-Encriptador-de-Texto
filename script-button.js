function cifrar() {

  var acento = (e,max, arr = e.value.match(/[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g) || []) => arr.length === max;
  var lock = (e, max, arr = e.value.match(/[A-Z]/g) || []) => arr.length === max;

  if (!lock(document.getElementById("introducir-texto"), 0)) {
    alert("El texto contiene mayusculas.");
  } else if (!acento(document.getElementById("introducir-texto"), 0)) {
    alert("El texto contiene acentos");
  } else {
    var mensaje = document.getElementById("introducir-texto").value;

    // g es para toda la linea.
    // m afecta a multiples lineas o parrafo.

    var textCrifrado = mensaje.replace(/e/gm, "enter");

    var textCrifrado = textCrifrado.replace(/o/gm, "ober");

    var textCrifrado = textCrifrado.replace(/i/gm, "imes");

    var textCrifrado = textCrifrado.replace(/a/gm, "ai");

    var textCrifrado = textCrifrado.replace(/u/gm, "ufat");

    document.getElementById("conteinerImg").style.display = "none";
    document.getElementById("text1").style.display = "none";
    // document.getElementById("text2").innerHTML = textCrifrado;
    document.getElementById("resultado").innerHTML = textCrifrado;
    document.getElementById("btn-copy").style.display = "show";
    document.getElementById("btn-copy").style.display = "inline";
  }
}

function desencriptar() {
  var mensaje = document.getElementById("introducir-texto").value;

  // g es para toda la linea.
  // m afecta a multiples lineas o parrafo.

  var textCrifrado = mensaje.replace(/enter/gm, "e");

  var textCrifrado = textCrifrado.replace(/ober/gm, "o");

  var textCrifrado = textCrifrado.replace(/imes/gm, "i");

  var textCrifrado = textCrifrado.replace(/ai/gm, "a");

  var textCrifrado = textCrifrado.replace(/ufat/gm, "u");

  document.getElementById("conteinerImg").style.display = "none";
  document.getElementById("text1").style.display = "none";
  document.getElementById("resultado").innerHTML = textCrifrado;
  document.getElementById("btn-copy").style.display = "show";
  document.getElementById("btn-copy").style.display = "inline";
}

function copiar() {
  var copiado = document.getElementById("resultado");
  copiado.select();
  document.execCommand("copy");

  alert("Se copio el texto!");
}
