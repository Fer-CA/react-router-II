import Foto from "../assets/img/pikachu.png"

const Home = ()=> {
    
    return (
      <>
        <div className="notFound">
            <h1>Bienvenido maestro pokémon</h1>
            <img src={Foto} width={600} alt="Pikachu" />
        </div>
      </>
    )
  }
  
  export default Home