/* eslint-disable react/prop-types */
const Hero = ({children}) => {
    return ( 
        <article className="text-white relative hero min-h-fit">
         {children} 
        </article>
     );
}
 
export default Hero;