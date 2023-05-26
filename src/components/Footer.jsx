import MediosDePago from "./MediosDePago";
import Instagram from "../images/instagram.svg"

const Footer = () => {

    return (
        <div className="container-fuid footer">
           <div className="row m-2">
                <div className="col-md-8">
                    <MediosDePago />   
                </div>
                <div className="col-md-2 m-2">
                  <h5>NUESTRAS REDES</h5>  
                  <a href="https://www.instagram.com/bernardette_lingerie/"><img src={Instagram} className="imagenFooter p-1" alt="Instagram"></img></a>
                  
                </div>
           </div>
                
        </div>
       
    )
}

export default Footer;