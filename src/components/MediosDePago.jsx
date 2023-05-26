import MercadoPago from "../images/mercadopago.png"
import Mastercard from "../images/mastercard.png"
import Visa from "../images/visa.png"
import American from "../images/american-express.png"
import Naranja from "../images/naranja.png"
import Cabal from "../images/cabal.png"
import Maestro from "../images/maestro.png"
import Diners from "../images/diners-club.png"
import PagoFacil from "../images/pagofacil.png"
import Transferencia from "../images/deposito.png"
import Efectivo from "../images/efectivo.png"
import Rapipago from "../images/rapipago.png"
import Retiro from "../images/retiro-local.png"
import Acordar from "../images/acordar.png"



const MediosDePago = () => {

    return (
        <div className="container footer">
            <div className="row-2 m-2">
                <div className="col-md-12 p-2">
                    <h5>MEDIOS DE PAGO</h5>
                    <img src={MercadoPago} className="imagenFooter p-1" alt="Mercado pago"></img>
                    <img src={Mastercard} className="imagenFooter p-1" alt="MasterCard"></img>
                    <img src={Visa} className="imagenFooter p-1" alt="Visa"></img>
                    <img src={American} className="imagenFooter p-1" alt="American Express"></img>
                    <img src={Naranja} className="imagenFooter p-1" alt="Naranja"></img>
                    <img src={Cabal} className="imagenFooter p-1" alt="Cabal"></img>
                    <img src={Maestro} className="imagenFooter p-1" alt="Maestro"></img>
                    <img src={Diners} className="imagenFooter p-1" alt="Diners"></img>
                    <img src={PagoFacil} className="imagenFooter p-1" alt="Pago Fácil"></img>
                    <img src={Rapipago} className="imagenFooter p-1" alt="Rapipago"></img>
                    <img src={Transferencia} className="imagenFooter p-1" alt="Transferencia"></img>
                    <img src={Efectivo} className="imagenFooter p-1" alt="Efectivo"></img>
                </div>
                <div className="col-md-12 p-2">
                    <h5>MEDIOS DE ENVÍO</h5>
                    <img src={Retiro} className="imagenFooter p-1" alt="Retiro en local"></img>
                    <img src={Acordar} className="imagenFooter p-1" alt="A acordar con el vendedor"></img>
                </div>  
            </div>
        </div>
       
    )
}

export default MediosDePago;