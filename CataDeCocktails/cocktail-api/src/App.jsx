import { useEffect, useState } from 'react'
import './App.css'


function MarcoCocktails() {

  const [drink, setDrink] = useState(null)
  const [otra, setOtra] = useState(true)


  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((drink) => { console.log(drink.drinks[0]); setDrink(drink.drinks[0]) });
  }, [otra]);

  return (
    <div className='marco'>
      <div className='cartaDeCocktail'>
        <div>
          <img src={drink?.strDrinkThumb} alt="" />
          <button>Otro aleatorio</button>
        </div>
        <div className='recetario'>
          <p>{drink?.strDrink}-{drink?.strCategory}</p>
          <p>{drink?.strGlass}</p>
        </div>
      </div>
      <div className='libro'>
        <div className="ingredientes">
          <p>Ingredientes</p>
          {function () {
            let Ingredient = []
            for (let i = 0; i < 15; i++) {
              if (drink != null)
                Ingredient.push(<p>{(drink["strIngredient" + i] != null) ? `Ing.${i}:${drink["strIngredient" + i]}-${drink["strMeasure" + i]}` : ''}</p>)
            }
            return Ingredient
          }()
          } </div>
        <div className="preparacion">
          <p>Instrucciones</p>
          <p>{drink?.strInstructions}</p>
        </div>
      </div>
    </div>
  )

}




function App() {
  return (
    <>
      <MarcoCocktails />
    </>
  )
}

export default App
