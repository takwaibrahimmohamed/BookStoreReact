import { useParams } from "react-router-dom"
import {books} from '../../data/books'
import Rating from "../../component/book-slider/Rating"
import './Book.css'
import { useContext, useState } from "react"
import cartContext from "../../context/Context"
function Book(){
    const {id} = useParams()
    const bootdate= books.find((b)=>b.id===+id)
   const {addToCart}= useContext(cartContext)
  const [qty,setQty]=useState(1)
    return(
      <div className="book">
        <div className="book-content">
            <img src={`/images/${bootdate.image}`} alt={bootdate.title} className="book-content-img"/>
            <div className='bookdata-info'>
           <h3 className='bookdata-title'>{bootdate.title}</h3>
           <p className='bookdataAuther'>by <span>{bootdate.author}</span>(Auther)</p>
            <Rating rating={bootdate.rating} reviews={bootdate.reviews}/>
          
            
            <div className='bookdata-add-inp'>
            <input
             type='number'
              min={1} 
              max={100}
              onChange={(e)=>setQty(e.target.value)}
              />
            <button onClick={()=>addToCart({...bootdate,quantity:qty})} className='bookdata-add-tocard'>add to card</button>
            
           </div>
           </div>
        </div>
        <p className="book-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        molestiae corporis facere minima consequuntur, blanditiis voluptatem
        praesentium possimus odit, aliquam temporibus nulla! Delectus quas totam
        nihil est reiciendis sunt. Ex. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. A veritatis vitae hic corrupti voluptas dignissimos
        consequatur doloribus laborum adipisci quo voluptates dolorum cumque
        tempora expedita possimus, ab quae tenetur fugit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Laudantium fugit illo porro
        perspiciatis fuga doloremque placeat assumenda labore! Harum numquam
        voluptate eveniet libero debitis consequuntur nostrum reiciendis
        officiis delectus rem.
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{bootdate.printLength}pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <b>{bootdate.language}</b>
        </div>
        <div className="book-icon">
          <small>Publication date</small>
          <i className="bi bi-calendar3"></i>
          <b>{bootdate.PublicationDate}</b>
        </div>
      </div>
      </div>
    )
    }
    export default Book