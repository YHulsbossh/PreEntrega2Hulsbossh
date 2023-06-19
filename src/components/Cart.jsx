import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import Trash from "../images/trash.svg"
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext);
    

    if (cartTotal() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el carrito</div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos Seleccionados</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={4}>&nbsp;</td>
                                <td className="text-end"><button className="btn border-secondary" onClick={() => {clear()}} title="Vaciar Carrito">Vaciar Carrito</button></td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.nombre} width={70} /></td>
                                        <td>{item.nombre}</td>
                                        <td>{item.cantidad} x ${item.precio}</td>
                                        <td className="text-center">${item.cantidad * item.precio}</td>
                                        <td className="text-end"><button className="btn" onClick={() => {removeItem(item.id)}} title="Eliminar Producto"><img src={Trash} alt="Eliminar Producto" width={30} /></button></td>
                                    </tr>
                                ))
                            }
                            <tr className="total">
                                <td colSpan={4} className="text-end"><strong>Total a Pagar</strong></td>
                                <td className="text-center"><strong>${sumTotal()}</strong></td>
                            </tr>
                            <tr>
                                <td colSpan={5} className="text-end">
                                    <Link to={"/checkout"} className="btn border-secondary">Finalizar Compra</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
   


export default Cart;