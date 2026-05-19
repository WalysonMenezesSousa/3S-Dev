const produtos = [
    {
        descricao : 'Camisa Polo',
        cor: 'Verde',
        preco : 79.90,
        perfil: 'M',
        quantidade: 10,
        promocao: true
    },
    {
        descricao : 'Camisa Canelada',
        cor: 'Branca',
        preco : 49.99,
        perfil: 'M',
        quantidade: 15,
        promocao: false
    },
    {
        descricao : 'Camisa T-shirt',
        cor: 'Rosa',
        preco : 99.99,
        perfil: 'F',
        quantidade: 5,
        promocao: true
    },
    {
        descricao : 'Camisa Canelada',
        cor: 'Preta',
        preco : 60.00,
        perfil: 'F',
        quantidade: 20,
        promocao: true
    },
    {
        descricao : 'Camisa Lisa',
        cor: 'Cinza',
        preco : 40.00,
        perfil: 'F',
        quantidade: 4,
        promocao: false
    },
    {
        descricao : 'Camisa Estampada',
        cor: 'Azul e Verde',
        preco : 60.00,
        perfil: 'F',
        quantidade: 70,
        promocao: false
    },
    {
        descricao : 'Camisa Estampada',
        cor: 'Preta e Branca',
        preco : 50.00,
        perfil: 'M',
        quantidade: 12,
        promocao: true
    },
    {
        descricao : 'Camisa Listrada',
        cor: 'Preta',
        preco : 60.00,
        perfil: 'F',
        quantidade: 50,
        promocao: false
    },
];

//Retorna todos as camisas do perfil feminino: "F"
// const camisasFemininas = produtos.filter((produto) => {
//     return produto.perfil == 'F';
// });

// console.log(camisasFemininas);

// const camisaBarata = produtos.filter((produtos) => {
//     return produtos.preco < 60;
// })

// console.log(camisaBarata);

let qtdPromocao = 0;
const camisaPromocao = produtos.filter((produtos) => {
    if (produtos.promocao == true) {
        qtdPromocao += produtos.quantidade;
    }
    return produtos.promocao == true;
});

console.log(camisaPromocao);
console.log(`Quantidade de camisas em promoção: ${qtdPromocao}`);