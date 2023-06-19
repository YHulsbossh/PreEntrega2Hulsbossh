import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const CheckOut = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [orderId, setOrderId] = useState("");
  const { cart, sumTotal, clear} = useContext(CartContext);


  const generarOrden = () => {
    const buyer = { name: nombre, phone: telefono, email: email, adress: direccion };
    const items = cart.map((item) => ({ id: item.id, title: item.nombre, price: item.precio }));
    const fecha = new Date();
    const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
    const total = sumTotal();
    const order = { buyer: buyer, items: items, date: date, total: total };

    const db = getFirestore();
    const OrdersCollection = collection(db, "orders");
    addDoc(OrdersCollection, order)
      .then((docRef) => {
        setOrderId(docRef.id);
        clear();
      })
      .catch((error) => {
        console.log("Error! No se pudo completar la compra:", error);
      });
  };
 
    
    return(
        <div className="container m-3">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form className="form">
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control " onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control"  onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Dirección de envío</label>
                            <input type="text" className="form-control" onInput={(e) => {setDireccion(e.target.value)}} />
                        </div>
                        <button type="submit" className="btn boton" onClick={generarOrden}>Comprar</button>
                    </form>
                </div>
                <div className="col-md-6 ">
                    <table className="table">
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.nombre} width={70} /></td>
                                        <td>{item.nombre}</td>
                                        <td>{item.cantidad} x ${item.precio}</td>
                                        <td className="text-center">${item.cantidad * item.precio}</td>
                                </tr>
                                ))
                            }   
                            <tr className="total">
                                <td colSpan={4} className="text-end"><strong>Total a Pagar</strong></td>
                                <td className="text-center"><strong>${sumTotal()}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row my-5">
                    <div className="col text-center">
                        {orderId ? <Navigate to={"/thanks/" + orderId} /> : ""}
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    )
};


export default CheckOut;