/**
 *  APP - Flex
 *  @author Miqueias Rodrigues
 */

let etanol, gasolina

function calcFlex(etanol, gasolina) {
    etanol = Number(frmflex.txtEtanol.value)
    gasolina = Number(frmflex.txtGasolina.value)
    // console.log(etanol)
    // console.log(gasolina)

    if (etanol == 0 || gasolina == 0) {
        alert("Preencha todos os campos!")
        document.getElementById("status").src = "img/flex.png"
        return
    } 

    if (etanol < 0.7 * gasolina ) {
        document.getElementById("status").src = "img/etanol.png"

    } else {
        document.getElementById("status").src = "img/gasolina.png"
    }

}

function limpar() {
    document.getElementById("status").src = "img/flex.png"
}