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

let exe5 = () => {
    matriz = []
    meses = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO']
    leituraMatriz5(matriz, meses)
    resposta5A(matriz, meses)
    resposta5B(matriz)
    resposta5C(matriz)
}
    let leituraMatriz5 = (mat, mes) => {
        for(i = 0; i < 12; i++){
            mat[i] = []
            for(j = 0; j < 4; j++){
                mat[i][j] = Number(prompt(`Arrendamento em vendas na ${i+1}ª semana de ${mes[i]}.(R$)`)).toFixed(2)
            }
        }
    }
    let resposta5A = (mat, mes) => {
        let soma
        for(i = 0; i < 12; i++){
            soma = 0
            for(i = 0; i < 4; i++){
                soma += mat[i][j]
            }
            alert(`Total em vendas de ${mes[i]}: R$${soma.toFixed(2)}`)
        }
    }
    let resposta5B = (mat) => {
        let soma
        for(j = 0; j < 4; j++){
            soma = 0
            for(i = 0; i < 12; i++){
                soma += mat[i][j]
            }
            alert(`Total em vendas nas ${i}ªs semanas de cada mês: R$${soma.toFixed(2)}`)
        }
    }
    let resposta5C = (mat) => {
        let soma = 0
        for(i = 0; i < 12; i++){
            for(i = 0; i < 4; i++){
                soma += mat[i][j]
            }
        }
        alert(`Faturamento anual da loja: R$${soma.toFixed(2)}`)
    }

let exe6 = () => {
    matriz = []
    vetor = []
    leituraMatriz6(matriz)
    somaColunas(matriz, vetor)
    multiplicacaoMatriz(matriz, vetor)
}
let leituraMatriz6 = (mat) => {
    for(i = 0; i < 20; i++){
        mat[i] = [] 
        for(j = 0; j < 10; j++){
            mat[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1}`))
        }
    }
}
let somaColunas = (mat, vet) => {
    let soma
    for(j = 0; j < 10; j++){
        soma = 0
        for(i = 0; i < 20; i++){
            soma += mat[i][j]
        }
        vet[j] = soma
    }
}
let multiplicacaoMatriz = (mat, vet) => {
    for(i = 0; i < 20; i++){
        for(j = 0; j < 10; j++){
            mat[i][j] = mat[i][j] * vet[j]
        }
    }
    console.log(mat)
}

let exe7 = () => {
    M = []
    N = []
    leituraMatrizes(M, N)
    terceiraMatriz(M, N)
}
let leituraMatrizes = (m, n) => {
    alert('LEITURA DA MATRIZ M')
    for(i = 0; i < 4; i++){
        m[i] = []
        for(j = 0; j < 6; j++){
            m[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1} da matriz M`))
        }
    }
    alert('LEITURA DA MATRIZ N')
    for(i = 0; i < 6; i++){
        n[i] = []
        for(j = 0; j < 4; j++){
            n[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1} da matriz N`))
        }
    }
}

let exe8 = () => {
    mat1 = []
    mat2 = []
    leituraMatrizes2(mat1, mat2)
    matrizSoma(mat1, mat2)
    matrizSub(mat1, mat2)
}
let leituraMatrizes2 = (m, n) => {
    for(i=0; i<3; i++){
        m[i] = []
        for(j=0; j<8; j++){
            m[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1} da PRIMEIRA matriz`))
        }
    }
    for(i=0; i<3; i++){
        n[i] = []
        for(j=0; j<8; j++){
            n[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1} da SEGUNDA matriz`))
        }
    }
}
let matrizSoma = (m, n) => {
    matSoma = []
    for(i=0; i<3; i++){
        matSoma[i] = []
        for(j=0; j<8; j++){
            matSoma[i][j] = m[i][j] + n[i][j]
        }
    }
}
let matrizSub = (m, n) => {
    matSub = []
    for(i=0; i<3; i++){
        matSub[i] = []
        for(j=0; j<8; j++){
            matSub[i][j] = m[i][j] - n[i][j]
        }
    }
}

let exe9 = () => {
    matriz = []
    leituraMatriz9(matriz)
    matrizMult(matriz)
}
let leituraMatriz9 = (mat) => {
    for(i=0; i<3; i++){
        mat[i] = []
        for(j=0; j<3; j++){
            mat[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1}`)).toFixed(1)
        }
    }
}
let matrizMult = (mat) => {
    valor = Number(prompt('Insira o número que multiplicará a matriz'))
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            mat[i][j] = mat[i][j] * valor
        }
    }
    console.log(mat)
}

let exe10 = () => {
    matriz = []
    leituraMatriz10(matriz)
    exA(matriz)
    exB(matriz)
    exC(matriz)
    exD(matriz)
    exE(matriz)
}
let leituraMatriz10 = (mat) => {
    for(i=0; i<5; i++){
        mat[i] = []
        for(j=0; j<5; j++){
            mat[i][j] = Number(prompt(`Insira o elemento na posição ${i+1}x${j+1}`))
        }
    }
}
let exA = (mat) => {
    let somaA = 0
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            if(i == 4){
                somaA += mat[i][j]
            }
        }
    }
    console.log(`a) ${somaA}`)
}
let exB = (mat) => {
    let somaB = 0
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            if(j == 2){
                somaB += mat[i][j]
            }
        }
    }
    console.log(`b) ${somaB}`)
}
let exC = (mat) => {
    let somaC = 0
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            if(i == j){
                somaC += mat[i][j]
            }
        }
    }
    console.log(`c) ${somaC}`)
}
let exD = (mat) => {
    let somaD = 0
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            if(j == 4 - i){
                somaD += mat[i][j]
            }
        }
    }
    console.log(`d) ${somaD}`)
}
let exE = (mat) => {
    let somaE = 0
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            somaE += mat[i][j]
        }
    }
    console.log(`a) ${somaE}`)
}
