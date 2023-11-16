import Hero from '../Components/Hero';
import GameSlide from '../Components/GameSlide'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';

const Home = () => {

   const { game } = useContext(AppContext);

   return (
      <section className='bg-black'>
         <header className="w-full">

         </header>

         <main>

            <Hero>

               <article className="welcome grid place-items-center">
                  <div className="text-center text-4xl py-4">
                     <h1 className="text-2xl ">Welcome to</h1>
                     <h2 className="text-5xl py-2 font-semibold ">GameArena</h2>
                  </div>
                  <div>
                     <h3 className='font-bold'>The no. 1 gaming store in the country</h3>
                  </div>

                  <button className='p-1 bg-white text-black font-bold'>
                     <Link to='/store'> Start shopping</Link>
                  </button>

                  <div>
                     <h1 className=''>Your favorite game is <br />
                        <span className='text-2xl font-bold py-2'> {game} </span></h1>

                     <button className='p-1 bg-white text-black font-bold'>
                        <Link to='/formpage'> Join the community </Link>
                     </button>

                  </div>

               </article>


            </Hero>
            <GameSlide />

         </main>
      </section>
   );
}

export default Home;