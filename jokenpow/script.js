const result = document.querySelector(".result")
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choice = ['rock', 'paper', 'scissors']

    const randomNamber = Math.floor(Math.random() * 3) //Math. random faz um numero aleatorio de 0 a 1, no caso vou fazer *3 e o floor aredonda para baixo. se deu 0,9  *3 o resultado e 2,7 aredondado para baixo da 2, e assim vai depender do numero que ele gera aredondado para baixo pode dar 0 1 ou 2 

    return choice[randomNamber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "Xi Deu Empate !"
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (machine === 'scissors' && machine === 'paper')) {

            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Legal, Você ganhou !!!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Maquina sortuda."
    }

}

