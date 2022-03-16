let numeros = []
let numerosOrdenado = []

function adicionar() {
  let numeroStr = document.getElementById("entradaNumero").value

  if (numeroStr == "") {
    alert("Preencha o número!")
  } else {
    let numero = parseFloat(numeroStr)

    if (numero < 0) {
      alert("O número deve ser maior que zero!")
    } else {
      numeros.push(numero)
    }

    document.getElementById("entradaNumero").value = ""
  }
}

function ordenar() {
  if (numeros.length == 0) {
    alert("Nenhum número adicionado!")
  } else {
    document.getElementById("naoOrdenado").innerText = numeros
    while (numeros.length > 0) {
      let menor = numeros[0]
      let indiceMenor = 0

      for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
          menor = numeros[i]
          indiceMenor = i
        }
      }

      numerosOrdenado.push(menor)
      numeros.splice(indiceMenor, 1)
    }

    document.getElementById("ordenado").innerHTML = numerosOrdenado
  }
}
