import { Link } from "react-router-dom"
function HeaderTop({setToggle,toggle}){
return(
    <div className="header-top">
        <div onClick={()=>setToggle(prev => !prev)} className="header-top-menu">
            {toggle?<i className="bi bi-x"></i>:<i className="bi bi-list"></i> }
        
        </div>
    <div className="header-number">
        <i className="bi bi-telephone-fill"></i>
        123-456-678
        </div>
        <div className="header-title">
            welcome to online bookstore
        </div>
        <Link to="/login" className="header-sign">
        <i className="bi bi-person-fill"></i>
            login
        </Link>
   </div>
)
}
export default HeaderTop