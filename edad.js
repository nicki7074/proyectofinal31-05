while (true) {
  var edad = prompt("Por favor, ingresa tu edad:");
  if (edad === null) {
    window.location.href = "index.html";
    break;
  } else if (isNaN(edad)) {
    alert("Por favor, ingresa un número válido para tu edad.");
  } else if (parseInt(edad) >= 18) {
    break;
  } else {
    window.location.href = "https://www.minijuegos.com/juegos-de-mario-bros";
    break;
  }
}
