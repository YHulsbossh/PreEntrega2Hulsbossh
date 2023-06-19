import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");
    const q = categoryId ? query(itemsCollection, where("categoria", "==", categoryId)) : itemsCollection;
    getDocs(q).then(resultado => {
        if (resultado.size > 0) {
            setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
            
        } else {
            console.error("No se encontraron productos");
        }
    });
}, [categoryId]);


  return (
    <div className="m-3">
      <div className="row">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;