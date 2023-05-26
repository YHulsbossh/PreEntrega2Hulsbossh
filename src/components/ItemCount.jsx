import { useEffect, useState } from "react";


const ItemCount = ({stock}) => {
const [items, setItems] = useState(1)
const [itemStock, setItemStock] = useState(stock);

const incrementarCarrito = () => {
    if (items < itemStock)
    setItems(items + 1);
}

const decrementarCarrito = () => {
    if (items > 1) {
        setItems(items - 1);
    }
}

const onAdd = () => {
    if (items <= itemStock) {
        setItemStock(itemStock - items);
        setItems(1);
    }
}

useEffect(() => {
    setItemStock(stock);
}, [stock]);

    return(
        <div className="container text-center">
            <div className="row-cols-2">
                <div className="col-md-12 p-3 ">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn boton" onClick={decrementarCarrito}>-</button>
                        <h6 className="p-3">{items}</h6>
                        <button type="button" className="btn boton" onClick={incrementarCarrito}>+</button>
                    </div>
                </div>
                <div className="col-md-12">
                    <button type="button" className="btn boton" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
        
    )
}

export default ItemCount;