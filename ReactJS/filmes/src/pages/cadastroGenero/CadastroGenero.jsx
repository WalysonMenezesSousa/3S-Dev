import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import "./CadastroGenero.css"
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import api from "../../Services/services"
import Lista from "../../components/lista/Lista"
import { Alerta } from "../../components/alerta/Alerta"
import Swall from "sweetalert2";

const CadastroGenero = () => {
    // states e variáveis
    const [valor, setValor] = useState("");
    const [idEditar, setIdEditar] = useState("");
    const [editar, setEditar] = useState(false)
    const [listaGeneros, setListaGeneros] = useState([])

    // Busca os gêneros cadastrados na API
    const buscarGeneros = async () => {
        try {
            const retornoAPI = await api.get("/api/Genero")
            setListaGeneros(retornoAPI.data)
        } catch (error) {
            console.log("Erro ao buscar os gêneros:", error)
        }
    }

    // ciclo de vida e funções
    const cadastrarGenero = async (e) => {
        e.preventDefault()
        if (valor.trim().length == 0) {
            Alerta({
                title: "Cadastro de Gênero",
                text: "Gênero deve ser preenchido antes de cadastrar",
                icon: "warning",
            });
            console.log(retornoAlerta)
            return false
        }

        const objCadastro = {
            Nome: valor
        }

        try {
            const retornoAPI = await api.post("/api/Genero", objCadastro)

            if (retornoAPI.status === 201) {
                Alerta({
                    title: "Good job!",
                    text: `Gênero ${objCadastro.Nome} cadastrado com sucesso`,
                    icon: "success"
                })
                limparFormulario()
                buscarGeneros()
            } else {
                alert("Houve algum problema ao cadastrar!!")
            }
        } catch (error) {
            alert("Erro na chamada da API")
        }

        return false
    }

    const limparFormulario = () => {
        setValor("")
        setIdEditar("")
        setEditar(false)
    }

    const preEditar = (item) => {
        // Pega o ID de forma segura idependente da capitalização
        const id = item.idGenero || item.IdGenero || item.id;
        const nome = item.nome || item.Nome;

        setIdEditar(id);
        setValor(nome);
        setEditar(true);
        console.log("Modo edição ativado para:", item)
    }

    const cancelarPreEditar = () => {
        limparFormulario()
    }

    // FUNÇÃO CORRIGIDA COM ALERTAS E VERIFICAÇÃO DE ID
    const excluirGenero = async (item) => {

        const result = await Swall.fire({
            title: "TEM CERTEZA",
            text: `você ira excluir o gênero ${item.nome}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#33d630ff",
            cancelButtonColor: "#d33",
            confirmButtonText: "SIM, excluir"
        })
        if (!result.isConfirmed) {
            return false
        }

        // Garante que vai pegar o ID mesmo se houver variação de maiúscula/minúscula
        const idParaExcluir = item.idGenero || item.IdGenero || item.id;

        try {
            const retornoAPI = await api.delete(`/api/Genero/${idParaExcluir}`)

            // Verifica se retornou Sucesso (200) ou No Content (204)
            if (retornoAPI.status === 200 || retornoAPI.status === 204) {
                buscarGeneros() // Atualiza a tabela na tela
            } else {
                alert(`A API respondeu com status ${retornoAPI.status}, mas não concluiu a exclusão.`)
            }
        } catch (error) {
            console.error("Erro detalhado da exclusão:", error)
            alert("Erro ao excluir gênero! Abra o console (F12) para ver os detalhes técnicos.")
        }
    }

    const editarGenero = async (e) => {
        e.preventDefault()

        if (valor.trim().length === 0) {
            alert("Gênero deve ser preenchido antes de salvar!!")
            return false
        }

        const objEditar = {
            idGenero: idEditar,
            nome: valor
        }

        try {
            const retornoAPI = await api.put(`/api/Genero/${idEditar}`, objEditar)

            if (retornoAPI.status === 200 || retornoAPI.status === 204) {
                limparFormulario()
                buscarGeneros()
            } else {
                alert("Algum problema aconteceu ao editar")
            }
        } catch (error) {
            console.log(error)
            alert("Erro na chamada da api")
        }

        return false
    }

    useEffect(() => {
        buscarGeneros()
    }, [])

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro={editar ? "Edição de Gêneros" : "Cadastro de Gêneros"}
                    visibilidade="none"
                    placeholder="gênero"
                    valor={valor}
                    setEditar={setEditar}
                    setValor={setValor}
                    funcCadastro={editar ? editarGenero : cadastrarGenero}
                    btnEditar={editar}
                    cancelarEdicao={limparFormulario}
                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"
                    lista={listaGeneros}
                    tipoLista="genero"
                    setEditar={setEditar}
                    setValor={setValor}
                    funcExcluir={excluirGenero}
                    funcEditar={preEditar}
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroGenero