/**
 * Calculadora de combustível
 * @author Miqueias Rodrigues
 */
let distancia,consumoMedio,precoCombustivel,combustivelNecessario,custoTotal,resultado
function calcularCombustivel() {
    distancia = Number (document.getElementById('distancia').value)
    consumoMedio = Number (document.getElementById('consumoMedio').value)
    precoCombustivel = Number (document.getElementById('precoCombustivel').value)

    combustivelNecessario = (distancia / consumoMedio).toFixed(2);
    custoTotal = (combustivelNecessario * precoCombustivel).toFixed(2);

    resultado = "Serão necessários " + combustivelNecessario + " litros de combustível, com um custo total de R$" + custoTotal;
    document.getElementById('resultado').innerText = resultado;

}