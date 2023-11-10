import gadgets  from "../DataFiles/Products";
import ProductCard from "../Components/Card";

const StorePage = () => {
   
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
         <article></article>
           <article className="flex flex-wrap justify-evenly">
             {productItems}
           </article>
        </section>
     );
}
 
export default StorePage;