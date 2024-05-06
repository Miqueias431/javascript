// Se o aluno tiver uma média acima ou igual a 7,
// então estará APROVADO. Senão se a média
// for abaixo ou igual a 4, estão estará REPROVADO
// caso contrário, estará em RECUPERAÇÃO

function calcFlex() {
    let txtnota = frmflex.txtnota.value
    let media = txtnota / 2
    if (media >= 7) {
        document.getElementById('status').src = 'img/aprovado.png'
    } else if (media <= 4) {
        document.getElementById('status').src = 'img/reprovado.png'
    } else {
        document.getElementById('status').src = 'img/recuperacao.png'
    }
}