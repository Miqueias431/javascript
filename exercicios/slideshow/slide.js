/**
 * Simples Slide Show
 * Exemplo de uso de array
 * @author Miquéias Rodrigues
 */

let slides = ["slide1.jpg","slide2.jpg","slide3.jpg"]
let intervalo = 6000 // 3000 milisegundos (3s)
// 3000 ajuste para 3 slides trocando a cada 1s
let indice = 0

show()

function show() {
    document.getElementById('slide').className += 'FadeOut'
    setTimeout(()=>{
        document.getElementById('slide').src = (`./img/${slides[indice]}`)
        document.getElementById('slide').className = ''
    }, 1000) // Ajuste 1: Trocar slide a cada 1s
    indice++
    if(indice === slides.length) {
        indice = 0
    }
    setTimeout(show, intervalo) // repetir o processo ifinitamente
    // Ajustar o intervalo de acordo com número de slides e tempo
    // de troca entre eles. Ex: 5 slides a das 1s (intervalo = 5000)
    // (ajuste2)

}
