type Produto = {
    id: number,
    nome: string,
    emEstoque: boolean,
}

const produtos: Produto[] = [
    {
        id: 1,
        nome: "Bolacha",
        emEstoque: true,
    },
    {
        id: 2,
        nome: "Faca",
        emEstoque: false,
    },
    {
        id: 3,
        nome: "Tábua",
        emEstoque: true,
    },
]

function filtrarProdutosDisponiveis(array) {
    array.forEach(item => {
        if (item.emEstoque) console.log(item.nome)
    })
}

filtrarProdutosDisponiveis(produtos)

