import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";


const Navbar = () => {
    let openNav = () => {
        document.getElementById('sidenav').style.width = '250px'
    }

    return ( 
        <article className="w-full navbar top-0 z-10 text-white flex justify-between p-2 fixed">
            <div>
                <h1 className="text-xl font-bold">GameArena</h1>
            </div>
            <div>
                <FaBars onClick={openNav} style={{fontSize: '20px', cursor: 'pointer'}}/>
            </div>

            <Sidenav/>
        </article>
     );
}

export default Navbar;

function Sidenav() {

    function closeNav() {
        document.getElementById('sidenav').style.width = '0'
    }
    
    return ( 
        <article className="sidenav fixed right-0 top-0 h-screen w-0 text-lg z-10 transition-all"  
         id="sidenav">
            <h1 className="m-3 p-2 border xbutton font-bold cursor-pointer">
                <FaX onClick={closeNav} style={{fontSize: '20px'}} className="font-extrabold"/>
            </h1>

            <nav>
              <ul>
                <li>
                   <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/store'>Go to store</Link>
                </li>
                <li>
                    <Link to='/formpage'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/gamer-profile'>Gamer Profile </Link>
                </li>
              </ul>
            </nav>
        </article>
     );
}