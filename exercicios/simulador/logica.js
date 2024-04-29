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

