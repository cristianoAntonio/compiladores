const fs = require("fs")
class Gramatica{
    alfabeto = new Set()
    estados = new Set()
    transicoes = {}
    estadoInicial = ''
    estadosFinais = new Set()

    transformaGR(){
        const grDesejada = []

        this.GRs.forEach(regra => {
            let fechar = false
            const partes = regra.split(' ::= ')
            const estadoAtual = partes[0].substring(1, 2)
            const producoes = partes[1].split(' | ')
            if(producoes.includes('ε')){
                producoes.pop()
                fechar = true
            }
            console.log(`estadoAtual: ${producoes}`)

            const producoesFormatadas = producoes.map(producao => {
                const terminal = producao[0]
                const naoTerminal = producao.substring(2, 3)

                return { terminal, naoTerminal }
            })

            grDesejada.push({
                estadoAtual,
                fechamento: fechar,
                producoes: producoesFormatadas
            })
        })

        return grDesejada
    }

    criaTransicao(){
        
    }

    constructor(caminho){
        this.entrada = fs.readFileSync(caminho, "utf8")
        this.listaEntrada = this.entrada.split("\n")
        this.tokens = this.listaEntrada.filter((i)=>{
            return i[0]!="<"
        })
        this.GRs = this.listaEntrada.filter((i)=>{
            return i[0]=="<"
        })
        this.producoes = this.transformaGR()
        this.tokens.forEach((item)=>{
            for(let i=0; i<item.length; i++){
                this.alfabeto.add(item[i])
            }
        })
        this.producoes.forEach((item)=>{
            for(let i=0; i<item.producoes.length; i++){
                this.alfabeto.add(item.producoes[i].terminal)

            }
        })
    }

    getEntrada(){
        return this.listaEntrada
    }
    getTokens(){
        return this.tokens
    }
    getGRs(){
        return this.GRs
    }
    getAlfabeto(){
        return this.alfabeto
    }
    getProducoes(){
        return this.producoes
    }
    getTransicoes(){

    }
}
module.exports = Gramatica