import { useState } from "react";
import "./cadfruta.css";

function CadFruta() {
    // states, variável e funções

    //state do formulário
    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Abacaxi", quantidade: 10 },
        { id: 2, nome: "Mamão", quantidade: 2 }
    ])

    function Cadastrar(e){
        e.preventDefault();//evita o submit do formulário
        setArrFrutas([
            ...arrFrutas,
             { id: Date.now(), nome: fruta, quantidade: quantidade }
            ]);

        limparFormulario()

        return false;
        //mover a função de cadastrar aqui para dentro !!!
    }


    function limparFormulario(){
        setFruta("")
        setQuantidade(0)
    }

    return (
        <section className="sessao-cadastro">
            <h1>Cadastro</h1>
            <form action="" method="post" onSubmit={Cadastrar}>
            <fieldset className="cadastro">
                <label htmlFor="fruta" className="cadastro_rotulo"></label>
                <label htmlFor="quantidade" className="cadastro_rotulo"></label> <br />
                <input
                    type="text"
                    id="fruta"
                    placeholder="Digite uma Fruta"
                    className="cadastro_entrada"
                    onChange={(e) => {
                        setFruta(e.target.value)
                    }}
                /> <br />
                <input 
                    type="text"
                    id="quantidade"
                    placeholder="Digite a quantidade"
                    className="cadastro_entrada"
                    onChange={(e) => {
                        setQuantidade(e.target.value)
                    }} /> <br />
                <button
                    className="cadastro__btn-cadastrar"
                    // onClick={() => {//esta função só roda após o click do botão
                    //     return setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }])

                    // }}
                >Cadastrar</button>
                <br />
                <label htmlFor="">{fruta}</label> <br />
                <label htmlFor="">{quantidade}</label>
            </fieldset>
            </form>

            <ul className="listagem">
                {arrFrutas.map((f) => {
                    return <li key={f.id}>Fruta {f.nome} | Quantidade {f.quantidade} </li>
                })}
            </ul>
        </section>
    );
}

export default CadFruta;