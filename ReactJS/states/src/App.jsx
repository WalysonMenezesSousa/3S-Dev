import { useState } from "react"
import Contador from "./componentes/contator/contador"
import CadFruta from "./componentes/cadFruta/cadfruta"
import Ciclodevida from "./componentes/ciclodevida/ciclodevida"

function App () {
  // objeto privado
  const[mostrar, setMostrar] = useState(true)

  const[nome, setNome] = useState("Google")
  
  function trocartexto() {
    setNome("Microsoft")
  }

  function fuiAbandonado() {
    setNome("Fui abandonado")
  }
  
  return(
    <>
    
    {/* <h1>{nome} Page</h1>
    <button onClick={trocartexto}>Mudar Nome</button>
    <button onClick={() => {
      return setNome("Yahoo")
    }}> Mudar Nome</button> */}
  
    
    {/* <br /> */}
    
    {/* evento - evento disparado: change
    target - elemento que disparou o evento: input
    value - valor do input: texto digitado */}

    {/*<input type="text" onblur={fuiAbandonado}
     onChange={(evento) => setNome(evento.target.value)} />}



    {/*<Contador />
      <br /><br />
      <p>lorem ipsum <strong>{nome}</strong></p>*/}
     {/* /* <CadFruta /> */}
     <button onClick={() => {setMostrar(!mostrar)}}>Mostrar/Ocultar</button>
      { mostrar && <Ciclodevida />}
    </>


  )
}

export default App