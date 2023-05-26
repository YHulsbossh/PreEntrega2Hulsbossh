import { Link } from "react-router-dom";

const Item = ({producto}) => {

    return (
        <>
            <div className="col-md-3 m-2 text-center">
                <div className="card h-100">
                    <img src={producto.imagen} className="img-fluid card-img" alt={producto.titulo} />
                    <div className="card-body">
                        <h3>{producto.titulo}</h3>
                        <p className="card-text"><b>${producto.precio}</b></p>
                        <Link className="btn ver-mas" to={"/item/" + producto.id}> Ver más </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;