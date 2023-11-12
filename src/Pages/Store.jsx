import gadgets from "../DataFiles/Products";
import ProductCard from "../Components/Card";
import ShopCart from "../Components/ShopCart";
import GameCard from "../Components/GameApiCard";
import { useState } from "react";

const StorePage = () => {
  const [cart, setCart] = useState('');


  const showCart = () => {
    setCart(!cart);
  }

  const productItems = gadgets.map(gadget => {
    return <ProductCard
      key={gadget.id}
      name={gadget.item}
      gadgetType={gadget.category}
      {...gadget}
    />
  })

  return (
    <section>
      <article>
        <GameCard/>
      </article>

      {/* <article className="w-full cart mt-72">
        <button onClick={showCart}
          className="font-bold text-xl m-2 w-24 bg-black text-white rounded-lg mx-auto">
          Hide Cart
        </button>
        
           {cart && <ShopCart />}
      </article>


      <article>
        <h1 className="font-bold text-3xl p-2 text-center">Laptops</h1>
      </article>

      <article className="flex flex-wrap justify-evenly">
        {productItems}
      </article> */}

    </section>
  );
}

export default StorePage;