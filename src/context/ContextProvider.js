import cartContext from "./Context";
import { Provider, useState } from "react";
function CartProvider({children}){
const [cartItem,setCartItem]=useState([])



const addToCart=(item)=>{
   
    const isExist=cartItem.find(cart=>cart.id  === item.id)
   
    if(isExist){
        setCartItem(cartItem.map((cartit)=>cartit.id===item.id ? item : cartit))
       
       
    }
    else{
        setCartItem(prev=>[...prev,item])
    }


}
const removeFromItem=(id)=>{
  const carts=  cartItem.filter((e)=>e.id!==id)
  setCartItem(carts)
}
const x=cartItem.reduce((quntity,item)=>+item.quantity+quntity,0)
console.log((x))
return(
    <cartContext.Provider value={
       { cartItem,
        addToCart,
        removeFromItem,
        cartItemlength:x
    }
    }>
        {children}
    </cartContext.Provider>
)
}
export default CartProvider