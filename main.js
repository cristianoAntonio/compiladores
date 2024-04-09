const Gramatica = require("./Gramatica")

const entrada = "./entrada.txt"

const gramatica = new Gramatica(entrada)
console.log(gramatica.getEntrada())
console.log(gramatica.getTokens())
console.log(gramatica.getGRs())
console.log(gramatica.getAlfabeto())
console.log(gramatica.getProducoes())