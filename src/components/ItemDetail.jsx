import ItemCount from "./ItemCount"
import { useEffect, useState , useContext } from "react";
import {CartContext} from "./context/CartContext";




const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext);
    const [item, setItem] = useState({});
    

    const onCarrito = (quantity) => {
        addItem(item , quantity);
    };
    

    useEffect(() => {
        setItem(producto);
    }, [producto]);

    return (
        <div className="container m-3  text-center">
            <div className="row">
                <div className="col-md-7">
                    <img src={item.imagen}  className="img-fluid" alt={item.nombre}/>
                </div>
                <div className="col-md-5 p-3">
                    <h2 className="p-2">{item.nombre}</h2>
                    <h4 className="p-2">{item.descripcion}</h4>
                    <h5 className="p-2"><b>${item.precio}</b></h5>
                    <ItemCount stock={item.stock} onCarrito={onCarrito} />
                </div>
                
            </div>
        </div>
    )
}

export default ItemDetail;