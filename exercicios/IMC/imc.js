/**
 * Calco de IMC
 * @author Miquéias Rodrigues
 */

function calcularIMC() {

    let altura = document.getElementById("cAltura").value
    let peso = document.getElementById("cPeso").value
    let imc = peso / (altura * altura)
    document.getElementById("resultado").innerHTML = `<h3> Seu IMC é:  ${imc.toFixed(2)}</h3>`
}