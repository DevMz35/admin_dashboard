

function capitalizar(vetor){
    let modificado = [];
    for(let i = 0; i < vetor.length; i++){
        const modificar = vetor[i].charAt(0).toUpperCase();
        const capitalize = vetor[i].slice(1);
        const resultado = modificar + capitalize;
        modificado.push(resultado)
    }
    return modificado;
}

function ordernar(vetor){
    return vetor.sort((a,b)=>{
        return a.localeCompare(b)
    })
}

function funcaoCapit(vetor){
    let modificado =[]
    for(let i = 0; i< vetor.length; i++){
        modificado = vetor[i].toUpperCase()
    }
}

export default {
      nomeFuncao: capitalizar,
      nomeOrdenar: ordernar,
      novaFunc: funcaoCapit
}