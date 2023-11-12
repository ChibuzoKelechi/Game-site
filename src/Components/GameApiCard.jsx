import Axios from "axios";
import { useEffect, useState } from "react";

const GameCard = () => {
    const [gameInfo, setGameInfo] = useState('');
    const [gamePlatform, setgamePlatform] = useState('');
    const [category, setCategory] = useState('');
    const [thumbnail, setThumbnail] = useState('')

    let random = Math.floor(Math.random() * 100)

    useEffect(() => {
        Axios.get('https://www.freetogame.com/api/games?category=shooter')
            .then((res) => {
                setGameInfo(res.data[9].title);
                setgamePlatform(res.data[9].platform);
                setCategory(res.data[9].developer);
                setThumbnail(res.data[9].thumbnail);
                console.log(res.data)
            });
    }, []);

    const getgame = () => {
        Axios.get('https://www.freetogame.com/api/filter?tag=shooter&platform=all')
            .then((res) => {
                setGameInfo(res.data[random].title);
                setgamePlatform(res.data[random].platform);
                setCategory(res.data[random].developer);
                setThumbnail(res.data[random].thumbnail);
            });
    }

  

    return (
        <section className="pt-5 gamecard">
           

        <div className="w-96  mx-auto rounded-3xl p-4  
          text-center g-card text-white">
                <h1 className="text-3xl font-bold">  
                  {gameInfo}</h1>

                <h3 className="">{category}</h3>
                <h3 className=" font-bold p-1">{gamePlatform}</h3>

                <img src={thumbnail} 
                 alt="A game should be here sha"  
                 className="w-72 rounded-xl mx-auto mt-2"/>
            </div>

            <button onClick={getgame}
             className="bg-white text-xl text-black  rounded-lg font-bold p-1 m-3 ml-64">
             Game info </button>

        </section>

    );
}

export default GameCard;