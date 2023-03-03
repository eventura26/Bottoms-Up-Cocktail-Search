import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ID_URL } from '../global'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function FilteredCocktails() {
    
    const [drink, setDrink] = useState(null)

    let {id} = useParams()

    useEffect(() => {
        let selectedCocktail = async () => {
            const response = await axios.get(ID_URL+(id))
            setDrink(response.data.drinks[0])
        }
        selectedCocktail()
        },[id])
    

    return drink? (
        <div className='card-container'>        
        <div className='home-card'>
        <Link id="back-link" to="/cocktails">Go Back</Link>

            <div className='drink-card' id="list-drink-selection">
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
    ) : <div className='loading'>
        working on that drink for ya..
    </div>
}