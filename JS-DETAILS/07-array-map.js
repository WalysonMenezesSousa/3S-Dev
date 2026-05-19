const hobbies = [
    'Correr',
    'Nadar',
    'Jogar Bola',
    'Viajar',
    'Lutar',
    'Conersar Muito',
    'Ler Livros',
    'Malhar na academia',
    'Maratonar séries',
    'Dormir',
    'Jogar Basquete'
];

const novosHobbies = hobbies.map((hob) => {
    return `<p>${hob}</p>`
});

console.log(novosHobbies);