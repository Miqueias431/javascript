/**
 * JS - Simulador de operadores lógicos
 * @author Miquéias Rodrigues
 */
// valor recebido
// 1 = acender lampada
// 2 = apagar lampada
// 3 = quebrar lampada
let valor

//estado da lampada
let quebrada = false

function simular(valor) {
    // chaves
    
    if (valor === 1) {
        document.getElementById("lamp")
        .src = "./img/on.jpg"
    } else if (valor === 2) {
        document.getElementById("lamp")
        .src = "./img/off.jpg"
    }
    // quebrar a lampada
    if (valor === 3) {
        let beep = new Audio()
        beep.src = "./sound/glassbreaking.wav"
        beep.play() 
        document.getElementById("lamp")
        .src = "./img/broken.jpg" 
        quebrada = true
    }
}

