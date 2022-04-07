function imprimirCrescente() {
  let numeroDigitado = document.getElementById("numeroDigitado").value
  document.getElementById("numeroDigitado").value = ""

  if (numeroDigitado != "") {
    let numero = parseInt(numeroDigitado)

    if (numero > 0) {
      let divSaida = document.getElementById("saida")
      divSaida.innerText = ""

      for (let i = 1; i <= numero; i++) {
        divSaida.innerText += ` ${i} ,`
      }
    } else {
      alert("O número tem que ser maior que zero!")
    }
  } else {
    alert("Preencha o campo com o número!")
  }
}

function imprimirDecrescente() {
  let numeroDigitado = document.getElementById("numeroDigitado").value
  document.getElementById("numeroDigitado").value = ""

  if (numeroDigitado != "") {
    let numero = parseInt(numeroDigitado)

    if (numero > 0) {
      let divSaida = document.getElementById("saida")
      divSaida.innerText = ""

      for (let i = numero; i > 0; i--) {
        divSaida.innerText += ` ${i} ,`
      }
    } else {
      alert("O número tem que ser maior que zero!")
    }
  } else {
    alert("Preencha o campo com o número!")
  }
}
