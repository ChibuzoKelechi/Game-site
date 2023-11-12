import gadgets from "../DataFiles/Products";
import ProductCard from "../Components/Card";
// import ShopCart from "../Components/ShopCart";
import GameCard from "../Components/GameApiCard";
// import { useState } from "react";

const StorePage = () => {

  const productItems = gadgets.map(gadget => {
    return <ProductCard
      key={gadget.id}
      name={gadget.item}
      gadgetType={gadget.category}
      description={gadget.spec}
      {...gadget}
    />
  })

  return (
    <section className="text-white">
      <article>
        <GameCard/>
      </article>

      {/* <article className="w-full cart mt-72">
        <button onClick={showCart}
          className="font-bold text-xl m-2 w-24 bg-black text-white rounded-lg mx-auto">
          Hide Cart
        </button>
        
           {cart && <ShopCart />}
      </article> */}


      <article className="mt-3 gadgets">
        <h1 className="font-bold text-3xl p-2 text-center">
          Gaming gadgets</h1>
        
        <article className="flex flex-wrap">
        {productItems}
        </article>
      </article>

    </section>
  );
}

export default StorePage;