function jugar() {
    const numeroSecreto = 7;
    let intento = prompt("Adivina el número secreto (entre 1 y 10):");
    intento = Number(intento);
  
    if (!isNaN(intento)) {
      if (intento === numeroSecreto) {
        alert("¡Felicidades! Adivinaste el número secreto.");
      } else {
        alert("Lo siento, ese no es el número secreto.");
      }
    } else {
      alert("Por favor, ingresa un número válido.");
    }
  }
  