import { useState } from 'react';
import book1 from '../bookImages/book1.png';
import book2 from '../bookImages/book2.png';
import book3 from '../bookImages/book3.png';
import './slide.css'
function Slider(){
    const [slideIndex,setSlideIndex]=useState(0);
    const slideShuffle = (direction)=>{
      
      
        if(direction=== "left"){
            setSlideIndex(slideIndex>0?slideIndex -1:2)
        }
        else{
            setSlideIndex(slideIndex<2 ?slideIndex + 1:0)
        }
    }
    return(
        <div className="container">
           
            <div style={{transform:`translatex(${slideIndex * -100 }vw)`}} className="slider-wrraber">
                <div className="slide first-slide">
                    <div className="slide-image">
                      <img src={book1} alt=''/>
                    </div>
                    <div className='book-info'>
                        <h1 className='book-info-title'>book store1</h1>
                        <p className='book-info-dusc'>it is not just reading ,it is living the advanture</p>
                    </div>
                </div>
                <div className="slide second-slide">
                    <div className="slide-image">
                      <img src={book2} alt=''/>
                    </div>
                    <div className='book-info'>
                        <h1 className='book-info-title'>book store2</h1>
                        <p className='book-info-dusc'>it is not just reading ,it is living the advanture</p>
                    </div>
                </div>
                <div className="slide third-slide">
                    <div className="slide-image">
                      <img src={book3} alt=''/>
                    </div>
                    <div className='book-info'>
                        <h1 className='book-info-title'>book store3</h1>
                        <p className='book-info-dusc'>it is not just reading ,it is living the advanture</p>
                    </div>
                </div>
            </div>
            <i onClick={()=>slideShuffle("left")} className='bi bi-chevron-double-left arrow-left'></i>
          <i onClick={()=>slideShuffle("right")} className="bi bi-chevron-double-right arrow-right"></i>
            
        </div>
    )
}
export default Slider