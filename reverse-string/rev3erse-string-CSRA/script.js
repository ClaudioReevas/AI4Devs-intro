// Obtén referencia al campo de texto
const inputTexto = document.getElementById('texto');
// Obtén referencia a la etiqueta donde mostrar el resultado
const resultadoLabel = document.getElementById('resultado');

// Evento 'input' que se dispara en tiempo real conforme se escribe
inputTexto.addEventListener('input', function() {
  // Se obtiene el valor actual del input
  const texto = inputTexto.value;
  
  // Se invierte el texto
  const textoInvertido = texto.split('').reverse().join('');
  
  // Se muestra el texto invertido en el label con id "resultado"
  resultadoLabel.textContent = textoInvertido;
});