import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SEARCH_URL } from '../global'
import axios from 'axios'

export default function Search(){

    const [drink, setDrink] = useState(null)

    let {name} = useParams()


    useEffect(() => {
        let searchedCocktail = async () => {
            const response = await axios.get(SEARCH_URL+ name)
            console.log(response)
            setDrink(response.data.drinks[0])
        }
        searchedCocktail()
        },[name])

    return drink?(
        <div className='card-container'>
        <div className='home-card'>
            <div className='drink-card'>
                    <h3>{drink.strDrink}</h3>

                    <div className='img-ingredient-set'>
                        <img width={"200px"} height={"200px"} src={drink.strDrinkThumb} alt={drink.strDrink} />
                        <ul>
                            <p>Ingredients:</p>
                            <p>{drink.strIngredient1} {drink.strMeasure1}</p>
                            <p>{drink.strIngredient2} {drink.strMeasure2}</p>
                            <p>{drink.strIngredient3} {drink.strMeasure3}</p>
                            <p>{drink.strIngredient4} {drink.strMeasure4}</p>
                            <p>{drink.strIngredient5} {drink.strMeasure5}</p>
                            <p>{drink.strIngredient6} {drink.strMeasure6}</p>
                            <p>{drink.strIngredient7} {drink.strMeasure7}</p>
                        </ul>
                    </div>
                    <p className="directions">Directions: {drink.strInstructions}</p>
            </div>
        </div>
        </div>
    
    ): 
        <div> 
            you're cut off
        </div>
    
}

    
