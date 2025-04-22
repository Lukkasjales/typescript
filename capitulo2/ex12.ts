const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carlos", notas: [7, 7, 7] }
];

function verificarAprovacao(alunos) {
  let media = 0;
  for (let item of alunos) {
    for (let chave in item) {
      if (chave === "notas") {
        chave[0] + chave[1] + chave[2]
      }
    }
    console.log(`${item[nome]} - media: ${media} Situação: ${media >= 7 ? "aprovado" : "reprovado"}`)
    media = 0
  }
}

verificarAprovacao(alunos)