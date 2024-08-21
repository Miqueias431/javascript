/**
 * Exemplo de uso da biblioteca(pacote) jspdf
 * @author Miqueias Rodrigues
 */

const { jsPDF } = require('jspdf')
// Gerar um documento(arquivo) PDF
const pdf = new jsPDF()
pdf.text("Olá PDF!", 15, 15) //15, 15 (margem em px x/y)
pdf.save('arquivo.pdf') // Nome do arquivo salvo no local