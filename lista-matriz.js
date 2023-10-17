let exe_1 = () => {
    let matriz = []
    leituraMatriz1(matriz)
    resposta1(matriz)
}

    let leituraMatriz1 = (mat) =>{
        for(i=0;i<15;i++){
            mat[i] = []
            for(j=0;j<5;j++){
                mat[i][j] = Number(prompt(`Valor do elemento [${i+1}][${j+1}]`))
            }
        }
    }

    let resposta1 = (mat) => {
        let cont = 0
        for(i = 0; i < 3; i++){
            for(j = 0; j < 5; j++){
                if(mat[i][j] >= 15 && mat[i][j] <= 20){
                    cont++
                }
            }
        }
        alert('Quantidade de nros entre 15 e 20:\n' + cont)
    }

let exe2 = () => {
    let matriz = []
    leituraMatriz2(matriz)
    resposta2(matriz)
}

    let leituraMatriz2 = (mat) => {
        for(i = 0; i < 2; i++){
            mat[i] = []
            for(j = 0; j < 4; j++){
                mat[i][j] = Number(prompt(`Valor do elemento [${i+1}][${j+1}]`))
            }
        }
    }

    let resposta2 = (mat) => {
        let cont0 = 0
        let cont1 = 0
        let contPares = 0
        let somaPares = 0
        for(i = 0; i < 3; i++){
            for(j = 0; j < 5; j++){
                if(mat[0][j] >= 12 && mat[i][j] <= 20){
                    cont0++
                }
                if(mat[1][j] >= 12 && mat[i][j] <= 20){
                    cont1++
                }
                if(mat[i][j] % 2 == 0){
                    contPares++
                    somaPares += mat[i][j]
                }
            }
        }
        alert(`a) Numeros entre 12 e 20\nPrimeira linha:${cont0}\nSegunda linha: ${cont1}\n\nb) Média dos nros pares\n${somaPares/contPares}`)
    }

let exe3 = () => {
    let matriz = []
    leituraMatriz3(matriz)
    resposta3(matriz)
}
    let leituraMatriz3 = (mat) => {
        for(i = 0; i < 6; i++){
            mat[i] = []
            for(j = 0; j < 3; j++){
                mat[i][j] = Number(prompt(`Valor do elemento [${i+1}][${j+1}]`))
            }
        }
    }

    let resposta3 = (mat) => {
        let maiorElemento = mat[0][0]
        let maiorI = 0
        let maiorJ = 0
        let menorElemento = mat[0][0]
        let menorI = 0
        let menorJ = 0 
        
        for(i = 0; i < 6; i++){
            for(j = 0; j < 3; j++){
                if(mat[i][j] > maiorElemento){
                    maiorElemento = mat[i][j]
                    maiorI = i
                    maiorJ = j
                }
                if(mat[i][j] < menorElemento){
                    menorElemento = mat[i][j]
                    menorI = i
                    menorJ = j
                }
            }
        }
        alert(`a) O maior elemento é o nro ${maiorElemento} na posição [${maiorI + 1}][${maiorJ + 1}]\n\nb) O menor elemento é o nro ${menorElemento} na posição [${menorI + 1}][${menorJ + 1}]`)
    }

let exe4 = () => {
    let matriz = []
    let nomes = []
    leituraMatriz4(matriz, nomes)
    resposta4(matriz, nomes)
}
    let leituraMatriz4 = (mat, vet) => {
        for(i = 0; i < 15; i++){
            vet[i] = prompt(`Insira o nome do aluno ${i + 1}`).toUpperCase()
            mat[i] = []
            for(j = 0; j < 5; j++){
                mat[i][j] = Number(prompt(`Nota do(a) ${vet[i]} na prova ${j + 1}`))
            }
        }
    }

    let resposta4 = (mat, vet) => {
        let soma
        let somaTotal = 0
        let medias = []
        let sit = []
        for(i = 0; i < 15; i++){
            soma = 0
            for(j = 0; j < 5; j++){
                soma += mat[i][j]
                somaTotal += mat[i][j]
            }
            medias[i] = soma / 5
            if(medias[i] >= 6){
                sit[i] = 'APROVADO(A))'
            }
            else{
                sit[i] = 'REPROVADO(A)'
            }
        }
        for(i = 0; i < 15; i++){
            alert(`NOME: ${vet[i]}\nMÉDIA: ${medias[i]}\nSITUAÇÃO: ${sit[i]}`)
        }
        alert(`A MÉDIA DA TURMA  FOI ${somaTotal / 75}`)
    }
