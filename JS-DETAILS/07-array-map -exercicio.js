const numero = [
    50,
    200,
    250,
    800,
    992.87,
    800,
    500,
    9876,
    67,
    134
];
console.log(`Array original:  ${numero.join(' | ')} `);

//Rodar o map gerando um novo array com o dobro dos números do array original
const dobroNumeros = numero.map((num) => {
    return num * 2;
});
//após, exiba o valores do array dobro no console utilizando o foreach

console.log();//pular linha

console.log(`Array com o dobro dos números:`);

let textoResultado = '';
dobroNumeros.forEach((num) => {
    textoResultado += `${num} |`;//acumula os números em uma string (sem pular linha)
});
console.log(textoResultado);//mostra o texto completo

textoResultado = textoResultado.substring(0, textoResultado.length - 2);
console.log(textoResultado);//exibe o resultado final sem o último " | "
