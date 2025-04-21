type Pessoa = {
    nome: string,
    idade: number,
    profissao: string,
}

let pessoas: Pessoa[] = [
    {
        nome: "Ítalo",
        idade: 22,
        profissao: "Médico",
    },
    {
        nome: "Matheus",
        idade: 35,
        profissao: "Eletricista",
    },
]

function descreverPessoa(objeto) {
    objeto.forEach(item => {
        console.log(`${item.nome} tem ${item.idade} e sua profissão é: "${item.profissao}" `)
    })
}

descreverPessoa(pessoas)
