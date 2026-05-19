import './App.css'
import Paragrafo from "./components/paragrafo/paragrafo"
import Title from "./components/paragrafo/title/title"
function App() {
  return (
    <div>
      <Title texto="Bem vindo, sou Título" />
      <Title texto="Eu, sou outro título" />
      <Paragrafo textoParagrafo = "lorem ipsum" />
    </div>
  );
}

export default App
