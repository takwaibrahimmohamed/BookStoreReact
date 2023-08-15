import { Link } from "react-router-dom"

function Navbar({toggle,setToggle}){
    return(
        <nav style={{left:toggle&&"0"}} className="navbar">
            <ul className="navbar-links">
                <Link to="/" onClick={()=>setToggle(false)} className="navbar-link">Home</Link>
                <Link to="/authers" onClick={()=>setToggle(false)} className="navbar-link">authers</Link>
                <Link to="/about" onClick={()=>setToggle(false)} className="navbar-link">about us</Link>
                <Link to="/contact" onClick={()=>setToggle(false)} className="navbar-link">contact us</Link>
                <Link to ="/regester" onClick={()=>setToggle(false)} className="navbar-link">regester</Link>
            </ul>
        </nav>
    )
}
export default Navbar