/**
 * JS - PDV
 * @author Miqueias Rodrigues
 */

function calcular() {
    let total = frmPVD.txtTotal.value
    let porcentagem = frmPVD.txtPorcentagem.value
    let desconto = total * (porcentagem / 100)
    let totalComDesconto = total - desconto
    frmPVD.txtDesconto.value = desconto
    frmPVD.txtTotalComDesconto.value = totalComDesconto
    
}

function calcularTroco() {
    let valorPago = frmPVD.txtValorPago.value
    let totalComDesconto = frmPVD.txtTotalComDesconto.value
    let troco = valorPago - totalComDesconto
    frmPVD.txtTroco.value = troco
   
}


