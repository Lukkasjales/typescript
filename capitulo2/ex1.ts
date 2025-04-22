function verificarIdade(idade) {
    if (idade < 12) {
        console.log("Criança")
    } else if (idade >= 12 && idade <= 17) {
        console.log("adolescente")
    } else {
        console.log("adulto")
    }
}

verificarIdade(12)
verificarIdade(18)