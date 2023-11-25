/* eslint-disable react/prop-types */
import Hero from '../Components/Hero';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';
import { motion } from 'framer-motion';
import logos from '/apex-platform-logos.svg'
import { FaGooglePlay } from 'react-icons/fa6';
import communityIcon from '/Images/icon-gamehubs.svg'

const Home = () => {

   const { game } = useContext(AppContext);

   return (
      <section className='bg-black'>
         <header className="w-full">

         </header>

         <main className='pt-5'>

            <Hero>
               <article className="hero welcome center lg:text-5xl">
                  <div className="text-center text-4xl py-4">
                     <h1 className="text-2xl font-bold lg:text-5xl">Welcome to</h1>
                     <h2 className="text-6xl py-2 font-semibold lg:text-[3em]">GameArena</h2>
                     <h3 className='font-bold text-lg tracking-wider lg:text-4xl'>The no. 1 gaming store/site</h3>
                     <img src={logos} alt="platform logos" className='w-1/3 mx-auto mt-7 lg:w-1/2' />
                  </div>

               </article>
            </Hero>

            <MotionDiv>
               <article className='community text-white center'>
                  <div className='grid'>
                     <img src={communityIcon} alt="people-group" className='mx-auto w-12 bg-black p-2 rounded-xl' />
                     <h2 className='text-4xl font-bold my-3 p-3'>Meet your fellow gamers</h2>
                     <button className='p-1 bg-white text-black hover:text-red-900 text-xl font-sans font-bold'>
                        <Link to='/formpage'> Join the {game} community </Link>
                     </button>
                  </div>
               </article>
            </MotionDiv>

            <MotionDiv>
               <article className='see-games text-white center text-center '>
                  <div className='grid'>
                     {/* <img src={communityIcon} alt="people-group" className='mx-auto w-12 bg-black p-2 rounded-xl' /> */}
                     <FaGooglePlay style={{margin: 'auto', fontSize: '50px'}}/>
                     <h2 className='text-2xl font-bold my-3 p-3'>View and download top trending games</h2>
                     <button className='w-1/2 mx-auto bg-white text-black hover:text-red-900 text-xl font-sans font-bold'>
                        <Link to='/games'> Go to showcase </Link>
                     </button>
                  </div>
               </article>
            </MotionDiv>


         </main>
      </section>
   );
}

export default Home;


function MotionDiv({children}) {
   return (
      <motion.article>
         {children}
      </motion.article>
   );
}