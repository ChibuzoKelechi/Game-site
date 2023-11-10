import Button from "./Button";
import { useState } from "react";

/* eslint-disable react/prop-types */
const ProductCard = ({name, price, stock, gadgetType, img}) => {

    const [cartNumber, setcartNumber] = useState(0);
    const buttonTest = () => {
        setcartNumber(cartNumber + 1);
    }
 
    return ( 
        <article className="py-3 px-6 w-1/3 m-1 my-14 hover:shadow-2xl rounded-xl">

         <div className="card-img "> 
            <img src={img} alt="productitem" className="w-full h-48 object-contain"/>
         </div>

         <div>
            <h1 className="font-bold text-2xl">{name}</h1>  
            <h5 className="text-sm text-neutral-500 inline rounded-md font-bold">{gadgetType}</h5>
            <h3 className="font-semibold text-2xl">₦{price}</h3>
            {stock < 10 && <h4 className="text-md "> <span className="font-bold text-xl text-red-700">{stock} units left</span></h4>}
            
         </div>

        <div className="flex justify-between">
         <Button
            text='Add to basket'
            className='bg-blue-800 hover:scale-110 hover:bg-blue-900 text-white font-semibold rounded-lg p-2 my-2'
            onclick={buttonTest}
            />
          <h1 className="h-10 my-2 bg-blue-800 text-white font-semibold rounded-xl p-2 px-3">
            {cartNumber}</h1>
        </div>
        </article>
     );
}

export default ProductCard;