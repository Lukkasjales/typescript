function sistema(nome: string, nota1: number, nota2: number, nota3: number, frequencia: number) {
    let media (nota1 + nota2 + nota3) / 3
    console.log(`A media é ${media}`)
    if (frequencia < 75) {
        console.log("reprovado")
    } else if (frequencia >= 75) {
        if (media >= 7) {
            console.log("aprovado")
        } else if (media >= 5 || media < 7) {
            console.log("recuperacao")
        } else if (media < 5) {
            console.log("reprovado por falta")
        }
    }
}