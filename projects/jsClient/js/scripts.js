import modulo from './modulo/modulo.js'

const ingredientes = ['água', 'mel', 'mostarda', 'cebola'];


const resultadoCapitalizado = modulo.nomeFuncao(ingredientes)
const resultadoordenado = modulo.nomeOrdenar(resultadoCapitalizado);
const nova = modulo.novaFunc(resultadoordenado)
console.log(resultadoCapitalizado)
console.log(resultadoordenado)
console.log(nova)