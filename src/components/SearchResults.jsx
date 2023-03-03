import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { SEARCH_URL } from '../global'
import axios from 'axios'

export default function Search(){

    const [drink, setDrink] = useState(null)

    let {name} = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        let searchedCocktail = async () => {
            try {
              const response = await axios.get(SEARCH_URL+ name)
              setDrink(response.data.drinks[0])
            } catch (error) {
              navigate('/404?')
            }
        }
        searchedCocktail()
        },[name, navigate])

    return drink?(
        <div className='card-container'>
        <div className='home-card'>
            <div className='drink-card'>
                    <h3 id="welcome">{drink.strDrink}</h3>

                    <div className='img-ingredient-set'>
                        <img className="selected-drink-img" width={"200px"} height={"200px"} src={drink.strDrinkThumb} alt={drink.strDrink} />
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
     <p>Let me check the back..</p>
    </div>
}
