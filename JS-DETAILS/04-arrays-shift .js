let frutasVermelhas = [];

frutasVermelhas.push('Morango');
frutasVermelhas.push('Cereja');
frutasVermelhas.push('Framboesa');
frutasVermelhas.push('Amora');

console.log(frutasVermelhas);

let frutaRemovidaInicio = frutasVermelhas.shift(); // remove o primeiro elemento do array
console.log(`${frutaRemovidaInicio} foi removida do início do array.`); // Exibe o elemento removido
console.log(frutasVermelhas); // Exibe o array atualizado
