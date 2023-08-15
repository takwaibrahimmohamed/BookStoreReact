import './Card.css'

import { useContext } from 'react'
import cartContext from '../../context/Context'
function Card(){
    const {cartItem,addToCart,removeFromItem}=useContext(cartContext)
    
    const totalPrice=cartItem.reduce((acc,curr)=>acc+curr.price*curr.quantity,0)
    
return(
   <div className="card">
    <h2 className="cardHead">your shopping card</h2>
        <div className="card-content">
            <div className="card-wrapper">
                {
                    cartItem.map((item)=>{
                       
                        return(
                            <div className='card-item' key={item.id}>
                               
                                    <img className="card-wrapper-img" src={`/images/${item.image}`}/>
                               
                                <div className="cardinfo">
                                   <div>
                                   <p className="cardinfo-title"><span>title</span> :{item. title}</p>
                                    <p className="cardinfo-author"><span>author</span> :{item. author}</p>
                                   </div>
                                    <div className='cart-item-quantity'>
                                    <button onClick={()=>item.quantity >=1?addToCart({...item,quantity:+item.quantity -1}):removeFromItem(item.id)}>-</button>
                                    <span className="num">{item.quantity}</span>
                                    <button onClick={()=>addToCart({...item,quantity:+item.quantity +1})}>+</button>
                                     <div className="card-price">
                                       $ {(item.price * item.quantity).toFixed(2)}
                                       
                                        </div>
                                        <i onClick={()=>removeFromItem(item.id)} className="bi bi-trash-fill"></i>
                                </div>
                                </div>
                                

                            </div>
                            
                        )
                    })
                }
            </div>
            <div className="card-summery">
                <h5 className="order-summery-title">order summery</h5>
                <div className="order-summery-item">
                    <span>subtotal</span>
                    <span>$ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="order-summery-item">
                    <span>shopping cart</span>
                    <span>0</span>
                </div>
                <div className="order-summery-item">
                    <span>discount</span>
                    <span>0</span>
                </div>
                <div className="order-summery-item">
                    <span>total</span>
                    <span>$ {totalPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
   </div>
)
}
export default Card