import './App.css'


function App() {
  return (

    <nav class="mae">
        <a href="#" className="mae__filho">Home</a>
        <a href="#" className="mae__filho">Quem Somos</a>
        <a href="#" className="mae__filho">Contato</a>
        <a href="#" className="mae__filho mae__filho--success">Entrar</a>
        <a href="#" className="mae__filho mae__filho--button-default">Cadastrar</a>

       
        <div className="card-perfil">
            <img
            className="card-perfil__img" 
            src="./imgs/perfil tritste.jpg" 
            alt="Foto de perfil"
            />
        </div> 

    </nav>


  );
}

export default App;