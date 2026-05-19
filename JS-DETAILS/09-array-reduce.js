const estoque = [
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

let totalEstoque = estoque.reduce((total, produto) => {
    return total + produto.quantidade;
}, 0)

//console.log(`Total de produtos no estoque: ${totalEstoque}`);

let valorTotalEstoque = estoque.reduce((total, produto) => {
    return total + (produto.preco * produto.quantidade);
}, 0)

//console.log(`Valor total do estoque: R$ ${valorTotalEstoque.toFixed(2)}`);

console.log(`Você tem um total de ${totalEstoque} de produtos no estoque, com um valor total de R$ ${valorTotalEstoque.toFixed(2)}.`);