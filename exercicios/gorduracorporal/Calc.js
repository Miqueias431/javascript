document.getElementById('body-fat-form').addEventListener('submit', function(event) {
    event.preventDefault()

    const idade = parseInt(document.getElementById('idade').value)
    const genero = document.getElementById('genero').value
    const altura = parseFloat(document.getElementById('altura').value)
    const pescoco = parseFloat(document.getElementById('pescoco').value)
    const cintura = parseFloat(document.getElementById('cintura').value)
    const quadril = parseFloat(document.getElementById('quadril').value)

    let bodyFat

    if (isNaN(idade) || isNaN(altura) || isNaN(pescoco) || isNaN(cintura) || (genero === 'mulher' && isNaN(quadril))) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    if (genero === 'homem') {
        bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(cintura - pescoco) + 0.15456 * Math.log10(altura)) - 450
    } else if (genero === 'mulher') {
        bodyFat = Math.round ((163.205 * (Math.log (cintura * 1 + quadril * 1 - pescoco * 1) / Math.log(10)) - 97.684 * (Math.log (altura) /Math.log(10)) - 104.912 *1 ) * 100) / 100
    }

    document.getElementById('resultado').innerText = `Percentual de Gordura Corporal: ${bodyFat.toFixed(2)}%`
});

document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('idade').value = ''
    document.getElementById('genero').value = 'homem'
    document.getElementById('altura').value = ''
    document.getElementById('pescoco').value = ''
    document.getElementById('cintura').value = ''
    document.getElementById('quadril').value = ''
    document.getElementById('resultado').innerText = ''
    togglequadrilField()
})

document.getElementById('gender').addEventListener('change', togglequadrilField);

function togglequadrilField() {
    const genero = document.getElementById('genero').value
    const quadrilgroup = document.getElementById('quadril-grupo')

    if (genero === 'mulher') {
        quadrilgroup.style.display = 'block'
    } else {
        quadrilgroup.style.display = 'none'
        document.getElementById('quadril').value = ''
    }
}

togglequadrilField()
