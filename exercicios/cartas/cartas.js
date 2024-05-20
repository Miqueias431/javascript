/**
 * Sorteio de uma Carta
 * @author Miquéias Rodrigues
 */

const { random } = require("colors")

function sortearCarta() {
    //           [0] [1] [2] [3]
    let nipes = ["♦","♥","♠","♣"]
    //           [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10] [11] [12]
    let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q", "K"]


    // Sorteio de indice dos vetores
    let nipe = nipes[Math.floor(Math.random() * 4)] //(0 - 3)
    let face = faces[Math.floor(Math.random() * 13)] //(0 - 12)
    // console.log(`${face}${nipe}`)

    // Determinar a cor com base no nipe sorteado antes de exibir a carta

    if (nipe === '♥' || nipe === '♦') {
        cor = '#ff0000' // Vermelho
    } else {
        cor = '#000000' // Preto
    }

    // Exibir a carta

    document.getElementById('supEsq').innerHTML = `<div> ${face}</div> <div>${nipe} </div>`
    document.getElementById('centro').innerHTML = `<div> ${nipe} </div>`
    document.getElementById('infDir').innerHTML = `<div> ${face}</div> <div>${nipe} </div>`

    // Aplicar a cor

    document.getElementById('supEsq').style.color = cor //Add css
    document.getElementById('centro').style.color = cor
    document.getElementById('infDir').style.color = cor

    // Add imagem quando aparecer Q, J, R.
}