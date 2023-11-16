import { useForm } from "react-hook-form";

const GamerForm = () => {
    const { register, handleSubmit } = useForm();

    const newGamer = (data) => {
        console.log(data)
    }

    return (
        <section className="bg-black h-screen text-black text-center formpage grid place-items-center">
            <form onSubmit={handleSubmit(newGamer)} className="form">
                <input type="text"
                    placeholder="Gamer tag"
                    {...register("gamertag")} 
                />  <br/>
                <input type="text" placeholder="Favorite game" {...register('game')} /> <br/>
                <input type="number" placeholder="Age" {...register('age')} /><br/>
                <input type="password"
                    placeholder="Ur password"
                    {...register('password')} /> <br/>
                <input type="submit" className="text-white font-bold"/>
            </form>
        </section>

        // <form action="get">

        //     <input type="text" />
        // </form>

    );
}

export default GamerForm;