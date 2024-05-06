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

// Chaves para AND

let sw1 = false
let sw2 = false

function simular(valor) {
    // Chaves do AND
    
    if (valor === 1 && sw1 === false) {
        document.getElementById("sw1")
        .src = "./img/swon.png"
        sw1 = true
    } else if (valor === 1 && sw1 === true) {
        document.getElementById("sw1")
        .src = "./img/swoff.png"
        sw1 = false
    }

    if (valor === 2 && sw2 === false) {
        document.getElementById("sw2")
        .src = "./img/swon.png"
        sw2 = true
    } else if (valor === 2 && sw2 === true) {
        document.getElementById("sw2")
        .src = "./img/swoff.png"
        sw2 = false
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

     //  AND 
     if (quebrada === false) {
        if (sw1 == true && sw2 == true) {
            document.getElementById("lamp")
            .src = "./img/on.jpg"
        } else {
            document.getElementById("lamp")
            .src = "./img/off.jpg"
        }
    }

}

