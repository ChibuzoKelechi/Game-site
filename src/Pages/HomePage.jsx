/* eslint-disable react/prop-types */
import Hero from '../Components/Hero';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logos from '/apex-platform-logos.svg'
import { FaGooglePlay, FaPersonMilitaryPointing, FaShopify } from 'react-icons/fa6';
import communityIcon from '/Images/icon-gamehubs.svg'
import Footer from '../Components/Footer';

const Home = () => {

   return (
      <section className='bg-black'>

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

            <section className='home-section-container flex flex-col justify-evenly'>
               <MotionDiv>
                  <article className='community mb-20 text-white center overflow-hidden'>
                     <div className='grid'>
                        <img src={communityIcon} alt="people-group" className='mx-auto w-12 bg-black p-2 rounded-xl' />
                        <h2 className='text-4xl font-bold my-3 p-3'>Meet your fellow gamers</h2>
                        <button className='link-button w-1/3 p-2'>
                           <Link to='/community'> Connect </Link>
                        </button>
                     </div>
                  </article>
               </MotionDiv>

               <MotionDiv>
                  <article className='see-games text-white center m-5'>
                     <div className='grid'>
                        <FaGooglePlay style={{ margin: 'auto', fontSize: '50px' }} />
                        <h2 className='text-2xl font-bold my-3 p-3'>View and download top trending games</h2>
                        <button className='link-button'>
                           <Link to='/games'> Go to showcase </Link>
                        </button>
                     </div>
                  </article>
               </MotionDiv>

               <MotionDiv className=''>
                  <article className='store-link text-white center m-5'>
                     <div className='grid'>
                        <FaShopify style={{ margin: 'auto', fontSize: '50px' }} />
                        <h2 className='text-2xl font-bold my-3 p-3'>Buy new games and gadgets</h2>
                        <button className='link-button'>
                           <Link to='/store'> Start Shopping </Link>
                        </button>
                     </div>
                  </article>
               </MotionDiv>

               <MotionDiv className=''>
                  <article className='store-link text-white center m-5'>
                     <div className='grid'>
                        <FaPersonMilitaryPointing style={{ margin: 'auto', fontSize: '50px' }} />
                        <h2 className='text-2xl font-bold my-3 p-3'>Join the force today</h2>
                        <button className='link-button'>
                           <Link to='/formpage'> Sign Up </Link>
                        </button>
                     </div>
                  </article>
               </MotionDiv>
            </section>


         </main>

         <footer>
            <Footer/>
         </footer>
      </section>
   );
}

export default Home;


function MotionDiv({ children }) {
   return (
      <motion.article className='home-section first:mb-20'>
         {children}
      </motion.article>
   );
}