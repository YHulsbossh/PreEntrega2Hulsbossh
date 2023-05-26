
import ItemDetail from "./ItemDetail";
import productos from "./json/productos.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(item => item.id === parseInt(id)));
            }, 2000);
        });
    

        promesa.then(info => {
            setItem(info);
        });
    }, [id]);
   

    return (
        <div>
           <ItemDetail producto={item} />
        </div>
    )
}

export default ItemDetailContainer;