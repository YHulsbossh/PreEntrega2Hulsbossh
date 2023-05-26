import carro from "../images/bag-heart-fill.svg";

const CartWidget = () => {
    return(
        <div>
            <button type="button" className="btn position-relative">
            <img src={carro} alt="Carrito" width={30} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">0</span>
        </button>
        </div>
    )
}

export default CartWidget;