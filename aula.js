primeiroJogo = {
    nome: 'League of Legends',
    valor: 10.00
}

segundoJogo = {
    nome: 'PUBG',
    valor: 70.00
}

listaJogos = [primeiroJogo, segundoJogo]

for (let indice = 0; indice < listaJogos.length; indice++) {
    console.log(listaJogos[indice].nome)
}   

let total=0;
for (let indice = 0; indice < listaJogos.length; indice ++){
    total += (listaJogos[indice].valor)
}
console.log(`soma total = ${total}`)
console.log(`valor ${listaJogos[0].nome} = ${listaJogos[0].valor}`)

teste