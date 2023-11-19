import { useContext } from "react";
import {AppContext} from '../App'
import { Link } from "react-router-dom";

const GamerProfile = () => {
    const { profile } = useContext(AppContext);

    return ( 
        <section className="profile h-screen w-full text-white">
            <Link to='/formpage' className="text-white text-right">Sign Up</Link>
            <button onClick={() => console.log(profile)} className="bg-white text-black">
                Get data
            </button>
            <article className="text-xl grid place-items-center">
              <h1 className="text-2xl font-bold font-serif uppercase">{profile.gamertag}</h1>
              <h2 className="text-xl font-semibold">Plays {profile.game}</h2>
            </article>
        </section>
     );
}
 
export default GamerProfile;