import ItemList from "./ItemList";
import Productos from "./json/productos.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve (categoryId ? Productos.filter(item => item.categoria === categoryId) : Productos);
            }, 2000);
        });

           promesa.then(info =>{
       setItems(info)});
       }, [categoryId]);

    return(
        <div className="m-3">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;