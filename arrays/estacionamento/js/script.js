let carros = []

function adicionar() {
  let marca = document.getElementById("marca").value
  let modelo = document.getElementById("modelo").value
  let ano = document.getElementById("ano").value

  if (marca && modelo && ano) {
    let carro = {}

    carro.marca = marca
    carro.modelo = modelo
    carro.ano = parseInt(ano)

    carros.push(carro)

    limparDados()
    gerarTabela()
  } else {
    alert("Preencha todos os campos!")
  }
}

function gerarTabela() {
  let corpoTabela = document.getElementById("corpo-tabela")
  corpoTabela.innerText = ""

  for (let i = 0; i < carros.length; i++) {
    corpoTabela.innerHTML += ` 
                <tr>
                    <td>${carros[i].marca}</td>
                    <td>${carros[i].modelo}</td>
                    <td>${carros[i].ano}</td>
                    <td>
                        <img src='img/lixeira.png' alt='Excluir Item'/>
                    </td>
                </tr>`
  }
}

function limparDados() {
  document.getElementById("marca").value = ""
  document.getElementById("modelo").value = ""
  document.getElementById("ano").value = ""
}

function resultado() {
  if (carros.length == 0) {
    alert("Não existem carros cadastrados!")
  } else {
    let somaAnos = 0
    let maisNovo = carros[0]
    let maisVelho = carros[0]

    for (let i = 0; i < carros.length; i++) {
      if (carros[i].ano < maisVelho.ano) {
        maisVelho = carros[i]
      }

      if (carros[i].ano > maisNovo.ano) {
        maisNovo = carros[i]
      }

      somaAnos += carros[i].ano
    }

    let media = somaAnos / carros.length

    document.getElementById(
      "maisNovo"
    ).innerText = `${maisNovo.modelo}, ${maisNovo.ano}`
    document.getElementById(
      "maisVelho"
    ).innerText = `${maisVelho.modelo}, ${maisVelho.ano}`
    document.getElementById("media").innerText = media
  }
}
