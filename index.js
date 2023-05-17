function encriptar() {
  var entrada = document.getElementById("entrada").value;
  var resultado = entrada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  document.getElementById("resultado").value = resultado;
    
  // Obtener la referencia a la imagen
  var imagen = document.getElementById("imagen-placeholder");
  var resultadoDiv = document.querySelector(".resultado");
  // Verificar si el textarea está vacío
  if (entrada == "") {
    imagen.style.display = "block"; // Mostrar la imagen
    
  } else {
    imagen.style.display = "none"; // Ocultar la imagen
    var botonCopiar = resultadoDiv.querySelector(".boton-copiar");
    if (!botonCopiar) { // Si el botón no existe, crear uno nuevo
      botonCopiar = document.createElement("button");
      botonCopiar.textContent = "Copiar";
      botonCopiar.classList.add("boton-copiar");
      resultadoDiv.appendChild(botonCopiar);
    }
    
    botonCopiar.addEventListener("click", function() {
      var resultadoTexto = document.getElementById("resultado");
      resultadoTexto.select();
      document.execCommand("copy");
      alert("Texto copiado al portapapeles");
    });

  }
}


function desencriptar(){
  var entrada = document.getElementById("entrada").value;
  var resultado = entrada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  document.getElementById("resultado").value = resultado;
    
  // Obtener la referencia a la imagen
  var imagen = document.getElementById("imagen-placeholder");
  
  // Verificar si el textarea está vacío
  if (entrada == "") {
    imagen.style.display = "block"; // Mostrar la imagen
  } else {
    imagen.style.display = "none"; // Ocultar la imagen
  }
}
 