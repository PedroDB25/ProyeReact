import { useEffect, useState } from 'react';
import './App.css'

function Boton({ valor, botonAPantalla }) {
  return (
    <div className='boton' onClick={() => botonAPantalla(valor)}>
      <p className='tecla'>{valor}</p>
    </div>
  )
}
function Pokedex() {
  const [teclado, setTecla] = useState("1")
  const [imagen, setImagen] = useState("")

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${teclado}`)
      .then((response) => response.json())
      .then((poke) => {setImagen(poke.sprites.front_default)});
  }, [teclado]);

  const botonAPantalla = (valor: string) => {

    if (teclado.length < 3) {
      setTecla(teclado + valor)
    } else {
      setTecla(valor)
    }
  }
  return (
    <div className="marco">
      <div className="pantalla">
        <div>{teclado}</div>
        <img src={imagen} alt="" />
      </div>
      <div className="botones">
        <Boton botonAPantalla={botonAPantalla} valor="1" />
        <Boton botonAPantalla={botonAPantalla} valor="2" />
        <Boton botonAPantalla={botonAPantalla} valor="3" />
        <Boton botonAPantalla={botonAPantalla} valor="0" />
        <Boton botonAPantalla={botonAPantalla} valor="4" />
        <Boton botonAPantalla={botonAPantalla} valor="5" />
        <Boton botonAPantalla={botonAPantalla} valor="6" />
        <Boton botonAPantalla={botonAPantalla} valor="←" />
        <Boton botonAPantalla={botonAPantalla} valor="7" />
        <Boton botonAPantalla={botonAPantalla} valor="8" />
        <Boton botonAPantalla={botonAPantalla} valor="9" />
        <Boton botonAPantalla={botonAPantalla} valor="✓" />
      </div>
    </div>
  )
}
function App() {


  return (<><Pokedex /></>);
}
export default App
