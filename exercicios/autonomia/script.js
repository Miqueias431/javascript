/**
 * Calculadora da autonomia de um carro
 * @author Miquéias Rodrigues
 */

let capacity,fuelEfficiency,autonomy

document.getElementById('autonomy-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    tankCapacity = parseFloat(document.getElementById('tank-capacity').value);
    fuelEfficiency = parseFloat(document.getElementById('fuel-efficiency').value);
    
    if (isNaN(tankCapacity) || isNaN(fuelEfficiency) || tankCapacity <= 0 || fuelEfficiency <= 0) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    autonomy = tankCapacity * fuelEfficiency;
    document.getElementById('result').innerText = `Autonomia: ${autonomy.toFixed(2)} km`;
});

document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('tank-capacity').value = '';
    document.getElementById('fuel-efficiency').value = '';
    document.getElementById('result').innerText = '';
});
