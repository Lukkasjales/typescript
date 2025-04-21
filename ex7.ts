type Livro = {
    titulo: string,
    autor: string,
    paginas: number,
}

const livro: Livro = {
    titulo: "A longa viagem a um pequeno planeta hostil",
    autor: "Becky Chambers",
    paginas: 355,
}

console.log(`Autor: ${livro.autor}, Título: ${livro.titulo}, Páginas: ${livro.paginas} `)

