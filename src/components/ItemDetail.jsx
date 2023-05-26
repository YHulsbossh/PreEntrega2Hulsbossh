import ItemCount from "./ItemCount"
import { useEffect, useState } from "react";


const ItemDetail = ({producto}) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(producto);
    }, [producto]);

    return (
        <div className="container m-3  text-center">
            <div className="row">
                <div className="col-md-7">
                    <img src={item.imagen}  className="img-fluid" alt={item.titulo}/>
                </div>
                <div className="col-md-5">
                    <h2>{item.titulo}</h2>
                    <h4>{item.descripcion}</h4>
                    <h5><b>${item.precio}</b></h5>
                    <ItemCount stock={item.stock} />
                </div>
                
            </div>
        </div>
    )
}

export default ItemDetail;