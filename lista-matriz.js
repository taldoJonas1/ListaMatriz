let exe01 = () => {
    let matriz = []
    let i
    leituraMatriz(matriz)
    resposta(matriz)
}

let leituraMatriz = (mat) => {
    for(i = 0; i < 3; i++){
        mat[i] = []
        for(i = 0; i < 5; i++){
            mat[i][j] =  Math.floor(Math.random() * (100 - 1 + 1)) + 1
        }
    }
}
