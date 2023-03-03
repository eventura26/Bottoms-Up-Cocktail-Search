import { Link } from "react-router-dom"
import { useState} from "react"
import { useNavigate } from "react-router-dom"

export default function Nav() {
    const [searchValue, setSearchValue] = useState("null")
    let navigate = useNavigate()
    
    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    
    const searchCocktail = () => {
        navigate(`/searchresults/${searchValue}`)
    }

    return(
        <div className="header">
            <Link className="title-link"to="/"><h1 className="title">Bottoms Up!</h1></Link>
        <div className="nav-bar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/cocktails">Cocktail List</Link>
            <div className="btn-div">
                <form onSubmit={searchCocktail}>
                <input onChange={handleChange} id="search-bar" type="text" placeholder="Let me have a..."/>
                <input id="search-btn" type="submit" value="search" />
                </form>
            </div>
        </div>
        </div>

    )

}