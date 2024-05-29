document.getElementById('body-fat-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const height = parseFloat(document.getElementById('height').value);
    const neck = parseFloat(document.getElementById('neck').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hip = parseFloat(document.getElementById('hip').value);

    let bodyFat;

    if (isNaN(age) || isNaN(height) || isNaN(neck) || isNaN(waist) || (gender === 'female' && isNaN(hip))) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    if (gender === 'male') {
        bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450
    } else if (gender === 'female') {
        bodyFat = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
    }

    document.getElementById('result').innerText = `Percentual de Gordura Corporal: ${bodyFat.toFixed(2)}%`;
});

document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('age').value = '';
    document.getElementById('gender').value = 'male';
    document.getElementById('height').value = '';
    document.getElementById('neck').value = '';
    document.getElementById('waist').value = '';
    document.getElementById('hip').value = '';
    document.getElementById('result').innerText = '';
    toggleHipField();
});

document.getElementById('gender').addEventListener('change', toggleHipField);

function toggleHipField() {
    const gender = document.getElementById('gender').value;
    const hipGroup = document.getElementById('hip-group');

    if (gender === 'female') {
        hipGroup.style.display = 'block';
    } else {
        hipGroup.style.display = 'none';
        document.getElementById('hip').value = ''; // Clear the hip value when hiding the field
    }
}

// Initialize the form with the correct fields displayed
toggleHipField();
