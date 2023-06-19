import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock , onCarrito}) => {
  const [items, setItems] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [itemAgregado, setItemAgregado] = useState(false);

  const incrementarCarrito = () => {
    if (items < itemStock) setItems(items + 1);
  };

  const decrementarCarrito = () => {
    if (items > 1) {
      setItems(items - 1);
    }
  };

  const onAdd = () => {
    if (items <= itemStock) {
      setItemStock(itemStock - items);
      setItems(1);
      setItemAgregado(true);
      onCarrito(items)
      console.log("se agrego al carrito")
    }

  };

  useEffect(() => {
    setItemStock(stock);
  }, [stock]);

  return (
    <div className="container text-center">
      <div className="row-cols-2">
        <div className="col-md-12 p-3 ">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn boton grupo" onClick={decrementarCarrito}> - </button>
            <h6 className="p-2 grupo">{items}</h6>
            <button type="button" className="btn boton grupo" onClick={incrementarCarrito}> + </button>
          </div>
        </div>
        <div className="col-md-12">
          {itemAgregado ? (
            <div>
                <Link to={"/"}className="btn boton m-2" onClick={() => setItemAgregado(false)}>Seguir comprando</Link>
                <Link to={"/Cart"} className="btn boton m-2">Ir al carrito</Link>
            </div>
          ) : (
            <button type="button" className="btn boton" onClick={onAdd}>Agregar al Carrito</button>   
            
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCount;