function checarPalindromo(palavra){
    let tamanho = palavra.length;
    let idx = 0
    for (let i = tamanho-1; i > 0; i--){
        if (palavra[i] != palavra[idx]){
            return false
        }
        idx++
    }
    // Outra solução:
    // let comeco = 0
    // let fim = tamanho-1
    // while (comeco < tamanho/2 && fim > tamanho/2){
    //     if (palavra[fim] != palavra[comeco]){
    //         return false
    //     }
    //     fim--;
    //     comeco++
    // }
    return true
}

console.log(checarPalindromo('ada'));
console.log(checarPalindromo('aia'));
console.log(checarPalindromo('ala'));
console.log(checarPalindromo('ama'));
console.log(checarPalindromo('ana'));
console.log(checarPalindromo('anilina'));
console.log(checarPalindromo('arara'));
console.log(checarPalindromo('asa'));
console.log(checarPalindromo('ata'));
console.log(checarPalindromo('ele'));
console.log(checarPalindromo('esse'));
console.log(checarPalindromo('hanah'));
console.log(checarPalindromo('mamam'));
console.log(checarPalindromo('matam'));
console.log(checarPalindromo('metem'));
console.log(checarPalindromo('mirim'));
console.log(checarPalindromo('mussum'));
console.log(checarPalindromo('natan'));
console.log(checarPalindromo('oco'));
console.log(checarPalindromo('omissíssimo'));
console.log(checarPalindromo('osso'));
console.log(checarPalindromo('otto'));
console.log(checarPalindromo('ovo'));
console.log(checarPalindromo('racificar'));
console.log(checarPalindromo('radar'));
console.log(checarPalindromo('raiar'));
console.log(checarPalindromo('ralar'));
console.log(checarPalindromo('ramar'));
console.log(checarPalindromo('rapar'));
console.log(checarPalindromo('rasar'));
console.log(checarPalindromo('reger'));
console.log(checarPalindromo('reler'));
console.log(checarPalindromo('renner'));
console.log(checarPalindromo('reter'));
console.log(checarPalindromo('rever'));
console.log(checarPalindromo('reviver'));
console.log(checarPalindromo('rir'));
console.log(checarPalindromo('rodador'));
console.log(checarPalindromo('sacas'));
console.log(checarPalindromo('saias'));
console.log(checarPalindromo('salas'));
console.log(checarPalindromo('socos'));
console.log(checarPalindromo('sopapos'));
console.log(checarPalindromo('sós'));
