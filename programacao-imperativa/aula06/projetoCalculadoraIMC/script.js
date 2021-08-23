function calcularIMC(nome, idade, altura, peso, imc) {
    nome = prompt('qual seu nome?')
    idade = parseFloat(prompt("qual sua idade?"))
    altura = parseFloat(prompt("qual sua altura?"))
    peso = parseFloat(prompt("qual seu peso?"))

    imc = peso / (altura * altura)
    alert(`seu IMC é: ${imc.toFixed(2)}`)

    if (imc < 18.5) {
        globalThis1
        alert('Classificação: Magreza \n Obesidade: 0')
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        alert('Classificação: Normal \n Obesidade: 0')
    }
    else if (imc >= 25 && imc <= 29.9) {
        alert('Classificação: Sobrepeso \n Obesidade: 1')
    }
    else if (imc >= 30 && imc <= 39.9) {
        alert('Classificação: Obesidade \n Obesidade: 2')
    }
    else if (imc >= 40) {
        alert('Classificação: Obesidade Grave \n Obesidade: 3')
    }

}
calcularIMC()


