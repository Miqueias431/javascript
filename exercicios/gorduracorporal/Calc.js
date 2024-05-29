let idade, genero, altura, pescoco, cintura, quadril, quadrilGroup

document.getElementById('body-fat-form').addEventListener('submit', function(event) {
    event.preventDefault()

    idade = parseInt(document.getElementById('idade').value)
    genero = document.getElementById('genero').value
    altura = parseFloat(document.getElementById('altura').value)
    pescoco = parseFloat(document.getElementById('pescoco').value)
    cintura = parseFloat(document.getElementById('cintura').value)
    quadril = parseFloat(document.getElementById('quadril').value)

    let bodyFat

    if (isNaN(idade) || isNaN(altura) || isNaN(pescoco) || isNaN(cintura) || (genero === 'female' && isNaN(quadril))) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.'
        return
    }

    if (genero === 'homem') {
        bodyFat = 86.010 * Math.log10(cintura - pescoco) - 70.041 * Math.log10(altura) + 36.76
    } else if (genero === 'mulher') {
        bodyFat = 163.205 * Math.log10(cintura + quadril - pescoco) - 70.041 * Math.log10(altura) - 78.387
    }

    document.getElementById('resultado').innerText = `Percentual de Gordura Corporal: ${bodyFat.toFixed(2)}%`
});

document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('idade').value = ''
    document.getElementById('genero').value = 'male'
    document.getElementById('altura').value = ''
    document.getElementById('pescoco').value = ''
    document.getElementById('cintura').value = ''
    document.getElementById('quadril').value = ''
    document.getElementById('resultado').innerText = ''
    togglequadrilField()
})

document.getElementById('genero').addEventListener('change', togglequadrilField)

function togglequadrilField() {
    genero = document.getElementById('genero').value
    quadrilGroup = document.getElementById('quadril-grupo')

    if (genero === 'mulher') {
        quadrilGroup.style.display = 'block'
    } else {
        quadrilGroup.style.display = 'none'
        document.getElementById('quadril').value = ''
    }
}

togglequadrilField()
