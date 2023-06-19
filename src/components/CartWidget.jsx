import { Link } from "react-router-dom";
import carro from "../images/bag-heart-fill.svg";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return(
        <div>
            <Link to={"/Cart"} className="btn position-relative">
                <img src={carro} alt="Carrito" width={30} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">{cartTotal()}</span>
            </Link>
        </div>
    )
}

export default CartWidget;