import Axios  from "axios";
import { useEffect, useState } from "react";

const GameCard = () => {
    const [gameInfo, setGameInfo] = useState('');
    const [gamePlatform, setgamePlatform] = useState('');
    const [category, setCategory] = useState('');
    const [thumbnail, setThumbnail] = useState('')

    // const gamedata = Axios.get('https://www.freetogame.com/api/games').then((res) => { res.data });

    let random = Math.floor(Math.random() * 100)

    const getgame = () => {
        Axios.get('https://www.freetogame.com/api/games')
        .then((res) => {
            setGameInfo(res.data[random].title);
            setgamePlatform(res.data[random].platform);
            setCategory(res.data[random].genre);
            setThumbnail(res.data[random].thumbnail);
      });
    }

    useEffect(() => {
        Axios.get('https://www.freetogame.com/api/games')
        .then((res) => {
            setGameInfo(res.data[9].title);
            setgamePlatform(res.data[9].platform);
            setCategory(res.data[9].genre);
        console.log(res.data)
       });
    }, []);

    return ( 
        <section>
         <button onClick={getgame} className="bg-black text-xl text-white rounded-md font-bold p-1 m-3 ">Game info</button>

         <div className="w-64 mx-auto rounded-md p-2 text-center bg-black text-white">
            <h1 className="text-2xl font-bold">{gameInfo}</h1>
            <h3 className="text-sm">{category}</h3>
            <h3 className="text-sm">{gamePlatform}</h3>
            <img src={thumbnail} alt="A game should be here sha" className="w-48 rounded-sm"/>
         </div>
        </section>

     );
}
 
export default GameCard;