const numeros = [5, 10, 14, 10, 20, 25, 30];

const numeroEncontrado = numeros.filter((n) => {
    return n == 10;
});

    const nomes = [
    'Walyson',
    'Gabriel',
    'Maria',
    'Ana',
    'Daniel',
    'Davi',
    'Eloysa',
    'Hugo',
    'Paulo',
    'Diana',
    'João',
    'Lorenzo',];

    // pessoasLegais = nomes.filter((nome) => {
    // return nome.length <= 3 || nome.length == 6;
    // });

    // console.log(pessoasLegais);

    pessoasLegais = nomes.filter((nome) => {

        const primeiraLetra = nome.substring(0, 1);
        return primeiraLetra == 'W' || primeiraLetra == 'D';
    });

    console.log(pessoasLegais);