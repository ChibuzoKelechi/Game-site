import Hero from '../Components/Hero';
import GameSlide from '../Components/GameSlide'
import { Link } from 'react-router-dom';

const Home = () => {


    return ( 
        <section className='bg-black'>
         <header className="w-full">
            
         </header>

         <main>
           
           <button className='p-1 bg-white text-black'>
            <Link to='/store'> Start shopping</Link>
           </button>
           <Hero>
            <article className="welcome grid place-items-center">
               <div className="text-center text-4xl py-4">
                  <h1 className="text-2xl ">Welcome to</h1>
                  <h2 className="text-5xl py-2 font-semibold ">GameArena</h2>
               </div>
               <div>
                  <h3 className='font-bold'>The no. 1 gaming store in the country</h3>
               </div>
               </article>
           </Hero>
           <GameSlide/>
           {/* <StorePage/> */}

         </main>
        </section>
     );
}
 
export default Home;