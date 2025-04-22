var alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bruno", notas: [5, 6, 5] },
    { nome: "Carlos", notas: [7, 7, 7] }
];
function verificarAprovacao(alunos) {
    var media = 0;
    for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
        var item = alunos_1[_i];
        for (var chave in item) {
            if (chave === "notas") {
                chave[0] + chave[1] + chave[2];
            }
        }
        console.log("".concat(item[nome], " - media: ").concat(media, " Situa\u00E7\u00E3o: ").concat(media >= 7 ? "aprovado" : "reprovado"));
        media = 0;
    }
}
verificarAprovacao(alunos);
