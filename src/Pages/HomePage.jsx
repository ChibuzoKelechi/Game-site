import Hero from '../Components/Hero';
import GameSlide from '../Components/GameSlide'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';
import logos from '/apex-platform-logos.svg'

const Home = () => {

   const { game } = useContext(AppContext);

   return (
      <section className='bg-black'>
         <header className="w-full">

         </header>

         <main>

            <Hero>

               <article className="hero welcome grid place-items-center">
                  <div className="text-center text-4xl py-4">
                     <h1 className="text-2xl font-bold">Welcome to</h1>
                     <h2 className="text-6xl py-2 font-semibold ">GameArena</h2>
                     <h3 className='font-bold text-lg tracking-wider'>The no. 1 gaming store/site</h3>
                     <img src={logos} alt="platform logos" className='w-1/3 mx-auto mt-7' />
                  </div>

               </article>


            </Hero>

            <article className='middle text-white grid place-items-center'>


               <div className='grid '>
                  <h2 className='text-3xl font-bold my-3 p-3'>Meet your fellow gamers</h2>
                  <button className='p-1 bg-white text-red-900 text-xl tracking-wide font-bold'>
                     <Link to='/formpage'> Join the {game} community </Link>
                  </button>

               </div>
            </article>

            <GameSlide />

         </main>
      </section>
   );
}

export default Home;