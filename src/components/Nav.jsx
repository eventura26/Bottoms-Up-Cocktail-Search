import { Link } from "react-router-dom"
import { useState} from "react"
import { useNavigate } from "react-router-dom"



export default function Nav() {
    let search = ''
    const [searchValue, setSearchValue] = useState("null")
    // const [cocktail, setCocktail] = useState(null)
    let navigate = useNavigate()
    
    const handleChange = (e) => {
        search+= e.target.value
        setSearchValue(search)
    }
    
    const searchCocktail = () => {
        search = searchValue
        console.log(search)
        console.log(searchValue)
        // const response = await axios.get(SEARCH_URL + search)
        // setCocktail(response.data.drinks[0])
        // console.log(cocktail.strDrink);
        navigate(`/searchresults/${search}`)
    }
    


    return(
        <div className="header">
            <Link className="title-link"to="/"><h1 className="title">Drink Up!</h1></Link>
        <div className="nav-bar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/cocktails">Cocktail List</Link>
            <div className="btn-div">
                <input onChange={handleChange} id="search-bar" type="text" placeholder="Let me have a..."/>
                <input onClick={() => {searchCocktail(); }} id="search-btn" type="button" value="search" />
            </div>
        </div>
        </div>

    )

}