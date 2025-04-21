function identificarTipo(valor: string | number) {
    if (typeof valor === "string") {
        console.log("É uma string")
    } else if (typeof valor === "number") {
        console.log("É um número")
    } else {
        console.log("Não é número nem string")
    }
}

identificarTipo(43)
identificarTipo("Olá")

