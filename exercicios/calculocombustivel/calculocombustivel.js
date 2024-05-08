/**
 * Calculadora de combustível
 * @author Miqueias Rodrigues
 */
let distancia
let consumoMedio
let precoCombustivel
let combustivelNecessario
let custoTotal
let resultado
function calcularCombustivel() {
    distancia = document.getElementById('distancia').value
    consumoMedio = document.getElementById('consumoMedio').value
    precoCombustivel = document.getElementById('precoCombustivel').value

    combustivelNecessario = (distancia / consumoMedio).toFixed(2);
    custoTotal = (combustivelNecessario * precoCombustivel).toFixed(2);

    resultado = "Serão necessários " + combustivelNecessario + " litros de combustível, com um custo total de R$" + custoTotal;
    document.getElementById('resultado').innerText = resultado;

}