let funcao_principal = () => {
let matriz = []
leitura_matriz(matriz)
imprimirmatriz(matriz)
soma(matriz)
soma2(matriz)
}

let leitura_matriz = (matriz) =>{
    for(i=0;i<4;i++){
        matriz[i] = [] // tem q colocar esse bagulho aq na declaração, diferente do portugol. Cria espaço para cada vetor da matriz
        for(j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Valor matriz[${i}][${j}]`))
        }
    }
}

let imprimirmatriz = (matriz) => {
    console.log(matriz)
}

let soma = (matriz) => {
    let soma = 0
    for(i=0;i<4;i++){
    soma = soma + matriz[i][i]
    }
    console.log(soma)
}

let soma2 = (matriz) => {
    let soma2 = 0
    for(i=0;i<4;i++){
        soma = soma + matriz[i][3-i]
    }
    console.log(soma2)
}
