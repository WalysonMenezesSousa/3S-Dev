import { useEffect, useState } from "react"
import './produtospage.css'

export const Produtos = () => {
    // Estado para a lista vinda da API
    const [listaproduto, setListaProduto] = useState([])

    // Estados do formulário (Corrigido de useEffect para useState)
    const [produtos, setProduto] = useState("")
    const [preco, setPreco] = useState("")
    const [descricao, setDescricao] = useState("")
    const [imagem, setImagem] = useState("")

    // Busca os dados ao carregar a página
    useEffect(() => {
        getDados()
    }, [])
    
    const getDados = async () => {
        try {
            // Adicionado await aqui
            const retornoAPI = await fetch("http://localhost:3000/produtos")
            const dados = await retornoAPI.json()
            setListaProduto(dados);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }
    // Função única para cadastrar
    const handleCadastrar = async (e) => {
        e.preventDefault()

        // Validação básica
        if (produtos.trim() === "" || descricao.trim() === "" || isNaN(preco) || preco <= 0) {
            alert("Preencha todos os campos corretamente");
            return;
        }

        const objProduto = {
            produtos: produtos,
            descricao: descricao,
            preco: parseFloat(preco),
            imagem: imagem
        }

        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos", {
                method: "POST",
                body: JSON.stringify(objProduto),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })

            if (retornoAPI.ok) {
                const dadosRetornado = await retornoAPI.json()
                
                // Atualiza a lista na tela com o que voltou da API
                setListaProduto([...listaproduto, dadosRetornado])
                
                // Limpa os campos
                limparFormulario()
                alert("Produto cadastrado com sucesso!")
            }
        } catch (error) {
            console.error("Erro ao cadastrar:", error)
        }
    }

    function limparFormulario() {
        setProduto("")
        setDescricao("")
        setImagem("")
        setPreco("")
    }

    const deletar = async (id) =>{
                const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`, {
                method: "delete",
            })

            getDados();
    }

    return (
        <section className="sessao-cadastro">
            <h1 className="Titulo">Produtos</h1>

            <div className="formulario">
                <form onSubmit={handleCadastrar}>
                    <fieldset className="cadastro">
                        <input
                            type="text"
                            placeholder="Digite o nome do produto"
                            className="cadastro_entrada"
                            value={produtos}
                            onChange={(e) => setProduto(e.target.value)}
                        />

                        <input
                            type="number"
                            step="0.01"
                            placeholder="Digite o preço do produto"
                            className="cadastro_entrada"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Coloque a URL da imagem"
                            className="cadastro_entrada"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Coloque a descrição do produto"
                            className="cadastro_entrada"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />

                        <button type="submit" className="cadastro_cadastrar">
                            Cadastrar
                        </button>
                    </fieldset>
                </form>
            </div>

            <ul className="listagem">
                {listaproduto.map((p) => (
                    // Use p.id como chave (id vem do JSON server)
                    <article key={p.id} className="produtos">
                        <img src={p.imagem} alt={p.produtos} className="imagem_produto" />
                        <p><strong>Produto:</strong> {p.produtos}</p>
                        <p><strong>Preço:</strong> R$ {p.preco}</p>
                        <p><strong>Descrição:</strong> {p.descricao}</p>

                        <a href= "" onClick={(e) => {
                            e.preventDefault()
                            deletar(p.id)
                        }}>apagar</a>
                    </article>
                ))}
            </ul>
        </section>
    )
}