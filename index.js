import prompt from "prompt-sync";

const msg = prompt()

function Teste() {
    let propriedade = msg('Propiedade no css:')
    let arr = []
    while (propriedade != 'saida') {
        arr.push(propriedade);
        propriedade = msg('Propriedade no css:')
    }
    let resultado = arr.sort()
console.log(arr.sort());
}
Teste()