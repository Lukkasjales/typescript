const pessoa = {
    nome: "Maria",
    idade: 21,
    curso: "Análise e Desenvolvimento de Sistemas"
};

for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
