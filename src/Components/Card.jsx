import Button from "./Button";

/* eslint-disable react/prop-types */
const ProductCard = ({name, price, gadgetType, img, description}) => {

    return ( 
        <article className="py-3 lg:w-1/2 flex  m-1 md:m-0 my-10 rounded-xl">

         <div className="card-img "> 
            <img src={img} alt="productitem" className="w-64 max-h-72 rounded-xl m-1"/>
         </div>

         <div className="px-6">
            <div className="flex flex-col justify-between h-4/6">
               <h1 className="font-bold text-2xl">{name}</h1>  
               <h5 className="text-sm text-neutral-500 inline rounded-md font-bold">{gadgetType}</h5>
               <h3 className="font-semibold text-2xl">₦{price}</h3>
               <h4 className="text-sm">{description}</h4>
               {/* {stock < 10 && <h4 className="text-md "> <span className="font-bold text-xl text-red-700">{stock} units left</span></h4>} */}
               
            </div>

           <div className="flex justify-between">
            <Button
               text='Add to basket'
               className='bg-blue-800 hover:scale-110 hover:bg-blue-900 text-white font-semibold rounded-lg p-2 my-2'
             />
         
         </div>
         </div>

        
        </article>
     );
}

export default ProductCard;