import Foto from "../assets/img/404 Not Found.png"

const NotFound = ()=> {

    return (
      <>
        <div className="notFound">
            <h1>¡Lo sentimos!</h1>
            <p>No pudimos encontrar el pokémon que elegiste</p>
            <img src={Foto}  width={500} alt="Pikachu sorprendido" />
        </div>
      </>
    )
  }
  
  export default NotFound