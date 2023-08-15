import { useContext } from "react"
import { Link } from "react-router-dom"
import cartContext from "../../context/Context"

function HeaderMeddle(){
    const {cartItemlength}=useContext(cartContext)
return(
    <div className="header-middle">
    <Link to="/" className="book">
        <p>book</p>
        <p><i className="bi bi-book"></i></p>
        <p>store</p>
    </Link>
    <div className="inputBox">
        <input placeholder="Search In Book Store" type="search"/>
        
        <i className="bi bi-search"></i>
       
    </div>
    <Link to="/card" className="shopping-card">
         <i className="bi bi-cart-plus"></i>
         <div className="cart-num">{cartItemlength}</div>
    </Link>
</div>
)
}
export default HeaderMeddle