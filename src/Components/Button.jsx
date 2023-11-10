/* eslint-disable react/prop-types */
const Button = ({className, text, onclick}) => {
    return ( 
        <button className={className} onClick={onclick}>
            {text}
        </button>
     );
}
 
export default Button;