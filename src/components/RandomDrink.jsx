import axios from "axios";
import { useState } from "react";
import { RANDOM_URL } from "../global";

export default function RandomDrink(){

  const [randomDrink, setRandomDrink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getThisGuyADrinkAlready = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(RANDOM_URL);
      setRandomDrink(response.data.drinks[0]);
      console.log(response)
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <p>Coming right up..</p>;
  }

  if (error) {
    return <p>Sorry, there was an error: {error.message}</p>;
  }
  return(
    <>
    <button className="random-btn" onClick={getThisGuyADrinkAlready}>just give me a drink</button>
    {randomDrink && (
        <div className="drink-card">
          <h3 id="welcome">{randomDrink.strDrink}</h3>
          <div className="img-ingredient-set">
            <img className="selected-drink-img" width={"200px"} height={"200px"} src={randomDrink.strDrinkThumb} alt={randomDrink.strDrink} />
            <ul>
              <p>Ingredients:</p>
              <p>{randomDrink.strIngredient1} {randomDrink.strMeasure1}</p>
              <p>{randomDrink.strIngredient2} {randomDrink.strMeasure2}</p>
              <p>{randomDrink.strIngredient3} {randomDrink.strMeasure3}</p>
              <p>{randomDrink.strIngredient4} {randomDrink.strMeasure4}</p>
              <p>{randomDrink.strIngredient5} {randomDrink.strMeasure5}</p>
              <p>{randomDrink.strIngredient6} {randomDrink.strMeasure6}</p>
              <p>{randomDrink.strIngredient7} {randomDrink.strMeasure7}</p>
            </ul>
          </div>         
          <p className="directions">Directions: {randomDrink.strInstructions}</p>
        </div>
        
      )}
      </>
  )
}