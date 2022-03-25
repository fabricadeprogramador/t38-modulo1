let tabuleiro = [-1, -1, -1, -1, -1, -1, -1, -1, -1]
let vez = 1
let marcacao = "X"

function marcar(posicao) {
  if (vez <= 9) {
    if (tabuleiro[posicao] !== -1) {
      alert("Posição já marcada!")
    } else {
      marcacao = vez % 2 == 0 ? "O" : "X"
      tabuleiro[posicao] = marcacao
      vez++
      document.getElementById("vez").innerText = `Jogada ${vez} :  ${
        vez % 2 != 0 ? "Jogador 1" : "Jogador 2"
      }`
      document.getElementById(posicao).innerText = marcacao
      verificar()
    }
  } else {
    alert("Jogo encerrado!")
  }
}

function verificar() {
  if (marcacao == "X") {
    if (tabuleiro[0] == "X" && tabuleiro[3] == "X" && tabuleiro[6] == "X") {
      alert("Jogador 1 Venceu!")
      document.getElementById(0).style = "background-color: red"
      document.getElementById(3).style = "background-color: red"
      document.getElementById(6).style = "background-color: red"
    }

    if (tabuleiro[1] == "X" && tabuleiro[4] == "X" && tabuleiro[7] == "X") {
      alert("Jogador 1 Venceu!")
      document.getElementById(1).style = "background-color: red"
      document.getElementById(4).style = "background-color: red"
      document.getElementById(7).style = "background-color: red"
    }

    if (tabuleiro[2] == "X" && tabuleiro[5] == "X" && tabuleiro[8] == "X") {
      alert("Jogador 1 Venceu!")
      document.getElementById(2).style = "background-color: red"
      document.getElementById(5).style = "background-color: red"
      document.getElementById(8).style = "background-color: red"
    }

    if (tabuleiro[0] == "X" && tabuleiro[1] == "X" && tabuleiro[2] == "X") {
      alert("Jogador 1 Venceu!")
      document.getElementById(0).style = "background-color: red"
      document.getElementById(1).style = "background-color: red"
      document.getElementById(2).style = "background-color: red"
    }

    if (tabuleiro[3] == "X" && tabuleiro[4] == "X" && tabuleiro[5] == "X") {
      alert("Jogador 1 Venceu!")
      document.getElementById(3).style = "background-color: red"
      document.getElementById(4).style = "background-color: red"
      document.getElementById(5).style = "background-color: red"
    }

    if (tabuleiro[6] == "X" && tabuleiro[7] == "X" && tabuleiro[8] == "X") {
      alert("Jogador 1 Venceu!")
      document.getElementById(6).style = "background-color: red"
      document.getElementById(7).style = "background-color: red"
      document.getElementById(8).style = "background-color: red"
    }

    if (tabuleiro[0] == "X" && tabuleiro[4] == "X" && tabuleiro[8] == "X") {
      alert("Jogador 1 Venceu!")
      document.getElementById(0).style = "background-color: red"
      document.getElementById(4).style = "background-color: red"
      document.getElementById(8).style = "background-color: red"
    }

    if (tabuleiro[2] == "X" && tabuleiro[4] == "X" && tabuleiro[6] == "X") {
      alert("Jogador 1 Venceu!")
      document.getElementById(2).style = "background-color: red"
      document.getElementById(4).style = "background-color: red"
      document.getElementById(6).style = "background-color: red"
    }
  } else {
    if (tabuleiro[0] == "O" && tabuleiro[3] == "O" && tabuleiro[6] == "O") {
      alert("Jogador 1 Venceu!")
      document.getElementById(0).style = "background-color: red"
      document.getElementById(3).style = "background-color: red"
      document.getElementById(6).style = "background-color: red"
    }

    if (tabuleiro[1] == "O" && tabuleiro[4] == "O" && tabuleiro[7] == "O") {
      alert("Jogador 1 Venceu!")
      document.getElementById(1).style = "background-color: red"
      document.getElementById(4).style = "background-color: red"
      document.getElementById(7).style = "background-color: red"
    }

    if (tabuleiro[2] == "O" && tabuleiro[5] == "O" && tabuleiro[8] == "O") {
      alert("Jogador 2 Venceu!")
      document.getElementById(2).style = "background-color: red"
      document.getElementById(5).style = "background-color: red"
      document.getElementById(8).style = "background-color: red"
    }

    if (tabuleiro[0] == "O" && tabuleiro[1] == "O" && tabuleiro[2] == "O") {
      alert("Jogador 2 Venceu!")
      document.getElementById(0).style = "background-color: red"
      document.getElementById(1).style = "background-color: red"
      document.getElementById(2).style = "background-color: red"
    }

    if (tabuleiro[3] == "O" && tabuleiro[4] == "O" && tabuleiro[5] == "O") {
      alert("Jogador 2 Venceu!")
      document.getElementById(3).style = "background-color: red"
      document.getElementById(4).style = "background-color: red"
      document.getElementById(5).style = "background-color: red"
    }

    if (tabuleiro[6] == "O" && tabuleiro[7] == "O" && tabuleiro[8] == "O") {
      alert("Jogador 2 Venceu!")
      document.getElementById(6).style = "background-color: red"
      document.getElementById(7).style = "background-color: red"
      document.getElementById(8).style = "background-color: red"
    }

    if (tabuleiro[0] == "O" && tabuleiro[4] == "O" && tabuleiro[8] == "O") {
      alert("Jogador 2 Venceu!")
      document.getElementById(0).style = "background-color: red"
      document.getElementById(4).style = "background-color: red"
      document.getElementById(8).style = "background-color: red"
    }

    if (tabuleiro[2] == "O" && tabuleiro[4] == "O" && tabuleiro[6] == "O") {
      alert("Jogador 2 Venceu!")
      document.getElementById(2).style = "background-color: red"
      document.getElementById(4).style = "background-color: red"
      document.getElementById(6).style = "background-color: red"
    }
  }
}
