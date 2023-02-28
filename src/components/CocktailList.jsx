import { useNavigate } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"
import { GIN_URL, VODKA_URL, TEQUILA_URL, RUM_URL, BOURBON_URL, SCOTCH_URL, BRANDY_URL, COGNAC_URL } from "../global"

export default function CocktailList() {
    
    const [cocktails, setCocktails] = useState()
    let navigate = useNavigate()

    useEffect(() => {
        const getCocktails = async () =>{
            const response = await axios.get(GIN_URL)
            console.log(response.data.drinks)
            setCocktails(response.data.drinks)
        }
        getCocktails()

    } ,[])

    const getCocktailsBySpirit = async (url) => {
        const response = await axios.get(url)
        console.log(response.data.drinks)
        setCocktails(response.data.drinks)
    }

    const showCocktail = (id) => {
        navigate(`${id}`)
    }
    
    return cocktails ?(
    
    <div className="list-container-wrap">
        <div className="list-container">
            <p>cocktail lists by spirit below</p>
            <div className="btns-row-one">
                <button className="spirit-btns" onClick={() => getCocktailsBySpirit(GIN_URL)}>gin</button>
                <button className="spirit-btns" onClick={() => getCocktailsBySpirit(VODKA_URL)}>vodka</button>
                <button className="spirit-btns" onClick={() => getCocktailsBySpirit(RUM_URL)}>rum</button>
                <button className="spirit-btns" onClick={() => getCocktailsBySpirit(TEQUILA_URL)}>tequila</button>
            </div>
            <div className="btns-row-two">
                <button className="spirit-btns" onClick={() => getCocktailsBySpirit(BOURBON_URL)}>bourbon</button>
                <button className="spirit-btns" onClick={() => getCocktailsBySpirit(SCOTCH_URL)}>scotch</button>
                <button className="spirit-btns" onClick={() => getCocktailsBySpirit(BRANDY_URL)}>brandy</button>
                <button className="spirit-btns" onClick={() => getCocktailsBySpirit(COGNAC_URL)}>cognac</button>
            </div>
            <div className="list-card">
            {cocktails.map((cocktail, id) =>(
                <div className="list-item"  onClick={() => showCocktail(cocktail.idDrink)} key={id}>
                    <h4>{cocktail.strDrink}</h4>
                    <img src={cocktail.strDrinkThumb} width={"200px"} alt={cocktail.strDrink} />
                </div>
             ))} 
             </div>       
        </div>
    </div>    
    ): <div>
        loading..
    </div>
}