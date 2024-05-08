/**
 * Calculadora de combustível
 * @author Miqueias Rodrigues
 */

function calcularCombustivel() {
    let distancia = (document.getElementById('distancia').value);
    let consumoMedio = (document.getElementById('consumoMedio').value);
    let precoCombustivel = (document.getElementById('precoCombustivel').value);

    let combustivelNecessario = (distancia / consumoMedio).toFixed(2);
    let custoTotal = (combustivelNecessario * precoCombustivel).toFixed(2);

    let resultado = "Serão necessários " + combustivelNecessario + " litros de combustível, com um custo total de R$" + custoTotal;
    document.getElementById('resultado').innerText = resultado;

}