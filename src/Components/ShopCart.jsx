import { useEffect } from "react";
import Button from "./Button";

const ShopCart = () => {

    useEffect(() => {
        alert('Domain expansion');

          return () => {
            alert('Unlimited Void')
          }
    }, [])

    return ( 
        <section className="m-3">
          <h1>Usercart </h1>

          <div>
              <Button 
              text='Finish purchase'
              className='bg-blue-700 text-white font-semibold rounded-lg m-3 p-2'/>
            </div>
        </section>
     );
}
 
export default ShopCart;