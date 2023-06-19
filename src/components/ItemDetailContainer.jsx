import ItemDetail from "./ItemDetail";
import { getFirestore, getDoc, doc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";


const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "productos", id);
        getDoc(producto).then(resultado => {
            setItemDetail({id:resultado.id, ...resultado.data()});
            setLoading(false);
        });
    }, [id])
    
    // ...
    
    return (
        <>
            {loading ? <Loading /> : <ItemDetail producto={itemDetail} />}
        </>
    )
}

export default ItemDetailContainer;