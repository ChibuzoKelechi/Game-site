import gadgets from "../DataFiles/Products";
import ProductCard from "../Components/Card";
import { useContext, useState } from "react";
import { AppContext } from "../App";


const StorePage = () => {

  const { setGame } = useContext(AppContext);
  const [newGame, setNewGame] = useState('');

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
    <section className="text-white bg-black store py-10">

      <article className="gadgets">
        <h1 className="font-bold text-3xl p-2 text-center">
          Gaming gadgets
        </h1>

        <article className="flex flex-wrap">
          {productItems}
        </article>

        <div>
          <input type="text"
            className="rounded-xs m-2 p-1 text-black border-none "
            placeholder="Fave Game?"
            onChange={((event) => {
              setNewGame(event.target.value)
            })
            }
          />

          <button className='p-1 bg-white text-black font-bold'
            onClick={() => setGame(newGame)}>
            Change game
          </button>
        </div>

      </article>

    </section>
  );
}

export default StorePage;