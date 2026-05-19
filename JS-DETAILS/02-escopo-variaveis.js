const nome = 'Walyson';

let sobrenome = 'Sousa';

{
    const nome = 'Walyson';
    let sobrenome = "Menezes";
    console.log(`Nome completo: ${nome} ${sobrenome}`);
}
sobrenome = 600.67;
sobrenome = true;
 
console.log(`Nome completo: ${nome} ${sobrenome}`);

const nomes = ['Walyson', 'Gabriel', 'Maria'];
for (let i = 0; i < nomes.length; i++) {
    console.log(`Nome ${i}: ${nomes[i]}`);
}   

