import { FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return ( 
        <section className="footer text-center">
            <article className="">
                <h2 className="py-3 font-bold">Contact Us</h2>
                <div className="icons contacts w-1/2 mx-auto">
                    <a href="https://github.com/ChibuzoKelechi">
                        <FaGithub style={{color: 'white', fontSize: '25px'}}/>
                    </a>
                    <a href="https://twitter.com/codify_k">
                        <FaTwitter style={{color: 'white', fontSize: '25px'}}/>
                    </a> 
                    <a href="https://wa.me/2349079755026">
                        <FaWhatsapp style={{color: 'white', fontSize: '25px'}}/>
                    </a>
                </div>
            </article>
            
            <article className="p-5">
                <div>
                    <h3 className="tracking-wide"> Tensor.dev </h3>
                </div>
            </article>
        </section>
     );
}
 
export default Footer;