import './model.css'
import Rating from '../book-slider/Rating'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import cartContext from '../../context/Context'
function Model({setopenmodel,bookData}){
    const {addToCart}= useContext(cartContext)
    const [qty,setQty]=useState(1)
return(
    <div className='model-container' onClick={()=>setopenmodel(false)}>
       
        <div className='model-content' onClick={(event)=>event.stopPropagation()}>
        <i className='bi bi-x-circle-fill modal-icon' onClick={()=>setopenmodel(false)}></i>
           <div className='model-image'>
            <img src={`images/${bookData.image}`}/>
           </div>
           <div className='model-info'>
           <h3 className='model-title'>{bookData.title}</h3>
           <b className='model-status'><span>status</span> :{bookData.inStock?'inStock':'not inStock'}</b>
            <Rating rating={bookData.rating} reviews={bookData.reviews}/>
            <p className='modelAuther'><span className="spanAuther">Auther</span> : <span>{bookData.author}</span></p>
            <div className='model-price'><span className="spanPrice">price</span> : <span>$ {bookData.price}</span></div>
            <div className='model-add-inp'>
            <input type='number' min={1} max={100} onChange={(e)=>setQty(e.target.value)}/>
            <button onClick={()=>addToCart({...bookData,quantity:qty})} className='model-add-tocard'>add to card</button>
            <div className='seeMoreInfo'>
                <Link to={'/book/'+bookData.id} className='seeMoreInfoButton'>see more info</Link>
            </div>
           </div>
           </div>
           
        </div>
    </div>
)
}
export default Model