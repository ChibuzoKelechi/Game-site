import { useContext } from "react";
import {AppContext} from '../App'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router";
import * as yup from 'yup';

const GamerForm = () => {
 
    // const [gamerProfile, setGamerProfile] = useState({});
    const teleport = useNavigate()
    const { profile, setProfile } = useContext(AppContext);

    const schema = yup.object().shape({
        gamertag: yup.string().required('Gamer Tag not provided'),
        age: yup.number().integer().min(18).required("You ain't ageless"),
        game: yup.string().required("You must provide your game"),
        password: yup.string().min(5).max(10).required('Password required')
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const newGamer = (data, event) => {
        event.preventDefault();
        console.log(data)
        setProfile(data)
        teleport('/gamer-profile')
    }

    return (
        <section className="bg-black h-screen text-black text-center formpage grid place-items-center">
            <button onClick={() => console.log(profile)} className="bg-white">
                Get data
            </button>
            <form onSubmit={handleSubmit(newGamer)} className="form">

                <input type="text"
                    placeholder="Gamer tag"
                    {...register("gamertag")} />  
                <p>{errors.gamertag?.message}</p>
                
                <input type="text" placeholder="Favorite game" {...register('game')}/> 
                <p>{errors.game?.message}</p>


                <input type="number" placeholder="Age" {...register('age')} /> 
                <p>{errors.age?.message}</p>

                <input type="password"
                    placeholder="Ur password"
                    {...register('password')} />
                <p>{errors.password?.message}</p>
                     
                <input type="submit" className="text-white font-bold"/>
            </form>

        </section>

       
    );
}

export default GamerForm;