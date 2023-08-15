import { useState } from 'react'
import './Book-slider.css'
import Rating from './Rating'
import Model from '../Model/Model'
import cartContext from '../../context/Context'
import { useContext } from 'react'
import book1 from '../bookImages/images/beginning.jpg';
import book2 from '../bookImages/images/confess.jpg';
import book3 from '../bookImages/images/hopeless.jpg';
import book4 from '../bookImages/images/it-ends-with-us.jpg';
import book5 from '../bookImages/images/one-true-love.jpg';
import book6 from '../bookImages/images/the-trouble-with-hating-you.jpg';
import book7 from '../bookImages/images/never-split-the-difference.jpg';
import book8 from '../bookImages/images/think-and-grow-rich (1).jpg';
import book9 from '../bookImages/images/rich-dad-poor-dad.jpg';
import book10 from '../bookImages/images/the-trouble-with-hating-you.jpg';
const arr=[];

arr.push(book1,book2,book3,book4,book5,book6,book7,book8,book9,book10)
function Book_slider({data}){

    const [ShffleIndex,setShaffle]=useState(0)
    const [openModel,setOpenModel]=useState(false)
    const [bookData,setBook]=useState(null)
    const {addToCart}= useContext(cartContext)
    
    const handleShaffle=(direction)=>{
        if(direction==="left"){
            
            setShaffle(ShffleIndex!==0?ShffleIndex -1:0)
            
        }
        else{
            setShaffle(ShffleIndex!==data.length?ShffleIndex +1:0)
            
        }
    }
    const handelOpenModel=(item)=>{
        setOpenModel(true)
        setBook(item)
    }

return(
    <div className='book-slider-container'>
        <i onClick={()=>handleShaffle("left")} className='"bi bi-chevron-left book-slider-arrow-left'></i>
        <div className='book-slide-wraber' style={{transform:`translatex(${ShffleIndex *-150}px)`}}>
        {
                data.map((item,i)=>{
                 console.log(i)
                    return(
                        
                        <div key={item.id} className='book-slider-item'>
                        <div className='book-slide-image'>
                    
                            <img src={`${arr[i]}`} alt={item.title}/>
                        </div>
                        <h3 className='book-slide-title'>{item.title}</h3>
                        <Rating rating={item.rating} reviews={item.reviews}/> 
                        <div className='book-slide-price'>$ {item.price}</div>
                       
                        <div className='book-slide-icon-wraber'>
                        <i onClick={()=>{handelOpenModel(item)}} className="bi bi-eye-fill"></i>
                        <i  onClick={()=>addToCart({...item,quantity:1})} className="bi bi-cart-plus"></i>
                        </div>
                    </div>
                    )

                })
            }
        </div>
        
       <i onClick={()=>handleShaffle("right")} className='bi bi-chevron-right book-slider-arrow-right'></i>
        {openModel&& <Model setopenmodel={setOpenModel} bookData={bookData} />}
    </div>
)
}
export default Book_slider


