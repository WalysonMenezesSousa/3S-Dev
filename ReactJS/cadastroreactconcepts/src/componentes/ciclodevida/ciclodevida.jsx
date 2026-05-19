import { useEffect, useState } from "react"
import "./ciclodevida.css"

export default function Ciclodevida() {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        //quando o componente é montado
        console.log("Componente MONTADO");

        return () =>{
            console.log("Componente DESMONTADO")
        }

    }, [])

    useEffect(() => {
        console.log("componente ATUALIZADO");
        console.log(`Valor do contador ${contador}`)
    }, [contador])


    return (
        <>
            <h1>Contador: {contador}</h1>
            <button onClick={() => {
                setContador(contador + 1)
            }}>contar</button>
        </>
    )
}